import Link from "next/link";

const pages = [
  { href: "/#arbeiten", label: "Arbeiten" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#studio", label: "Studio" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-4 pt-16 md:px-10 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="label text-paper/40">{"// "}Neues Projekt</p>
            <a
              href="mailto:info@deploy-change.de"
              className="mt-4 block text-3xl font-medium tracking-tight transition-colors hover:text-orange md:text-5xl"
            >
              info@deploy-change.de
            </a>
            <a href="tel:+4915151045345" className="mt-3 block text-paper/60 transition-colors hover:text-paper">
              +49 151 51045345
            </a>
          </div>

          <div>
            <p className="label text-paper/40">{"// "}Seiten</p>
            <ul className="mt-4 space-y-2">
              {pages.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/70 transition-colors hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-paper/40">{"// "}Studio</p>
            <address className="mt-4 not-italic text-paper/70">
              Holm 17
              <br />
              24107 Kiel
            </address>
            <a
              href="https://www.instagram.com/deploy.change/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-paper/70 transition-colors hover:text-paper"
            >
              Instagram ↗
            </a>
          </div>
        </div>

        {/* Wordmark sized to the container width, cropped at the baseline. */}
        <p
          aria-hidden="true"
          className="mt-20 select-none whitespace-nowrap font-semibold leading-[0.75] tracking-[-0.06em] text-paper"
          style={{ fontSize: "clamp(3rem, 14.2vw, 15rem)" }}
        >
          Deploy Change<span className="text-orange">.</span>
        </p>

        <div className="label flex flex-col gap-3 border-t border-white/10 py-6 text-paper/40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Deploy Web Development · Kiel 54.32°N</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-paper">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-paper">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
