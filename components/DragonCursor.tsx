"use client";

import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}

const SEGMENTS = 20;
const SEGMENT_LENGTH = 18;
const HEAD_SIZE = 14;

export function DragonCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef<Point>({ x: -200, y: -200 });
  const segments = useRef<Point[]>(
    Array.from({ length: SEGMENTS }, () => ({ x: -200, y: -200 }))
  );
  const isClicking = useRef(false);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to full viewport
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Track mouse
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseDown = () => { isClicking.current = true; };
    const onMouseUp = () => { isClicking.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Draw dragon head SVG path
    const drawHead = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      angle: number,
      scale: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.scale(scale, scale);

      // Glow
      ctx.shadowBlur = 18;
      ctx.shadowColor = "#a855f7";

      // Body of head (teardrop / diamond)
      ctx.beginPath();
      ctx.moveTo(HEAD_SIZE, 0);
      ctx.bezierCurveTo(HEAD_SIZE * 0.6, -HEAD_SIZE * 0.7, -HEAD_SIZE * 0.4, -HEAD_SIZE * 0.6, -HEAD_SIZE * 0.8, 0);
      ctx.bezierCurveTo(-HEAD_SIZE * 0.4, HEAD_SIZE * 0.6, HEAD_SIZE * 0.6, HEAD_SIZE * 0.7, HEAD_SIZE, 0);
      const headGrad = ctx.createLinearGradient(-HEAD_SIZE, 0, HEAD_SIZE, 0);
      headGrad.addColorStop(0, "#4c1d95");
      headGrad.addColorStop(0.5, "#7c3aed");
      headGrad.addColorStop(1, "#a855f7");
      ctx.fillStyle = headGrad;
      ctx.fill();

      // Horn
      ctx.beginPath();
      ctx.moveTo(HEAD_SIZE * 0.3, -HEAD_SIZE * 0.3);
      ctx.lineTo(HEAD_SIZE * 0.9, -HEAD_SIZE * 0.9);
      ctx.lineTo(HEAD_SIZE * 0.5, -HEAD_SIZE * 0.2);
      ctx.fillStyle = "#c084fc";
      ctx.fill();

      // Eye
      ctx.beginPath();
      ctx.arc(HEAD_SIZE * 0.2, -HEAD_SIZE * 0.1, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#f0abfc";
      ctx.fill();
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#f0abfc";
      ctx.fill();

      ctx.restore();
    };

    // Draw a single body segment
    const drawSegment = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      angle: number,
      idx: number,
      total: number
    ) => {
      const t = idx / total;
      const width = HEAD_SIZE * 0.85 * (1 - t * 0.7);
      const alpha = 1 - t * 0.85;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.globalAlpha = alpha;

      ctx.shadowBlur = 10 * (1 - t);
      ctx.shadowColor = "#7c3aed";

      // Gradient fill per segment
      const grad = ctx.createLinearGradient(-width, 0, width, 0);
      grad.addColorStop(0, `hsl(${265 + t * 30}, 80%, ${30 + t * 10}%)`);
      grad.addColorStop(1, `hsl(${285 + t * 20}, 90%, ${50 + t * 5}%)`);

      ctx.beginPath();
      ctx.ellipse(0, 0, width, width * 0.45, 0, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Scale pattern
      if (idx % 2 === 0) {
        ctx.beginPath();
        ctx.arc(0, -width * 0.2, width * 0.3, Math.PI, 0);
        ctx.strokeStyle = `rgba(192, 132, 252, ${0.3 * alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      ctx.restore();
    };

    // Smooth interpolation
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const segs = segments.current;
      const mouse = mousePos.current;
      const clicking = isClicking.current;

      // Move head toward mouse
      segs[0].x = lerp(segs[0].x, mouse.x, 0.22);
      segs[0].y = lerp(segs[0].y, mouse.y, 0.22);

      // Chain segments
      for (let i = 1; i < SEGMENTS; i++) {
        const prev = segs[i - 1];
        const curr = segs[i];
        const dx = prev.x - curr.x;
        const dy = prev.y - curr.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > SEGMENT_LENGTH) {
          const ratio = (dist - SEGMENT_LENGTH) / dist;
          curr.x += dx * ratio * 0.6;
          curr.y += dy * ratio * 0.6;
        }
        // Smooth trailing
        curr.x = lerp(curr.x, prev.x - (dx / Math.max(dist, 1)) * SEGMENT_LENGTH, 0.15);
        curr.y = lerp(curr.y, prev.y - (dy / Math.max(dist, 1)) * SEGMENT_LENGTH, 0.15);
      }

      // Draw body segments (back to front)
      for (let i = SEGMENTS - 1; i >= 1; i--) {
        const curr = segs[i];
        const next = segs[i - 1];
        const angle = Math.atan2(next.y - curr.y, next.x - curr.x);
        drawSegment(ctx, curr.x, curr.y, angle, i, SEGMENTS);
      }

      // Draw head
      const headAngle =
        SEGMENTS > 1
          ? Math.atan2(segs[0].y - segs[1].y, segs[0].x - segs[1].x)
          : 0;
      const headScale = clicking ? 1.35 : 1;
      drawHead(ctx, segs[0].x, segs[0].y, headAngle, headScale);

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="dragon-cursor-canvas"
      aria-hidden="true"
    />
  );
}
