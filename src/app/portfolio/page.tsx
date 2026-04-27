"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-6xl mx-auto px-6">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-blue-500 text-xs font-mono tracking-widest uppercase block mb-6">
          Portfolio
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
          Projekte, die laufen.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-slate-500 text-lg max-w-xl">
          Keine Mockups. Echte Projekte, live im Einsatz.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm"
        >
          <div className="w-full h-72 md:h-96 bg-slate-50 border-b border-black/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50" />
            <div className="text-center relative z-10">
              <p className="text-slate-300 text-sm mb-2">Screenshot folgt</p>
              <a href="https://cafe-alte-schule.com" target="_blank" rel="noopener noreferrer"
                className="text-blue-500 text-sm hover:underline">
                cafe-alte-schule.com ↗
              </a>
            </div>
          </div>

          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10">
            <div>
              <span className="text-blue-500 text-xs font-mono tracking-widest uppercase mb-3 block">Gastronomie</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Café Alte Schule</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Vollständiges Reservierungssystem mit Echtzeit-Tischverwaltung, Lightspeed POS Integration und No-Code-Dashboard. Der Inhaber verwaltet Speisekarte, Schichten und Öffnungszeiten selbst – täglich, ohne uns.
              </p>
              <a href="https://cafe-alte-schule.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 border border-black/10 hover:border-blue-200 px-5 py-2.5 rounded-lg transition-all">
                Live ansehen ↗
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-4">
                {[{ value: "14", label: "Tage bis Launch" }, { value: "+68%", label: "Reservierungen" }, { value: "Live", label: "Lightspeed Sync" }].map((s) => (
                  <div key={s.label} className="bg-slate-50 rounded-xl p-4 border border-black/5">
                    <div className="text-slate-900 font-black text-2xl">{s.value}</div>
                    <div className="text-slate-400 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-black/5">
                <p className="text-xs font-mono text-blue-500 mb-3 uppercase tracking-widest">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Lightspeed API", "Supabase", "Vercel"].map((t) => (
                    <span key={t} className="text-xs text-slate-500 border border-black/8 bg-white px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="rounded-2xl border border-dashed border-black/10 p-16 text-center">
          <p className="text-slate-300 text-sm mb-1">Weitere Projekte</p>
          <p className="text-slate-200 text-xs">Demnächst</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-12 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-3">Dein Projekt als nächstes?</h2>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto text-sm">15 Minuten Gespräch – kostenlos.</p>
          <Link href="/kontakt"
            className="inline-block px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-700 text-white font-semibold transition-colors">
            Projekt starten
          </Link>
        </div>
      </section>
    </>
  );
}
