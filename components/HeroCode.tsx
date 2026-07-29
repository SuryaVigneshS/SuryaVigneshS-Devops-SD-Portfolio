"use client";

import { useEffect, useState } from "react";

const lines = [
  { indent: 0, text: "const engineer = {" },
  { indent: 1, text: 'name: "Surya Vignesh S",' },
  { indent: 1, text: 'role: "Aspiring DevOps Engineer",' },
  { indent: 1, text: "stack: [" },
  { indent: 2, text: '"Next.js", "TypeScript", "Python",' },
  { indent: 2, text: '"AWS", "Azure", "Docker", "CI/CD"' },
  { indent: 1, text: "]," },
  { indent: 1, text: "focus: \"shipping reliable systems\"," },
  { indent: 1, text: "status: \"open_to_work\"," },
  { indent: 0, text: "};" },
];

function highlight(text: string) {
  // Very small hand-rolled highlighter tuned for this exact snippet —
  // not a general parser, just enough to color keywords/strings/punctuation.
  const tokens = text.split(/("(?:[^"\\]|\\.)*"|[{}[\],:])/g).filter(Boolean);
  return tokens.map((tok, i) => {
    if (tok.startsWith('"')) {
      return (
        <span key={i} className="text-stage-deploy">
          {tok}
        </span>
      );
    }
    if (["{", "}", "[", "]", ",", ":"].includes(tok)) {
      return (
        <span key={i} className="text-ink-500">
          {tok}
        </span>
      );
    }
    if (["const", "engineer"].some((kw) => tok.trim() === kw)) {
      return (
        <span key={i} className="text-stage-monitor">
          {tok}
        </span>
      );
    }
    return (
      <span key={i} className="text-stage-test">
        {tok}
      </span>
    );
  });
}

export default function HeroCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charsInLine, setCharsInLine] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const current = lines[visibleLines].text;

    if (charsInLine < current.length) {
      const t = setTimeout(() => setCharsInLine((c) => c + 1), 14);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharsInLine(0);
    }, 120);
    return () => clearTimeout(t);
  }, [visibleLines, charsInLine]);

  return (
    <pre className="overflow-x-auto font-mono text-[0.8rem] leading-6 sm:text-sm">
      <code>
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            {"  ".repeat(line.indent)}
            {highlight(line.text)}
          </div>
        ))}
        {visibleLines < lines.length && (
          <div>
            {"  ".repeat(lines[visibleLines].indent)}
            {highlight(lines[visibleLines].text.slice(0, charsInLine))}
            <span className="animate-blink text-stage-build">▌</span>
          </div>
        )}
      </code>
    </pre>
  );
}
