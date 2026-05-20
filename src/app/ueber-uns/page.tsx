import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";

const values = [
  {
    title: "Menschen, nicht Projekte",
    desc: "Ich arbeite gerne mit Leuten, die etwas aufgebaut haben und es weiterbringen wollen. Das Gespräch davor ist genauso wichtig wie der Code danach.",
  },
  {
    title: "Weniger Aufwand, mehr Betrieb",
    desc: "Wenn jemand nach dem Launch aufhört, mich zu brauchen — dann hat es funktioniert. Das ist das Ziel.",
  },
  {
    title: "Direkt und unkompliziert",
    desc: "Ich mag es, wenn Dinge einfach laufen. Kein Hin und Her, keine langen Abstimmungsschleifen. Kurze Wege, klare Ergebnisse.",
  },
];


export const metadata: Metadata = {
  title: "Über uns – Faris El Mokhtari, Deploy Change",
  description: "Faris El Mokhtari baut Systeme für Gastronomie und lokale KMU: Websites, Reservierungen, Dashboards. Schnell, direkt, ohne Bullshit.",
  alternates: {
    canonical: "https://deploy-change.de/ueber-uns",
    languages: { "de": "https://deploy-change.de/ueber-uns", "x-default": "https://deploy-change.de/ueber-uns" },
  },
  openGraph: { url: "https://deploy-change.de/ueber-uns" },
};

const schemaPerson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://deploy-change.de" },
        { "@type": "ListItem", "position": 2, "name": "Über uns", "item": "https://deploy-change.de/ueber-uns" },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://deploy-change.de/ueber-uns#faris",
      "name": "Faris El Mokhtari",
      "jobTitle": "Gründer & Entwickler",
      "worksFor": { "@id": "https://deploy-change.de/#business" },
      "url": "https://deploy-change.de/ueber-uns",
      "image": "https://deploy-change.de/faris-portrait.png",
      "sameAs": ["https://www.instagram.com/deploy.change/"],
      "knowsAbout": ["Webentwicklung", "Webdesign", "Reservierungssysteme", "Gastronomie-Software"],
    },
  ],
};

export default function UeberUns() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }} />
      {/* Hero */}
      <section className="bg-[#FFFCF3] pt-28 md:pt-36 pb-16 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-6">
            Über uns
          </p>
          <RevealText>
            <h1
              className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
            >
              Hinter Deploy.
            </h1>
          </RevealText>
        </div>
      </section>

      {/* Faris */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16 grid md:grid-cols-[0.6fr_1fr] gap-12 md:gap-20 items-start">
          <FadeUp>
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="/faris-portrait.png"
                alt="Faris El Mokhtari"
                className="w-full h-full object-cover object-top scale-[1.08]"
                draggable={false}
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="flex flex-col gap-5 md:pt-4">
            <div>
              <h2
                className="font-medium leading-[0.92] text-[oklch(12%_0.015_30)] mb-1.5"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Faris El Mokhtari
              </h2>
              <p className="text-black/32 text-sm">Gründer & Entwickler, Deploy</p>
            </div>

            <p className="text-black/52 text-lg leading-relaxed max-w-[52ch]">
              Ich baue keine Websites als Einzelprodukt. Ich baue Systeme: Reservierungen, Dashboards, Kassensystem-Anbindungen. Die Website ist der Teil davon, den man sieht.
            </p>

            <p className="text-black/40 text-base leading-relaxed max-w-[52ch]">
              Das erste Projekt war ein Reservierungssystem für ein Café um die Ecke. Läuft noch heute live. Lightspeed-Integration, Echtzeit-Auslastung, Speisekarte selbst pflegbar.
            </p>

            <p className="text-black/40 text-base leading-relaxed max-w-[52ch]">
              Mit Gastronomen und lokalen Betrieben arbeite ich, weil man dort direkt sieht, ob etwas funktioniert.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-block border border-[oklch(12%_0.015_30)] text-[oklch(12%_0.015_30)] rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-[oklch(12%_0.015_30)] hover:text-[#FFFCF3] transition-colors"
              >
                Gespräch buchen
              </Link>
              <Link
                href="/portfolio"
                className="inline-block border border-black/12 text-black/40 rounded-full px-6 py-2.5 text-sm hover:border-black/25 hover:text-black/60 transition-colors"
              >
                Projekte ansehen
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#FFFCF3] border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.05}>
              <div className="grid md:grid-cols-[0.6fr_1fr] items-start gap-6 md:gap-20 py-10 md:py-12 border-b border-black/8 last:border-b-0">
                <h3
                  className="font-medium leading-[0.95] text-[#FF5500]"
                  style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}
                >
                  {v.title}
                </h3>
                <p className="text-black/48 text-lg leading-relaxed">{v.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
