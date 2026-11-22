"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// ponytail: home anchors until the /arbeiten and /studio pages exist (phase 2).
const links = [
  { href: "/#arbeiten", label: "Arbeiten" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#studio", label: "Studio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/85 backdrop-blur-md border-b border-white/10" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:px-10">
        <Link href="/" className="group flex items-center gap-3" aria-label="Deploy Change, Startseite">
          <span className="grid h-9 w-9 place-items-center bg-orange text-ink font-semibold tracking-tight transition-colors group-hover:bg-paper">
            DC
          </span>
          <span className="label hidden text-paper sm:block">Deploy Change</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Hauptnavigation">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="label text-paper/60 transition-colors hover:text-paper">
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="label bg-orange px-4 py-2.5 text-ink transition-colors hover:bg-paper"
          >
            Projekt anfragen
          </Link>
        </nav>

        <button
          type="button"
          className="label text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Schließen" : "Menü"}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="flex flex-col border-t border-white/10 px-4 pb-8 pt-4 md:hidden" aria-label="Mobile Navigation">
          {[...links, { href: "/kontakt", label: "Kontakt" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-3xl font-medium tracking-tight text-paper"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
