import { checkBotId } from "botid/server";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  clientIp,
  hasTrustedOrigin,
  inspectSubmission,
  isRateLimited,
} from "@/lib/spam-guard";

let resendClient: Resend | null = null;

/**
 * Instantiated on first use rather than at module scope: Resend throws on a
 * missing key, which would otherwise fail the build during page-data
 * collection instead of at request time.
 */
function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  resendClient ??= new Resend(apiKey);
  return resendClient;
}

/**
 * Bots are answered with a plain 200 so they cannot tell which check caught
 * them and adapt. Only the server log records the real reason.
 */
function silentOk(reason: string) {
  console.warn(`Contact form blocked: ${reason}`);
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  try {
    if (!hasTrustedOrigin(req.headers)) {
      return silentOk("untrusted-origin");
    }

    const now = Date.now();
    if (isRateLimited(clientIp(req.headers), now)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte später erneut versuchen." },
        { status: 429 },
      );
    }

    let data: unknown;
    try {
      data = await req.json();
    } catch {
      return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
    }

    const result = inspectSubmission(data, now);
    if (result.outcome === "silent-drop") {
      return silentOk(result.reason);
    }
    if (result.outcome === "reject") {
      return NextResponse.json({ error: result.reason }, { status: result.status });
    }

    // Runs last of the guards: it is a network call, so the cheap local checks
    // filter obvious bots before we spend a BotID verification on them.
    try {
      const verification = await checkBotId();
      if (verification.isBot) {
        return silentOk("botid");
      }
    } catch (err) {
      // Fail open — a BotID outage must not take the contact form down. The
      // honeypot, timing, shape and rate-limit layers still apply.
      console.error("BotID check failed:", err);
    }

    const { fullName, email, phone, message } = result.payload;

    await getResend().emails.send({
      from: "Deploy Change <info@deploy-change.de>",
      to: "info@deploy-change.de",
      replyTo: email,
      subject: `Neue Anfrage von ${fullName}`,
      text: `Name: ${fullName}\nE-Mail: ${email}\nTelefon: ${phone || "–"}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
