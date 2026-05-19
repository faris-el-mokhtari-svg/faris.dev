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
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-xl font-black tracking-[-0.04em] uppercase leading-none text-[#FF5500]">Deploy</span>
          <span className="text-xl font-black tracking-[-0.04em] uppercase leading-none text-[#FF5500]/60">&thinsp;Change</span>
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
