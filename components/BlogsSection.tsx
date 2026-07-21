"use client";

import { motion } from "framer-motion";
import { ClockIcon, TagIcon, ArrowRightIcon } from "./Icons";
import { SectionWrapper, fadeUpVariants } from "./SectionWrapper";

const blogs = [
  {
    id: "blog-1",
    title: "Building a Distributed Inference Cluster with Raspberry Pi 5 and Coral TPUs",
    date: "Dec 12, 2024",
    readTime: "12 min",
    tag: "Hardware",
    tagColor: "#f59e0b",
    excerpt: "How I built a 6-node edge AI cluster that runs quantized LLMs locally for under $800, with full Kubernetes orchestration.",
    href: "#",
  },
  {
    id: "blog-2",
    title: "WebGPU: The Future of High-Performance Browser Graphics",
    date: "Nov 28, 2024",
    readTime: "8 min",
    tag: "Web Dev",
    tagColor: "#7c3aed",
    excerpt: "A deep dive into WebGPU compute shaders, comparing performance benchmarks against WebGL and native Vulkan.",
    href: "#",
  },
  {
    id: "blog-3",
    title: "Zero-Knowledge Proofs: A Practical Introduction for Developers",
    date: "Nov 15, 2024",
    readTime: "15 min",
    tag: "Cryptography",
    tagColor: "#06b6d4",
    excerpt: "Implementing a basic zkSNARK circuit from scratch using Circom and snarkjs, with real-world use cases.",
    href: "#",
  },
  {
    id: "blog-4",
    title: "The Art of Writing a Kernel Module: From Hello World to USB Driver",
    date: "Oct 30, 2024",
    readTime: "20 min",
    tag: "Systems",
    tagColor: "#ef4444",
    excerpt: "A step-by-step guide to writing Linux kernel modules in C, culminating in a custom USB HID device driver.",
    href: "#",
  },
  {
    id: "blog-5",
    title: "Designing for the Dark Web: Aesthetics of Cyberpunk UI",
    date: "Oct 12, 2024",
    readTime: "6 min",
    tag: "Design",
    tagColor: "#ec4899",
    excerpt: "Breaking down the visual language of cyberpunk interfaces — glassmorphism, neon glows, and dark aesthetics done right.",
    href: "#",
  },
];

export function BlogsSection() {
  return (
    <SectionWrapper id="blogs" label="// 03. thoughts & writings">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Section header */}
      <motion.div variants={fadeUpVariants} className="mb-12 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-black lg:text-5xl">
          <span className="gradient-text">Blogs</span>
        </h2>
        <p className="mt-3 text-text-secondary max-w-lg">
          Technical deep-dives, experiments, and occasional opinions on software and hardware.
        </p>
      </motion.div>

      {/* Blog list */}
      <div className="mx-auto max-w-4xl space-y-4 px-6">
        {blogs.map((blog, i) => (
          <motion.a
            key={blog.id}
            href={blog.href}
            variants={fadeUpVariants}
            custom={i}
            whileHover={{ x: 6 }}
            className="group glass-card flex flex-col gap-3 overflow-hidden rounded-2xl p-6 md:flex-row md:items-start transition-all duration-200 hover:border-accent/30"
          >
            {/* Date column */}
            <div className="flex flex-shrink-0 items-center gap-2 text-text-secondary md:w-36 md:flex-col md:items-start md:gap-1">
              <ClockIcon size={13} />
              <span className="font-mono text-xs">{blog.date}</span>
              <span className="hidden md:block font-mono text-xs text-accent/60">
                {blog.readTime} read
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-xs"
                  style={{
                    background: `${blog.tagColor}18`,
                    border: `1px solid ${blog.tagColor}33`,
                    color: blog.tagColor,
                  }}
                >
                <TagIcon size={10} />
                  {blog.tag}
                </span>
                <span className="font-mono text-xs text-accent/60 md:hidden">
                  {blog.readTime} read
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-text group-hover:text-accent transition-colors duration-200">
                {blog.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {blog.excerpt}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex flex-shrink-0 items-center self-center">
              <ArrowRightIcon
                size={18}
                className="text-text-secondary opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-1"
              />
            </div>
          </motion.a>
        ))}
      </div>

      {/* View all */}
      <motion.div variants={fadeUpVariants} className="mt-10 flex justify-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.04, boxShadow: "0 0 20px #7c3aed55" }}
          whileTap={{ scale: 0.96 }}
          className="rounded-xl border border-accent/30 bg-accent/10 px-6 py-3 font-medium text-accent transition-all duration-200 hover:bg-accent/20"
        >
          View All Posts →
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}
