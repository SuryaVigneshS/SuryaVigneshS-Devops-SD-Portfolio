"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, FileText, Instagram, Youtube } from "lucide-react";
import { hero, profile } from "@/lib/data";
import PipelineStrip from "./PipelineStrip";
import TerminalWindow from "./TerminalWindow";
import HeroCode from "./HeroCode";

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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blueprint-900" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.div
          custom={0}
          variants={fadeUp}
          className="cursor-pop relative mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-stage-build/60 shadow-[0_0_40px_-8px_rgba(86,156,214,0.5)]"
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
          className="placeholder-badge border-stage-test text-stage-test"
        >
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-stage-test" />
          {hero.eyebrow}
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink-100 sm:text-4xl md:text-5xl"
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
            className="btn-pixel cursor-pop border-2 border-black bg-stage-build px-6 py-4 text-blueprint-950"
          >
            VIEW PROJECTS
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pop inline-flex items-center gap-2 rounded-md border border-blueprint-grid px-6 py-3 text-sm text-ink-100 transition-colors hover:border-stage-build hover:text-stage-build"
          >
            <FileText size={15} /> Review Resume
          </a>
          <a
            href={profile.github}
            className="cursor-pop inline-flex items-center gap-2 text-sm text-ink-300 hover:text-stage-build"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            className="cursor-pop inline-flex items-center gap-2 text-sm text-ink-300 hover:text-stage-build"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={profile.instagram}
            className="cursor-pop inline-flex items-center gap-2 text-sm text-ink-300 hover:text-stage-deploy"
          >
            <Instagram size={16} /> {profile.instagramLabel}
          </a>
          <a
            href={profile.youtube}
            className="cursor-pop inline-flex items-center gap-2 text-sm text-ink-300 hover:text-stage-monitor"
          >
            <Youtube size={16} /> {profile.youtubeLabel}
          </a>
        </motion.div>

        <motion.div custom={4} variants={fadeUp} className="mt-14 w-full text-left">
          <TerminalWindow filename="whoami.ts">
            <HeroCode />
          </TerminalWindow>
        </motion.div>

        <motion.div custom={5} variants={fadeUp} className="mt-10 w-full">
          <PipelineStrip />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="cursor-pop absolute bottom-6 z-10 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-ink-500"
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
