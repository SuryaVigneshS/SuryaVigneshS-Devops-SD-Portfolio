"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFX() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
        if (glowRef.current) {
          glowRef.current.style.background = `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(86,156,214,0.06), transparent 70%)`;
        }
        raf = 0;
      });
    };

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element &&
      el.closest(
        "a, button, input, textarea, .cursor-pop, .card-schematic"
      ) !== null;

    const onOver = (e: MouseEvent) => setHovering(isInteractive(e.target));

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Ambient spotlight that follows the cursor across the whole page */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40"
      />
      {/* Crosshair cursor: small fixed dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-stage-build"
      />
      {/* Ring that pops open around interactive content */}
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[60] -translate-x-1/2 -translate-y-1/2 border transition-all duration-200 ease-out ${
          hovering
            ? "h-10 w-10 border-stage-build bg-stage-build/10"
            : "h-6 w-6 border-ink-500/50 bg-transparent"
        }`}
      />
      <style jsx global>{`
        @media (pointer: fine) {
          a,
          button,
          input,
          textarea {
            cursor: none;
          }
          body {
            cursor: none;
          }
        }
      `}</style>
    </>
  );
}
