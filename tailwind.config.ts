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
        blueprint: {
          950: "#080D18",
          900: "#0B1120",
          800: "#101A2E",
          700: "#16223B",
          600: "#1E2D48",
          grid: "#1B2A44",
        },
        ink: {
          100: "#E9EEF6",
          300: "#C3CCDC",
          500: "#8B98AC",
          700: "#5B6880",
        },
        stage: {
          build: "#38BDF8",
          test: "#34D399",
          deploy: "#F5A524",
          monitor: "#C084FC",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
