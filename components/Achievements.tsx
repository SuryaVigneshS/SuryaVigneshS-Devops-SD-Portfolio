"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="border-y border-blueprint-grid/60 bg-blueprint-800/40 px-6 py-20">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            className="text-center"
          >
            <div className="font-pixel-score text-xl leading-relaxed text-ink-100 sm:text-2xl">
              {stat.value}
              <span className="text-stage-build">{stat.suffix}</span>
            </div>
            <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-widest text-ink-500">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
