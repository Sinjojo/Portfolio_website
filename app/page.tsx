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
    <main className="relative min-h-screen bg-neo-bg">
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
