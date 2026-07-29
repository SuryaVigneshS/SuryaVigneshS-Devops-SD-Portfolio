"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { about, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[280px_1fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto aspect-[4/5] w-56 overflow-hidden rounded-lg border border-blueprint-grid bg-blueprint-800 md:w-full"
        >
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="(min-width: 768px) 280px, 224px"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blueprint-900/70 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow">About</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
            Two internships, one research paper, one live product.
          </h2>

          <div className="mt-6 space-y-4 text-ink-300">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-ink-500">
            <span>{profile.location}</span>
            <span>{profile.phone}</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-stage-build hover:underline"
            >
              {profile.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
