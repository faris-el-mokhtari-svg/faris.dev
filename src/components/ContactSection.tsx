"use client";
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Round-trips to the server so it can reject submissions that are too fast
  // to be human. Set on mount rather than on render to stay hydration-safe.
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      // Honeypot — real users never see this field, so any value means a bot.
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      startedAt: startedAt.current,
    };
    // Bot-detection scripts wrap window.fetch to attach a token. If such a
    // script fails to load, its wrapper can never settle and the submit hangs
    // silently. The timeout turns that into a visible, retryable error.
    const timeout = AbortController ? new AbortController() : null;
    const timer = window.setTimeout(() => timeout?.abort(), 15_000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: timeout?.signal,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setErrorMessage(body?.error ?? "Etwas ist schiefgelaufen. Bitte erneut versuchen.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Etwas ist schiefgelaufen. Bitte erneut versuchen.");
      setStatus("error");
    } finally {
      window.clearTimeout(timer);
    }
  };

  const inputClass =
    "h-12 w-full border-0 border-b border-white/20 bg-transparent px-0 text-base text-paper placeholder:text-paper/30 focus:border-orange focus:outline-none transition-colors";

  const labelClass = "label block text-paper/50 mb-1";

  return (
    <section id="kontakt" className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-4 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <div className="flex flex-col">
          <p className="label text-orange">{"// "}Kontakt</p>
          <h2 className="mt-6 max-w-[12ch] text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-paper md:text-7xl">
            Erzählt uns, was ihr vorhabt.
          </h2>
          <p className="mt-6 max-w-[42ch] text-paper/60">
            Ein Gespräch, 20 Minuten, kostenlos. Danach wisst ihr, was es braucht, was es kostet und wann es live sein kann.
          </p>
          <div className="mt-10 md:mt-auto">
            <a
              href="mailto:info@deploy-change.de"
              className="text-paper underline decoration-paper/30 underline-offset-4 transition-colors hover:decoration-orange"
            >
              info@deploy-change.de
            </a>
          </div>
        </div>

        <div>
          {status === "sent" ? (
            <div role="status" className="flex h-full flex-col justify-center gap-3 border border-white/10 p-8">
              <p className="text-3xl font-medium tracking-tight text-paper md:text-4xl">Nachricht erhalten.</p>
              <p className="text-paper/60">Wir melden uns innerhalb von 24 Stunden.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/*
                Honeypot. Moved off-screen instead of display:none — bots detect
                the latter. aria-hidden + tabIndex keep it out of reach for
                screen readers and keyboard users.
              */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="company">Firma (bitte leer lassen)</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>Name</label>
                  <input id="fullName" name="fullName" type="text" required autoComplete="name" placeholder="Vor- und Nachname" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Telefon (optional)</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>E-Mail</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="name@firma.de" className={inputClass} />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Projekt</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Was soll gebaut werden?"
                  className="w-full resize-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-base text-paper placeholder:text-paper/30 transition-colors focus:border-orange focus:outline-none"
                />
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm text-orange">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="label group flex items-center justify-between gap-10 self-start bg-orange py-4 pl-6 pr-5 text-ink transition-colors hover:bg-paper disabled:opacity-50"
              >
                {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
