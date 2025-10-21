"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollThread({
  color = "#B33C46",
  width = 3,
  offsetX = 0,
  baseAmplitude = 10,
  bigAmplitude = 26,
  pitch = 80,
  bigEvery = 6,
  startAfter = "#home",
}) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const [docH, setDocH] = useState(2000);
  const [startOffset, setStartOffset] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    const build = () => {
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      setDocH(height);

      const w = svg.clientWidth || 80;
      const cx = Math.round(w / 2) + offsetX;

      let d = `M ${cx} 0`;
      const cycles = Math.ceil(height / pitch);
      for (let i = 0; i < cycles; i++) {
        const amp =
          i !== 0 && i % bigEvery === 0 ? bigAmplitude : baseAmplitude;
        const y1 = i * pitch + pitch * 0.5;
        const y2 = i * pitch + pitch;
        d += ` Q ${cx + amp} ${y1 - pitch * 0.25}, ${cx} ${y1}`;
        d += ` Q ${cx - amp} ${y2 - pitch * 0.25}, ${cx} ${y2}`;
      }

      path.setAttribute("d", d);
      path.setAttribute("pathLength", "1");
      path.style.strokeDasharray = "1";
      path.style.strokeDashoffset = "1";
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [offsetX, baseAmplitude, bigAmplitude, pitch, bigEvery]);

  useEffect(() => {
    const el =
      typeof startAfter === "string"
        ? document.querySelector(startAfter)
        : startAfter;
    if (!el) return;
    const setStart = () => {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      setStartOffset(top + el.offsetHeight);
    };
    setStart();
    window.addEventListener("resize", setStart);
    window.addEventListener("load", setStart);
    return () => {
      window.removeEventListener("resize", setStart);
      window.removeEventListener("load", setStart);
    };
  }, [startAfter]);

  // Lenis driven progress
  useEffect(() => {
    const path = pathRef.current;
    const lenis = window.lenis;
    if (!path || !lenis) return;

    const off = lenis.on("scroll", ({ scroll }) => {
      const max = Math.max(1, docH - window.innerHeight - startOffset);
      const raw = (scroll - startOffset) / max;
      const p = Math.min(1, Math.max(0, raw));
      path.style.strokeDashoffset = String(1 - p);
      setVisible(scroll >= startOffset - 1);
    });

    return () => off?.();
  }, [docH, startOffset]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 flex justify-center transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative h-full w-16">
        <svg
          ref={svgRef}
          className="absolute left-0 top-0 h-[var(--doc-h)] w-full"
          style={{ ["--doc-h"]: `${docH}px` }}
          viewBox={`0 0 80 ${docH}`}
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
