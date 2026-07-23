"use client";

import { motion } from "framer-motion";
import { SectionWrapper, fadeUpVariants } from "./SectionWrapper";

const artPieces = [
  {
    id: "art-1",
    title: "Neon Requiem",
    medium: "Digital / Generative",
    year: "2024",
    height: "h-56",
    bg: "var(--neo-muted)",
    svgType: "circuit",
  },
  {
    id: "art-2",
    title: "Silicon Dreams",
    medium: "Pixel Art",
    year: "2024",
    height: "h-80",
    bg: "var(--neo-secondary)",
    svgType: "grid",
  },
  {
    id: "art-3",
    title: "Void Protocol",
    medium: "3D Render / Blender",
    year: "2023",
    height: "h-48",
    bg: "var(--neo-ink)",
    svgType: "dots",
    onDark: true,
  },
  {
    id: "art-4",
    title: "Chromatic Entropy",
    medium: "Generative / p5.js",
    year: "2024",
    height: "h-72",
    bg: "var(--neo-accent)",
    svgType: "wave",
  },
  {
    id: "art-5",
    title: "Quantum Garden",
    medium: "AI-Assisted / Stable Diffusion",
    year: "2024",
    height: "h-64",
    bg: "var(--neo-secondary)",
    svgType: "hex",
  },
  {
    id: "art-6",
    title: "Data Specter",
    medium: "ASCII Art / Code",
    year: "2023",
    height: "h-52",
    bg: "var(--neo-ink)",
    svgType: "glitch",
    onDark: true,
  },
  {
    id: "art-7",
    title: "Binary Bloom",
    medium: "Shader / GLSL",
    year: "2024",
    height: "h-80",
    bg: "var(--neo-muted)",
    svgType: "circuit",
  },
  {
    id: "art-8",
    title: "Electric Ether",
    medium: "Procreate / iPad",
    year: "2023",
    height: "h-60",
    bg: "var(--neo-accent)",
    svgType: "wave",
  },
];

function SvgMotif({ type, onDark }: { type: string; onDark?: boolean }) {
  const stroke = onDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)";
  const fill   = onDark ? "rgba(255,255,255,0.2)"  : "rgba(0,0,0,0.15)";

  if (type === "circuit") return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
      <path d="M20,100 h40 v-40 h40 v40 h40 M100,60 v-40 M100,140 v40" stroke={stroke} strokeWidth="2" fill="none" />
      <circle cx="100" cy="100" r="5" fill={fill} />
      <circle cx="60" cy="60" r="4" fill={fill} />
      <circle cx="140" cy="100" r="4" fill={fill} />
    </svg>
  );
  if (type === "grid") return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
      {Array.from({ length: 5 }, (_, i) => (
        <g key={i}>
          <line x1={i * 50} y1="0" x2={i * 50} y2="200" stroke={stroke} strokeWidth="1" />
          <line x1="0" y1={i * 50} x2="200" y2={i * 50} stroke={stroke} strokeWidth="1" />
        </g>
      ))}
      <circle cx="100" cy="100" r="45" fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  );
  if (type === "wave") return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
      {Array.from({ length: 6 }, (_, i) => (
        <path
          key={i}
          d={`M0,${50 + i * 22} Q50,${28 + i * 22} 100,${50 + i * 22} T200,${50 + i * 22}`}
          fill="none" stroke={stroke} strokeWidth="1.5"
        />
      ))}
    </svg>
  );
  if (type === "hex") return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
      {[{ x: 100, y: 100, r: 55 }, { x: 60, y: 60, r: 28 }, { x: 145, y: 145, r: 28 }].map((h, i) => (
        <polygon
          key={i}
          points={Array.from({ length: 6 }, (_, j) => {
            const a = (j * 60 - 30) * Math.PI / 180;
            return `${h.x + h.r * Math.cos(a)},${h.y + h.r * Math.sin(a)}`;
          }).join(" ")}
          fill="none" stroke={stroke} strokeWidth="1.5"
        />
      ))}
    </svg>
  );
  // dots / default
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 6 }, (_, col) => (
          <circle key={`${row}-${col}`} cx={18 + col * 34} cy={18 + row * 34} r="3" fill={fill} />
        ))
      )}
    </svg>
  );
}

export function ArtSection() {
  return (
    <SectionWrapper id="art" className="neo-section-black">
      <div className="mx-auto max-w-7xl">
        {/* ── Header ── */}
        <motion.div variants={fadeUpVariants} className="mb-14">
          <span className="neo-label text-xs mb-3 block text-neo-white opacity-60">04 / Creative Works</span>
          <h2
            className="neo-display text-[clamp(3rem,8vw,6rem)] uppercase text-neo-white"
            style={{ display: "inline-block" }}
          >
            Art
          </h2>
          <p className="mt-4 text-xl font-bold max-w-lg text-neo-white opacity-70">
            Generative, pixel, and 3D art — exploring code as a creative medium.
          </p>
        </motion.div>

        {/* ── Masonry ── */}
        <div className="neo-masonry">
          {artPieces.map((art, i) => (
            <motion.div
              key={art.id}
              variants={fadeUpVariants}
              custom={i}
              className="neo-masonry-item"
            >
              <div
                className={`group relative overflow-hidden border-4 border-neo-white ${art.height}
                  hover:-translate-y-1 hover:shadow-neo-md-w
                  transition-all duration-150`}
                style={{
                  background: art.bg,
                  boxShadow: "6px 6px 0 0 #fff",
                }}
              >
                <SvgMotif type={art.svgType} onDark={art.onDark} />

                {/* Info overlay — slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out">
                  <div
                    className="p-3 border-t-4 border-neo-white"
                    style={{ background: art.onDark ? "#fff" : "var(--neo-ink)" }}
                  >
                    <p
                      className="font-black text-sm uppercase tracking-tight"
                      style={{ color: art.onDark ? "var(--neo-ink)" : "#fff" }}
                    >
                      {art.title}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span
                        className="text-[10px] font-bold"
                        style={{ color: art.onDark ? "var(--neo-ink)" : "rgba(255,255,255,0.7)" }}
                      >
                        {art.medium}
                      </span>
                      <span
                        className="neo-label text-[9px] border-2 px-1.5 py-0.5"
                        style={{
                          borderColor: art.onDark ? "var(--neo-ink)" : "#fff",
                          background:  art.onDark ? "var(--neo-secondary)" : "var(--neo-accent)",
                          color: "var(--neo-ink)",
                        }}
                      >
                        {art.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
