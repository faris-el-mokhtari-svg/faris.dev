"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function StatsSection() {
  return (
    <section className="bg-[#FFFCF3] border-y border-black/8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-[1366px] mx-auto px-6 md:px-12 py-20 md:py-24 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8"
      >
        <motion.div variants={item}><AnimatedCounter to={14} suffix=" Tage" label="bis zum Launch" /></motion.div>
        <motion.div variants={item}><AnimatedCounter to={10} suffix="+" label="Projekte umgesetzt" /></motion.div>
        <motion.div variants={item}><AnimatedCounter to={3} label="Länder: DE, AT, CH" /></motion.div>
        <motion.div variants={item}><AnimatedCounter to={100} suffix="%" label="selbst editierbar" /></motion.div>
      </motion.div>
    </section>
  );
}
