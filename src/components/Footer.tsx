import Link from "next/link";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/kundenstimmen", label: "Kundenstimmen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[oklch(12%_0.015_30)] text-white">
      <div className="max-w-[1366px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-14 md:gap-20 pb-14 border-b border-white/10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1">
              <span className="text-base font-black tracking-[-0.04em] text-[#FF5500] uppercase leading-none">Deploy</span>
              <span className="text-base font-black tracking-[-0.04em] text-[#FF5500]/55 uppercase leading-none">&thinsp;Change</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-[22ch]">
              Digitale Systeme für Gastronomie und lokale KMU im DACH-Raum.
            </p>
            <a
              href="mailto:info@deploy-change.de"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              info@deploy-change.de
            </a>
            <a
              href="tel:+4915151045345"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              +49 151 51045345
            </a>
            <a
              href="https://www.instagram.com/deploy.change/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Instagram ↗
            </a>
          </div>

          <div>
            <p className="text-white/20 text-[0.65rem] font-semibold tracking-widest uppercase mb-7">
              Seiten
            </p>
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/45 text-sm hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/20 text-[0.65rem] font-semibold tracking-widest uppercase mb-7">
              Partner
            </p>
            <a
              href="https://www.getpacked.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 text-sm hover:text-white transition-colors block mb-3"
            >
              GetPacked
            </a>
            <p className="text-white/22 text-xs leading-relaxed max-w-[24ch]">
              SaaS-Plattform für Bäckereien, Metzgereien und Direktvertriebler.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/18 text-xs">
            © {new Date().getFullYear()} Faris El Mokhtari — Deploy Web Development
          </p>
          <div className="flex gap-6 text-[0.7rem] text-white/18">
            <Link href="/impressum" className="hover:text-white/40 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white/40 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
