"use client";
import ContactSection from "@/components/ContactSection";

const services = [
  {
    title: "Reservierungssysteme",
    desc: "Ihr verwaltet alle Buchungen in Echtzeit – mit Live-Auslastung, Walk-in-Erfassung und Tagesübersicht pro Schicht.",
    features: ["Live-Auslastung pro Schicht", "Walk-in Erfassung", "Tischplan-Verwaltung", "Gästehistorie"],
  },
  {
    title: "Menü & Öffnungszeiten Management",
    desc: "Speisekarte und Öffnungszeiten lassen sich ohne technisches Wissen im Admin-Bereich anpassen.",
    features: ["No-Code Admin-Interface", "Menü-Editor", "Schicht- & Öffnungszeiten", "Sofort-Aktualisierung"],
  },
  {
    title: "Modernes Webdesign",
    desc: "Wir entwickeln gemeinsam auf Basis deiner Vorstellung ein modernes und passendes Design.",
    features: ["Custom Design", "Mobile-First", "SEO-optimiert", "Schnelle Ladezeiten"],
  },
];

const comparison = [
  { feature: "Branchenspezifische Software", deploy: true, others: false },
  { feature: "Admin-Tool mitgeliefert", deploy: true, others: false },
  { feature: "Website + Backend", deploy: true, others: true },
  { feature: "Echtzeit-Bestandstracking", deploy: true, others: false },
  { feature: "Reservierungssystem mit Live-Auslastung", deploy: true, others: false },
];

export default function Leistungen() {
  return (
    <>
      <section className="bg-[#FF5500] pt-24 md:pt-28 pb-16 md:pb-20">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12">
          <div className="flex items-start justify-between mb-12 md:mb-14">
            <h1 className="text-white text-6xl md:text-8xl leading-none font-bold">
              Unsere Leistungen
            </h1>
            <span className="text-white text-7xl md:text-8xl leading-none">↙</span>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {services.map((s) => (
              <div key={s.title} className="border border-white/80 p-8 md:p-10 min-h-[560px] flex flex-col">
                <h2 className="text-white text-6xl leading-[0.95] mb-auto">{s.title}</h2>
                <p className="text-white text-4xl leading-tight">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FF5500] pb-16 md:pb-24">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12">
          <div className="border border-white/80 overflow-hidden">
            <div className="grid grid-cols-3 bg-[#FFFCF3] border-b border-white/80">
              <div className="p-5 text-4xl" />
              <div className="p-5 text-center text-[#FF5500] text-5xl border-l border-white/80">Deploy</div>
              <div className="p-5 text-center text-[#FF5500] text-5xl border-l border-white/80">Lokale Webagenturen</div>
            </div>

            {comparison.map((row) => (
              <div key={row.feature} className="grid grid-cols-3 border-b border-white/80 last:border-b-0">
                <div className="p-5 text-white text-5xl leading-tight">{row.feature}</div>
                <div className="p-5 border-l border-white/80 flex justify-center items-center">
                  {row.deploy ? (
                    <span className="w-16 h-16 rounded-full bg-[#FFFCF3] text-[#FF5500] text-5xl flex items-center justify-center font-bold">✓</span>
                  ) : (
                    <span className="w-16 h-16 rounded-full bg-black text-white text-5xl flex items-center justify-center font-bold">✕</span>
                  )}
                </div>
                <div className="p-5 border-l border-white/80 flex justify-center items-center">
                  {row.others ? (
                    <span className="w-16 h-16 rounded-full bg-[#FFFCF3] text-[#FF5500] text-5xl flex items-center justify-center font-bold">✓</span>
                  ) : (
                    <span className="w-16 h-16 rounded-full bg-black text-white text-5xl flex items-center justify-center font-bold">✕</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFCF3] py-16 md:py-20">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-start">
          <h2 className="text-[#FF5500] text-8xl md:text-8xl leading-[0.9] font-semibold">
            Echte
            <br />
            messbare
            <br />
            Wirkung
          </h2>
          <div className="bg-[#FF5500] rounded-[2.5rem] min-h-[680px] p-10 md:p-12 text-white flex flex-col">
            <p className="text-[10rem] md:text-[12rem] leading-none font-bold">100%</p>
            <p className="mt-auto text-6xl leading-[0.95]">
              der Kunden konnten spürbare Verbesserungen im Betrieb vermerken.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFCF3] pb-16 md:pb-20">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-[2.5rem] border border-[#FF5500] p-10 md:p-12 flex flex-col justify-between min-h-[640px]">
            <p className="text-[#FF5500] text-[10rem] md:text-[12rem] leading-none font-bold">64%</p>
            <p className="text-[#FF5500] text-7xl leading-[0.95]">mehr Besucher auf deiner Website .</p>
          </div>
          <div
            className="rounded-[2.5rem] bg-cover bg-center min-h-[640px]"
            style={{ backgroundImage: "url('/bg/teaser-square.jpg')" }}
          />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
