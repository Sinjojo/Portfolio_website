"use client";

import { motion } from "framer-motion";
import { StickerCard } from "./TiltCard";
import { GithubIcon, XIcon, LinkedinIcon, MailIcon } from "./Icons";
import Image from "next/image";
const socials = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com" },
  { icon: XIcon, label: "Twitter/X", href: "https://twitter.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: MailIcon, label: "Email", href: "salankrmx@gmail.com" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-16 overflow-hidden neo-section-cream neo-graph"
      style={{ borderTop: "none" }}
    >
      {/* ── Floating background text ────────────────────────────────── */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 -left-4 text-[18vw] font-black leading-none text-neo-ink opacity-[0.04] uppercase tracking-tighter"
      >
        MAKE
      </span>
      <span
        aria-hidden
        className="pointer-events-none select-none absolute bottom-8 right-0 text-[14vw] font-black leading-none text-neo-ink opacity-[0.04] uppercase tracking-tighter"
      >
        BUILD
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-4rem)] py-16">

        {/* ── LEFT: Photo sticker card ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex justify-center lg:justify-start flex-shrink-0"
        >
          <div className="relative">
            {/* Decorative offset rectangle behind the card */}
            <div
              className="absolute inset-0 bg-neo-secondary border-4 border-neo-ink"
              style={{ translate: "12px 12px" }}
            />

            <StickerCard className="relative w-64 h-80 sm:w-72 sm:h-96">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/jojo.jpeg"
                  alt="Jojo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Corner badge */}
              <div
                className="absolute -top-5 -right-5 neo-badge bg-neo-accent rotate-12 z-10"
                style={{ fontSize: "0.6rem" }}
              >
                OPEN TO WORK
              </div>
            </StickerCard>
          </div>
        </motion.div>

        {/* ── RIGHT: Name, role, CTAs ──────────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7 max-w-2xl lg:pl-8"
        >
          {/* Status pill */}
          <motion.div variants={item}>
            <span className="neo-badge bg-neo-secondary inline-flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Display name */}
          <motion.div variants={item}>
            <h1 className="neo-display text-[clamp(3.5rem,9vw,7rem)] leading-[0.88] uppercase">
              <span className="block">Salan</span>
              {/* Outlined stroke line for visual contrast */}
              <span
                className="block neo-stroke"
                style={{
                  WebkitTextStroke: "3px #000",
                  color: "transparent",
                  // fill with accent colour as a painted-on effect
                  WebkitTextFillColor: "transparent",
                  // layer a filled version on top via text-shadow trick
                  textShadow: "none",
                  position: "relative",
                }}
              >
                Sunuwar
              </span>
              <span className="block" style={{ color: "var(--neo-accent)" }}>aka Sinjojo</span>
            </h1>
          </motion.div>

          {/* Role — bordered label box */}
          <motion.div variants={item}>
            <div
              className="inline-block border-4 border-neo-ink px-4 py-2 bg-neo-secondary"
              style={{ boxShadow: "5px 5px 0 0 #000", rotate: "-1deg" }}
            >
              <p className="neo-label text-sm text-neo-ink">
                AI & Data Science student, enthusiast.
              </p>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-xl font-bold leading-snug max-w-md"
          >
            Building things at the intersection of art, engineering and chaos.Make sure to drop a message.

          </motion.p>

          {/* Social icon buttons */}
          <motion.div variants={item} className="flex items-center gap-3 flex-wrap">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center border-4 border-neo-ink bg-neo-white shadow-neo-sm
                           hover:bg-neo-secondary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000]
                           active:translate-x-1 active:translate-y-1 active:shadow-none
                           transition-all duration-100"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="neo-btn neo-btn-primary text-sm"
            >
              View Projects →
            </button>
            <button
              onClick={() => scrollTo("blogs")}
              className="neo-btn neo-btn-outline text-sm"
            >
              Read Blog
            </button>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={item}
            className="flex items-center gap-2 opacity-50"
          >
            <span className="neo-label text-[10px]">Scroll ↓</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom marquee band ──────────────────────────────────────── */}
      <div
        className="absolute bottom-0 inset-x-0 border-t-4 border-neo-ink bg-neo-accent overflow-hidden h-10 flex items-center"
        aria-hidden
      >
        <div className="neo-marquee-track whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="neo-label text-[11px] mx-6 text-neo-ink">
              ✦ DEVELOPER ✦ LEARNER ✦ BUILDER ✦ DESIGNER ✦ ENGINEER
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
