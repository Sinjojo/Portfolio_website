"use client";

import { motion } from "framer-motion";
import { GithubIcon, XIcon, LinkedinIcon, MailIcon, HeartIcon } from "./Icons";

const links = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: XIcon, href: "https://twitter.com", label: "Twitter/X" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: MailIcon, href: "mailto:hello@example.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-card-border py-12">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="font-mono text-lg font-bold">
            <span className="gradient-text">&lt;</span>
            <span className="text-text">dev</span>
            <span className="gradient-text">/&gt;</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {links.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card flex h-9 w-9 items-center justify-center rounded-xl text-text-secondary transition-colors duration-200 hover:text-accent"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1.5 font-mono text-xs text-text-secondary">
            Built with
            <HeartIcon size={10} />
            &amp; dark magic · {new Date().getFullYear()}
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-text-secondary/40">
            // cursor.drag(mouse) → dragon.follow() → portfolio.impress()
          </p>
        </div>
      </div>
    </footer>
  );
}
