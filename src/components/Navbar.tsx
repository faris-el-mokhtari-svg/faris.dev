"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/kundenstimmen", label: "Kundenstimmen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomeTop = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      (scrolled || pathname !== "/") ? "bg-white/90 backdrop-blur-md border-b border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Monogram mark: DC reversed out of a solid orange punch, so the
            brand colour carries a surface here rather than just the letters.
            The full name lives in the sr-only span — the tile is decorative.
            The negative margin bites 14px into the container's 24px gutter so
            the mark sits closer to the page edge than the nav's own rhythm
            allows, while links and CTA keep their inset. */}
        <Link href="/" className="group inline-flex items-center gap-2.5 -ml-3.5">
          <span className="grid place-items-center flex-none w-[2.375rem] h-[2.375rem] lg:w-[3.25rem] lg:h-[3.25rem] rounded-[11px] lg:rounded-[15px] bg-[#FF5500] transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[oklch(12%_0.015_30)]">
            <span
              className="font-display font-black text-2xl lg:text-[2rem] leading-none tracking-[-0.03em] text-[#FFFCF3] translate-y-[0.5px]"
              aria-hidden="true"
            >
              DC
            </span>
          </span>
          {/* Desktop only: the mark grows by gaining the wordmark rather than
              by scaling further. Phones keep the bare punch. */}
          <span
            className="hidden lg:grid font-display font-black uppercase text-[1.375rem] leading-[0.82] tracking-[-0.02em]"
            aria-hidden="true"
          >
            <span className="text-[oklch(12%_0.015_30)]">Deploy</span>
            <span className="text-[oklch(12%_0.015_30)]/40">Change</span>
          </span>
          <span className="sr-only">Deploy Change</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`text-sm transition-colors ${
                pathname === l.href
                  ? "text-[#FF5500] font-medium"
                  : "text-black/40 hover:text-black"
              }`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/kontakt"
            className={`text-sm font-semibold px-5 py-2.5 rounded-full border-2 transition-colors ${
              "border-black text-black hover:bg-black hover:text-white"
            }`}>
            Beratung buchen
          </Link>
        </div>

        <button className="md:hidden text-black/50 hover:text-black" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
            className="md:hidden bg-white border-b border-black/5 px-6 py-6 flex flex-col gap-5"
          >
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className={`text-sm transition-colors ${pathname === l.href ? "text-[#FF5500] font-medium" : "text-black/50 hover:text-black"}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/kontakt" onClick={() => setOpen(false)}
              className="text-sm font-semibold px-5 py-2.5 rounded-full border-2 border-black text-black text-center hover:bg-black hover:text-white transition-colors">
              Beratung buchen
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
