"use client";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import FadeUp from "@/components/FadeUp";
import RevealText from "@/components/RevealText";

const values = [
  {
    title: "Kein Bullshit",
    desc: "Wir sagen, was wir liefern. Und dann liefern wir es. Keine vagen Versprechen, kein Scope Creep.",
  },
  {
    title: "Schnell oder gar nicht",
    desc: "4 Tage ist kein Marketingversprechen. Es ist unsere Arbeitsweise.",
  },
  {
    title: "Gebaut zum Laufen",
    desc: "Keine Showcase-Projekte. Alles was wir bauen, ist im echten Einsatz getestet.",
  },
];

export default function UeberUns() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FFFCF3] pt-28 md:pt-36 pb-16 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-6">
            Über uns
          </p>
          <RevealText>
            <h1
              className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
            >
              Hinter Deploy.
            </h1>
          </RevealText>
        </div>
      </section>

      {/* Faris */}
      <section className="bg-[#FFFCF3] py-20 md:py-28 border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16 grid md:grid-cols-[0.6fr_1fr] gap-12 md:gap-20 items-start">
          <FadeUp>
            <div className="w-full aspect-[3/4] rounded-2xl bg-[oklch(90%_0.02_50)]" />
          </FadeUp>

          <FadeUp delay={0.1} className="flex flex-col gap-5 md:pt-4">
            <div>
              <h2
                className="font-medium leading-[0.92] text-[oklch(12%_0.015_30)] mb-1.5"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Faris El Mokhtari
              </h2>
              <p className="text-black/32 text-sm">Gründer & Entwickler, Deploy</p>
            </div>

            <p className="text-black/52 text-lg leading-relaxed max-w-[52ch]">
              Ich baue keine Websites als Einzelprodukt. Ich baue Systeme: Reservierungen, Dashboards, Kassensystem-Anbindungen. Die Website ist der Teil davon, den man sieht.
            </p>

            <p className="text-black/40 text-base leading-relaxed max-w-[52ch]">
              Das erste Projekt war ein Reservierungssystem für ein Café um die Ecke. Läuft noch heute live. Lightspeed-Integration, Echtzeit-Auslastung, Speisekarte selbst pflegbar.
            </p>

            <p className="text-black/40 text-base leading-relaxed max-w-[52ch]">
              Mit Gastronomen und lokalen Betrieben arbeite ich, weil man dort direkt sieht, ob etwas funktioniert.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-block border border-[oklch(12%_0.015_30)] text-[oklch(12%_0.015_30)] rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-[oklch(12%_0.015_30)] hover:text-[#FFFCF3] transition-colors"
              >
                Gespräch buchen
              </Link>
              <Link
                href="/portfolio"
                className="inline-block border border-black/12 text-black/40 rounded-full px-6 py-2.5 text-sm hover:border-black/25 hover:text-black/60 transition-colors"
              >
                Projekte ansehen
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#FFFCF3] border-b border-black/8">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 lg:px-16">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.05}>
              <div className="grid md:grid-cols-[0.6fr_1fr] items-start gap-6 md:gap-20 py-10 md:py-12 border-b border-black/8 last:border-b-0">
                <h3
                  className="font-medium leading-[0.95] text-[#FF5500]"
                  style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}
                >
                  {v.title}
                </h3>
                <p className="text-black/48 text-lg leading-relaxed">{v.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
