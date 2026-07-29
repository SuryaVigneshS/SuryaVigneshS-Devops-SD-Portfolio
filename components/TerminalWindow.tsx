export default function TerminalWindow({
  filename,
  children,
  className = "",
}: {
  filename: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-blueprint-grid bg-blueprint-800/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-blueprint-grid bg-blueprint-950/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-ink-500">
          {filename}
        </span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
