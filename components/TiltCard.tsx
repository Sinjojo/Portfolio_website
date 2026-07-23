"use client";

import { useState } from "react";

interface StickerCardProps {
  children: React.ReactNode;
  className?: string;
  /** bg color token — default white */
  bg?: string;
}

/**
 * Neo-brutalist photo card.
 *
 * Resting state : rotated -2deg, large hard black shadow.
 * Hover state   : snaps to +2deg (opposite), shadow shifts to give a physical
 *                 "flip" feel — the card looks like it was nudged.
 * Active state  : hard presses down — shadow collapses to zero.
 *
 * No 3D perspective, no glow, no spring physics.
 * The interaction language is "sticker/mechanical", not "atmospheric/fluid".
 */
export function StickerCard({
  children,
  className = "",
  bg = "#FFFFFF",
}: StickerCardProps) {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      className={`sticker-card relative overflow-hidden ${className}`}
      style={{
        backgroundColor: bg,
        /* Press-down on click: cover the shadow */
        transform: active ? "translate(10px, 10px)" : undefined,
        boxShadow: active ? "none" : undefined,
      }}
    >
      {children}
    </div>
  );
}


