import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import FadeUp from "@/components/FadeUp";
import ProcessSection from "@/components/ProcessSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import RevealText from "@/components/RevealText";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Deploy Change – Smarte Systeme für Gastronomie und lokale KMU",
  description: "Wir bauen Websites, Reservierungssysteme und Admin-Dashboards für Gastronomie und lokale KMU in Kiel und im DACH-Raum. Live in 4 Tagen.",
  alternates: {
    canonical: "https://deploy-change.de",
    languages: { "de": "https://deploy-change.de", "x-default": "https://deploy-change.de" },
  },
  openGraph: { url: "https://deploy-change.de" },
};

const services = [
  { n: "01", title: "Webdesign & Entwicklung", desc: "Custom gebaut, mobile-first. Kein Template, keine Einschränkungen." },
  { n: "02", title: "Reservierungssystem", desc: "Live-Auslastung, Walk-in-Erfassung, Kalenderintegration." },
  { n: "03", title: "Admin-Dashboard & Menü-Editor", desc: "Speisekarte und Öffnungszeiten selbst pflegen — in 10 Sekunden live." },
  { n: "04", title: "Kassensystem-Integration", desc: "Lightspeed, Square und mehr nahtlos eingebunden." },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ─── Marquee ──────────────────────────────────────────────── */}
      <MarqueeStrip />

      {/* ─── Services ─────────────────────────────────────────────── */}
      <section className="bg-[#FFFCF3] border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">

          <div className="flex items-end justify-between pb-10 border-b border-black/8">
            <RevealText>
              <h2
                className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
              >
                Was wir bauen.
              </h2>
            </RevealText>
            <FadeUp delay={0.05}>
              <Link
                href="/leistungen"
                className="text-black/28 text-sm hover:text-black transition-colors hidden md:block"
              >
                Alle Leistungen →
              </Link>
            </FadeUp>
          </div>

          <div>
            {services.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.06}>
                <Link
                  href="/leistungen"
                  className="group flex items-center gap-6 md:gap-10 border-b border-black/8 py-7 md:py-8"
                >
                  <span className="text-black/18 text-xs font-semibold w-6 flex-shrink-0">{s.n}</span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[oklch(12%_0.015_30)] font-medium group-hover:text-[#FF5500] transition-colors duration-200 leading-tight"
                      style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)" }}
                    >
                      {s.title}
                    </p>
                    <p className="text-black/32 text-sm mt-1 leading-snug">{s.desc}</p>
                  </div>
                  <span className="text-black/15 group-hover:text-[#FF5500] group-hover:translate-x-1 transition-all duration-200 text-base flex-shrink-0">
                    →
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Portfolio teaser ─────────────────────────────────────── */}
      <section className="bg-[#FFFCF3] border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">

          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-3">
                Referenzprojekt
              </p>
              <RevealText>
                <h2
                  className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)]"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
                >
                  Café Alte Schule.
                </h2>
              </RevealText>
            </div>
            <FadeUp delay={0.05}>
              <a
                href="https://cafe-alte-schule.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/28 text-sm hover:text-black transition-colors hidden md:block"
              >
                Live ansehen ↗
              </a>
            </FadeUp>
          </div>

          <FadeUp>
            <a
              href="https://cafe-alte-schule.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block group overflow-hidden rounded-2xl"
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

          <FadeUp delay={0.08}>
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                "Website + Admin-Dashboard",
                "Reservierungssystem",
                "Lightspeed-Integration",
                "Live in 4 Tagen",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-black/10 rounded-full px-4 py-1.5 text-xs text-black/38 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── Process ──────────────────────────────────────────────── */}
      <ProcessSection />

      {/* ─── Testimonial ──────────────────────────────────────────── */}
      <section className="bg-[#FFFCF3] border-t border-black/8 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-12">
            Kundenstimmen
          </p>
          <RevealText wrapClass="mb-10">
            <blockquote
              className="text-[oklch(12%_0.015_30)] font-medium leading-[1.05]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 4rem)" }}
            >
              „Professionell, auf unseren Betrieb zugeschnitten — unkompliziert und mit toller Beratung."
            </blockquote>
          </RevealText>
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4">
              <div className="w-px h-7 bg-black/12" />
              <p className="text-black/38 text-sm font-medium">
                Arne Linke, Gastronom · Café Alte Schule
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
