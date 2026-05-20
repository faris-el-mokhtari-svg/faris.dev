import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";

const steps = [
  "Ich melde mich innerhalb von 24 Stunden.",
  "Wir vereinbaren ein 15-minütiges Gespräch.",
  "Ich analysiere deine Situation und schicke ein konkretes Angebot.",
  "Du entscheidest — ohne Druck.",
];


export const metadata: Metadata = {
  title: "Kontakt – Kostenlose Beratung buchen",
  description: "15 Minuten Gespräch, kostenlos. Wir schauen uns deine Situation an und sagen dir direkt, was machbar ist.",
  alternates: {
    canonical: "https://deploy-change.de/kontakt",
    languages: { "de": "https://deploy-change.de/kontakt", "x-default": "https://deploy-change.de/kontakt" },
  },
  openGraph: { url: "https://deploy-change.de/kontakt" },
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://deploy-change.de" },
    { "@type": "ListItem", "position": 2, "name": "Kontakt", "item": "https://deploy-change.de/kontakt" },
  ],
};

export default function Kontakt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      {/* Hero */}
      <section className="bg-[#FFFCF3] pt-28 md:pt-36 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="grid md:grid-cols-[1fr_0.75fr] gap-12 md:gap-20 items-start">

            <div>
              <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-6">
                Kontakt
              </p>
              <RevealText wrapClass="mb-8">
                <h1
                  className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)]"
                  style={{ fontSize: "clamp(3.5rem, 7.5vw, 7.5rem)" }}
                >
                  Lass uns reden.
                </h1>
              </RevealText>
              <FadeUp delay={0.1}>
                <p className="text-black/42 text-lg leading-relaxed max-w-[44ch]">
                  15 Minuten Gespräch, kostenlos. Wir schauen uns deine Situation an und sagen dir direkt, was machbar ist.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.15} className="md:pt-20">
              <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-5">
                Was danach passiert
              </p>
              <div className="border-t border-black/8">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5 border-b border-black/8 py-4">
                    <span className="text-[#FF5500] text-xs font-bold w-4 flex-shrink-0 mt-1">
                      {i + 1}
                    </span>
                    <p className="text-black/50 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
