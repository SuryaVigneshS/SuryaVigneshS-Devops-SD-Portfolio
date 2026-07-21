import { Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-blueprint-grid/60 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-ink-100">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-xs text-ink-500">
            © {new Date().getFullYear()} — Built with Next.js, Tailwind &amp;
            Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {profile.github ? (
            <a
              href={profile.github}
              className="text-ink-500 hover:text-stage-build"
            >
              <Github size={18} />
            </a>
          ) : null}
          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              className="text-ink-500 hover:text-stage-build"
            >
              <Linkedin size={18} />
            </a>
          ) : null}
          <a
            href={profile.instagram}
            className="text-ink-500 hover:text-stage-deploy"
          >
            <Instagram size={18} />
          </a>
          <a
            href={profile.youtube}
            className="text-ink-500 hover:text-stage-monitor"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
