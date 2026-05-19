"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Erstgespräch",
    desc: "30 Minuten. Ich verstehe Ihr Geschäft, Ihre Kunden und was Sie wirklich brauchen.",
  },
  {
    num: "02",
    title: "Konzept & Angebot",
    desc: "Klare Beschreibung des Systems, das wir bauen. Kein Fachjargon, kein Kleingedrucktes.",
  },
  {
    num: "03",
    title: "Umsetzung",
    desc: "In 4 Tagen live. Sie bekommen wöchentliche Updates — kein Rätselraten über den Fortschritt.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "Einführung, Schulung, laufende Unterstützung. Das System ist Ihres — und Sie können es selbst bedienen.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll(".process-card");
      const nums = containerRef.current?.querySelectorAll(".process-num");
      if (!cards?.length || !nums?.length) return;

      // Numbers reveal upward from clipped container
      gsap.from(nums, {
        yPercent: 105,
        duration: 0.95,
        stagger: 0.11,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // Cards slide up with stagger after number reveal
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 72%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-[#FFFCF3] border-b border-black/8">
      <div ref={containerRef} className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="flex items-end justify-between mb-0 pb-10 border-b border-black/8">
          <div>
            <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-4">Wie es läuft</p>
            <div className="overflow-hidden">
              <h2
                className="text-[oklch(12%_0.015_30)] font-medium leading-[0.9]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
              >
                Von Null zu Live.
              </h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="process-card flex flex-col gap-4 border-b md:border-b-0 md:border-r border-black/8 last:border-r-0 pt-10 pb-10 md:pr-8 md:first:pl-0 md:pl-8"
            >
              <div className="overflow-hidden">
                <span
                  className="process-num block text-[#FF5500] font-black leading-none tracking-tight"
                  style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
                >
                  {step.num}
                </span>
              </div>
              <h3
                className="text-[oklch(12%_0.015_30)] font-medium leading-tight"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
              >
                {step.title}
              </h3>
              <p className="text-black/40 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
