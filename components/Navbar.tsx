"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Hardware", href: "#hardware" },
  { label: "Blogs", href: "#blogs" },
  { label: "Art", href: "#art" },
];

export function Navbar() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-nav fixed top-0 left-0 right-0 z-50 h-16"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-mono text-lg font-bold"
        >
          <span className="gradient-text">&lt;</span>
          <span className="text-text">dev</span>
          <span className="gradient-text">/&gt;</span>
        </motion.div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                whileHover={{ scale: 1.05 }}
                className="relative px-4 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
              </motion.a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#projects"
          onClick={(e) => handleScroll(e, "#projects")}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #7c3aed66" }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block rounded-lg border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/20 hover:border-accent/70"
        >
          View Work
        </motion.a>
      </div>
    </motion.nav>
  );
}
