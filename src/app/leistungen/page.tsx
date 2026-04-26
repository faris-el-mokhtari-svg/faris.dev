import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen – Faris El Mokhtari Webentwicklung",
  description: "Festpreis-Pakete für Restaurants, Cafés und lokale KMU. Starter ab 1.490 €, Standard ab 2.990 €.",
};

const process = [
  { step: "01", title: "Onboarding", desc: "Du füllst einen kurzen Fragebogen aus. Dann besprechen wir in 30 Minuten deine Ziele und fixieren den Scope." },
  { step: "02", title: "Design & Content", desc: "Ich wähle das passende Layout. Du lieferst Logo und Bilder – oder ich übernehme das gegen Aufpreis." },
  { step: "03", title: "Build & Feedback", desc: "Ich baue die Website. Du bekommst eine Vorschau und eine Feedback-Runde." },
  { step: "04", title: "Launch & Übergabe", desc: "Wir gehen live. Du bekommst eine Einführung, wie du Inhalte selbst ändern kannst." },
];

const packages = [
  {
    name: "Starter",
    price: "1.490 €",
    monthly: "49 €/Monat",
    time: "10 Werktage",
    features: [
      "Bis 5 Seiten",
      "Responsives Design (Mobil + Desktop)",
      "Kontaktformular",
      "Impressum & DSGVO-konform",
      "Google My Business Setup",
      "SSL-Zertifikat",
    ],
    maintenance: ["Hosting & SSL", "WordPress-/Plugin-Updates", "Tägliche Backups", "30 Min Änderungen/Monat"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "2.990 €",
    monthly: "99 €/Monat",
    time: "14–21 Werktage",
    features: [
      "Bis 10 Seiten",
      "Alles aus Starter",
      "Speisekarte / Leistungen als CMS",
      "Online-Reservierung (Resmio o.ä.)",
      "Local SEO (Meta-Tags, Sitemap, Search Console)",
      "Google Analytics / Matomo",
    ],
    maintenance: ["Alles aus Starter-Wartung", "1 Std Änderungen/Monat", "Uptime-Monitoring", "Monatlicher Report"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "4.990 €",
    monthly: "199 €/Monat",
    time: "21–30 Werktage",
    features: [
      "Bis 20 Seiten + Blog",
      "Alles aus Standard",
      "Mehrsprachigkeit (DE/EN)",
      "Newsletter-Setup",
      "Erweitertes SEO",
      "Performance-Audit",
    ],
    maintenance: ["Alles aus Standard-Wartung", "2 Std Änderungen/Monat", "SEO-Report", "Quartals-Call"],
    highlight: false,
  },
];

export default function Leistungen() {
  return (
    <>
      {/* Header */}
      <section className="bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Leistungen & Pakete</h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Kein Stundensatz, keine offenen Enden. Du weißt vorher, was du bekommst und was es kostet.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-8 flex flex-col gap-6 ${
                pkg.highlight ? "border-zinc-900 shadow-lg" : "border-zinc-200"
              }`}
            >
              {pkg.highlight && (
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Empfohlen
                </span>
              )}
              <div>
                <h2 className="text-2xl font-bold text-zinc-900">{pkg.name}</h2>
                <div className="text-3xl font-bold text-zinc-900 mt-1">{pkg.price}</div>
                <div className="text-sm text-zinc-400">+ {pkg.monthly} Wartung · Lieferzeit: {pkg.time}</div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">Einmalleistung</p>
                <ul className="flex flex-col gap-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm text-zinc-600 flex gap-2">
                      <span className="text-zinc-900 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">Wartung inklusive</p>
                <ul className="flex flex-col gap-2">
                  {pkg.maintenance.map((m) => (
                    <li key={m} className="text-sm text-zinc-500 flex gap-2">
                      <span className="text-zinc-300">·</span> {m}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/kontakt"
                className="mt-auto text-center font-semibold py-3 rounded-xl transition-colors bg-zinc-900 text-white hover:bg-zinc-700"
              >
                Paket anfragen
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 text-center mb-12">
            So läuft es ab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {process.map((p) => (
              <div key={p.step} className="flex gap-5">
                <span className="text-4xl font-black text-zinc-100 leading-none select-none">{p.step}</span>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Noch Fragen?</h2>
        <p className="text-zinc-500 mb-8">15 Minuten reichen. Kein Verkaufsgespräch, nur ein ehrliches Gespräch über deine Situation.</p>
        <Link
          href="/kontakt"
          className="inline-block bg-zinc-900 hover:bg-zinc-700 text-white font-semibold px-10 py-4 rounded-xl transition-colors"
        >
          Kostenloses Gespräch buchen
        </Link>
      </section>
    </>
  );
}
