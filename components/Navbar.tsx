"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Hardware", href: "#hardware" },
  { label: "Blogs",    href: "#blogs"    },
  { label: "Art",      href: "#art"      },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neo-bg border-b-4 border-neo-ink">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="neo-label flex items-center gap-2 text-base sm:text-lg"
          >
            <span
              className="inline-block bg-neo-accent border-4 border-neo-ink px-2 py-0.5 text-neo-ink"
              style={{ boxShadow: "3px 3px 0 0 #000" }}
            >
              DEV
            </span>
            <span className="hidden sm:inline">.PORTFOLIO</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="neo-label block px-4 py-2 text-neo-ink border-4 border-transparent transition-all duration-100
                             hover:border-neo-ink hover:bg-neo-secondary hover:shadow-neo-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="mailto:hello@example.com"
            className="neo-btn neo-btn-primary hidden md:inline-flex text-sm"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden border-4 border-neo-ink bg-neo-secondary p-2 shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
          >
            <span className="block w-6 h-0.5 bg-neo-ink mb-1.5" />
            <span className="block w-6 h-0.5 bg-neo-ink mb-1.5" />
            <span className="block w-6 h-0.5 bg-neo-ink" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 bg-neo-bg border-b-4 border-neo-ink md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b-2 border-neo-ink">
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); setOpen(false); }}
                    className="neo-label block px-6 py-4 hover:bg-neo-secondary transition-colors duration-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="p-4">
                <a href="mailto:hello@example.com" className="neo-btn neo-btn-primary w-full justify-center">
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
