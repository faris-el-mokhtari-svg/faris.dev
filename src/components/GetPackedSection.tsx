"use client";
import { motion } from "framer-motion";

const features = [
  "Bestellverwaltung & Tourenplanung",
  "Kundendatenbank & CRM",
  "Automatische Rechnungsstellung",
  "Lieferscheine digital",
  "Echtzeit-Lagerübersicht",
];

export default function GetPackedSection() {
  return (
    <section className="bg-[#0a0a0a]">
      <div className="max-w-[1366px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/30 text-sm font-semibold tracking-widest uppercase mb-10"
        >
          Partnerschaft
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-black tracking-[-0.04em] leading-none mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
            >
              <span className="text-white">Get</span>
              <span className="text-[#1AB65D]">Packed</span>
            </h2>
            <p className="text-white/55 leading-tight mb-10" style={{ fontSize: "clamp(1rem, 2.5vw, 1.875rem)" }}>
              Die führende SaaS-Plattform für Bäckereien, Metzgereien und Direktvertriebler. Nahtlos in Ihre Deploy-Website integrierbar — ein System, das alles verbindet.
            </p>
            <a
              href="https://www.getpacked.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1AB65D] text-white rounded-full px-7 py-3.5 text-base md:text-xl font-semibold hover:bg-[#17a352] transition-colors w-full md:w-auto text-center"
            >
              GetPacked entdecken →
            </a>
          </motion.div>

          <div className="flex flex-col">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: "easeOut" }}
                className="flex items-center gap-5 border-t border-white/10 py-5"
              >
                <span className="text-white/20 text-sm font-medium w-7 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white leading-tight" style={{ fontSize: "clamp(1.125rem, 2vw, 1.75rem)" }}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
