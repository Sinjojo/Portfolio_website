"use client";

import { GithubIcon, XIcon, LinkedinIcon, MailIcon } from "./Icons";

const links = [
  { icon: GithubIcon,   href: "https://github.com",           label: "GitHub"    },
  { icon: XIcon,        href: "https://twitter.com",          label: "Twitter/X" },
  { icon: LinkedinIcon, href: "https://linkedin.com",         label: "LinkedIn"  },
  { icon: MailIcon,     href: "mailto:hello@example.com",     label: "Email"     },
];

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Hardware", href: "#hardware" },
  { label: "Blogs",    href: "#blogs"    },
  { label: "Art",      href: "#art"      },
];

function scrollTo(href: string) {
  document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="bg-neo-secondary border-t-4 border-neo-ink">
      {/* Top band */}
      <div className="border-b-4 border-neo-ink bg-neo-ink py-10 overflow-hidden relative">
        {/* Marquee on black */}
        <div className="neo-marquee-track whitespace-nowrap" aria-hidden>
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="neo-label text-[11px] mx-6 text-neo-white opacity-60">
              ✦ BUILD. SHIP. REPEAT. ✦ MAKE THINGS. ✦ BREAK THINGS. ✦ FIX THINGS.
            </span>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Logo + tagline */}
          <div>
            <div
              className="inline-block border-4 border-neo-ink px-4 py-2 bg-neo-accent mb-4"
              style={{ boxShadow: "5px 5px 0 0 #000" }}
            >
              <span className="neo-label text-lg text-neo-ink">DEV.PORTFOLIO</span>
            </div>
            <p className="font-bold text-sm max-w-xs opacity-75">
              Building things at the intersection of art, engineering, and chaos.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="neo-label text-xs mb-4 border-b-2 border-neo-ink pb-2">Quick Links</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                    className="font-bold text-sm hover:underline decoration-2 underline-offset-2"
                  >
                    → {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="neo-label text-xs mb-4 border-b-2 border-neo-ink pb-2">Find Me Online</p>
            <div className="flex gap-3 flex-wrap">
              {links.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border-4 border-neo-ink bg-neo-white shadow-neo-sm
                             hover:bg-neo-ink hover:text-neo-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000]
                             active:translate-x-1 active:translate-y-1 active:shadow-none
                             transition-all duration-100"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-4 border-t-2 border-neo-ink flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="neo-label text-[10px] opacity-60">
            © {new Date().getFullYear()} — Built with thick borders &amp; hard shadows
          </p>
          <span
            className="neo-badge bg-neo-accent text-[9px] animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            ✦ NO BLUR. NO GRADIENTS. ✦
          </span>
        </div>
      </div>
    </footer>
  );
}
