"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "./Icons";
import { SectionWrapper, fadeUpVariants } from "./SectionWrapper";

const projects = [
  {
    id: "proj-1",
    title: "NeuralForge",
    description:
      "An AI-powered code generation platform with real-time collaboration and intelligent refactoring suggestions.",
    tags: ["Next.js", "Python", "LLM", "WebSocket"],
    status: "Live",
    statusColor: "#4ade80",
    github: "#",
    live: "#",
    gradient: "from-violet-900/40 to-purple-900/20",
  },
  {
    id: "proj-2",
    title: "CryptoNexus",
    description:
      "DeFi dashboard with real-time chain analytics, whale tracking, and portfolio risk scoring.",
    tags: ["React", "Web3.js", "Rust", "Kafka"],
    status: "Beta",
    statusColor: "#fb923c",
    github: "#",
    live: "#",
    gradient: "from-indigo-900/40 to-blue-900/20",
  },
  {
    id: "proj-3",
    title: "ShadowOS",
    description:
      "Minimal Linux distro built from scratch with custom init system, package manager, and tiling WM.",
    tags: ["C", "Shell", "POSIX", "Assembly"],
    status: "Open Source",
    statusColor: "#a855f7",
    github: "#",
    live: null,
    gradient: "from-slate-900/60 to-gray-900/20",
  },
  {
    id: "proj-4",
    title: "GlyphEngine",
    description:
      "Real-time 3D procedural world generator using WebGPU with dynamic biome simulation.",
    tags: ["WebGPU", "TypeScript", "WGSL", "WASM"],
    status: "WIP",
    statusColor: "#facc15",
    github: "#",
    live: "#",
    gradient: "from-teal-900/30 to-emerald-900/20",
  },
  {
    id: "proj-5",
    title: "Velvet CMS",
    description:
      "A headless CMS with visual schema builder, AI content suggestions, and multi-tenant support.",
    tags: ["Go", "PostgreSQL", "React", "gRPC"],
    status: "Live",
    statusColor: "#4ade80",
    github: "#",
    live: "#",
    gradient: "from-rose-900/30 to-pink-900/20",
  },
  {
    id: "proj-6",
    title: "DeepGraph",
    description:
      "Graph neural network framework for social network analysis and anomaly detection at scale.",
    tags: ["Python", "PyTorch", "Neo4j", "FastAPI"],
    status: "Research",
    statusColor: "#60a5fa",
    github: "#",
    live: null,
    gradient: "from-purple-900/40 to-fuchsia-900/20",
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" label="// 01. featured work">
      {/* Section header */}
      <motion.div variants={fadeUpVariants} className="mb-12 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-black lg:text-5xl">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="mt-3 text-text-secondary max-w-lg">
          A selection of things I&apos;ve built — from AI systems to bare-metal software.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={fadeUpVariants}
            custom={i}
            className={`hover-lift glass-card group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-6`}
          >
            {/* Corner accent */}
            <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
              <div className="absolute right-0 top-0 h-px w-full origin-right bg-accent/30 rotate-45 translate-x-2 -translate-y-px" />
            </div>

            {/* Status badge */}
            <div className="mb-4 flex items-center justify-between">
              <span
                className="flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{
                  background: `${project.statusColor}18`,
                  border: `1px solid ${project.statusColor}44`,
                  color: project.statusColor,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse"
                  style={{ background: project.statusColor }}
                />
                {project.status}
              </span>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  aria-label="GitHub"
                  className="rounded-lg p-1.5 text-text-secondary transition-colors hover:text-text"
                >
                  <GithubIcon size={15} />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    aria-label="Live demo"
                    className="rounded-lg p-1.5 text-text-secondary transition-colors hover:text-accent"
                  >
                    <ExternalLinkIcon size={15} />
                  </a>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-xl font-bold text-text group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom glow on hover */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
