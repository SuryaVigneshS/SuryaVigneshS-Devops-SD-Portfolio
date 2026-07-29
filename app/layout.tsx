import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import CursorFX from "@/components/CursorFX";
import EditorGutter from "@/components/EditorGutter";
import FloatingCode from "@/components/FloatingCode";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Surya Vignesh S — Aspiring DevOps Engineer & Software Developer",
  description:
    "Portfolio of Surya Vignesh S — aspiring DevOps engineer and software developer building applied ML and full-stack projects, currently pursuing the AZ-400 DevOps Engineer Expert certification.",
  keywords: [
    "Surya Vignesh S",
    "DevOps Engineer",
    "Software Developer",
    "Bangalore",
    "Next.js",
    "CI/CD",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${pressStart.variable} font-body bg-blueprint-canvas antialiased`}
      >
        <CursorFX />
        <FloatingCode />
        <div className="relative z-10 flex">
          <EditorGutter />
          <div className="relative z-10 min-w-0 flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
