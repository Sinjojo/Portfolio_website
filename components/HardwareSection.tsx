"use client";

import { motion } from "framer-motion";
import { SectionWrapper, fadeUpVariants } from "./SectionWrapper";

const hardwareItems = [
  {
    id: "hw-1",
    title: "Custom Mechanical Keyboard",
    description: "Hand-wired 65% layout with Gateron Black switches, brass weight, and QMK firmware with RGB underglow.",
    emoji: "⌨️",
    tags: ["QMK", "C", "PCB Design", "3D Print"],
    specs: ["65% layout", "Gateron Black", "Brass plate"],
    cardBg: "#FFFFFF",
    headerBg: "var(--neo-secondary)",
  },
  {
    id: "hw-2",
    title: "FPGA Neural Accelerator",
    description: "Custom FPGA-based inference engine running quantized transformer models at 10× CPU speed.",
    emoji: "🔲",
    tags: ["VHDL", "Xilinx", "Python", "ONNX"],
    specs: ["Artix-7 FPGA", "INT8 quant", "PCIe Gen3"],
    cardBg: "#FFFFFF",
    headerBg: "var(--neo-muted)",
  },
  {
    id: "hw-3",
    title: "Ambient RGB Bias Light",
    description: "Raspberry Pi powered LED strips that mirror screen content for immersive computing.",
    emoji: "💡",
    tags: ["Raspberry Pi", "Python", "OpenCV", "LED"],
    specs: ["WS2812B LEDs", "60fps capture", "USB HID"],
    cardBg: "#FFFFFF",
    headerBg: "var(--neo-accent)",
  },
  {
    id: "hw-4",
    title: "DIY Nixie Tube Clock",
    description: "Vintage Nixie IN-14 tube clock with GPS synchronisation and custom PCB with HV supply.",
    emoji: "🕰️",
    tags: ["KiCad", "STM32", "HV PSU", "GPS"],
    specs: ["IN-14 tubes", "GPS sync", "CNC enclosure"],
    cardBg: "#FFFFFF",
    headerBg: "var(--neo-secondary)",
  },
  {
    id: "hw-5",
    title: "Compute Cluster",
    description: "6-node Raspberry Pi 5 cluster running Kubernetes with distributed GPU workloads via Coral TPUs.",
    emoji: "🖥️",
    tags: ["Kubernetes", "Ansible", "Coral TPU", "Ceph"],
    specs: ["6× Pi 5", "Coral USB TPU", "10Gbps fabric"],
    cardBg: "#FFFFFF",
    headerBg: "var(--neo-muted)",
  },
  {
    id: "hw-6",
    title: "LoRa Mesh Network",
    description: "Solar-powered LoRa mesh nodes for off-grid environmental monitoring across 15 km range.",
    emoji: "📡",
    tags: ["LoRa", "Meshtastic", "Solar", "MQTT"],
    specs: ["15 km range", "Solar power", "Encrypted mesh"],
    cardBg: "#FFFFFF",
    headerBg: "var(--neo-accent)",
  },
];

export function HardwareSection() {
  return (
    <SectionWrapper id="hardware" className="neo-section-yellow">
      <div className="mx-auto max-w-7xl">
        {/* ── Header ── */}
        <motion.div variants={fadeUpVariants} className="mb-14">
          <span className="neo-label text-xs mb-3 block">02 / Hardware Builds</span>
          <h2
            className="neo-display text-[clamp(3rem,8vw,6rem)] uppercase"
            style={{ display: "inline-block" }}
          >
            Hardware
          </h2>
          <p className="mt-4 text-xl font-bold max-w-lg">
            Soldering iron meets source code — physical builds that blur software and silicon.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hardwareItems.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUpVariants}
              custom={i}
              className="neo-card flex flex-col p-0 overflow-hidden"
            >
              {/* Coloured header band with emoji */}
              <div
                className="flex items-center gap-3 px-5 py-3 border-b-4 border-neo-ink"
                style={{ background: item.headerBg }}
              >
                <span className="text-3xl leading-none">{item.emoji}</span>
                <h3 className="font-black text-base uppercase leading-tight tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="flex flex-col flex-1 p-5 gap-4">
                {/* Spec pills */}
                <div className="flex flex-wrap gap-1.5">
                  {item.specs.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-black uppercase tracking-widest border-2 border-neo-ink px-2 py-0.5 bg-neo-bg"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm font-bold leading-relaxed flex-1 opacity-75">
                  {item.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t-2 border-neo-ink">
                  {item.tags.map((tag) => (
                    <span key={tag} className="neo-tag" style={{ background: "var(--neo-muted)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
