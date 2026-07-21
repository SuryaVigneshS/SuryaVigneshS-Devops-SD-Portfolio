"use client";

import { motion } from "framer-motion";
import { journey } from "@/lib/data";
import { stageMeta } from "@/lib/stage";
import SectionHeading from "./SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="px-6 py-28">
      <SectionHeading
        eyebrow="Journey"
        title="Commit history of the last few years."
        description="A running log of what got built, tested, and shipped — from a CS degree to enterprise IT to hands-on DevOps prep."
      />

      <div className="mx-auto mt-16 max-w-3xl">
        <div className="relative border-l border-dashed border-blueprint-grid pl-8">
          {journey.map((item, i) => {
            const meta = stageMeta[item.stage];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="relative pb-12 last:pb-0"
              >
                <span
                  className={`absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-blueprint-900 ${meta.dot}`}
                />
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest ${meta.text} ${meta.border} ${meta.bg}`}
                  >
                    {meta.label}
                  </span>
                  <span className="font-mono text-xs text-ink-500">
                    {item.period}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-100">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-500">{item.org}</p>
                <p className="mt-2 text-sm text-ink-300">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
