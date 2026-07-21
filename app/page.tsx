"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { HardwareSection } from "@/components/HardwareSection";
import { BlogsSection } from "@/components/BlogsSection";
import { ArtSection } from "@/components/ArtSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="noise scanlines relative min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <HardwareSection />
      <BlogsSection />
      <ArtSection />
      <Footer />
    </main>
  );
}
