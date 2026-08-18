"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 });
    tl.from(".hero-label", { opacity: 0, y: 10, duration: 0.55, ease: "power3.out" })
      .from(".hero-word", { yPercent: 112, duration: 1.05, ease: "power4.out", stagger: 0.09 }, "-=0.25")
      .from(".hero-device", { opacity: 0, scale: 0.95, duration: 1.0, ease: "power3.out" }, "-=0.7")
      .from(".hero-mobile-eyebrow", { opacity: 0, y: 14, duration: 0.6, ease: "power3.out" }, "-=0.85")
      .from(".hero-mobile-lede", { opacity: 0, y: 16, duration: 0.7, ease: "power3.out" }, "-=0.4")
      // Rises into place rather than sliding in from the right: it is a
      // full-width plate now, not a shot peeking past the gutter.
      .from(".hero-mobile-proof", { opacity: 0, y: 24, duration: 0.85, ease: "power3.out" }, "-=0.5")
      .from(".hero-badge", { opacity: 0, scale: 0.88, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .from(".hero-shadow", { opacity: 0, x: 24, duration: 2.0, ease: "power2.out" }, "-=0.9")
      .from(".hero-bottom", { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" }, "-=1.6");
  }, { scope: heroRef });

  // No mobile min-height: forcing a full viewport left dead space under the
  // stats. Letting the section end naturally pulls the marquee up as a cue.
  return (
    <section ref={heroRef} className="bg-[#FFFCF3] lg:min-h-[115vh] flex flex-col relative overflow-hidden">
      <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16 flex-1 flex flex-col w-full pt-14 md:pt-20">

        {/* Headline + café preview */}
        <div className="lg:flex-1 flex lg:items-center pt-2 pb-6 md:py-10">
          {/* Mobile stacks eyebrow → lede → proof → headline via `order`, so the
              display type lands at the bottom edge like a printed cover. The h1
              stays first in the DOM for reading order; the two focusable items
              (CTA, proof link) still come in visual order. */}
          <div className="w-full grid lg:grid-cols-[1fr_auto] gap-y-0 gap-x-8 lg:gap-8 xl:gap-14 items-center">

            {/* On mobile each line gets its own font-size so it spans the full
                column width — a single size leaves ragged gaps on the right,
                worst on the short words. `ratio` is the line's measured
                width-to-font-size factor in the display face, so
                fontSize = availableWidth / ratio makes it fill exactly.
                Below lg only; the desktop ramp is untouched. */}
            <h1
              className="hero-headline order-4 lg:order-none mt-6 pt-5 border-t border-black/12 lg:mt-0 lg:pt-0 lg:border-0 font-medium text-[clamp(2.9rem,13.2vw,4.4rem)] lg:text-[clamp(4rem,11vw,12.5rem)] text-left"
              style={{ fontFamily: "var(--font-display)", lineHeight: 0.9 }}
            >
              {[
                { text: "Smarte", orange: false, ratio: 2.616 },
                { text: "Systeme.", orange: true, ratio: 3.314 },
                { text: "Starke", orange: false, ratio: 2.368 },
                { text: "Betriebe.", orange: true, ratio: 3.274 },
              ].map(({ text, orange, ratio }) => (
                <span
                  key={text}
                  className="hero-line block overflow-hidden pb-[0.14em]"
                  style={{ "--line-ratio": ratio } as React.CSSProperties}
                >
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

            {/* Mobile-only eyebrow. Names the offer in the display face before
                the big type arrives, so the top of the screen still says what
                this is once the headline moved to the bottom. Not a heading —
                the h1 below already carries the document outline. */}
            <p
              className="hero-mobile-eyebrow lg:hidden order-1 text-[clamp(1.5rem,7.6vw,2.4rem)] font-bold text-[oklch(12%_0.015_30)]"
              style={{ fontFamily: "var(--font-display)", lineHeight: 0.9 }}
            >
              Systeme für
              <br />
              lokale Betriebe.
            </p>

            {/* Mobile-only: lede + CTA, full width above the proof shot.
                Desktop keeps this pair in .hero-bottom. */}
            <div className="hero-mobile-lede lg:hidden order-2 mt-6 pt-5 border-t border-black/12">
              <p className="text-black/45 text-sm leading-[1.45] max-w-[38ch]">
                Website, Bestellung und Dashboard in einem. Dazu SEO, GEO und Social Media.
              </p>
              <Link
                href="/kontakt"
                className="mt-5 inline-block border border-[oklch(12%_0.015_30)] text-[oklch(12%_0.015_30)] rounded-full px-6 py-2.5 text-sm font-semibold whitespace-nowrap active:bg-[oklch(12%_0.015_30)] active:text-[#FFFCF3] transition-colors"
              >
                Beratung buchen →
              </Link>
            </div>

            {/* Live client site as proof — full column width, sitting between
                the lede and the display type like the plate on a print cover.
                17/16 crops the 680x1190 source at y=640, the first quiet band
                below the client's own hero copy — a shorter crop cuts mid-line
                through "Ein Ort zum Genießen…", a taller one starts eating into
                the display type's room to reach the lower edge.

                Tablets flatten the aspect instead of capping the width: a
                max-w left a 128px gap at 768px and 383px at 1023px, and at
                that ratio the plate also ran 512px tall. Widening the crop
                keeps it flush with the column and the type below. */}
            <a
              href="https://cafe-alte-schule.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-mobile-proof lg:hidden order-3 relative block w-full aspect-[17/16] sm:aspect-[3/2] md:aspect-[2/1] mt-6 rounded-xl overflow-hidden shadow-[0_14px_40px_-12px_rgba(0,0,0,0.32)]"
              aria-label="Café Alte Schule — Live-Website ansehen"
            >
              <Image
                src="/fan-cafe-alte-schule.jpg"
                alt="Café Alte Schule — Live-Website mit Reservierungssystem"
                fill
                sizes="(max-width: 1023px) 100vw, 544px"
                priority
                className="object-cover object-top"
              />
            </a>

            {/* Café preview + reservation badge */}
            <div className="hero-device hidden lg:block lg:flex-shrink-0 relative isolate">

              {/* Soft shadow — animates in behind the devices */}
              <div className="hero-shadow pointer-events-none absolute -z-10 right-[-14%] top-[8%] w-[88%] h-[78%] rounded-full blur-[100px] bg-black/[0.09]" />

              {/* Contact shadow — laptop resting on surface */}
              <div className="pointer-events-none absolute -z-[1] bottom-[10%] left-[6%] w-[74%] h-[18px] rounded-full blur-[18px] bg-black/[0.22]" />

              {/* Laptop */}
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

              {/* Circular reservation badge */}
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
          {/* Mobile renders this pair in .hero-mobile-lede above the fold */}
          <div className="hidden lg:grid md:grid-cols-[1fr_auto] gap-6 items-center border-t border-black/8 py-6">
            <p
              className="text-black/45 leading-relaxed max-w-[54ch]"
              style={{ fontSize: "clamp(0.9rem, 1.35vw, 1.05rem)" }}
            >
              Wir bauen operative Systeme für lokale Betriebe — Website, Bestellung und Dashboard in einem. Dazu SEO, GEO und Social Media.
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
          <div className="grid grid-cols-4 border-t border-black/8 pb-6 md:pb-8">
            {[
              { n: "4", suffix: " Tage", label: "bis Launch" },
              { n: "10+", suffix: "", label: "Projekte" },
              { n: "2", suffix: "", label: "Kontinente" },
              { n: "100%", suffix: "", label: "editierbar" },
            ].map(({ n, suffix, label }, i) => (
              <div key={label} className={`pt-5 pb-2 md:pt-6 ${
                  i > 0 ? "pl-3 border-l border-black/8 md:pl-8" : ""
                }`}>
                <p
                  className="font-black tracking-tight leading-none text-[oklch(12%_0.015_30)]"
                  style={{ fontSize: "clamp(1.15rem, 5vw, 3rem)" }}
                >
                  {n}
                  {suffix && <span className="text-[#FF5500]">{suffix}</span>}
                </p>
                <p className="text-black/28 text-[0.55rem] md:text-[0.6rem] font-semibold tracking-widest uppercase mt-1.5 md:mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
