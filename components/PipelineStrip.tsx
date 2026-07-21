"use client";

import { motion } from "framer-motion";

const stages = [
  { key: "source", label: "source", color: "#8B98AC" },
  { key: "build", label: "build", color: "#38BDF8" },
  { key: "test", label: "test", color: "#34D399" },
  { key: "deploy", label: "deploy", color: "#F5A524" },
  { key: "monitor", label: "monitor", color: "#C084FC" },
];

export default function PipelineStrip() {
  return (
    <div
      aria-hidden
      className="mx-auto flex w-full max-w-xl items-center justify-between font-mono text-[0.65rem] uppercase tracking-widest text-ink-500"
    >
      {stages.map((stage, i) => (
        <div key={stage.key} className="flex flex-1 items-center">
          <div className="flex flex-col items-center gap-2">
            <motion.span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: stage.color }}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
            <span>{stage.label}</span>
          </div>
          {i < stages.length - 1 && (
            <div className="relative mx-2 h-px flex-1 -translate-y-3 bg-blueprint-grid">
              <motion.div
                className="absolute inset-y-0 left-0 w-1/3"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stage.color}, transparent)`,
                }}
                animate={{ left: ["-30%", "100%"] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
