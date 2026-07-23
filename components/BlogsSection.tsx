"use client";

import { motion } from "framer-motion";
import { SectionWrapper, fadeUpVariants } from "./SectionWrapper";
import { ArrowRightIcon, ClockIcon } from "./Icons";

const blogs = [
  {
    id: "blog-1",
    title: "Building a Distributed Inference Cluster with Raspberry Pi 5 and Coral TPUs",
    date: "Dec 12, 2024",
    readTime: "12 min",
    tag: "HARDWARE",
    tagBg: "var(--neo-secondary)",
    excerpt: "How I built a 6-node edge AI cluster that runs quantized LLMs locally for under $800, with full Kubernetes orchestration.",
    href: "#",
    num: "01",
  },
  {
    id: "blog-2",
    title: "WebGPU: The Future of High-Performance Browser Graphics",
    date: "Nov 28, 2024",
    readTime: "8 min",
    tag: "WEB DEV",
    tagBg: "var(--neo-muted)",
    excerpt: "A deep dive into WebGPU compute shaders — comparing performance benchmarks against WebGL and native Vulkan.",
    href: "#",
    num: "02",
  },
  {
    id: "blog-3",
    title: "Zero-Knowledge Proofs: A Practical Introduction for Developers",
    date: "Nov 15, 2024",
    readTime: "15 min",
    tag: "CRYPTO",
    tagBg: "var(--neo-accent)",
    excerpt: "Implementing a basic zkSNARK circuit from scratch using Circom and snarkjs, with real-world use cases.",
    href: "#",
    num: "03",
  },
  {
    id: "blog-4",
    title: "The Art of Writing a Kernel Module: From Hello World to USB Driver",
    date: "Oct 30, 2024",
    readTime: "20 min",
    tag: "SYSTEMS",
    tagBg: "var(--neo-secondary)",
    excerpt: "A step-by-step guide to writing Linux kernel modules in C, culminating in a custom USB HID device driver.",
    href: "#",
    num: "04",
  },
  {
    id: "blog-5",
    title: "Designing for Impact: The Visual Language of Neo-Brutalism",
    date: "Oct 12, 2024",
    readTime: "6 min",
    tag: "DESIGN",
    tagBg: "var(--neo-muted)",
    excerpt: "Breaking down the visual language of neo-brutalist interfaces — thick borders, hard shadows, and raw type done right.",
    href: "#",
    num: "05",
  },
];

export function BlogsSection() {
  return (
    <SectionWrapper id="blogs" className="neo-section-cream neo-graph">
      <div className="mx-auto max-w-4xl">
        {/* ── Header ── */}
        <motion.div variants={fadeUpVariants} className="mb-14">
          <span className="neo-label text-xs mb-3 block">03 / Thoughts &amp; Writings</span>
          <h2
            className="neo-display text-[clamp(3rem,8vw,6rem)] uppercase"
            style={{ display: "inline-block" }}
          >
            Blogs
          </h2>
          <p className="mt-4 text-xl font-bold max-w-lg">
            Technical deep-dives, experiments, and opinions on software and hardware.
          </p>
        </motion.div>

        {/* ── Blog rows ── */}
        <div className="flex flex-col gap-0">
          {blogs.map((blog, i) => (
            <motion.a
              key={blog.id}
              href={blog.href}
              variants={fadeUpVariants}
              custom={i}
              className="group flex items-start gap-5 border-2 border-neo-ink border-b-0 last:border-b-2 p-5
                         bg-neo-white hover:bg-neo-secondary
                         transition-colors duration-100"
            >
              {/* Big numbered index */}
              <span
                className="flex-shrink-0 font-black text-4xl leading-none text-neo-ink opacity-20
                           group-hover:opacity-60 transition-opacity duration-100"
                aria-hidden
              >
                {blog.num}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="neo-label text-[9px] border-2 border-neo-ink px-2 py-0.5"
                    style={{ background: blog.tagBg }}
                  >
                    {blog.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold opacity-50">
                    <ClockIcon size={11} />
                    {blog.readTime} · {blog.date}
                  </span>
                </div>
                <h3 className="font-black text-lg leading-snug tracking-tight mb-1 group-hover:underline decoration-2 underline-offset-2">
                  {blog.title}
                </h3>
                <p className="text-sm font-bold opacity-60 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              {/* Arrow */}
              <ArrowRightIcon
                size={20}
                className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-150"
              />
            </motion.a>
          ))}
        </div>

        {/* ── View all CTA ── */}
        <motion.div variants={fadeUpVariants} className="mt-10 flex justify-start">
          <a href="#" className="neo-btn neo-btn-black">
            View All Posts →
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
