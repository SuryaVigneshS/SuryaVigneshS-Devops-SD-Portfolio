"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contact, profile } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-ink-300">{contact.subheading}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="card-schematic mt-12 space-y-4 rounded-lg p-8 text-left"
        >
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink-500">
              Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-blueprint-grid bg-blueprint-800/60 px-4 py-2.5 text-sm text-ink-100 outline-none focus:border-stage-build"
            />
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink-500">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border border-blueprint-grid bg-blueprint-800/60 px-4 py-2.5 text-sm text-ink-100 outline-none focus:border-stage-build"
            />
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink-500">
              Message
            </label>
            <textarea
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-blueprint-grid bg-blueprint-800/60 px-4 py-2.5 text-sm text-ink-100 outline-none focus:border-stage-build"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-stage-build py-3 text-sm font-medium text-blueprint-950 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" && (
              <Loader2 size={16} className="animate-spin" />
            )}
            {status === "loading" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 rounded-md border border-stage-test/40 bg-stage-test/10 px-4 py-3 text-sm text-stage-test"
            >
              <CheckCircle2 size={16} />
              Message sent — thanks for reaching out, I&apos;ll reply soon.
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2 rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400"
            >
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>
                {errorMessage} You can also email me directly at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="underline hover:text-red-300"
                >
                  {profile.email}
                </a>
                .
              </span>
            </motion.div>
          )}
        </motion.form>

        <p className="mt-6 text-sm text-ink-500">
          Or reach me directly at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-stage-build hover:underline"
          >
            {profile.email}
          </a>{" "}
          · {profile.phone}
        </p>
      </div>
    </section>
  );
}
