"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { stageMeta } from "@/lib/stage";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <SectionHeading
        eyebrow="Skills"
        title="The stack, grouped by pipeline stage."
        description="Not a skills cloud — grouped by where each one actually gets used, from writing code to shipping infrastructure."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const meta = stageMeta[group.stage];
          return (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="card-schematic rounded-lg p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
                  {meta.label} stage
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-100">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1 text-xs ${meta.border} ${meta.text} bg-blueprint-800/60`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
