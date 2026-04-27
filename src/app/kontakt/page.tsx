"use client";
import { motion } from "framer-motion";

export default function Kontakt() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-6xl mx-auto px-6">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-blue-500 text-xs font-mono tracking-widest uppercase block mb-6">
          Kontakt
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
          Lass uns deployen.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-slate-500 text-lg max-w-lg">
          15 Minuten Gespräch, kostenlos. Wir schauen uns deine Situation an und sagen dir direkt, was machbar ist.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-16">

          <motion.form
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {[
              { label: "Name", type: "text", placeholder: "Faris Mustermann" },
              { label: "E-Mail", type: "email", placeholder: "hallo@meinbetrieb.de" },
              { label: "Betrieb / Website", type: "text", placeholder: "Café Alte Schule / cafe-alte-schule.com" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col gap-2">
                <label className="text-xs font-medium text-slate-500 uppercase tracking-widest">{f.label}</label>
                <input type={f.type} placeholder={f.placeholder}
                  className="bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors" />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-slate-500 uppercase tracking-widest">Was brauchst du?</label>
              <textarea rows={4} placeholder="Wir brauchen ein Reservierungssystem, unsere aktuelle Website ist veraltet..."
                className="bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-slate-500 uppercase tracking-widest">Interesse an</label>
              <select className="bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors">
                <option value="">Noch nicht sicher</option>
                <option value="reservierung">Reservierungssystem</option>
                <option value="website">Website / Webdesign</option>
                <option value="beides">Beides</option>
                <option value="seo">SEO & Analytics</option>
              </select>
            </div>

            <button type="submit"
              className="mt-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold py-4 rounded-xl transition-colors text-sm">
              Anfrage absenden
            </button>
            <p className="text-xs text-slate-300 text-center">Antwort innerhalb von 24 Stunden. Kein Spam.</p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-8 pt-2"
          >
            <div>
              <h2 className="text-slate-900 font-bold mb-5">Was danach passiert</h2>
              <ol className="flex flex-col gap-5">
                {[
                  "Ich melde mich innerhalb von 24 Stunden.",
                  "Wir vereinbaren ein 15-minütiges Gespräch.",
                  "Ich analysiere deine Situation und schicke ein konkretes Angebot.",
                  "Du entscheidest – ohne Druck.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-slate-500 text-sm leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-black/5 pt-8">
              <p className="text-xs text-slate-400 mb-2 uppercase tracking-widest font-mono">Direkt schreiben</p>
              <a href="mailto:hallo@deploy-web.de"
                className="text-slate-900 hover:text-blue-600 transition-colors font-medium text-sm underline underline-offset-4 decoration-slate-200">
                hallo@deploy-web.de
              </a>
            </div>

            <div className="bg-slate-50 border border-black/5 rounded-2xl p-6">
              <p className="text-sm text-slate-500 leading-relaxed">
                <span className="text-slate-900 font-semibold">Tipp:</span> Schreib kurz, ob du bereits eine Website hast und was dein größtes Problem gerade ist. Das spart Zeit im Gespräch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
