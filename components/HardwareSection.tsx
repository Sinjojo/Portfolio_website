"use client";

import { motion } from "framer-motion";
import { SectionWrapper, fadeUpVariants } from "./SectionWrapper";

const hardwareItems = [
  {
    id: "hw-1",
    title: "Custom Mechanical Keyboard",
    description: "Hand-wired 65% layout with Gateron Black switches, brass weight, and QMK firmware with RGB underglow.",
    icon: "⌨️",
    tags: ["QMK", "C", "PCB Design", "3D Print"],
    specs: ["65% layout", "Gateron Black", "Brass plate"],
  },
  {
    id: "hw-2",
    title: "FPGA Neural Accelerator",
    description: "Custom FPGA-based inference engine running quantized transformer models at 10x CPU speed.",
    icon: "🔲",
    tags: ["VHDL", "Xilinx", "Python", "ONNX"],
    specs: ["Artix-7 FPGA", "INT8 quant", "PCIe Gen3"],
  },
  {
    id: "hw-3",
    title: "Ambient RGB Desktop Bias Light",
    description: "Raspberry Pi powered LED strips that mirror screen content for immersive computing.",
    icon: "💡",
    tags: ["Raspberry Pi", "Python", "OpenCV", "LED"],
    specs: ["WS2812B LEDs", "60fps capture", "USB HID"],
  },
  {
    id: "hw-4",
    title: "DIY Nixie Tube Clock",
    description: "Vintage Nixie IN-14 tube clock with GPS synchronization and custom PCB with HV supply.",
    icon: "🕰️",
    tags: ["KiCad", "STM32", "HV PSU", "GPS"],
    specs: ["IN-14 tubes", "GPS sync", "CNC enclosure"],
  },
  {
    id: "hw-5",
    title: "Network-Attached Compute Cluster",
    description: "6-node Raspberry Pi 5 cluster running Kubernetes with distributed GPU workloads via Coral TPUs.",
    icon: "🖥️",
    tags: ["Kubernetes", "Ansible", "Coral TPU", "Ceph"],
    specs: ["6x Pi 5", "Coral USB TPU", "10Gbps fabric"],
  },
  {
    id: "hw-6",
    title: "LoRa Mesh Sensor Network",
    description: "Solar-powered LoRa mesh nodes for off-grid environmental monitoring across 15km range.",
    icon: "📡",
    tags: ["LoRa", "Meshtastic", "Solar", "MQTT"],
    specs: ["15km range", "Solar power", "Encrypted mesh"],
  },
];

export function HardwareSection() {
  return (
    <SectionWrapper id="hardware" label="// 02. hardware builds" className="bg-gradient-to-b from-bg via-[#0b0b12] to-bg">
      {/* Decorative line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Section header */}
      <motion.div variants={fadeUpVariants} className="mb-12 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-black lg:text-5xl">
          <span className="gradient-text">Hardware</span>
        </h2>
        <p className="mt-3 text-text-secondary max-w-lg">
          Soldering iron meets source code — physical builds that blur the line between software and silicon.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {hardwareItems.map((item, i) => (
          <motion.div
            key={item.id}
            variants={fadeUpVariants}
            custom={i}
            className="hover-lift glass-card group relative overflow-hidden rounded-2xl p-6"
          >
            {/* Icon */}
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-2xl shadow-inner">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-text">{item.title}</h3>
                <div className="mt-1 flex flex-wrap gap-1">
                  {item.specs.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm bg-card-border/60 px-1.5 py-0.5 font-mono text-[10px] text-text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Hover glow line */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Side accent */}
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
