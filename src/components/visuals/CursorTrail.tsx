"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle purple cursor trail using canvas. Desktop only.
 * No-ops on touch devices and prefers-reduced-motion.
 */
export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarse || isReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type Dot = { x: number; y: number; life: number };
    const dots: Dot[] = [];

    const onMove = (e: MouseEvent) => {
      dots.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (dots.length > 60) dots.shift();
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.life -= 0.025;
        if (d.life <= 0) continue;
        const radius = 6 * d.life;
        const grad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, radius * 4);
        grad.addColorStop(0, `rgba(168, 85, 247, ${0.55 * d.life})`);
        grad.addColorStop(1, "rgba(168, 85, 247, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      while (dots.length && dots[0].life <= 0) dots.shift();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen"
    />
  );
}
