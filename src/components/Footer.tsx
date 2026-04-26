import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white mt-20">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <span>© {new Date().getFullYear()} Faris El Mokhtari – Webentwicklung</span>
        <div className="flex gap-6">
          <Link href="/impressum" className="hover:text-slate-800 transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-slate-800 transition-colors">Datenschutz</Link>
          <Link href="/kontakt" className="hover:text-slate-800 transition-colors">Kontakt</Link>
        </div>
      </div>
    </footer>
  );
}
