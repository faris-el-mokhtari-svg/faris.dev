"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const values = [
  { title: "Kein Bullshit", desc: "Wir sagen, was wir liefern. Und dann liefern wir es. Keine vagen Versprechen, kein Scope Creep." },
  { title: "Schnell oder gar nicht", desc: "14 Tage ist kein Marketingversprechen. Es ist unsere Arbeitsweise." },
  { title: "Gebaut zum Laufen", desc: "Keine Showcase-Projekte. Alles was wir bauen, ist im echten Einsatz getestet." },
];

export default function UeberUns() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-6xl mx-auto px-6">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-blue-500 text-xs font-mono tracking-widest uppercase block mb-6">
          Über uns
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
          Hinter Deploy.
        </motion.h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="w-full aspect-[4/5] rounded-2xl bg-slate-100 border border-black/5 flex items-center justify-center">
              <p className="text-slate-300 text-sm">Foto folgt</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center gap-6">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-1">Faris El Mokhtari</h2>
              <p className="text-blue-600 text-sm font-medium">Founder & Entwickler, Deploy</p>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Ich baue digitale Lösungen für Gastronomen und lokale Unternehmen – mit einem Fokus auf Geschwindigkeit, Verlässlichkeit und echten Ergebnissen.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Deploy ist kein Designstudio und keine Kreativagentur. Wir sind Entwickler. Wir schreiben Code, deployen Systeme und messen Ergebnisse.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Das erste Projekt war ein Reservierungssystem für ein lokales Café. Heute läuft es live – mit Lightspeed-Integration, Echtzeit-Auslastung und einem Inhaber, der seine Website selbst pflegt.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/kontakt"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-700 text-white font-semibold transition-colors text-sm">
                Kontakt aufnehmen
              </Link>
              <Link href="/portfolio"
                className="px-6 py-3 rounded-xl border border-black/10 hover:border-blue-200 text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm">
                Projekte ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-8">Wie wir arbeiten.</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <motion.div key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white border border-black/5 hover:border-blue-100 hover:shadow-sm transition-all rounded-2xl p-8">
              <h3 className="text-slate-900 font-bold mb-3">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
