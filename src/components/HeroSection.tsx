"use client";
import Link from "next/link";
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
      .from(".hero-badge", { opacity: 0, scale: 0.88, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .from(".hero-shadow", { opacity: 0, x: 24, duration: 2.0, ease: "power2.out" }, "-=0.9")
      .from(".hero-bottom", { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" }, "-=1.6");
  }, { scope: heroRef });

  return (
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
  );
}
