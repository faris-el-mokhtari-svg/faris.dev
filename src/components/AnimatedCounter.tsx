"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  to: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({ to, suffix = "", prefix = "", label, duration = 1.8 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = numRef.current;
    if (!el) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: to,
      duration,
      ease: "power2.out",
      onUpdate() {
        el.textContent = Math.round(obj.val).toString();
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 82%",
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col">
      <div
        className="text-[#FF5500] font-black tracking-tight leading-none"
        style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
      >
        {prefix}<span ref={numRef}>0</span>{suffix}
      </div>
      <p className="text-black/40 text-xs font-semibold tracking-widest uppercase mt-3 leading-snug max-w-[12ch]">
        {label}
      </p>
    </div>
  );
}
