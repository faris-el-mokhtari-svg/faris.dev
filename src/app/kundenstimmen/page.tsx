import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";

const industries = [
  { label: "Gastronomie", desc: "Cafés, Restaurants, Bars" },
  { label: "Handwerk", desc: "Betriebe mit Kundenkontakt" },
  { label: "Einzelhandel", desc: "Lokale Läden & Boutiquen" },
  { label: "E-Commerce", desc: "Kleine Online-Shops" },
];


export const metadata: Metadata = {
  title: "Kundenstimmen & Referenzen",
  description: "Was unsere Kunden über Deploy Change sagen. Referenzen aus Gastronomie, Bäckerei und E-Commerce im DACH-Raum.",
  alternates: {
    canonical: "https://deploy-change.de/kundenstimmen",
    languages: { "de": "https://deploy-change.de/kundenstimmen", "x-default": "https://deploy-change.de/kundenstimmen" },
  },
  openGraph: { url: "https://deploy-change.de/kundenstimmen" },
};

const schemaReview = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://deploy-change.de" },
        { "@type": "ListItem", "position": 2, "name": "Kundenstimmen", "item": "https://deploy-change.de/kundenstimmen" },
      ],
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://deploy-change.de/#business" },
      "author": { "@type": "Person", "name": "Arne Linke" },
      "reviewBody": "Deploy hat es uns ermöglicht, eine professionelle Website zu erstellen, die auf unseren Betrieb zugeschnitten ist — ganz unkompliziert, mit toller Beratung.",
      "datePublished": "2025-12-01",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
  ],
};

export default function Kundenstimmen() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaReview) }} />
      {/* Hero */}
      <section className="bg-[#FFFCF3] pt-28 md:pt-36 pb-16 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-6">
            Kundenstimmen
          </p>
          <RevealText>
            <h1
              className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
            >
              Was unsere<br />Kunden sagen.
            </h1>
          </RevealText>
        </div>
      </section>

      {/* Main testimonial */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-20 items-start">
            <FadeUp>
              <RevealText wrapClass="mb-8">
                <blockquote
                  className="text-[oklch(12%_0.015_30)] font-medium leading-[1.05]"
                  style={{ fontSize: "clamp(1.6rem, 3.5vw, 3.5rem)" }}
                >
                  „Deploy hat es uns ermöglicht, eine professionelle Website zu erstellen, die auf unseren Betrieb zugeschnitten ist — ganz unkompliziert, mit toller Beratung."
                </blockquote>
              </RevealText>
              <div className="flex items-center gap-4">
                <div className="w-px h-8 bg-black/12" />
                <div>
                  <p className="text-black/55 text-sm font-semibold">Arne Linke</p>
                  <p className="text-black/28 text-xs mt-0.5">Gastronom · Café Alte Schule</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/cafe-alte-schule-preview.png"
                  alt="Café Alte Schule"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealText wrapClass="mb-14">
            <h2
              className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              Für jeden lokalen Betrieb.
            </h2>
          </RevealText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-black/8">
            {industries.map((ind, i) => (
              <FadeUp key={ind.label} delay={i * 0.07}>
                <div className="border-b md:border-b-0 border-black/8 md:border-r md:last:border-r-0 py-10 md:pr-8 md:first:pl-0 md:pl-8">
                  <h3
                    className="text-[oklch(12%_0.015_30)] font-medium leading-tight mb-2"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)" }}
                  >
                    {ind.label}
                  </h3>
                  <p className="text-black/32 text-sm leading-snug">{ind.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
