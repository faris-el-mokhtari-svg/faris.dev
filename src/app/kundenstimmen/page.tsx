import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";

const industries = [
  { label: "Gastronomie", desc: "Cafés, Restaurants, Bars" },
  { label: "Bäckerei & Handwerk", desc: "Betriebe mit Verkauf und Abholung" },
  { label: "Dienstleistung", desc: "Barbershops, Studios, Praxen" },
  { label: "Reise & Tourismus", desc: "Anbieter mit Beratungsgeschäft" },
];

const testimonials = [
  {
    quote:
      "Deploy hat es uns ermöglicht, eine professionelle Website zu erstellen, die auf unseren Betrieb zugeschnitten ist — ganz unkompliziert, mit toller Beratung.",
    name: "Arne Linke",
    role: "Gastronom · Café Alte Schule",
    img: "/arne-linke.jpg",
    alt: "Arne Linke und Emma vor dem Café Alte Schule",
    lang: undefined as string | undefined,
    date: "2025-12-01",
    objectPosition: "center 30%",
  },
  {
    quote:
      "Ich wollte, dass Leute uns finden, wenn sie in Kiel nach einem Barbershop suchen. Genau das passiert jetzt — und um Instagram und TikTok muss ich mich nicht selbst kümmern.",
    name: "Shayan Borumand",
    role: "Inhaber · ShaYo Barber Shop Kiel",
    img: "/shayan-borumand.jpg",
    alt: "Shayan Borumand im ShaYo Barber Shop in Kiel",
    lang: undefined as string | undefined,
    date: "2026-08-01",
    objectPosition: "center center",
  },
  {
    quote:
      "Faris understood our business before he touched the design. Our trips are now grouped the way guests actually think about them, and our team in Maun can update everything themselves.",
    name: "Erica",
    role: "Safari Specialists · Maun, Botswana",
    img: "/erica-safari-specialists.jpg",
    alt: "Erica von Safari Specialists an einem Safari-Zelt in Botswana",
    lang: "en",
    date: "2026-08-01",
    objectPosition: "center center",
  },
];


export const metadata: Metadata = {
  title: "Kundenstimmen & Referenzen",
  description: "Was unsere Kunden über Deploy Change sagen. Referenzen aus Gastronomie, Bäckerei, Dienstleistung und Tourismus.",
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
    ...testimonials.map((t) => ({
      "@type": "Review",
      "itemReviewed": { "@id": "https://deploy-change.de/#business" },
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.quote,
      "datePublished": t.date,
      "inLanguage": t.lang === "en" ? "en" : "de-DE",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    })),
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

      {/* Testimonials */}
      {testimonials.map((t, i) => (
        <section
          key={t.name}
          className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8"
        >
          <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">
            <div
              className={`grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-20 items-start ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <FadeUp>
                <RevealText wrapClass="mb-8">
                  <blockquote
                    lang={t.lang}
                    className="text-[oklch(12%_0.015_30)] font-medium leading-[1.05]"
                    style={{ fontSize: "clamp(1.6rem, 3.5vw, 3.5rem)" }}
                  >
                    „{t.quote}"
                  </blockquote>
                </RevealText>
                <div className="flex items-center gap-4">
                  <div className="w-px h-8 bg-black/12" />
                  <div>
                    <p className="text-black/55 text-sm font-semibold">{t.name}</p>
                    <p className="text-black/28 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={t.img}
                    alt={t.alt}
                    className="w-full aspect-[4/5] object-cover"
                    style={{ objectPosition: t.objectPosition }}
                    loading={i === 0 ? undefined : "lazy"}
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      ))}

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
