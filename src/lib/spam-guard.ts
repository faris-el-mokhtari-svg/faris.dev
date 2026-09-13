/**
 * Spam protection helpers for the public contact endpoint.
 *
 * Layered on purpose: cheap checks (honeypot, timing, shape) run before the
 * request is ever allowed to cost us a Resend credit. Silent rejections return
 * a fake success so bots cannot learn which signal gave them away.
 */

/** Submissions faster than this are not human. */
const MIN_SUBMIT_MS = 3_000;
/** Guards against replayed or clock-skewed timestamps. */
const MAX_SUBMIT_MS = 1000 * 60 * 60 * 6;

const MAX_LENGTH = {
  fullName: 100,
  email: 254,
  phone: 40,
  message: 5_000,
} as const;

const MIN_MESSAGE_LENGTH = 10;
/** A real first enquiry rarely carries more than a couple of links. */
const MAX_LINKS = 2;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const LINK_PATTERN = /(https?:\/\/|www\.|\[url|\[link)/gi;

const ALLOWED_HOSTS = new Set([
  "deploy-change.de",
  "www.deploy-change.de",
]);

export type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export type GuardResult =
  /** Hand off to Resend. */
  | { outcome: "accept"; payload: ContactPayload }
  /** Bot detected — answer 200 so it believes it succeeded. */
  | { outcome: "silent-drop"; reason: string }
  /** Malformed input from a real user — worth a real error. */
  | { outcome: "reject"; reason: string; status: 400 | 429 };

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Vercel puts the real client IP first in x-forwarded-for. Falling back to a
 * shared bucket is deliberate: an unidentifiable client should still be capped.
 */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return headers.get("x-real-ip")?.trim() || "unknown";
}

/**
 * Rejects requests that were not issued by our own front-end. Stops trivial
 * curl/script submissions without touching legitimate browser traffic.
 */
export function hasTrustedOrigin(headers: Headers): boolean {
  const source = headers.get("origin") || headers.get("referer");
  // Same-origin form posts may omit both; the remaining layers still apply.
  if (!source) return true;

  let host: string;
  try {
    host = new URL(source).hostname;
  } catch {
    return false;
  }

  if (ALLOWED_HOSTS.has(host)) return true;
  // Vercel preview deployments and local development.
  if (host.endsWith(".vercel.app")) return true;
  if (host === "localhost" || host === "127.0.0.1") return true;

  return false;
}

/**
 * Fixed-window counter kept on globalThis so it survives Next.js HMR in dev and
 * is shared across requests handled by the same Fluid Compute instance.
 */
const buckets: Map<string, { count: number; resetAt: number }> =
  (globalThis as typeof globalThis & {
    __contactRateLimit?: Map<string, { count: number; resetAt: number }>;
  }).__contactRateLimit ??
  ((globalThis as typeof globalThis & {
    __contactRateLimit?: Map<string, { count: number; resetAt: number }>;
  }).__contactRateLimit = new Map());

/**
 * Read-only check. Kept separate from recordSubmission so a user who mistypes
 * their email and retries does not burn quota — only submissions that actually
 * reach Resend are counted. Request floods are absorbed by the WAF rule and
 * platform DDoS mitigation, which sit in front of this function.
 */
export function hasReachedLimit(ip: string, now: number): boolean {
  const bucket = buckets.get(ip);
  if (!bucket || now > bucket.resetAt) return false;
  return bucket.count >= RATE_LIMIT_MAX;
}

/** Counts one accepted submission against the caller's window. */
export function recordSubmission(ip: string, now: number): void {
  const bucket = buckets.get(ip);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    // Opportunistic sweep so the map cannot grow unbounded.
    if (buckets.size > 5_000) {
      for (const [key, value] of buckets) {
        if (now > value.resetAt) buckets.delete(key);
      }
    }
    return;
  }

  bucket.count += 1;
}

/**
 * Validates and classifies a raw request body. Pure — no I/O — so it stays
 * cheap and easy to test.
 */
export function inspectSubmission(data: unknown, now: number): GuardResult {
  if (typeof data !== "object" || data === null) {
    return { outcome: "reject", reason: "Ungültige Anfrage", status: 400 };
  }

  const body = data as Record<string, unknown>;

  // Honeypot: hidden from real users, irresistible to form-filling bots.
  if (asString(body.company)) {
    return { outcome: "silent-drop", reason: "honeypot" };
  }

  // Time trap: the render timestamp round-trips through the client.
  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt)) {
    return { outcome: "silent-drop", reason: "missing-timestamp" };
  }
  const elapsed = now - startedAt;
  if (elapsed < MIN_SUBMIT_MS || elapsed > MAX_SUBMIT_MS) {
    return { outcome: "silent-drop", reason: "timing" };
  }

  const fullName = asString(body.fullName);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const message = asString(body.message);

  if (!fullName || !email || !message) {
    return { outcome: "reject", reason: "Bitte Name, E-Mail und Nachricht ausfüllen.", status: 400 };
  }

  if (
    fullName.length > MAX_LENGTH.fullName ||
    email.length > MAX_LENGTH.email ||
    phone.length > MAX_LENGTH.phone ||
    message.length > MAX_LENGTH.message
  ) {
    return { outcome: "reject", reason: "Eingabe zu lang.", status: 400 };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { outcome: "reject", reason: "Bitte eine gültige E-Mail-Adresse angeben.", status: 400 };
  }

  if (message.length < MIN_MESSAGE_LENGTH) {
    return { outcome: "reject", reason: "Bitte beschreibe dein Anliegen kurz.", status: 400 };
  }

  // Generated tokens like "CuyiRfblcTaarwDjazWkqY" are a single word carrying
  // capitals mid-string. Real enquiries are sentences, and genuine German
  // one-word messages ("Preisanfrage") only capitalise the first letter — so
  // this catches the generator without touching legitimate short messages.
  const words = message.split(/\s+/).filter(Boolean);
  if (words.length === 1 && /[A-Z]/.test(message.slice(1))) {
    return { outcome: "silent-drop", reason: "gibberish" };
  }

  // Link stuffing is the signature of SEO/backlink spam.
  const links = message.match(LINK_PATTERN);
  if (links && links.length > MAX_LINKS) {
    return { outcome: "silent-drop", reason: "link-spam" };
  }

  // Newlines in a header-bound value are a mail-injection attempt.
  if (/[\r\n]/.test(email) || /[\r\n]/.test(fullName)) {
    return { outcome: "silent-drop", reason: "header-injection" };
  }

  return { outcome: "accept", payload: { fullName, email, phone, message } };
}
