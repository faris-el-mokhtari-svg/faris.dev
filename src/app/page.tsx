"use client";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

const featureRows = [
  { title: "Schnelle Umsetzung", desc: "Kein langes warten - eure Website geht  in 14 Tagen live." },
  { title: "Individuelle Lösungen", desc: "Strategie und Umsetzung – fokussiert auf Ihre Geschäftsziele." },
  { title: "Nachgewiesene Wirkung", desc: "Messbare Ergebnisse in Wachstum, Effizienz und Rentabilität." },
];

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-screen overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#d7dccf] via-[#ffd2b0] to-[#c8cec5]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#ff7a00]/90 via-[#ff8a2c]/55 to-transparent" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 scale-110"
          style={{ backgroundImage: "url('/bg/teaser-square.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/15" />

        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16 min-h-screen pt-24 pb-10 flex flex-col">
          <p className="text-white/90 text-lg">Deploy - Web Devolpment</p>

          <h2 className="absolute top-20 right-5 md:right-12 text-white text-6xl md:text-8xl leading-[0.95] font-medium text-right">
            Smarte
            <br />
            Strategien
          </h2>

          <div className="mt-28 md:mt-36">
            <h1 className="text-[6rem] md:text-[12rem] leading-none font-black tracking-tight bg-gradient-to-r from-[#5B5BFF] to-[#E27CF7] bg-clip-text text-transparent">
              Deploy
            </h1>
          </div>

          <div className="mt-auto grid md:grid-cols-2 gap-8 items-end">
            <h3 className="text-white text-7xl md:text-8xl leading-[0.9] font-medium">
              Starkes
              <br />
              Business
            </h3>
            <div className="justify-self-end max-w-md text-right">
              <p className="text-white text-3xl leading-tight mb-8">
                Wir helfen Unternehmen, effizient zu werden und unsere lösungen schnell und sicher zu nutzen.
              </p>
              <Link
                href="/kontakt"
                className="inline-block border border-white/80 text-white rounded-full px-12 py-4 text-3xl hover:bg-white/15 transition-colors"
              >
                BERATUNG BUCHEN
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFCF3] border-y border-black/35">
        <div className="max-w-[1366px] mx-auto divide-y divide-black/35">
          {featureRows.map((row) => (
            <div key={row.title} className="grid md:grid-cols-2 items-center gap-6 px-6 md:px-12 py-16 md:py-20">
              <h3 className="text-[#FF5500] text-5xl md:text-6xl">{row.title}</h3>
              <p className="text-black text-4xl leading-tight">{row.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFFCF3]">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <p className="text-black text-4xl md:text-[2.5rem] leading-tight max-w-xl">
              Ob Gastronomie, Handwerksbetrieb oder oder Kleinunternehmen, wir bieten Lösungen, die Ihnen hilft, sich
              auf das Wesentliche zu konzentrieren.
            </p>
            <div className="md:justify-self-end w-full max-w-[640px] aspect-square rounded-[2.5rem] bg-cover bg-center" style={{ backgroundImage: "url('/bg/teaser-square.jpg')" }} />
          </div>
          <h2 className="mt-16 md:mt-20 text-[#FF5500] text-6xl md:text-7xl leading-[0.95] max-w-4xl">
            Unser Team arbeitet mit Ihnen von der Konzeption bis zur Ausführung.
          </h2>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
