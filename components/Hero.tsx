"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, FileText, Instagram, Youtube } from "lucide-react";
import { hero, profile } from "@/lib/data";
import PipelineStrip from "./PipelineStrip";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blueprint-900" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div
          custom={0}
          variants={fadeUp}
          className="relative mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-stage-build/60 shadow-[0_0_40px_-8px_rgba(56,189,248,0.5)]"
        >
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.span
          custom={0.5}
          variants={fadeUp}
          className="placeholder-badge border-stage-build text-stage-build"
        >
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-stage-build" />
          {hero.eyebrow}
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-100 sm:text-5xl md:text-6xl"
        >
          {hero.headline}
          <br />
          <span className="text-gradient-pipeline">{hero.headlineAccent}</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base text-ink-300 sm:text-lg"
        >
          {hero.subhead}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-md bg-stage-build px-6 py-3 text-sm font-medium text-blueprint-950 transition-transform hover:scale-[1.03]"
          >
            View Projects
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-blueprint-grid px-6 py-3 text-sm text-ink-100 transition-colors hover:border-stage-build hover:text-stage-build"
          >
            <FileText size={15} /> Review Resume
          </a>
          {profile.github ? (
            <a
              href={profile.github}
              className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-stage-build"
            >
              <Github size={16} /> GitHub
            </a>
          ) : (
            <span className="placeholder-badge">+ add GitHub</span>
          )}
          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-stage-build"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          ) : (
            <span className="placeholder-badge">+ add LinkedIn</span>
          )}
          <a
            href={profile.instagram}
            className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-stage-deploy"
          >
            <Instagram size={16} /> {profile.instagramLabel}
          </a>
          <a
            href={profile.youtube}
            className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-stage-monitor"
          >
            <Youtube size={16} /> {profile.youtubeLabel}
          </a>
        </motion.div>

        <motion.div custom={4} variants={fadeUp} className="mt-16 w-full">
          <PipelineStrip />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-ink-500"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
