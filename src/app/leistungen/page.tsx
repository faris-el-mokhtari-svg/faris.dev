"use client";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import RevealText from "@/components/RevealText";
import FadeUp from "@/components/FadeUp";
import AnimatedCounter from "@/components/AnimatedCounter";
import GetPackedSection from "@/components/GetPackedSection";

const CAFE_IMG =
  "/cafe-alte-schule-preview.png";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "01",
    title: "Webdesign &\nEntwicklung",
    desc: "Eine Website, die zum Betrieb passt — nicht zu einem Template. Custom entwickelt, mobile-first, und direkt editierbar ohne technisches Vorwissen.",
    features: [
      "Custom Design — kein Template",
      "Mobile-First Development",
      "SEO-Grundoptimierung",
      "Schnelle Ladezeiten",
      "No-Code Editor inklusive",
    ],
    stat: { to: 4, suffix: " Tage", label: "bis zum Live-Launch" },
    bg: "cream" as const,
  },
  {
    id: "02",
    title: "Reservierungs-\nsystem",
    desc: "Alle Buchungen in Echtzeit — mit Live-Auslastung, Walk-in-Erfassung und Tagesübersicht pro Schicht. Kein Telefonklingeln mehr.",
    features: [
      "Live-Auslastung pro Schicht",
      "Walk-in Erfassung & Tischverwaltung",
      "Gästehistorie",
      "Automatische Buchungsbestätigung",
      "Kalenderintegration",
    ],
    stat: { to: 100, suffix: "%", label: "digitale Buchungen" },
    bg: "orange" as const,
  },
  {
    id: "03",
    title: "Admin-Dashboard\n& Menü-Editor",
    desc: "Speisekarte und Öffnungszeiten selbst aktualisieren — in zehn Sekunden, ohne technisches Vorwissen. Was sich ändert, ist sofort live.",
    features: [
      "No-Code Admin-Interface",
      "Menü-Editor & Kategorien",
      "Schicht- & Öffnungszeitverwaltung",
      "Sofort-Aktualisierung live",
      "Mehrsprachige Inhalte",
    ],
    stat: { to: 10, suffix: " Sek.", label: "bis die Änderung live ist" },
    bg: "cream" as const,
  },
  {
    id: "04",
    title: "Kassensystem-\nIntegration",
    desc: "Lightspeed, Square und weitere POS-Systeme werden nahtlos eingebunden — Umsatz, Inventar und Tagesbericht in einer einzigen Ansicht.",
    features: [
      "Lightspeed POS Integration",
      "Echtzeit-Bestandstracking",
      "Tageseinnahmen & Berichte sofort sichtbar",
      "Automatisierte Inventurübersicht",
    ],
    stat: null,
    bg: "dark" as const,
  },
];


// ─── Section components ───────────────────────────────────────────────────────

function ServiceSection({
  service,
}: {
  service: (typeof services)[number];
}) {
  const cream = service.bg === "cream";
  const dark = service.bg === "dark";
  const orange = service.bg === "orange";

  const numColor = dark
    ? "text-[#FF5500]"
    : orange
    ? "text-white/15"
    : "text-[#FF5500]";

  const titleColor = dark || orange ? "text-white" : "text-[oklch(20%_0.015_30)]";
  const dividerColor = dark ? "border-white/10" : orange ? "border-white/20" : "border-black/12";
  const descColor = dark || orange ? "text-white/80" : "text-[oklch(20%_0.015_30)]";
  const featureTextColor = dark || orange ? "text-white/60" : "text-black/55";
  const featureBorderColor = dark ? "border-white/8" : orange ? "border-white/15" : "border-black/8";
  const arrowColor = dark || orange ? "text-white/30" : "text-[#FF5500]/50";
  const ctaClass = dark
    ? "border-white/30 text-white hover:bg-white/10"
    : orange
    ? "border-white/60 text-white hover:bg-white/15"
    : "border-black/25 text-[oklch(20%_0.015_30)] hover:bg-black hover:text-white";

  const bg = dark
    ? "bg-[oklch(12%_0.015_30)]"
    : orange
    ? "bg-[#FF5500]"
    : "bg-[#FFFCF3]";

  return (
    <section className={`${bg} py-20 md:py-32`}>
      <div className="max-w-[1366px] mx-auto px-6 md:px-12">
        {/* Number + Title row */}
        <div className="mb-10 md:mb-14">
          <RevealText>
            <span
              className={`block font-black tracking-tight leading-[0.85] ${numColor}`}
              style={{ fontSize: "clamp(5rem, 11vw, 11rem)", fontFamily: "var(--font-display)" }}
            >
              {service.id}
            </span>
          </RevealText>
          <RevealText delay={0.08}>
            <h2
              className={`font-medium leading-[0.88] whitespace-pre-line ${titleColor}`}
              style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)" }}
            >
              {service.title}
            </h2>
          </RevealText>
        </div>

        {/* Divider */}
        <div className={`border-t ${dividerColor} mb-10 md:mb-14`} />

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Left: description + CTA */}
          <FadeUp>
            <p
              className={`leading-snug mb-10 ${descColor}`}
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}
            >
              {service.desc}
            </p>
            <Link
              href="/kontakt"
              className={`inline-block border rounded-full px-7 py-3 text-sm font-semibold transition-colors ${ctaClass}`}
            >
              Gespräch buchen →
            </Link>
          </FadeUp>

          {/* Right: stat + features */}
          <div className="flex flex-col gap-8">
            {service.stat && (
              <FadeUp>
                <AnimatedCounter
                  to={service.stat.to}
                  suffix={service.stat.suffix}
                  label={service.stat.label}
                />
              </FadeUp>
            )}

            <FadeUp delay={0.08} className="flex flex-col">
              {service.features.map((f) => (
                <div
                  key={f}
                  className={`flex items-start gap-4 border-t py-3.5 ${featureBorderColor}`}
                >
                  <span className={`text-xs mt-1 flex-shrink-0 ${arrowColor}`}>→</span>
                  <span className={`text-base leading-snug ${featureTextColor}`}>{f}</span>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Leistungen() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FF5500] pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12">
          <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-10">
            Leistungen
          </p>
          <RevealText wrapClass="mb-10">
            <h1
              className="text-white font-medium leading-[0.88]"
              style={{ fontSize: "clamp(3rem, 7.5vw, 7.5rem)" }}
            >
              Das vollständige Betriebssystem für Ihren Betrieb.
            </h1>
          </RevealText>
          <FadeUp delay={0.2}>
            <p
              className="text-white/60 leading-snug max-w-2xl"
              style={{ fontSize: "clamp(1.125rem, 1.75vw, 1.5rem)" }}
            >
              Wir bauen keine Websites als Einzelprodukt. Wir bauen operative Systeme — Website, Reservierung, Dashboard und Integration in einem.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Four service sections */}
      {services.map((s) => (
        <ServiceSection key={s.id} service={s} />
      ))}

      <GetPackedSection />

      {/* Project example */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-t border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12">
          <p className="text-black/30 text-xs font-semibold tracking-widest uppercase mb-10">
            In der Praxis
          </p>
          <FadeUp className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="flex flex-col gap-6">
              <RevealText>
                <h2
                  className="text-[#FF5500] font-medium leading-[0.92]"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                >
                  Café Alte Schule.
                </h2>
              </RevealText>
              <p className="text-black text-xl md:text-2xl leading-snug">
                Reservierungssystem mit Live-Auslastung. Speisekarte selbst editierbar. Kassensystem-Integration mit Lightspeed. Live in 4 Tagen.
              </p>
              <a
                href="https://cafe-alte-schule.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black text-black rounded-full px-7 py-3 text-sm font-semibold hover:bg-black hover:text-white transition-colors self-start"
              >
                Live ansehen →
              </a>
            </div>
            <div
              className="w-full aspect-[4/3] rounded-[2rem] bg-cover bg-top"
              style={{ backgroundImage: `url('${CAFE_IMG}')` }}
            />
          </FadeUp>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
