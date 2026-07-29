"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#now", label: "Now" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-blueprint-grid/70 bg-blueprint-900/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-pixel-score text-sm text-ink-100"
        >
          SV<span className="text-stage-build">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-300 transition-colors hover:text-stage-build"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-blueprint-grid px-4 py-2 text-sm text-ink-100 transition-colors hover:border-stage-build hover:text-stage-build sm:inline-block"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="btn-pixel cursor-pop border-2 border-black bg-stage-build px-4 py-3 text-blueprint-950"
          >
            LET&apos;S TALK
          </a>
        </div>
      </div>
    </motion.header>
  );
}
