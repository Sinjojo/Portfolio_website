import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "block",
});

export const metadata: Metadata = {
  title: "Portfolio | Developer & Maker",
  description:
    "Personal portfolio showcasing projects, hardware builds, technical blogs, and digital art.",
  keywords: ["portfolio", "developer", "hardware", "maker", "projects"],
  openGraph: {
    title: "Portfolio | Developer & Maker",
    description: "Developer & maker portfolio",
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
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}
