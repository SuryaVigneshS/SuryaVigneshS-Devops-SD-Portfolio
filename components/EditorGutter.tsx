const LINE_COUNT = 320;

export default function EditorGutter() {
  const lines = Array.from({ length: LINE_COUNT }, (_, i) => i + 1);

  return (
    <div
      aria-hidden
      className="hidden w-12 shrink-0 select-none border-r border-blueprint-grid/60 bg-blueprint-950/40 pt-24 lg:block"
    >
      {lines.map((n) => (
        <div
          key={n}
          className="flex h-6 items-center justify-end pr-3 font-mono text-[0.65rem] leading-6 text-ink-700"
        >
          {n}
        </div>
      ))}
    </div>
  );
}
