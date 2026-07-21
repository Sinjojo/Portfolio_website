"use client";

import { motion } from "framer-motion";
import { SectionWrapper, fadeUpVariants } from "./SectionWrapper";

// Art pieces with different heights for masonry
const artPieces = [
  {
    id: "art-1",
    title: "Neon Requiem",
    medium: "Digital / Generative",
    year: "2024",
    height: "h-56",
    gradient: "from-violet-900 via-purple-800 to-fuchsia-900",
    accent: "#a855f7",
    svgMotif: "circuit",
  },
  {
    id: "art-2",
    title: "Silicon Dreams",
    medium: "Pixel Art",
    year: "2024",
    height: "h-80",
    gradient: "from-indigo-900 via-blue-900 to-cyan-900",
    accent: "#06b6d4",
    svgMotif: "grid",
  },
  {
    id: "art-3",
    title: "Void Protocol",
    medium: "3D Render / Blender",
    year: "2023",
    height: "h-48",
    gradient: "from-slate-900 via-gray-900 to-zinc-900",
    accent: "#6b7280",
    svgMotif: "dots",
  },
  {
    id: "art-4",
    title: "Chromatic Entropy",
    medium: "Generative / p5.js",
    year: "2024",
    height: "h-72",
    gradient: "from-rose-900 via-pink-900 to-fuchsia-900",
    accent: "#ec4899",
    svgMotif: "wave",
  },
  {
    id: "art-5",
    title: "Quantum Garden",
    medium: "AI-Assisted / Stable Diffusion",
    year: "2024",
    height: "h-64",
    gradient: "from-emerald-900 via-teal-900 to-cyan-900",
    accent: "#10b981",
    svgMotif: "hex",
  },
  {
    id: "art-6",
    title: "Data Specter",
    medium: "ASCII Art / Code",
    year: "2023",
    height: "h-52",
    gradient: "from-orange-900 via-amber-900 to-yellow-900",
    accent: "#f59e0b",
    svgMotif: "glitch",
  },
  {
    id: "art-7",
    title: "Binary Bloom",
    medium: "Shader / GLSL",
    year: "2024",
    height: "h-88",
    gradient: "from-purple-900 via-violet-900 to-indigo-900",
    accent: "#8b5cf6",
    svgMotif: "circuit",
  },
  {
    id: "art-8",
    title: "Electric Ether",
    medium: "Procreate / iPad",
    year: "2023",
    height: "h-60",
    gradient: "from-blue-900 via-indigo-900 to-purple-900",
    accent: "#3b82f6",
    svgMotif: "grid",
  },
];

// Abstract SVG background motifs
function SvgMotif({ type, accent }: { type: string; accent: string }) {
  if (type === "circuit") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
        <path d="M20,100 h40 v-40 h40 v40 h40 M100,60 v-40 M100,140 v40" stroke={accent} strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="100" r="4" fill={accent} />
        <circle cx="60" cy="60" r="3" fill={accent} />
        <circle cx="140" cy="100" r="3" fill={accent} />
        <circle cx="100" cy="20" r="2.5" fill={accent} />
        <path d="M20,140 h20 v20" stroke={accent} strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M180,60 h-20 v-20" stroke={accent} strokeWidth="1" fill="none" opacity="0.6" />
      </svg>
    );
  }
  if (type === "grid") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 200 200">
        {Array.from({ length: 5 }, (_, i) => (
          <g key={i}>
            <line x1={i * 50} y1="0" x2={i * 50} y2="200" stroke={accent} strokeWidth="0.5" />
            <line x1="0" y1={i * 50} x2="200" y2={i * 50} stroke={accent} strokeWidth="0.5" />
          </g>
        ))}
        <circle cx="100" cy="100" r="40" fill="none" stroke={accent} strokeWidth="1" />
        <circle cx="100" cy="100" r="20" fill="none" stroke={accent} strokeWidth="0.5" />
      </svg>
    );
  }
  if (type === "wave") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
        {Array.from({ length: 6 }, (_, i) => (
          <path
            key={i}
            d={`M0,${50 + i * 20} Q50,${30 + i * 20} 100,${50 + i * 20} T200,${50 + i * 20}`}
            fill="none"
            stroke={accent}
            strokeWidth="0.8"
            opacity={1 - i * 0.12}
          />
        ))}
      </svg>
    );
  }
  if (type === "hex") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 200 200">
        {[{ x: 100, y: 100, r: 50 }, { x: 60, y: 60, r: 25 }, { x: 140, y: 140, r: 25 }, { x: 150, y: 60, r: 20 }].map((hex, i) => (
          <polygon
            key={i}
            points={Array.from({ length: 6 }, (_, j) => {
              const a = (j * 60 - 30) * Math.PI / 180;
              return `${hex.x + hex.r * Math.cos(a)},${hex.y + hex.r * Math.sin(a)}`;
            }).join(" ")}
            fill="none"
            stroke={accent}
            strokeWidth="0.8"
          />
        ))}
      </svg>
    );
  }
  // dots / default
  return (
    <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 200 200">
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 6 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 32}
            cy={20 + row * 32}
            r="2"
            fill={accent}
          />
        ))
      )}
    </svg>
  );
}

export function ArtSection() {
  return (
    <SectionWrapper id="art" label="// 04. creative works" className="bg-gradient-to-b from-bg to-[#0c0c14]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Section header */}
      <motion.div variants={fadeUpVariants} className="mb-12 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-black lg:text-5xl">
          <span className="gradient-text">Art</span>
        </h2>
        <p className="mt-3 text-text-secondary max-w-lg">
          Generative, pixel, and 3D art — exploring the aesthetics of code as a creative medium.
        </p>
      </motion.div>

      {/* Masonry grid */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="masonry-grid">
          {artPieces.map((art, i) => (
            <motion.div
              key={art.id}
              variants={fadeUpVariants}
              custom={i}
              className="masonry-grid-item"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group relative overflow-hidden rounded-2xl border border-card-border bg-gradient-to-br ${art.gradient} ${art.height}`}
                style={{
                  boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
                }}
              >
                {/* SVG Motif */}
                <SvgMotif type={art.svgMotif} accent={art.accent} />

                {/* Animated center element */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-30"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${art.accent}44 0%, transparent 70%)`,
                  }}
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${art.accent}11 0%, transparent 60%)`,
                    backdropFilter: "blur(1px)",
                  }}
                />

                {/* Info overlay */}
                <div className="absolute inset-x-0 bottom-0 translate-y-1 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div
                    className="rounded-xl p-3"
                    style={{
                      background: "rgba(10,10,15,0.85)",
                      backdropFilter: "blur(12px)",
                      border: `1px solid ${art.accent}33`,
                    }}
                  >
                    <h3 className="font-bold text-text text-sm">{art.title}</h3>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-mono text-xs text-text-secondary">{art.medium}</span>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-sm"
                        style={{ background: `${art.accent}22`, color: art.accent }}
                      >
                        {art.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Top accent border glow on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${art.accent}, transparent)` }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
