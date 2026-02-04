"use client";

import { useEffect, useRef } from "react";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  // Build a path that loops around each icon
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

    // Raw progress: 0 when section enters viewport, 1 when fully scrolled past
    const rawProgress = (vh - rect.top) / (rect.height + vh);

    // Add buffer: line starts after 20% scroll progress (adjust this value to start later/earlier)
    const bufferStart = 0.2;
    const progress = Math.max(0, Math.min(1, (rawProgress - bufferStart) / (1 - bufferStart)));

    const offset = totalLen * (1 - progress);
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
  const processes = [
    {
      title: "Diagnose",
      description: "Understand category & context",
      icon: "/images/servicesSection/diagnose.svg",
      align: "right",
    },
    {
      title: "Discover",
      description: "Uncover brand DNA",
      icon: "/images/servicesSection/discover.svg",
      align: "left",
    },
    {
      title: "Define",
      description: "Articulate story & tone",
      icon: "/images/servicesSection/define.svg",
      align: "right",
    },
    {
      title: "Design",
      description: "Visualise emotion",
      icon: "/images/servicesSection/design.svg",
      align: "left",
    },
    {
      title: "Deploy",
      description: "Execute across channels",
      icon: "/images/servicesSection/deploy.svg",
      align: "right",
    },
    {
      title: "Distill",
      description: "Measure, refine, evolve",
      icon: "/images/servicesSection/distill.svg",
      align: "left",
    },
    {
      title: "Deliver",
      description: "Track outcomes & optimize progress",
      icon: "/images/servicesSection/deliver.svg",
      align: "right",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-offwhite py-20 px-4 md:px-8 lg:px-12">
      {/* SVG line overlay */}
      <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 z-0"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d=""
          fill="none"
          stroke="#8B2E2E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 bg-offwhite">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-charcoal mb-6">
            Our Process
          </h2>
          <p className="text-base md:text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            We turn insight into identity, and identity into impact - guiding your brand from understanding to execution with purpose and precision.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">

          {processes.map((process, index) => (
            <div
              key={process.title}
              className="relative mb-20 last:mb-0"
            >
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 md:gap-16">
                {/* Left Content */}
                <div className={`${process.align === "left" ? "text-right" : ""}`}>
                  {process.align === "left" && (
                    <>
                      <h3 className="text-2xl md:text-3xl font-medium text-charcoal mb-2">
                        {process.title}
                      </h3>
                      <p className="text-xs md:text-base text-charcoal/60">
                        {process.description}
                      </p>
                    </>
                  )}
                </div>

                {/* Center Icon - Always in the middle */}
                <div className="relative flex-shrink-0 process-icon">
                  {/* Outer Circle - Beige */}
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#e8dcc8] flex items-center justify-center shadow-lg">
                    {/* Middle Circle - Light Beige */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f0e6d6] flex items-center justify-center">
                      {/* Inner Circle - Cherry Red */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#8B1E1E] flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <img
                          src={process.icon}
                          alt={process.title}
                          className="w-6 h-6 md:w-7 md:h-7 invert brightness-0"
                          style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className={`${process.align === "right" ? "text-left" : ""}`}>
                  {process.align === "right" && (
                    <>
                      <h3 className="text-2xl md:text-3xl font-medium text-charcoal mb-2">
                        {process.title}
                      </h3>
                      <p className="text-xs md:text-base text-charcoal/60">
                        {process.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
