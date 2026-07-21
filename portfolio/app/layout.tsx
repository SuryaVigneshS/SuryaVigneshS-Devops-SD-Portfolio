import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Surya Vignesh S — Aspiring DevOps Engineer & Software Developer",
  description:
    "Portfolio of Surya Vignesh S — aspiring DevOps engineer and software developer working across enterprise IT, cloud fundamentals, and applied machine learning.",
  keywords: [
    "Surya Vignesh S",
    "DevOps Engineer",
    "Software Developer",
    "Bangalore",
    "Cloud",
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-blueprint-canvas antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
