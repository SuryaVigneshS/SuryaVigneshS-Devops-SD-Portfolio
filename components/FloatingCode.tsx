"use client";

const SYMBOLS = [
  "{ }",
  "</>",
  "=>",
  "const",
  "npm run dev",
  "git commit",
  "01",
  "();",
  "#!/bin",
  "import",
  "if (true)",
  "[...]",
  "<div>",
  "===",
  "git push",
  "10",
  "return",
  "async",
];

// Deterministic pseudo-random so the layout is stable between server and
// client renders (avoids hydration mismatches from Math.random()).
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function FloatingCode() {
  const particles = SYMBOLS.map((symbol, i) => {
    const left = seededRandom(i * 7.1) * 100;
    const duration = 22 + seededRandom(i * 3.3) * 18;
    const delay = seededRandom(i * 5.7) * 20;
    const size = 0.75 + seededRandom(i * 2.2) * 0.6;
    return { symbol, left, duration, delay, size, key: i };
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((p) => (
        <span
          key={p.key}
          className="absolute font-mono text-ink-700/40"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
