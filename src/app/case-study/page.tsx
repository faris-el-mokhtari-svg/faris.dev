import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study – Restaurant Website Relaunch | Faris El Mokhtari",
  description: "Wie ein lokales Restaurant mit einer neuen Website deutlich mehr Online-Reservierungen gewonnen hat.",
};

const results = [
  { metric: "+68%", label: "Online-Reservierungen", sub: "in den ersten 60 Tagen" },
  { metric: "14", label: "Werktage", sub: "vom Briefing bis Launch" },
  { metric: "2.990 €", label: "Festpreis", sub: "keine versteckten Kosten" },
  { metric: "4,9★", label: "Google-Bewertung", sub: "nach GMB-Optimierung" },
];

const steps = [
  {
    title: "Ausgangslage",
    content:
      "Das Restaurant hatte eine veraltete Website, die auf dem Smartphone kaum nutzbar war. Keine Online-Reservierung, keine Speisekarte im Web, keine lokale SEO. Die meisten Gäste fanden den Betrieb über Empfehlungen – nicht über Google.",
  },
  {
    title: "Ziel",
    content:
      "Mehr Reservierungen über die Website generieren. Der Inhaber wollte sich nicht um Technik kümmern und brauchte eine Lösung, die er selbst pflegen kann – zumindest für die Speisekarte.",
  },
  {
    title: "Umsetzung",
    content:
      "Neue Website mit klarem Fokus: Reservierungs-CTA above the fold, mobile-first Design, eingebundenes Resmio-Widget für Online-Reservierungen, Speisekarte als pflegbares CMS, Google My Business vollständig optimiert, Local SEO für relevante Keywords in der Stadt.",
  },
  {
    title: "Ergebnis",
    content:
      "60 Tage nach Launch: 68 % mehr Online-Reservierungen im Vergleich zum Vorquartal. Das Restaurant erscheint jetzt auf Seite 1 für relevante lokale Suchanfragen. Der Inhaber aktualisiert die Speisekarte selbst – ohne Entwickler.",
  },
];

export default function CaseStudy() {
  return (
    <>
      {/* Header */}
      <section className="bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <span className="inline-block border border-zinc-300 text-zinc-500 text-xs font-medium px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              Case Study · Gastronomie
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 leading-tight">
              Vom veralteten Auftritt zu 68 % mehr Online-Reservierungen
            </h1>
            <p className="text-lg text-zinc-500">
              Wie ein lokales Restaurant in 14 Werktagen eine Website bekommen hat, die echte Gäste bringt.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((r) => (
            <div key={r.label} className="text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div className="text-3xl md:text-4xl font-black text-zinc-900 mb-1">{r.metric}</div>
              <div className="font-semibold text-zinc-700 text-sm">{r.label}</div>
              <div className="text-xs text-zinc-400 mt-1">{r.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After placeholder */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-zinc-100 border border-zinc-200 h-64 flex items-center justify-center text-zinc-400 text-sm font-medium">
            Vorher – Screenshot alte Website
          </div>
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 h-64 flex items-center justify-center text-zinc-500 text-sm font-medium">
            Nachher – Screenshot neue Website
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="flex flex-col gap-12">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 text-white text-sm font-bold flex items-center justify-center mt-1">
                {i + 1}
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 mb-2">{s.title}</h2>
                <p className="text-zinc-500 leading-relaxed">{s.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-zinc-800 leading-relaxed mb-6">
            &ldquo;Ich dachte, eine neue Website ist kompliziert und teuer. Es war keins von beidem.
            Jetzt rufen Gäste an und sagen, sie haben uns über Google gefunden.&rdquo;
          </blockquote>
          <p className="text-zinc-400 text-sm">— Inhaber, lokales Restaurant</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
          Ähnliches Ergebnis für deinen Betrieb?
        </h2>
        <p className="text-zinc-500 mb-8 max-w-xl mx-auto">
          15 Minuten Gespräch – kostenlos. Ich analysiere deine aktuelle Website und zeige dir, was möglich ist.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-zinc-900 hover:bg-zinc-700 text-white font-semibold px-10 py-4 rounded-xl transition-colors text-base"
        >
          Jetzt anfragen
        </Link>
      </section>
    </>
  );
}
