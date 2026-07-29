"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contact, profile } from "@/lib/data";
import TerminalWindow from "./TerminalWindow";
import CoderCorner from "./CoderCorner";

type Status = "idle" | "loading" | "success";

const IFRAME_NAME = "hidden-form-target";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    // Submits via a real <form> POST targeted at a hidden iframe — this
    // mirrors an actual browser form submission (unlike fetch/no-cors,
    // which Google Forms sometimes silently drops), while staying
    // invisible to the visitor: the page never navigates away.
    formRef.current?.submit();

    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", mobile: "", email: "", message: "" });
    }, 900);
  }

  const { formActionUrl, entryIds } = contact.googleForm;

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative mt-12 text-left"
        >
          <TerminalWindow filename="send-message.ts">
            <form
              ref={formRef}
              action={formActionUrl}
              method="POST"
              target={IFRAME_NAME}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="mb-1.5 block font-mono text-xs text-stage-test">
                  <span className="text-ink-500">$</span> --name
                </label>
                <input
                  type="text"
                  name={entryIds.name}
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-blueprint-grid bg-blueprint-900/60 px-4 py-2.5 font-mono text-sm text-ink-100 outline-none focus:border-stage-build"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-stage-test">
                  <span className="text-ink-500">$</span> --mobile-number
                </label>
                <input
                  type="tel"
                  name={entryIds.mobile}
                  required
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full rounded-md border border-blueprint-grid bg-blueprint-900/60 px-4 py-2.5 font-mono text-sm text-ink-100 outline-none focus:border-stage-build"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-stage-test">
                  <span className="text-ink-500">$</span> --email
                </label>
                <input
                  type="email"
                  name={entryIds.email}
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-blueprint-grid bg-blueprint-900/60 px-4 py-2.5 font-mono text-sm text-ink-100 outline-none focus:border-stage-build"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-stage-test">
                  <span className="text-ink-500">$</span> --message
                </label>
                <textarea
                  rows={4}
                  name={entryIds.message}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-md border border-blueprint-grid bg-blueprint-900/60 px-4 py-2.5 font-mono text-sm text-ink-100 outline-none focus:border-stage-build"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-pixel cursor-pop flex w-full items-center justify-center gap-2 border-2 border-black bg-stage-build py-4 text-blueprint-950 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" && (
                  <Loader2 size={16} className="animate-spin" />
                )}
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-md border border-stage-test/40 bg-stage-test/10 px-4 py-3 font-mono text-sm text-stage-test"
                >
                  <CheckCircle2 size={16} />
                  200 OK — message sent, I&apos;ll reply soon.
                </motion.div>
              )}
            </form>

            {/* Hidden target so the form submission never navigates the visitor away */}
            <iframe name={IFRAME_NAME} className="hidden" title="submit-target" />
          </TerminalWindow>

          <CoderCorner className="pointer-events-none absolute -bottom-6 -right-6 hidden w-40 opacity-90 sm:block lg:-right-16 lg:w-52" />
        </motion.div>

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
