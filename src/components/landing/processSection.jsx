"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    { title: "Discover", icon: "/images/processSection/bulb.svg", subtitle: "Uncover your brand DNA." },
    { title: "Define", icon: "/images/processSection/define.svg", subtitle: "Uncover your brand DNA." },
    { title: "Design", icon: "/images/processSection/design.svg", subtitle: "Uncover your brand DNA." },
    { title: "Deliver", icon: "/images/processSection/deliver.svg", subtitle: "Uncover your brand DNA." },
  ];

  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  // Build a path that loops around each icon
  // Build a path that detours around each icon without overlapping its ring
  const buildPath = () => {
    const section = sectionRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!section || !svg || !path) return;

    const iconEls = Array.from(section.querySelectorAll(".process-icon"));
    if (!iconEls.length) return;

    // Size SVG to section
    const sRect = section.getBoundingClientRect();
    svg.setAttribute("width", `${sRect.width}`);
    svg.setAttribute("height", `${sRect.height}`);
    svg.setAttribute("viewBox", `0 0 ${sRect.width} ${sRect.height}`);

    const centerX = sRect.width * 0.5; // main spine x
    const pad = 12; // extra clearance from the icon's ring
    const ease = 28; // small Bezier ease in-out so corners are not sharp

    // Collect icon centers and radii from actual DOM size
    const nodes = iconEls.map(el => {
      const r = el.getBoundingClientRect();
      return {
        cx: r.left - sRect.left + r.width / 2,
        cy: r.top - sRect.top + r.height / 2,
        r: r.width / 2 + pad, // loop radius just outside the ring
      };
    });

    let d = "";
    // start a little above the first icon's loop
    let y = Math.max(0, nodes[0].cy - nodes[0].r - 60);
    d += `M ${centerX} ${y}`;

    nodes.forEach((n, i) => {
      const topY = n.cy - n.r;
      const botY = n.cy + n.r;

      // alternate which side we bulge to
      const goRight = i % 2 === 0;
      const sweepFlag = goRight ? 1 : 0;
      const hx = centerX + (goRight ? ease : -ease);

      // vertical approach to just above the loop
      d += ` L ${centerX} ${topY - 12}`;

      // ease into the arc so there is no kink on the spine
      d += ` C ${centerX} ${topY - 6}, ${hx} ${topY - 2}, ${centerX} ${topY}`;

      // half-circle detour around the icon
      // start at (centerX, topY) end at (centerX, botY)
      d += ` A ${n.r} ${n.r} 0 0 ${sweepFlag} ${centerX} ${botY}`;

      // ease back to the spine
      d += ` C ${hx} ${botY + 2}, ${centerX} ${botY + 6}, ${centerX} ${botY + 12}`;

      // continue down to next icon
      d += ` L ${centerX} ${botY + 40}`;
      y = botY + 40;
    });

    // finish straight down
    d += ` L ${centerX} ${sRect.height + 40}`;

    path.setAttribute("d", d);

    // dash setup with a duplicate length to avoid mid-path seam
    const total = path.getTotalLength();
    path.style.strokeDasharray = `${total} ${total}`;
    path.style.strokeDashoffset = `${total}`;
    return total;
  };


  // Scroll-progress to dashoffset
  const updateProgress = (totalLen) => {
    const section = sectionRef.current;
    const path = pathRef.current;
    if (!section || !path) return;

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    // progress 0 when section is just below viewport, 1 when it has fully scrolled past
    const progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)));
    const offset = totalLen * (1 - progress); // MDN: stroke-dashoffset
    path.style.strokeDashoffset = `${offset}`;
  };

  useEffect(() => {
    let totalLen = buildPath();
    if (typeof totalLen !== "number") totalLen = 1;

    const onScroll = () => updateProgress(totalLen);
    const onResize = () => {
      const t = buildPath();
      if (typeof t === "number") {
        totalLen = t;
        updateProgress(totalLen);
      }
    };

    // Lenis if present, else native scroll
    const lenis = typeof window !== "undefined" ? window.lenis : null;
    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", onScroll);
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    // initial paint
    updateProgress(totalLen);

    return () => {
      if (lenis && typeof lenis.off === "function") {
        lenis.off("scroll", onScroll);
      } else {
        window.removeEventListener("scroll", onScroll);
      }
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section relative overflow-hidden bg-beige"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: 'url(/images/processSection/bg.svg)', width: "110vw" }}
      />

      {/* SVG line overlay */}
      {/* <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 z-10"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d=""
          fill="none"
          stroke="#8B2E2E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}

      <div className="container relative z-20">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 md:mb-24">
          <span className="text-[#8B2E2E]">We see</span>{" "}
          <span className="italic" style={{ fontFamily: 'Playfair Display, serif' }}>what others feel</span>
          <span className="text-[#8B2E2E]">!</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                <p className="text-[#8B2E2E] italic text-xl md:text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {step.subtitle}
                </p>
              </div>

              {/* add .process-icon so the SVG can find these */}
              <div className="relative flex-shrink-0 process-icon">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#8B2E2E] flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
              </div>

              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                <h3 className="text-3xl md:text-5xl font-bold">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
