import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DragonCursor } from "@/components/DragonCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Dark Fantasy Developer",
  description:
    "A cyberpunk dark-fantasy portfolio showcasing projects, hardware, blogs, and digital art. Built with Next.js and creativity.",
  keywords: ["portfolio", "developer", "cyberpunk", "dark fantasy", "projects"],
  openGraph: {
    title: "Portfolio | Dark Fantasy Developer",
    description: "Cyberpunk dark-fantasy developer portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg text-text antialiased`}
      >
        <DragonCursor />
        {children}
      </body>
    </html>
  );
}
