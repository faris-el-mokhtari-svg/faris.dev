"use client";
import ContactSection from "@/components/ContactSection";

export default function Kundenstimmen() {
  return (
    <>
      <section className="bg-[#FFFCF3] pt-24 md:pt-28 pb-16">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12">
          <div className="flex items-start justify-between mb-10">
            <h1 className="text-[#FF5500] text-6xl md:text-8xl leading-none font-bold">Was unsere Kunden sagen</h1>
            <span className="text-[#FF5500] text-7xl md:text-8xl leading-none">↙</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="border border-[#FF5500] p-8 md:p-10 min-h-[540px] flex flex-col">
              <p className="text-[#FF5500] text-6xl leading-[1.15]">
                „Deploy hat es uns ermöglicht eine professionelle Website, die auf unseren betrieb zugeschnitten ist zu
                erstellen, ganz unkompliziert mit toller Beratung .”
              </p>
              <p className="mt-auto text-[#FF5500] text-5xl font-bold">Arne Linke, Gastronom</p>
            </div>
            <div className="rounded-none md:rounded-[0.25rem] overflow-hidden border border-black/10">
              <img src="/img/cafe-alte-schule.jpg" alt="Café Alte Schule Website" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFCF3] pb-16 md:pb-20">
        <div className="max-w-[1366px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-between">
            <h2 className="text-[#FF5500] text-7xl md:text-8xl leading-[0.95] font-bold mb-10">
              Unternehmen
              <br />
              jeder Branche
              <br />
              vertrauen uns
            </h2>
            <p className="text-black text-5xl leading-tight max-w-2xl">
              Wir arbeiten mit Unternehmen verschiedenster Branchen und Größen – von schnell wachsenden Start-ups bis
              zu etablierten Unternehmen.
            </p>
          </div>
          <div className="relative min-h-[640px]">
            <div className="absolute right-32 top-10 w-[380px] h-[380px] rounded-full bg-[#FBD9C5] flex items-center justify-center text-5xl">Gastronomien</div>
            <div className="absolute right-2 top-24 w-[260px] h-[260px] rounded-full bg-[#FF5500] flex items-center justify-center text-5xl">Kleinunternehmen</div>
            <div className="absolute right-24 top-84 w-[230px] h-[230px] rounded-full bg-[#FFC93C] flex items-center justify-center text-5xl">E-Commerce</div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
