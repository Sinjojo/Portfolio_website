"use client";

import { motion } from "framer-motion";
import {
  GithubIcon, XIcon, LinkedinIcon, MailIcon, ArrowDownIcon
} from "./Icons";
import { TiltCard } from "./TiltCard";

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com", color: "#e8e4f5" },
  { icon: XIcon, label: "Twitter/X", href: "https://twitter.com", color: "#1d9bf0" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com", color: "#0a66c2" },
  { icon: MailIcon, label: "Email", href: "mailto:hello@example.com", color: "#a855f7" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="section-base flex items-center justify-center pt-16"
    >
      {/* Background orbs */}
      <div className="orb absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-accent/20" />
      <div className="orb absolute right-1/4 bottom-1/4 h-64 w-64 bg-purple-900/30" style={{ animationDelay: "2s" }} />
      <div className="orb absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-accent/5" style={{ animationDelay: "1s" }} />

      {/* Grid lines for cyberpunk feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left: Photo Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center"
        >
          {/* Ambient orb behind the photo */}
          <div className="relative">
            <div className="orb absolute -inset-8 bg-accent/30 rounded-full" style={{ filter: "blur(40px)" }} />
            <TiltCard
              className="h-80 w-64 glass-card"
              glowColor="#7c3aed"
              intensity={18}
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6">
                {/* Photo placeholder */}
                <div className="relative h-44 w-44 overflow-hidden rounded-xl border-2 border-accent/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-purple-900/40 to-card-bg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="h-24 w-24 text-accent/60"
                      fill="currentColor"
                    >
                      <circle cx="50" cy="35" r="20" />
                      <ellipse cx="50" cy="80" rx="32" ry="22" />
                    </svg>
                  </div>
                  {/* Scan line */}
                  <div className="absolute inset-x-0 h-px animate-[float_3s_ease-in-out_infinite] bg-accent/60 shadow-[0_0_8px_#7c3aed]" />
                </div>
                <div className="text-center">
                  <p className="font-mono text-xs text-accent">// your photo here</p>
                  <p className="mt-1 text-xs text-text-secondary">Replace with your image</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </motion.div>

        {/* Right: Name, Tagline, Socials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
            <span className="font-mono text-xs text-text-secondary">
              available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-black leading-tight tracking-tight lg:text-7xl">
              <span className="text-text">Your</span>
              <br />
              <span className="gradient-text-shimmer">Name</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div variants={itemVariants}>
            <div className="font-mono text-sm text-accent">
              <span className="text-text-secondary">const role = </span>
              <span className="text-accent">&quot;</span>
              <span className="gradient-text">Full-Stack Developer &amp; Digital Craftsman</span>
              <span className="text-accent">&quot;</span>
              <span className="text-text-secondary">;</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-md text-lg leading-relaxed text-text-secondary"
          >
            Crafting immersive digital experiences at the intersection of
            <span className="text-accent"> art</span>,
            <span className="text-accent"> engineering</span>, and
            <span className="text-accent"> dark magic</span>.
          </motion.p>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{
                  scale: 1.2,
                  boxShadow: `0 0 20px ${color}66`,
                }}
                whileTap={{ scale: 0.9 }}
                className="glass-card flex h-11 w-11 items-center justify-center rounded-xl border border-card-border text-text-secondary transition-colors duration-200 hover:text-text"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 30px #7c3aed88",
              }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-light"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#blogs"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl border border-card-border px-6 py-3 font-semibold text-text-secondary transition-all duration-200 hover:border-accent/40 hover:text-text"
            >
              Read Blog
            </motion.a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-text-secondary/60"
          >
            <ArrowDownIcon size={14} />
            <span className="font-mono text-xs">scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
