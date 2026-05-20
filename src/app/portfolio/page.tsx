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

const bachbaeckerDetails = [
  "Website mit No-Code-Editor",
  "Produktkatalog & Kategorien",
  "Admin-Dashboard (Neuigkeiten, Jobs, Produkte)",
  "Standortübersicht",
  "Live in 4 Tagen",
];

const ephesiaDetails = [
  "E-Commerce Shop",
  "Produktkatalog & Warenkorb",
  "Story- & Qualitätsseite",
  "Newsletter-Integration",
  "Mobile-First Design",
];


export const metadata: Metadata = {
  title: "Portfolio – Referenzprojekte",
  description: "Café Alte Schule, Bachbäcker, Ephesia — drei Systeme, die täglich im Einsatz sind.",
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
              Drei Projekte. Alle live. Alle in Betrieb.
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
              <p className="text-black/48 text-lg leading-relaxed mb-8 max-w-[50ch]">
                Vollständiges Betriebssystem: Website mit No-Code-Editor, Reservierungssystem mit Live-Auslastung, Admin-Dashboard für Schichten und Menü, Kassensystem-Integration. Der Inhaber pflegt alles selbst — täglich, ohne uns.
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
        </div>
      </section>

      {/* Project: Bachbäcker */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">

          <FadeUp>
            <div className="overflow-hidden rounded-2xl mb-14">
              <div className="relative w-full aspect-[16/8]">
                <Image
                  src="/bachbaecker-preview.png"
                  alt="Bachbäcker — Website und Admin-Dashboard"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
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

      {/* Project: Ephesia */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">

          <FadeUp>
            <a
              href="https://ephesia.de"
              target="_blank"
              rel="noopener noreferrer"
              className="block group overflow-hidden rounded-2xl mb-14"
            >
              <div className="relative w-full aspect-[16/8]">
                <Image
                  src="/ephesia-preview.png"
                  alt="Ephesia — Online-Shop für Olivenöl"
                  fill
                  className="object-cover object-top group-hover:scale-[1.015] transition-transform duration-700"
                />
              </div>
            </a>
          </FadeUp>

          <div className="grid md:grid-cols-[1fr_0.75fr] gap-12 md:gap-20 items-start">
            <FadeUp>
              <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-4">
                E-Commerce
              </p>
              <h2
                className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Ephesia
              </h2>
              <p className="text-black/48 text-lg leading-relaxed mb-8 max-w-[50ch]">
                Online-Shop für premium Olivenöl aus Selçuk — kaltgepresst, seit Generationen in Familienhand. Produktkatalog, Warenkorb, Markenstory und Qualitätsseite in einem.
              </p>
              <a
                href="https://ephesia.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-black/18 text-black/50 rounded-full px-6 py-2.5 text-sm font-medium hover:border-black/40 hover:text-black transition-colors"
              >
                Live ansehen ↗
              </a>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border-t border-black/8">
                {ephesiaDetails.map((item) => (
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
