"use client";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("sent"); form.reset(); }
      else { setStatus("error"); }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "h-10 w-full rounded-lg border border-white/30 bg-transparent px-3 text-sm text-white placeholder:text-white/45 focus:border-white/70 focus:outline-none transition-colors";

  const labelClass =
    "block text-[0.58rem] font-semibold tracking-[0.14em] uppercase text-white/70 mb-1.5";

  return (
    <section className="w-full grid md:grid-cols-2">
      {/* Left: editorial */}
      <div className="relative min-h-[540px] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b2f] via-[#ff7a00] to-[#ffc08a]" />
        <div
          className="absolute inset-0 opacity-55 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="relative h-full flex flex-col px-8 md:px-12 py-10 md:py-12">
          <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-12">
            Deploy — Web Development
          </p>
          <h2 className="text-4xl md:text-6xl leading-[0.95] font-medium max-w-sm">
            Jede Herausforderung ist individuell. Sprechen wir über Ihre.
          </h2>
          <div className="mt-auto flex items-end justify-between text-sm">
            <a
              href="mailto:hallo@deploy-web.de"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors"
            >
              hallo@deploy-web.de
            </a>
            <a
              href="#"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Right: form */}
      <div className="bg-[#FF5500] min-h-[540px] flex items-center">
        {status === "sent" ? (
          <div className="w-full px-8 md:px-12 py-10 flex flex-col gap-3">
            <p className="text-white text-3xl md:text-4xl font-medium">Nachricht erhalten.</p>
            <p className="text-white/55 text-sm">Ich melde mich innerhalb von 24 Stunden.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full px-8 md:px-12 py-10 md:py-12 flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="fullName" className={labelClass}>Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Max Mustermann"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Telefon <span className="normal-case tracking-normal opacity-60 font-normal">(opt.)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>E-Mail</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="max@betrieb.de"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Nachricht</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Womit kann ich Ihnen helfen?"
                className="w-full rounded-lg border border-white/30 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-white/70 focus:outline-none transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-white/60 text-xs">
                Etwas ist schiefgelaufen. Bitte erneut versuchen.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="h-10 w-full rounded-full bg-[#f9aa2a] text-[#0a0a0a] text-sm font-semibold hover:bg-[#f0a020] transition-colors disabled:opacity-50 mt-1"
            >
              {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
            </button>

            <p className="text-white/30 text-[0.6rem] tracking-widest uppercase text-center">
              Antwort innerhalb von 24 Stunden
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
