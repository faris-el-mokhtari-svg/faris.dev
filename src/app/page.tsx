import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

const benefits = [
  { icon: "⚡", title: "In 14 Tagen live", desc: "Kein monatelanger Prozess. Du bekommst deine fertige Website in zwei Wochen." },
  { icon: "↗", title: "Festpreis", desc: "Kein Stundensatz, keine Überraschungen. Du weißt vorher genau, was du zahlst." },
  { icon: "↑", title: "Mehr Reservierungen", desc: "Die Website ist auf Conversions ausgelegt – nicht nur auf Optik." },
  { icon: "○", title: "Monatliche Betreuung", desc: "Updates, Backups, Änderungen – du kümmerst dich ums Geschäft, ich um die Website." },
];

const packages = [
  {
    name: "Starter",
    price: "1.490 €",
    monthly: "49 €/Monat",
    features: ["Bis 5 Seiten", "Kontaktformular", "Impressum & DSGVO", "Google My Business Setup", "Mobil optimiert"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "2.990 €",
    monthly: "99 €/Monat",
    features: ["Bis 10 Seiten", "Online-Reservierung", "Speisekarte als CMS", "Local SEO", "Google Analytics", "Alles aus Starter"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "4.990 €",
    monthly: "199 €/Monat",
    features: ["Bis 20 Seiten + Blog", "Mehrsprachigkeit", "Newsletter-Setup", "SEO-Report", "Quartals-Call", "Alles aus Standard"],
    highlight: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroBackground>
        <div className="max-w-5xl mx-auto px-6 py-32 md:py-44 text-center">
          <span className="inline-block border border-white/20 text-white/60 text-xs font-medium px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
            Webentwicklung · Gastronomie & KMU
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Mehr Reservierungen.<br />
            Weniger Aufwand.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Ich baue Restaurants und Cafés eine Website, die Gäste überzeugt –
            in 14 Tagen, zum Festpreis, mit monatlicher Betreuung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white hover:bg-zinc-100 text-black font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Kostenloses Erstgespräch
            </Link>
            <Link
              href="/case-study"
              className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-base"
            >
              Beispielprojekt ansehen
            </Link>
          </div>
        </div>
      </HeroBackground>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 text-center mb-12">
          Warum Betriebe sich für mich entscheiden
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-5 p-6 rounded-2xl border border-zinc-200 bg-white">
              <span className="text-2xl text-zinc-400 font-light leading-none mt-0.5">{b.icon}</span>
              <div>
                <h3 className="font-semibold text-zinc-900 mb-1">{b.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 text-center mb-3">
            Drei klare Pakete
          </h2>
          <p className="text-zinc-500 text-center mb-14">Kein Custom-Chaos. Du wählst dein Paket, wir starten.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  pkg.highlight
                    ? "bg-zinc-900 text-white shadow-xl"
                    : "bg-white border border-zinc-200 text-zinc-900"
                }`}
              >
                {pkg.highlight && (
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    Beliebtestes Paket
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-zinc-900"}`}>
                  {pkg.name}
                </h3>
                <div className={`text-3xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-zinc-900"}`}>
                  {pkg.price}
                </div>
                <div className={`text-sm mb-7 ${pkg.highlight ? "text-zinc-400" : "text-zinc-400"}`}>
                  + {pkg.monthly} Wartung
                </div>
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${pkg.highlight ? "text-zinc-300" : "text-zinc-500"}`}>
                      <span className="mt-0.5 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className={`text-center font-semibold py-3 rounded-xl transition-colors ${
                    pkg.highlight
                      ? "bg-white text-zinc-900 hover:bg-zinc-100"
                      : "bg-zinc-900 text-white hover:bg-zinc-700"
                  }`}
                >
                  Jetzt anfragen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
          Bereit für eine Website, die arbeitet?
        </h2>
        <p className="text-zinc-500 mb-8 max-w-xl mx-auto">
          15-minütiges Gespräch, kostenlos. Ich schaue mir deine aktuelle Situation an
          und zeige dir, was möglich ist.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-zinc-900 hover:bg-zinc-700 text-white font-semibold px-10 py-4 rounded-xl transition-colors text-base"
        >
          Kostenloses Erstgespräch buchen
        </Link>
      </section>
    </>
  );
}
