"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactSection from "@/components/ContactSection";
import FadeUp from "@/components/FadeUp";
import ProcessSection from "@/components/ProcessSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import RevealText from "@/components/RevealText";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CAFE_IMG =
  "/cafe-alte-schule-preview.png";

const services = [
  { n: "01", title: "Webdesign & Entwicklung", desc: "Custom gebaut, mobile-first. Kein Template, keine Einschränkungen." },
  { n: "02", title: "Reservierungssystem", desc: "Live-Auslastung, Walk-in-Erfassung, Kalenderintegration." },
  { n: "03", title: "Admin-Dashboard & Menü-Editor", desc: "Speisekarte und Öffnungszeiten selbst pflegen — in 10 Sekunden live." },
  { n: "04", title: "Kassensystem-Integration", desc: "Lightspeed, Square und mehr nahtlos eingebunden." },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    tl.from(".hero-label", { opacity: 0, y: 10, duration: 0.55, ease: "power3.out" })
      .from(".hero-word", { yPercent: 112, duration: 1.05, ease: "power4.out", stagger: 0.09 }, "-=0.25")
      .from(".hero-device", { opacity: 0, scale: 0.95, duration: 1.0, ease: "power3.out" }, "-=0.7")
      .from(".hero-badge", { opacity: 0, scale: 0.88, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .from(".hero-shadow", { opacity: 0, x: 24, duration: 2.0, ease: "power2.out" }, "-=0.9")
      .from(".hero-bottom", { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" }, "-=1.6");
  }, { scope: heroRef });

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section ref={heroRef} className="bg-[#FFFCF3] min-h-screen lg:min-h-[115vh] flex flex-col relative overflow-hidden">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16 flex-1 flex flex-col w-full pt-16 md:pt-20">


          {/* Headline + café preview */}
          <div className="flex-1 flex items-center py-8 md:py-10">
            <div className="w-full grid lg:grid-cols-[1fr_auto] gap-8 xl:gap-14 items-center">

              <h1
                className="font-medium text-[clamp(4.2rem,21vw,10rem)] lg:text-[clamp(4rem,11vw,12.5rem)] text-center lg:text-left"
                style={{ fontFamily: "var(--font-display)", lineHeight: 0.9 }}
              >
                {[
                  { text: "Smarte", orange: false },
                  { text: "Systeme.", orange: true },
                  { text: "Starke", orange: false },
                  { text: "Betriebe.", orange: true },
                ].map(({ text, orange }) => (
                  <span key={text} className="block overflow-hidden pb-[0.14em]">
                    <span
                      className={`hero-word block ${
                        orange ? "text-[#FF5500]" : "text-[oklch(12%_0.015_30)]"
                      }`}
                    >
                      {text}
                    </span>
                  </span>
                ))}
              </h1>

              {/* Café preview + reservation badge */}
              <div className="hero-device hidden lg:block lg:flex-shrink-0 relative isolate">

                {/* Soft shadow — animates in behind the devices */}
                <div className="hero-shadow pointer-events-none absolute -z-10 right-[-14%] top-[8%] w-[88%] h-[78%] rounded-full blur-[100px] bg-black/[0.09]" />

                {/* Contact shadow — laptop resting on surface */}
                <div className="pointer-events-none absolute -z-[1] bottom-[10%] left-[6%] w-[74%] h-[18px] rounded-full blur-[18px] bg-black/[0.22]" />

                {/* Laptop — links to homepage */}
                <motion.a
                  href="https://cafe-alte-schule.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                >
                  <img
                    src="/cafe-preview.svg"
                    alt="Café Alte Schule — Live-Website"
                    className="w-[260px] lg:w-[520px] xl:w-[620px] 2xl:w-[700px] block"
                    draggable={false}
                  />
                </motion.a>

                {/* Circular reservation badge — lower-right corner of laptop */}
                <motion.a
                  href="https://cafe-alte-schule.com/reservierung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-badge hidden lg:block absolute -bottom-[4%] -right-[18%] z-10 cursor-pointer"
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                >
                  <img
                    src="/reservation-badge.svg"
                    alt="Tisch reservieren"
                    className="w-[260px] xl:w-[300px] 2xl:w-[340px] select-none"
                    draggable={false}
                  />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom: desc + CTA + stats */}
          <div className="hero-bottom">
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center border-t border-black/8 py-6">
              <p
                className="text-black/45 leading-relaxed max-w-[54ch]"
                style={{ fontSize: "clamp(0.9rem, 1.35vw, 1.05rem)" }}
              >
                Wir bauen operative Systeme für Gastronomie und lokale KMU — Website, Reservierung und Dashboard in einem.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/kontakt"
                  className="inline-block border border-[oklch(12%_0.015_30)] text-[oklch(12%_0.015_30)] rounded-full px-7 py-3 text-sm font-semibold hover:bg-[oklch(12%_0.015_30)] hover:text-[#FFFCF3] transition-colors whitespace-nowrap"
                >
                  Beratung buchen →
                </Link>
              </motion.div>
            </div>

            {/* Inline stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-black/8 pb-8">
              {[
                { n: "4", suffix: " Tage", label: "bis Launch" },
                { n: "10+", suffix: "", label: "Projekte" },
                { n: "3", suffix: "", label: "Länder" },
                { n: "100%", suffix: "", label: "editierbar" },
              ].map(({ n, suffix, label }, i) => (
                <div key={label} className={`pt-6 pb-2 ${
                    i === 1 ? "pl-6 border-l border-black/8 md:pl-8" :
                    i === 2 ? "md:pl-8 md:border-l md:border-black/8" :
                    i === 3 ? "pl-6 border-l border-black/8 md:pl-8" : ""
                  }`}>
                  <p
                    className="font-black tracking-tight leading-none text-[oklch(12%_0.015_30)]"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                  >
                    {n}
                    {suffix && <span className="text-[#FF5500]">{suffix}</span>}
                  </p>
                  <p className="text-black/28 text-[0.6rem] font-semibold tracking-widest uppercase mt-2">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              <div
                className="w-full aspect-[16/8] bg-cover bg-top group-hover:scale-[1.015] transition-transform duration-700"
                style={{ backgroundImage: `url('${CAFE_IMG}')` }}
              />
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
