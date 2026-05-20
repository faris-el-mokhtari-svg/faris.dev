import type { Metadata } from "next";
import Image from "next/image";
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
    desc: "Eine Website, die zum Betrieb passt — nicht einfach nur ein Template. Für dich entwickelt, mobile-first und direkt editierbar ohne technisches Vorwissen.",
    features: [
      "Custom Design — kein Template",
      "Mobile-First Development",
      "SEO-Optimierung",
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
  const featureTextColor = dark ? "text-white/72" : orange ? "text-white/90" : "text-black/55";
  const featureBorderColor = dark ? "border-white/8" : orange ? "border-white/25" : "border-black/8";
  const arrowColor = dark ? "text-white/35" : orange ? "text-white/70" : "text-[#FF5500]/50";
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
                  color={orange ? "white" : "orange"}
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


export const metadata: Metadata = {
  title: "Leistungen – Website, Reservierung & Dashboard",
  description: "Webdesign, Reservierungssystem, Admin-Dashboard und Kassensystem-Integration – alles aus einer Hand. Für Gastronomie und lokale Betriebe.",
  alternates: {
    canonical: "https://deploy-change.de/leistungen",
    languages: { "de": "https://deploy-change.de/leistungen", "x-default": "https://deploy-change.de/leistungen" },
  },
  openGraph: { url: "https://deploy-change.de/leistungen" },
};

const faqs = [
  {
    q: "Was bekomme ich konkret – nur eine Website oder auch Systeme dahinter?",
    a: "Bei uns bekommen Sie nicht nur eine Website, sondern auf Wunsch ein komplettes digitales System für Ihren Betrieb. Wir bauen genau das, was Ihr Unternehmen wirklich braucht – von professionellen Websites bis hin zu integrierten Lösungen wie Reservierungssystemen, POS-Anbindungen, Dashboards, Bewerbungsseiten oder individuellen Betriebsprozessen. Wir analysieren außerdem bestehende Problemstellen in Ihrem Betrieb und zeigen konkrete digitale Lösungen auf, die Zeit sparen, Abläufe vereinfachen und den Umsatz steigern können.",
    bullets: null as null | string[],
  },
  {
    q: "Wie hilft mir eure Lösung konkret, mehr Kunden oder Reservierungen zu bekommen?",
    a: "Unsere Websites sind nicht nur optisch professionell – sie sind darauf ausgelegt, neue Kunden zu gewinnen und bestehende Prozesse effizienter zu machen.",
    bullets: [
      "SEO & lokale Google-Optimierung (GEO), damit Ihr Betrieb besser gefunden wird",
      "Professionellerer Außenauftritt, der Vertrauen schafft und mehr Anfragen generiert",
      "Schnellere Ladezeiten und bessere Nutzerführung für höhere Conversion",
      "Möglichkeit, über Google Ads oder Sponsoring zusätzliche Aufmerksamkeit zu generieren",
      "Optimierte Reservierungs- oder Kontaktprozesse, damit weniger Kunden abspringen",
    ],
  },
  {
    q: "Was kostet eine Website bei euch?",
    a: "Aktuell bieten wir ein Special-Angebot an: Die komplette Landingpage erhalten Sie kostenlos – Sie zahlen lediglich eine monatliche Gebühr zwischen 50 € und 100 €, abhängig vom Umfang der Betreuung und Anforderungen. Zusätzliche Integrationen wie z. B. POS-Systeme, Reservierungssysteme oder individuelle Erweiterungen werden separat berechnet und bewegen sich in der Regel zwischen 500 € und 1.500 € pro Integration – und liegen damit deutlich unter den üblichen Marktpreisen.",
    bullets: null,
  },
  {
    q: "Wie läuft die Zusammenarbeit ab und wie lange dauert die Umsetzung?",
    a: "Zunächst schauen wir uns Ihren Betrieb genau an und analysieren gemeinsam, welche digitalen Lösungen für Sie wirklich sinnvoll sind. In einem Gespräch besprechen wir Ihre aktuellen Herausforderungen, welche Integrationen sinnvoll wären und den genauen Umfang und Preis der Lösung. Nach Vertragsabschluss geht Ihre Website bereits innerhalb der ersten 4 Tage live. Anschließend arbeiten wir bei Bedarf an weiteren Integrationen und Optimierungen. Sie haben dabei jederzeit einen direkten Ansprechpartner und schnellen Support.",
    bullets: null,
  },
  {
    q: "Kann ich Inhalte später selbst ändern – und wem gehört die Website?",
    a: "Ja. Sie können Inhalte jederzeit selbst ändern – ganz ohne technisches Vorwissen. Über ein benutzerfreundliches Admin-System lassen sich Öffnungszeiten, Menüs & Produkte, Jobausschreibungen, Neuigkeiten & Events sowie Betriebsferien eigenständig anpassen. Und das Wichtigste: Die Website gehört Ihnen. Sie bleiben unabhängig und haben jederzeit die volle Kontrolle über Ihre Inhalte.",
    bullets: null,
  },
  {
    q: "Was passiert nach dem Launch – bietet ihr Support an?",
    a: "Auch nach dem Launch lassen wir Sie nicht allein. Bei technischen Problemen oder Fragen sind wir jederzeit erreichbar und unterstützen schnell und unkompliziert. Egal ob kleinere Anpassungen oder technische Schwierigkeiten – Sie haben einen direkten Ansprechpartner statt eines anonymen Ticketsystems. So bleibt Ihre Website langfristig funktional, aktuell und performant.",
    bullets: null,
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://deploy-change.de" },
        { "@type": "ListItem", "position": 2, "name": "Leistungen", "item": "https://deploy-change.de/leistungen" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.bullets ? `${f.a} ${f.bullets.join(". ")}.` : f.a,
        },
      })),
    },
    {
      "@type": "Service",
      "@id": "https://deploy-change.de/leistungen#webdesign",
      "name": "Webdesign & Entwicklung",
      "description": "Custom entwickelte Websites für Gastronomie und lokale KMU — mobile-first, SEO-optimiert und direkt editierbar ohne technisches Vorwissen.",
      "url": "https://deploy-change.de/leistungen",
      "provider": { "@id": "https://deploy-change.de/#business" },
      "areaServed": ["DE", "AT", "CH"],
      "serviceType": "Webentwicklung",
      "inLanguage": "de-DE",
    },
    {
      "@type": "Service",
      "@id": "https://deploy-change.de/leistungen#reservierungssystem",
      "name": "Reservierungssystem",
      "description": "Digitales Reservierungssystem mit Live-Auslastung, Walk-in-Erfassung und Tagesübersicht pro Schicht. Für Gastronomie und Cafés.",
      "url": "https://deploy-change.de/leistungen",
      "provider": { "@id": "https://deploy-change.de/#business" },
      "areaServed": ["DE", "AT", "CH"],
      "serviceType": "Reservierungssystem",
      "inLanguage": "de-DE",
    },
    {
      "@type": "Service",
      "@id": "https://deploy-change.de/leistungen#admin-dashboard",
      "name": "Admin-Dashboard & Menü-Editor",
      "description": "No-Code Admin-Interface für Speisekarte, Öffnungszeiten und Schichtverwaltung. Änderungen sind sofort live.",
      "url": "https://deploy-change.de/leistungen",
      "provider": { "@id": "https://deploy-change.de/#business" },
      "areaServed": ["DE", "AT", "CH"],
      "serviceType": "Admin-Dashboard",
      "inLanguage": "de-DE",
    },
    {
      "@type": "Service",
      "@id": "https://deploy-change.de/leistungen#kassensystem",
      "name": "Kassensystem-Integration",
      "description": "Nahtlose Integration von Lightspeed, Square und weiteren POS-Systemen. Umsatz, Inventar und Tagesberichte in einer Ansicht.",
      "url": "https://deploy-change.de/leistungen",
      "provider": { "@id": "https://deploy-change.de/#business" },
      "areaServed": ["DE", "AT", "CH"],
      "serviceType": "Kassensystem-Integration",
      "inLanguage": "de-DE",
    },
  ],
};

export default function Leistungen() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
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
              Website, Reservierung, Dashboard, Kasse — alles aus einer Hand, alles aufeinander abgestimmt.
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
                2.000+ Besucher im ersten Monat. Vierstelliger Zusatzumsatz. ROI nach 1 Monat. Reservierungsanfragen per Telefon: nahezu null.
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
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
              <Image
                src={CAFE_IMG}
                alt="Café Alte Schule — vollständiges Betriebssystem live im Einsatz"
                fill
                className="object-cover object-top"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-t border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12">
          <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-10">
            Häufige Fragen
          </p>
          <div className="grid md:grid-cols-[0.45fr_1fr] gap-10 md:gap-20 items-start">
            <div>
              <h2
                className="font-medium leading-[0.92] text-[oklch(12%_0.015_30)] sticky top-8"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Was Sie wissen möchten.
              </h2>
            </div>
            <div className="border-t border-black/8">
              {faqs.map((faq) => (
                <details key={faq.q} className="border-b border-black/8 group">
                  <summary className="flex items-start justify-between gap-6 py-6 md:py-7 cursor-pointer list-none select-none">
                    <h3 className="font-medium text-base md:text-lg text-[oklch(12%_0.015_30)] leading-snug">
                      {faq.q}
                    </h3>
                    <span className="text-[#FF5500] text-xl flex-shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="pb-7 text-black/52 text-base leading-relaxed flex flex-col gap-3">
                    <p>{faq.a}</p>
                    {faq.bullets && (
                      <ul className="flex flex-col gap-2 mt-1">
                        {faq.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="text-[#FF5500] text-xs mt-1.5 flex-shrink-0">→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
