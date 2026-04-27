"use client";

export default function ContactSection() {
  return (
    <section className="w-full grid md:grid-cols-2">
      <div className="relative min-h-[620px] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b2f] via-[#ff7a00] to-[#ffc08a]" />
        <div
          className="absolute inset-0 opacity-55 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/bg/teaser-square.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="relative h-full flex flex-col px-8 md:px-12 py-10 md:py-12">
          <p className="text-white/90 text-xl mb-16">Deploy - Web Devolpment</p>
          <h2 className="text-6xl md:text-7xl leading-[0.95] font-medium max-w-xl">
            Jede Herausforderung ist individuell. Sprechen wir über Ihre.
          </h2>
          <div className="mt-auto flex items-end justify-between text-3xl">
            <a href="mailto:hallo@superduperseite.de" className="underline decoration-white/50 underline-offset-4">
              hallo@superduperseite.de
            </a>
            <div className="flex flex-col items-end">
              <a href="#" className="underline decoration-white/50 underline-offset-4">Facebook</a>
              <a href="#" className="underline decoration-white/50 underline-offset-4">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FF5500] min-h-[620px] flex items-center">
        <form className="w-full px-8 md:px-14 py-10 md:py-12 flex flex-col gap-8">
          <div className="space-y-3">
            <label htmlFor="fullName" className="block text-white text-4xl">Vollständiger Name</label>
            <input id="fullName" type="text" className="w-full h-18 rounded-2xl border border-white/60 bg-transparent text-white px-5 text-2xl focus:outline-none" />
          </div>
          <div className="space-y-3">
            <label htmlFor="email" className="block text-white text-4xl">E-Mail-Adresse</label>
            <input id="email" type="email" className="w-full h-18 rounded-2xl border border-white/60 bg-transparent text-white px-5 text-2xl focus:outline-none" />
          </div>
          <div className="space-y-3">
            <label htmlFor="phone" className="block text-white text-4xl">Handynummer</label>
            <input id="phone" type="tel" className="w-full h-18 rounded-2xl border border-white/60 bg-transparent text-white px-5 text-2xl focus:outline-none" />
          </div>
          <div className="space-y-3">
            <label htmlFor="message" className="block text-white text-4xl">Nachricht</label>
            <textarea id="message" rows={4} className="w-full rounded-2xl border border-white/60 bg-transparent text-white px-5 py-4 text-2xl resize-none focus:outline-none" />
          </div>
          <button type="submit" className="w-full h-18 rounded-full bg-[#f9aa2a] text-black text-4xl font-medium">
            Senden
          </button>
        </form>
      </div>
    </section>
  );
}
