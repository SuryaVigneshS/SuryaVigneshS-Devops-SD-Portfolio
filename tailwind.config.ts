import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Named "blueprint" for historical reasons in the codebase — these
        // are now tuned to a VS Code Dark+ style editor palette.
        blueprint: {
          950: "#161616",
          900: "#1e1e1e",
          800: "#252526",
          700: "#2d2d30",
          600: "#3c3c3c",
          grid: "#333333",
        },
        ink: {
          100: "#d4d4d4",
          300: "#b3b3b3",
          500: "#858585",
          700: "#5a5a5a",
        },
        stage: {
          build: "#569cd6", // keyword blue
          test: "#4ec9b0", // type teal
          deploy: "#ce9178", // string orange
          monitor: "#c586c0", // keyword magenta
        },
      },
      fontFamily: {
        display: ["var(--font-jetbrains)", "monospace"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        pixel: ["var(--font-pixel)", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        floatUp: {
          "0%": { transform: "translateY(110vh) rotate(0deg)", opacity: "0" },
          "8%": { opacity: "0.5" },
          "92%": { opacity: "0.5" },
          "100%": {
            transform: "translateY(-10vh) rotate(8deg)",
            opacity: "0",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        wiggle: "wiggle 0.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
