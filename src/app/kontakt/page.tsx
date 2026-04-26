import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Faris El Mokhtari Webentwicklung",
  description: "Kostenloses 15-minütiges Erstgespräch buchen. Ich melde mich innerhalb von 24 Stunden.",
};

export default function Kontakt() {
  return (
    <>
      {/* Header */}
      <section className="bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Lass uns sprechen</h1>
          <p className="text-lg text-zinc-500 max-w-xl mx-auto">
            15 Minuten, kostenlos. Ich schaue mir deine Situation an und sage dir ehrlich, ob und wie ich helfen kann.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Form */}
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-zinc-700">Name</label>
              <input
                type="text"
                placeholder="Max Mustermann"
                className="border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-zinc-700">E-Mail</label>
              <input
                type="email"
                placeholder="max@meinrestaurant.de"
                className="border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-zinc-700">Betrieb / Webseite</label>
              <input
                type="text"
                placeholder="Restaurant Bella Vita / bella-vita.de"
                className="border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-zinc-700">Was ist dein größtes Problem gerade?</label>
              <textarea
                rows={4}
                placeholder="Meine Website ist veraltet, keine Online-Reservierung, kaum Anfragen über Google..."
                className="border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition resize-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-zinc-700">Welches Paket interessiert dich?</label>
              <select className="border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition bg-white">
                <option value="">Noch nicht sicher</option>
                <option value="starter">Starter – 1.490 €</option>
                <option value="standard">Standard – 2.990 €</option>
                <option value="premium">Premium – 4.990 €</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-zinc-900 hover:bg-zinc-700 text-white font-semibold py-4 rounded-xl transition-colors text-sm mt-2"
            >
              Anfrage absenden
            </button>
            <p className="text-xs text-zinc-400 text-center">
              Ich melde mich innerhalb von 24 Stunden. Kein Spam, kein Druck.
            </p>
          </form>

          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Was passiert nach deiner Anfrage?</h2>
              <ol className="flex flex-col gap-5">
                {[
                  "Ich melde mich innerhalb von 24 Stunden per E-Mail.",
                  "Wir vereinbaren ein 15-minütiges kostenloses Gespräch.",
                  "Ich analysiere deine aktuelle Situation und schicke dir ein konkretes Angebot.",
                  "Du entscheidest – ohne Druck und ohne versteckte Kosten.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-100 text-zinc-700 text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-zinc-500 text-sm leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-zinc-100 pt-8">
              <h3 className="font-semibold text-zinc-900 mb-3">Direkt schreiben</h3>
              <a
                href="mailto:hallo@farisdev.de"
                className="text-zinc-900 hover:text-zinc-500 text-sm font-medium transition-colors underline underline-offset-4"
              >
                hallo@farisdev.de
              </a>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                <span className="font-semibold text-zinc-900">Tipp:</span> Schreib kurz, welche Website du aktuell hast (oder ob du noch keine hast).
                Das spart Zeit im Gespräch und ich kann dir direkt konkrete Ideen mitbringen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
