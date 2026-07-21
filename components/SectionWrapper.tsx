"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function SectionWrapper({
  id,
  children,
  className = "",
  label,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.section
      ref={ref}
      id={id}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`section-base ${className}`}
    >
      {label && (
        <motion.div
          variants={fadeUpVariants}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            {label}
          </span>
        </motion.div>
      )}
      {children}
    </motion.section>
  );
}
