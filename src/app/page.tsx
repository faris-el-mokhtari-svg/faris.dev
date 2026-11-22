import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { work } from "@/lib/work";

export const metadata: Metadata = {
  title: { absolute: "Deploy Change – Studio für Software & Webdesign aus Kiel" },
  keywords: ["Softwareentwicklung Kiel", "Webdesign Kiel", "Individualsoftware", "Admin-Dashboard", "KI-Integration", "Webdesign Agentur", "Deploy Change"],
  description: "Studio für Software und Webdesign aus Kiel: interne Systeme, KI-Anwendungen und Websites auf hohem Niveau. Von Botswana bis zur Bäckerei um die Ecke.",
  alternates: {
    canonical: "https://deploy-change.de",
    languages: { de: "https://deploy-change.de", "x-default": "https://deploy-change.de" },
  },
  openGraph: { url: "https://deploy-change.de" },
};

const wrap = "mx-auto max-w-[1600px] px-4 md:px-10";

const clients = ["Safari Specialists", "Café Alte Schule", "Schoene Brot", "ShaYo", "thinc!", "Bachbäcker"];

const safariFacts = [
  { n: "98", l: "Camps mit eigener Seite" },
  { n: "32", l: "Reiserouten, filterbar" },
  { n: "5/5", l: "TripAdvisor, 111 Bewertungen" },
  { n: "1", l: "Admin für das Team in Maun" },
];

const services = [
  {
    n: "01",
    title: "Software & interne Systeme",
    desc: "Admin-Bereiche, Dashboards und Bestellsysteme, die genau zu euren Abläufen passen. Ein System statt fünf Tabellen, angebunden an Kasse, Shop und Kalender.",
    tags: ["Admin & Dashboards", "Bestellsysteme", "Schnittstellen", "Kassen-Anbindung"],
    visual: "admin",
  },
  {
    n: "02",
    title: "KI-Anwendungen",
    desc: "KI dort, wo sie Stunden spart: Briefe, die sich aus dem Diktat schreiben, Anfragen, die sich selbst sortieren, Auswertungen auf Knopfdruck. Datenschutz von Anfang an mitgedacht.",
    tags: ["Dokumente & Briefe", "Automatisierung", "Agenten", "DSGVO"],
    visual: "flow",
  },
  {
    n: "03",
    title: "Webdesign",
    desc: "Websites, die nach eurer Marke aussehen und nicht nach Baukasten. Schnell, gut zu finden bei Google und in KI-Antworten, und von eurem Team selbst zu pflegen.",
    tags: ["Markenauftritt", "Eigenes CMS", "SEO", "GEO"],
    visual: "web",
  },
] as const;

const quotes = [
  {
    text: "Deploy hat es uns ermöglicht, eine professionelle Website zu erstellen, die auf unseren Betrieb zugeschnitten ist — ganz unkompliziert, mit toller Beratung.",
    name: "Arne Linke",
    role: "Café Alte Schule",
    img: "/arne-linke.jpg",
  },
  {
    text: "Ich wollte, dass Leute uns finden, wenn sie in Kiel nach einem Barbershop suchen. Genau das passiert jetzt.",
    name: "Shayan Borumand",
    role: "ShaYo Barber Shop",
    img: "/shayan-borumand.jpg",
  },
];

function SectionHead({ n, label, title }: { n: string; label: string; title: string }) {
  return (
    <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
      <h2 className="max-w-[16ch] text-5xl font-medium leading-[0.95] tracking-[-0.045em] md:text-7xl">{title}</h2>
      <p className="label text-paper/50">
        {"// "}{n} — {label}
      </p>
    </div>
  );
}

// The arztbrief pipeline, drawn in the studio's diagram colour.
function FlowDiagram() {
  const steps = ["Diktat", "Transkript", "KI-Entwurf", "Ärztin prüft", "Arztbrief"];
  return (
    <div className="flex h-full flex-col justify-center gap-0 bg-[#141412] p-6 md:p-10" role="img" aria-label="Ablauf: Diktat, Transkript, KI-Entwurf, Prüfung durch die Ärztin, fertiger Arztbrief">
      {steps.map((s, i) => (
        <div key={s} className="flex flex-col items-start">
          <div
            className={`label flex w-full items-center justify-between border px-4 py-3 ${
              i === steps.length - 1 ? "border-orange bg-orange text-ink" : "border-orange/50 text-paper"
            }`}
          >
            <span>{s}</span>
            <span className={i === steps.length - 1 ? "text-ink" : "text-orange"}>0{i + 1}</span>
          </div>
          {i < steps.length - 1 && <span aria-hidden="true" className="ml-6 h-5 w-px bg-orange" />}
        </div>
      ))}
    </div>
  );
}

function ServiceVisual({ kind }: { kind: (typeof services)[number]["visual"] }) {
  if (kind === "flow") return <FlowDiagram />;
  const src = kind === "admin" ? "/work/systems/schoene-admin.jpg" : "/cafe-alte-schule-preview.png";
  const alt = kind === "admin" ? "Bestell-Admin von Schoene Brot: Sortiment mit Saisonbrot-Tausch" : "Website von Café Alte Schule";
  return (
    <div className="relative h-full min-h-64">
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover object-top" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36">
        <div className={wrap}>
          <p className="label text-paper/50">Studio für Software & Webdesign — Kiel, 54.32°N</p>
          <h1
            className="rise mt-6 font-medium leading-[0.92] tracking-[-0.055em]"
            style={{ fontSize: "clamp(2.9rem, 7.6vw, 9rem)" }}
          >
            <span>Software, die arbeitet.</span>
            <span className="text-paper/40">
              Websites, die wirken<span className="text-orange">.</span>
            </span>
          </h1>

          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:items-end">
            <p className="max-w-[46ch] text-lg leading-relaxed text-paper/70">
              Wir bauen interne Systeme, KI-Anwendungen und Websites, die nach Marke aussehen. Für Reiseveranstalter in Botswana genauso wie für die Bäckerei um die Ecke.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/kontakt" className="label group flex items-center gap-10 bg-orange py-4 pl-6 pr-5 text-ink transition-colors hover:bg-paper">
                Projekt anfragen
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link href="#arbeiten" className="label border border-white/20 px-6 py-4 text-paper transition-colors hover:border-paper">
                Arbeiten ansehen
              </Link>
            </div>
          </div>
        </div>

        {/* Showreel: screen capture of the Safari Specialists hero we built. */}
        <figure className="mt-14 md:mt-20">
          <div className="relative aspect-video w-full overflow-hidden bg-[#141412]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/work/safari/hero.mp4"
              poster="/work/safari/hero.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Startseite von Safari Specialists mit Leopard im Hintergrundvideo"
            />
          </div>
          <figcaption className={`${wrap} label flex flex-wrap justify-between gap-2 py-4 text-paper/50`}>
            <span>{"// "}Ausgewählte Arbeit — Safari Specialists, Botswana</span>
            <a href="#safari" className="text-paper transition-colors hover:text-orange">Zum Projekt ↓</a>
          </figcaption>
        </figure>
      </section>

      {/* ─── Clients ──────────────────────────────────────────────── */}
      <section aria-label="Kunden" className="border-y border-white/10">
        <ul className={`${wrap} flex flex-wrap items-center gap-x-10 gap-y-3 py-6 text-lg font-medium tracking-tight text-paper/40 md:justify-between`}>
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {/* ─── Featured case: Safari Specialists ────────────────────── */}
      <section id="safari" className="scroll-mt-16 py-24 md:py-32">
        <div className={wrap}>
          <p className="label text-orange">{"// "}01 — Featured Case</p>
          <h2
            className="mt-6 font-medium leading-[0.85] tracking-[-0.06em]"
            style={{ fontSize: "clamp(3.2rem, 12vw, 13rem)" }}
          >
            Safari Specialists
          </h2>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-6 md:grid-cols-4">
            {[
              ["Kunde", "Safari Specialists, Maun"],
              ["Ort", "Botswana"],
              ["Leistung", "Website, Admin, Karte"],
              ["Stack", "Next.js, Supabase"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="label text-paper/40">{k}</dt>
                <dd className="mt-1 text-paper">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 max-w-[60ch] text-xl leading-relaxed text-paper/80 md:text-2xl">
            Ein Reiseveranstalter, 98 Camps und eine Landschaft, die sich nicht mit Stockfotos erzählen lässt. Wir haben die Seite neu gebaut: mit Hintergrundvideos aus den Camps, einer Karte aller Regionen, Reiserouten zum Filtern und einem Admin, mit dem das Team in Maun alles selbst pflegt.
          </p>

          {/* Mosaic */}
          <div className="mt-14 grid gap-3 md:grid-cols-3 md:grid-rows-2">
            <div className="relative aspect-[16/10] md:col-span-2 md:aspect-auto md:row-span-2 md:min-h-[36rem]">
              <Image src="/work/safari/collection.jpg" alt="Safari Collection: Reiserouten als Karten über einem Luftbild des Okavango-Deltas" fill sizes="(min-width: 768px) 66vw, 100vw" className="object-cover object-top" />
            </div>
            <div className="relative aspect-[16/10]">
              <Image src="/work/safari/areas.jpg" alt="Seite Areas to Visit mit interaktiver Karte von Botswana" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-top" />
            </div>
            <div className="relative aspect-[16/10]">
              <Image src="/work/safari/camps.jpg" alt="Seite Camps & Lodges mit Filtern nach Region und Reisestil" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-top" />
            </div>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-[1fr_2fr]">
            <div className="relative aspect-[9/16] max-h-[40rem] overflow-hidden bg-[#141412]">
              <Image src="/work/safari/mobile.jpg" alt="Safari Specialists auf dem Smartphone" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-top" />
            </div>
            <div className="flex flex-col justify-between gap-10 bg-orange p-6 text-ink md:p-10">
              <blockquote lang="en" className="text-2xl font-medium leading-tight tracking-[-0.02em] md:text-3xl">
                “Faris understood our business before he touched the design. Our trips are now grouped the way guests actually think about them, and our team in Maun can update everything themselves.”
              </blockquote>
              <div className="flex items-center gap-4">
                <Image src="/erica-safari-specialists.jpg" alt="" width={56} height={56} className="h-14 w-14 object-cover" />
                <p className="label">Erica · Safari Specialists, Maun</p>
              </div>
            </div>
          </div>

          <dl className="mt-3 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {safariFacts.map((f) => (
              <div key={f.l} className="flex flex-col-reverse gap-1 bg-ink p-6">
                <dt className="label text-paper/50">{f.l}</dt>
                <dd className="text-5xl font-medium tracking-[-0.04em] text-paper md:text-6xl">{f.n}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────────── */}
      <section id="leistungen" className="scroll-mt-16 border-t border-white/10 py-24 md:py-32">
        <div className={wrap}>
          <SectionHead n="02" label="Leistungen" title="Was wir bauen." />
          {services.map((s) => (
            <article key={s.n} className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[4rem_1fr_minmax(0,40%)] md:gap-10 md:py-14">
              <p className="label text-orange">{s.n}</p>
              <div>
                <h3 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">{s.title}</h3>
                <p className="mt-5 max-w-[52ch] leading-relaxed text-paper/65">{s.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="label border border-white/15 px-3 py-1.5 text-paper/60">{t}</li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden md:min-h-72">
                <ServiceVisual kind={s.visual} />
              </div>
            </article>
          ))}
          <p className="label mt-8 text-paper/50">+ Bewegtbild: Werbefilme und Reels drehen und schneiden wir auch.</p>
        </div>
      </section>

      {/* ─── Work index ───────────────────────────────────────────── */}
      <section id="arbeiten" className="scroll-mt-16 border-t border-white/10 py-24 md:py-32">
        <div className={wrap}>
          <SectionHead n="03" label="Arbeiten" title="Ausgewählte Projekte." />
          <ol>
            {work.map((w, i) => {
              const row = (
                <>
                  <span className="label text-paper/40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-2xl font-medium tracking-[-0.03em] transition-colors group-hover:text-orange md:text-4xl">{w.title}</span>
                  <span className="hidden text-paper/60 md:block">{w.what}</span>
                  <span className="label hidden text-paper/40 md:block">{w.sector}</span>
                  <span aria-hidden="true" className="relative h-14 w-20 overflow-hidden bg-[#141412] md:absolute md:right-0 md:top-1/2 md:h-40 md:w-64 md:-translate-y-1/2 md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
                    {w.image ? (
                      <Image src={w.image} alt="" fill sizes="16rem" className="object-cover object-top" />
                    ) : (
                      <span className="label absolute inset-0 grid place-items-center bg-orange text-ink">{w.title}</span>
                    )}
                  </span>
                </>
              );
              const cls = "group relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-white/10 py-5 md:grid-cols-[4rem_1.2fr_1fr_12rem] md:py-7";
              return (
                <li key={w.slug}>
                  {w.slug === "safari-specialists" ? (
                    <a href="#safari" className={cls}>{row}</a>
                  ) : w.href ? (
                    <a href={w.href} target="_blank" rel="noopener noreferrer" className={cls}>{row}</a>
                  ) : (
                    <div className={cls}>{row}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ─── Voices ───────────────────────────────────────────────── */}
      <section aria-label="Kundenstimmen" className="border-t border-white/10">
        <div className={`${wrap} grid md:grid-cols-2`}>
          {quotes.map((q, i) => (
            <figure key={q.name} className={`flex flex-col justify-between gap-10 py-16 md:py-24 ${i === 0 ? "md:border-r md:border-white/10 md:pr-10" : "border-t border-white/10 md:border-t-0 md:pl-10"}`}>
              <blockquote className="text-2xl font-medium leading-snug tracking-[-0.02em] md:text-3xl">„{q.text}“</blockquote>
              <figcaption className="flex items-center gap-4">
                <Image src={q.img} alt="" width={56} height={56} className="h-14 w-14 object-cover grayscale" />
                <span className="label text-paper/60">
                  {q.name} · {q.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ─── Studio ───────────────────────────────────────────────── */}
      <section id="studio" className="scroll-mt-16 border-t border-white/10 py-24 md:py-32">
        <div className={wrap}>
          <SectionHead n="04" label="Studio" title="Ihr sprecht mit denen, die bauen." />
          <div className="mt-12 grid gap-3 md:grid-cols-4 md:grid-rows-2">
            <div className="relative aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto">
              <Image src="/studio/team-2.jpg" alt="Das Team an den Bildschirmen, im Vordergrund Code" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/studio/team-1.jpg" alt="Demo einer Anwendung auf der Apple Vision Pro" fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/studio/team-3.jpg" alt="Zwei Teammitglieder besprechen etwas am Laptop" fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] md:col-span-2 md:aspect-auto md:min-h-72">
              <Image src="/studio/team-4.jpg" alt="Gründer Faris El Mokhtari arbeitet im Café am Laptop" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-[50%_30%]" />
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <p className="label text-paper/50">Gegründet von Faris El Mokhtari</p>
            <p className="max-w-[52ch] text-lg leading-relaxed text-paper/70">
              Deploy Change ist ein Studio aus Kiel. Design, Entwicklung und KI unter einem Dach, ohne Übergaben zwischen Agenturen. Wir arbeiten für Reiseveranstalter, Arztpraxen, Bäckereien, Cafés und Barbershops und entwickeln eigene Produkte. Klein genug für kurze Wege, erfahren genug für Systeme, die jeden Tag laufen.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
