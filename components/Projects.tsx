"use client";

import { motion } from "framer-motion";
import { Activity, Captions, HeartPulse, Recycle, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { stageMeta } from "@/lib/stage";
import SectionHeading from "./SectionHeading";

const icons = { Activity, Captions, HeartPulse, Recycle };

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <SectionHeading
        eyebrow="featured-projects"
        title="Selected builds, end to end."
        description="From a published deep learning paper to a live AI healthcare assistant — each one shipped as a working system, not just a notebook."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
        {projects.map((project, i) => {
          const Icon = icons[project.icon];
          const meta = stageMeta[project.stage];
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="card-schematic flex flex-col overflow-hidden rounded-lg"
            >
              <div className="relative flex h-40 items-center justify-center border-b border-dashed border-blueprint-grid bg-blueprint-800">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${meta.bg} ${meta.border} border`}
                >
                  <Icon size={28} className={meta.text} />
                </div>
                <span
                  className={`absolute right-3 top-3 rounded-full border px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-widest ${meta.text} ${meta.border} ${meta.bg}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink-100">
                    {project.title}
                  </h3>
                </div>
                <span className="mt-1 font-mono text-xs text-ink-500">
                  {project.year}
                </span>

                <p className="mt-3 flex-1 text-sm text-ink-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blueprint-grid px-2.5 py-0.5 text-xs text-ink-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cursor-pop mt-5 inline-flex w-fit items-center gap-1.5 border-t border-blueprint-grid/60 pt-4 text-sm font-medium ${meta.text} hover:underline`}
                  >
                    View project <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
