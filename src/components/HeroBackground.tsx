"use client";
import { Component as EtherealShadow } from "@/components/ui/etheral-shadow";

export default function HeroBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-[90vh] bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(80, 80, 80, 0.9)"
          animation={{ scale: 40, speed: 60 }}
          noise={{ opacity: 0.15, scale: 1.5 }}
          sizing="fill"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
