import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/8 mt-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-black/30 tracking-widest uppercase mr-1">Deploy</span>
            <span className="text-base font-black tracking-[-0.04em] text-[#FF5500] uppercase">Web Development</span>
          </div>
          <p className="text-black/30 text-xs mt-1">Webentwicklung für Gastronomie & lokale KMU</p>
        </div>
        <div className="flex gap-8 text-sm text-black/40">
          <Link href="/leistungen" className="hover:text-black transition-colors">Leistungen</Link>
          <Link href="/portfolio" className="hover:text-black transition-colors">Portfolio</Link>
          <Link href="/kundenstimmen" className="hover:text-black transition-colors">Kundenstimmen</Link>
          <Link href="/kontakt" className="hover:text-black transition-colors">Kontakt</Link>
        </div>
        <p className="text-black/20 text-xs">© {new Date().getFullYear()} Faris El Mokhtari</p>
      </div>
    </footer>
  );
}
