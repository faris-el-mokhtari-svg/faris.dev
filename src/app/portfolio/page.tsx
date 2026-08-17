import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";

const cafeDetails = [
  "Website mit No-Code-Editor",
  "Reservierungssystem (Echtzeit)",
  "Admin-Dashboard",
  "Kassensystem-Integration (Lightspeed)",
  "Live in 4 Tagen",
];

const safariDetails = [
  "Komplettes Website-Redesign",
  "Safari-Collection-Management",
  "8 Reiseregionen mit eigenen Seiten",
  "Migration von 87 Blog-Artikeln",
  "Live-Chat & Reviews-Integration",
  "Admin-Dashboard mit Benutzerverwaltung",
];

const schoeneDetails = [
  "Click-&-Collect-Bestellverwaltung",
  "Bestandsführung über zwei Standorte",
  "Abhol-Zeitfenster & Wiederholbestellungen",
  "Auswertungen zu Bestellungen & Bestand",
  "Personalkonten mit Rollen",
  "Laufende Wartung seit Juli 2026",
];

const shayoDetails = [
  "SEO- & GEO-optimierter One-Pager",
  "Leistungskatalog mit 19 Services",
  "FAQ mit strukturierten Daten",
  "Google Maps mit DSGVO-Consent",
  "Direkte Anruf- & WhatsApp-Buchung",
  "Instagram- & TikTok-Betreuung",
  "Google- & Apple-Unternehmensprofil",
  "GEO-Monitoring in KI-Suchen",
];

const bachbaeckerDetails = [
  "Website mit No-Code-Editor",
  "Produktkatalog & Kategorien",
  "Admin-Dashboard (Neuigkeiten, Jobs, Produkte)",
  "Standortübersicht",
  "Live in 4 Tagen",
];


export const metadata: Metadata = {
  title: "Portfolio – Referenzprojekte",
  description: "Café Alte Schule, Safari Specialists, David Schöne, ShaYo Barbershop, Bachbäcker — Systeme, die täglich im Einsatz sind.",
  alternates: {
    canonical: "https://deploy-change.de/portfolio",
    languages: { "de": "https://deploy-change.de/portfolio", "x-default": "https://deploy-change.de/portfolio" },
  },
  openGraph: { url: "https://deploy-change.de/portfolio" },
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://deploy-change.de" },
    { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://deploy-change.de/portfolio" },
  ],
};

/** Small pill used where a project has no public link to point at. */
function StatusBadge({ label }: { label: string }) {
  return (
    <span className="inline-block border border-black/12 bg-black/[0.03] text-black/40 rounded-full px-4 py-2 text-xs font-medium">
      {label}
    </span>
  );
}

export default function Portfolio() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      {/* Hero */}
      <section className="bg-[#FFFCF3] pt-28 md:pt-36 pb-16 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-6">
            Portfolio
          </p>
          <RevealText>
            <h1
              className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
            >
              Projekte,<br />die laufen.
            </h1>
          </RevealText>
          <FadeUp delay={0.15}>
            <p className="text-black/38 text-lg leading-snug max-w-xl mt-8">
              Fünf Projekte. Vier in Betrieb, eines in Umsetzung.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Project: Café Alte Schule */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">

          <FadeUp>
            <a
              href="https://cafe-alte-schule.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block group overflow-hidden rounded-2xl mb-14"
            >
              <div className="relative w-full aspect-[16/8]">
                <Image
                  src="/cafe-alte-schule-preview.png"
                  alt="Café Alte Schule — Website und Reservierungssystem"
                  fill
                  className="object-cover object-top group-hover:scale-[1.015] transition-transform duration-700"
                />
              </div>
            </a>
          </FadeUp>

          <div className="grid md:grid-cols-[1fr_0.75fr] gap-12 md:gap-20 items-start">
            <FadeUp>
              <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-4">
                Gastronomie
              </p>
              <h2
                className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Café Alte Schule
              </h2>
              <p className="text-black/48 text-lg leading-relaxed mb-4 max-w-[50ch]">
                Bereits im ersten Monat verzeichnete die Website über 2.000 Besucher und generierte einen vierstelligen Zusatzumsatz – die Investition hatte sich nach einem Monat vollständig amortisiert.
              </p>
              <p className="text-black/38 text-base leading-relaxed mb-8 max-w-[50ch]">
                Gleichzeitig wurde der administrative Aufwand massiv reduziert: Reservierungsanfragen per Telefon und E-Mail wurden auf nahezu null reduziert. Menü, Öffnungszeiten und Angebote lassen sich jetzt eigenständig in Sekunden aktualisieren.
              </p>
              <a
                href="https://cafe-alte-schule.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-black/18 text-black/50 rounded-full px-6 py-2.5 text-sm font-medium hover:border-black/40 hover:text-black transition-colors"
              >
                Live ansehen ↗
              </a>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border-t border-black/8">
                {cafeDetails.map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-black/8 py-4">
                    <span className="text-[#FF5500] text-sm flex-shrink-0">✓</span>
                    <span className="text-black/60 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Metrics */}
          <FadeUp delay={0.1}>
            <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-5 border-t border-black/10">
              {[
                { n: "2.000+", label: "Website-Besucher im ersten Monat" },
                { n: "4-stellig", label: "Zusatzumsatz im ersten Monat" },
                { n: "1 Monat", label: "bis zur vollständigen Amortisierung" },
                { n: "≈ 0", label: "Reservierungsanfragen per Telefon & E-Mail" },
                { n: "100%", label: "eigenständige Inhaltsverwaltung" },
              ].map(({ n, label }, i) => (
                <div
                  key={label}
                  className={`pt-8 pb-4 pr-6 ${i > 0 ? "md:border-l md:border-black/10 md:pl-6" : ""} ${i === 2 ? "col-span-2 md:col-span-1 border-t md:border-t-0 border-black/10 mt-0 md:mt-0" : ""}`}
                >
                  <p
                    className="font-black tracking-tight leading-none text-[oklch(12%_0.015_30)] mb-2"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                  >
                    {n}
                  </p>
                  <p className="text-black/38 text-xs leading-snug max-w-[14ch]">{label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Project: Safari Specialists */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">

          <FadeUp>
            <div className="block overflow-hidden rounded-2xl mb-14">
              <div className="relative w-full aspect-[16/8]">
                <Image
                  src="/safari-specialists-preview.png"
                  alt="Safari Specialists — Website-Redesign für einen Safari-Anbieter in Botswana"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-[1fr_0.75fr] gap-12 md:gap-20 items-start">
            <FadeUp>
              <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-4">
                Reisebranche · Botswana
              </p>
              <h2
                className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Safari Specialists
              </h2>
              <p className="text-black/48 text-lg leading-relaxed mb-4 max-w-[50ch]">
                Vollständiges Redesign für einen inhabergeführten Safari-Anbieter aus Maun. Reisen werden nach Reisetyp gebündelt statt nach Katalogseite — vom ersten Besuch bis zu Honeymoon und Multi-Country-Route.
              </p>
              <p className="text-black/38 text-base leading-relaxed mb-8 max-w-[50ch]">
                Dazu acht Reiseregionen mit eigenen Seiten, ein Redaktionsbereich mit 87 migrierten Artikeln, Reviews-Anbindung und ein Admin-Dashboard, das das Team in Botswana selbst bedient.
              </p>
              <StatusBadge label="In Umsetzung — Launch nach Abnahme" />
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border-t border-black/8">
                {safariDetails.map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-black/8 py-4">
                    <span className="text-[#FF5500] text-sm flex-shrink-0">✓</span>
                    <span className="text-black/60 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Project: David Schöne Brotmanufaktur */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">

          <FadeUp>
            <div className="block overflow-hidden rounded-2xl mb-14">
              <div className="relative w-full aspect-[16/8]">
                <Image
                  src="/schoene-preview.png"
                  alt="David Schöne Brotmanufaktur — Auswertungen im internen Bestell- und Bestandssystem"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-[1fr_0.75fr] gap-12 md:gap-20 items-start">
            <FadeUp>
              <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-4">
                Bäckerei · Bestellsystem
              </p>
              <h2
                className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                David Schöne
              </h2>
              <p className="text-black/48 text-lg leading-relaxed mb-4 max-w-[50ch]">
                Bio-Sauerteig-Bäckerei in Kiel, zwei Standorte. Das interne System verwaltet Click-&-Collect-Bestellungen und den Bestand an einer Stelle — statt Zettel, Telefon und Rückfragen zwischen den Läden.
              </p>
              <p className="text-black/38 text-base leading-relaxed mb-8 max-w-[50ch]">
                Bestellungen inklusive Wiederholbestellungen und Abhol-Zeitfenstern, Auswertungen für die Planung, Personalkonten mit Rollen. Seit Juli 2026 im Betrieb, mit laufender Wartung.
              </p>
              <StatusBadge label="Internes System — kein öffentlicher Zugang" />
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border-t border-black/8">
                {schoeneDetails.map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-black/8 py-4">
                    <span className="text-[#FF5500] text-sm flex-shrink-0">✓</span>
                    <span className="text-black/60 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Project: ShaYo Barbershop */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">

          <FadeUp>
            <a
              href="https://www.shayo-barbershop.de"
              target="_blank"
              rel="noopener noreferrer"
              className="block group overflow-hidden rounded-2xl mb-14"
            >
              <div className="relative w-full aspect-[16/8]">
                <Image
                  src="/shayo-preview.png"
                  alt="ShaYo Barbershop — SEO- und GEO-optimierte Website"
                  fill
                  className="object-cover object-top group-hover:scale-[1.015] transition-transform duration-700"
                />
              </div>
            </a>
          </FadeUp>

          <div className="grid md:grid-cols-[1fr_0.75fr] gap-12 md:gap-20 items-start">
            <FadeUp>
              <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-4">
                Barbershop · SEO & GEO
              </p>
              <h2
                className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                ShaYo Barbershop
              </h2>
              <p className="text-black/48 text-lg leading-relaxed mb-4 max-w-[50ch]">
                Barbershop in der Kieler Innenstadt, der über Google gefunden werden muss. Die Seite ist entsprechend gebaut: jede Leistung einzeln benannt, Fragen direkt beantwortet, Öffnungszeiten und Adresse maschinenlesbar. Damit ist sie auch für KI-Suchen auswertbar. Gebucht wird ohne Umweg — ein Tipp auf Anrufen oder WhatsApp, kein Formular.
              </p>
              <p className="text-black/38 text-base leading-relaxed mb-4 max-w-[50ch]">
                Dazu kommt die laufende Betreuung: Instagram und TikTok bespielen wir selbst, Google- und Apple-Unternehmensprofil pflegen wir mit. Das erste TikTok-Video erreichte nach zwei Tagen 10.500 Aufrufe, Instagram nach 30 Tagen 50.000 Profilaufrufe — alles organisch, ohne Werbebudget.
              </p>
              <p className="text-black/38 text-base leading-relaxed mb-8 max-w-[50ch]">
                Die GEO-Optimierung messen wir mit unserem eigenen Werkzeug GeoScope: es prüft laufend, ob der Laden in den Antworten der großen KI-Modelle auftaucht, wenn jemand nach einem Barbershop in Kiel fragt.
              </p>
              <a
                href="https://www.shayo-barbershop.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-black/18 text-black/50 rounded-full px-6 py-2.5 text-sm font-medium hover:border-black/40 hover:text-black transition-colors"
              >
                Live ansehen ↗
              </a>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border-t border-black/8">
                {shayoDetails.map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-black/8 py-4">
                    <span className="text-[#FF5500] text-sm flex-shrink-0">✓</span>
                    <span className="text-black/60 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Metrics */}
          <FadeUp delay={0.1}>
            <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-black/10">
              {[
                { n: "10.500", label: "Aufrufe auf dem ersten TikTok-Video in 2 Tagen" },
                { n: "50.000", label: "Instagram-Profilaufrufe in 30 Tagen" },
                { n: "5,0 ★", label: "im Google-Profil bei 62 Rezensionen" },
                { n: "0 €", label: "Werbebudget — alle Reichweite organisch" },
              ].map(({ n, label }, i) => (
                <div
                  key={label}
                  className={`pt-8 pb-4 pr-6 ${i > 0 ? "md:border-l md:border-black/10 md:pl-6" : ""} ${i === 2 ? "col-span-2 md:col-span-1 border-t md:border-t-0 border-black/10" : ""}`}
                >
                  <p
                    className="font-black tracking-tight leading-none text-[oklch(12%_0.015_30)] mb-2"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                  >
                    {n}
                  </p>
                  <p className="text-black/38 text-xs leading-snug max-w-[16ch]">{label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Project: Bachbäcker */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">

          <FadeUp>
            <a
              href="https://www.bachbaecker.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group overflow-hidden rounded-2xl mb-14"
            >
              <div className="relative w-full aspect-[16/8]">
                <Image
                  src="/bachbaecker-preview.png"
                  alt="Bachbäcker — Website und Admin-Dashboard"
                  fill
                  className="object-cover object-top group-hover:scale-[1.015] transition-transform duration-700"
                />
              </div>
            </a>
          </FadeUp>

          <div className="grid md:grid-cols-[1fr_0.75fr] gap-12 md:gap-20 items-start">
            <FadeUp>
              <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-4">
                Bäckerei
              </p>
              <h2
                className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Bachbäcker
              </h2>
              <p className="text-black/48 text-lg leading-relaxed mb-8 max-w-[50ch]">
                Website für eine Traditionsbäckerei aus dem Taunus — seit über 260 Jahren im Betrieb. Produktkatalog, Standortübersicht, Neuigkeiten und ein Admin-Dashboard, das das Team selbst bedient.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border-t border-black/8">
                {bachbaeckerDetails.map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-black/8 py-4">
                    <span className="text-[#FF5500] text-sm flex-shrink-0">✓</span>
                    <span className="text-black/60 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* More coming */}
      <section className="bg-[#FFFCF3] py-16 md:py-20">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-black/15 text-xl md:text-2xl font-medium">Weitere Projekte folgen.</p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
