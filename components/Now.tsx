"use client";

import { motion } from "framer-motion";
import { nowItems, activities } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Now() {
  return (
    <section id="now" className="px-6 py-28">
      <SectionHeading eyebrow="Now" title="What's currently in progress." />

      <div className="mx-auto mt-16 max-w-3xl space-y-6">
        {nowItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            className="card-schematic rounded-lg p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-base font-semibold text-ink-100">
                {item.title}
              </h3>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
                {item.context}
              </span>
            </div>
            <p className="mt-2 text-sm text-ink-300">{item.description}</p>

            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-blueprint-700">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-stage-build via-stage-test to-stage-deploy"
              />
            </div>

            {item.links && item.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-4 border-t border-blueprint-grid/60 pt-4">
                {item.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    className="font-mono text-xs text-stage-build hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h3 className="text-center font-mono text-xs uppercase tracking-widest text-ink-500">
          Recent activities
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="rounded-lg border border-blueprint-grid/70 p-5"
            >
              <h4 className="text-sm font-medium text-ink-100">
                {activity.title}
              </h4>
              <p className="mt-1.5 text-sm text-ink-500">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
