"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "./Icons";
import { SectionWrapper, fadeUpVariants } from "./SectionWrapper";

const projects = [
  {
    id: "proj-1",
    title: "NeuralForge",
    description: "AI-powered code generation platform with real-time collaboration and intelligent refactoring.",
    tags: ["Next.js", "Python", "LLM", "WebSocket"],
    status: "LIVE",
    statusBg: "#86efac",   // soft green
    github: "#",
    live: "#",
    cardBg: "#FFFFFF",
    accentLine: "var(--neo-accent)",
  },
  {
    id: "proj-2",
    title: "CryptoNexus",
    description: "DeFi dashboard with real-time chain analytics, whale tracking, and portfolio risk scoring.",
    tags: ["React", "Web3.js", "Rust", "Kafka"],
    status: "BETA",
    statusBg: "#fde68a",   // amber
    github: "#",
    live: "#",
    cardBg: "#FFFFFF",
    accentLine: "var(--neo-secondary)",
  },
  {
    id: "proj-3",
    title: "ShadowOS",
    description: "Minimal Linux distro built from scratch — custom init system, package manager, and tiling WM.",
    tags: ["C", "Shell", "POSIX", "Assembly"],
    status: "OPEN SOURCE",
    statusBg: "var(--neo-muted)",
    github: "#",
    live: null,
    cardBg: "#FFFFFF",
    accentLine: "var(--neo-muted)",
  },
  {
    id: "proj-4",
    title: "GlyphEngine",
    description: "Real-time 3D procedural world generator using WebGPU with dynamic biome simulation.",
    tags: ["WebGPU", "TypeScript", "WGSL", "WASM"],
    status: "WIP",
    statusBg: "var(--neo-secondary)",
    github: "#",
    live: "#",
    cardBg: "#FFFFFF",
    accentLine: "var(--neo-secondary)",
  },
  {
    id: "proj-5",
    title: "Velvet CMS",
    description: "Headless CMS with visual schema builder, AI content suggestions, and multi-tenant support.",
    tags: ["Go", "PostgreSQL", "React", "gRPC"],
    status: "LIVE",
    statusBg: "#86efac",
    github: "#",
    live: "#",
    cardBg: "#FFFFFF",
    accentLine: "var(--neo-accent)",
  },
  {
    id: "proj-6",
    title: "DeepGraph",
    description: "Graph neural network framework for social network analysis and anomaly detection at scale.",
    tags: ["Python", "PyTorch", "Neo4j", "FastAPI"],
    status: "RESEARCH",
    statusBg: "#bfdbfe",   // light blue
    github: "#",
    live: null,
    cardBg: "#FFFFFF",
    accentLine: "#bfdbfe",
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="neo-section-cream">
      <div className="mx-auto max-w-7xl">
        {/* ── Header ── */}
        <motion.div variants={fadeUpVariants} className="mb-14">
          <span className="neo-label text-xs mb-3 block">01 / Featured Work</span>
          <h2
            className="neo-display text-[clamp(3rem,8vw,6rem)] uppercase"
            style={{ rotate: "-1deg", display: "inline-block" }}
          >
            Projects
          </h2>
          <p className="mt-4 text-xl font-bold max-w-lg">
            A selection of things I&apos;ve built — from AI systems to bare-metal software.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUpVariants}
              custom={i}
              className="neo-card group flex flex-col p-0 overflow-hidden"
            >
              {/* Coloured top stripe */}
              <div
                className="h-2 w-full border-b-4 border-neo-ink"
                style={{ background: project.accentLine }}
              />

              <div className="flex flex-col flex-1 p-5 gap-4">
                {/* Status + links row */}
                <div className="flex items-center justify-between">
                  <span
                    className="neo-label text-[10px] px-2 py-1 border-2 border-neo-ink"
                    style={{ background: project.statusBg }}
                  >
                    {project.status}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      aria-label="GitHub"
                      className="flex items-center justify-center w-8 h-8 border-2 border-neo-ink bg-neo-white shadow-neo-sm
                                 hover:bg-neo-secondary hover:-translate-x-0.5 hover:-translate-y-0.5
                                 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                                 transition-all duration-100"
                    >
                      <GithubIcon size={14} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        aria-label="Live demo"
                        className="flex items-center justify-center w-8 h-8 border-2 border-neo-ink bg-neo-accent shadow-neo-sm
                                   hover:-translate-x-0.5 hover:-translate-y-0.5
                                   active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                                   transition-all duration-100"
                      >
                        <ExternalLinkIcon size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black uppercase tracking-tight leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-bold leading-relaxed flex-1 opacity-75">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t-2 border-neo-ink">
                  {project.tags.map((tag) => (
                    <span key={tag} className="neo-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
