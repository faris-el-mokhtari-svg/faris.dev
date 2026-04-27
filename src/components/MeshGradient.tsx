"use client";
import { useEffect, useRef } from "react";

export default function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Blob = { x: number; y: number; vx: number; vy: number; r: number; color: string };

    const colors = [
      "rgba(255, 85, 0, 0.90)",
      "rgba(255, 120, 30, 0.80)",
      "rgba(255, 160, 60, 0.70)",
      "rgba(255, 85, 0, 0.60)",
      "rgba(255, 200, 80, 0.55)",
    ];

    let blobs: Blob[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      const w = canvas.width;
      const h = canvas.height;
      blobs = colors.map((color, i) => ({
        x: w * (0.3 + Math.random() * 0.6),
        y: h * (0.1 + Math.random() * 0.5),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.min(w, h) * (0.28 + i * 0.06),
        color,
      }));
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r) b.vx = Math.abs(b.vx);
        if (b.x > w + b.r) b.vx = -Math.abs(b.vx);
        if (b.y < -b.r) b.vy = Math.abs(b.vy);
        if (b.y > h + b.r) b.vy = -Math.abs(b.vy);

        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.color);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);

    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: "blur(48px)", transform: "scale(1.08)" }}
    />
  );
}
