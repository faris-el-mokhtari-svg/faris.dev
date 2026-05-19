"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function RevealText({
  children,
  delay = 0,
  wrapClass,
}: {
  children: React.ReactNode;
  delay?: number;
  wrapClass?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = wrapRef.current?.children[0];
      if (!el) return;
      // fromTo: start state applied before first paint (useGSAP = layout effect)
      gsap.fromTo(
        el,
        { yPercent: 105 },
        {
          yPercent: 0,
          duration: 1.05,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 87%",
            once: true,
          },
        }
      );
    },
    { scope: wrapRef }
  );

  return (
    <div
      ref={wrapRef}
      className={`overflow-hidden pb-6 -mb-6${wrapClass ? ` ${wrapClass}` : ""}`}
    >
      {children}
    </div>
  );
}
