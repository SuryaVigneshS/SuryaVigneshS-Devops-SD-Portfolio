"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section className="px-6 py-28">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials along the way."
      />

      <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="card-schematic flex items-start gap-3 rounded-lg p-5"
          >
            {cert.status === "Pursuing" ? (
              <Clock size={18} className="mt-0.5 shrink-0 text-stage-deploy" />
            ) : (
              <BadgeCheck size={18} className="mt-0.5 shrink-0 text-stage-test" />
            )}
            <div>
              <h3 className="text-sm font-medium text-ink-100">{cert.title}</h3>
              <p className="mt-1 font-mono text-xs text-ink-500">
                {cert.issuer} · {cert.status}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
