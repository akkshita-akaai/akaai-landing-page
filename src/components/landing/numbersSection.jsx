"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

const steps = [
  { number: "01", title: "Discovery", description: "Deep-dive sessions to uncover your brand DNA.", icon: "/images/numbersSection/discovery.svg" },
  { number: "02", title: "Narrative Crafting", description: "Deep-dive sessions to uncover your brand DNA.", icon: "/images/numbersSection/narrativeCrafting.svg" },
  { number: "03", title: "Positioning", description: "Deep-dive sessions to uncover your brand DNA.", icon: "/images/numbersSection/positioning.svg" },
  { number: "04", title: "Voice & Tone", description: "Deep-dive sessions to uncover your brand DNA.", icon: "/images/numbersSection/voiceAndTone.svg" },
  { number: "05", title: "Rollout", description: "Deep-dive sessions to uncover your brand DNA.", icon: "/images/numbersSection/rollout.svg" },
];

function StepBubble({ step, className, largeIcon = false, isPositioning = false }) {
  return (
    <div className={clsx("numbers-node absolute flex flex-col items-center text-center", className)}>
      <div className={clsx(
        "relative mb-3 rounded-full border border-black/10",
        isPositioning && "border-none",
        "bg-transparent",
        largeIcon ? "w-44 h-44" : "w-32 h-32",
        "flex items-center justify-center"
      )}>
        <Image src={step.icon} alt={step.title} width={largeIcon ? 88 : 60} height={largeIcon ? 88 : 60} className="object-contain" priority />
      </div>
      <h3 className="text-[18px] md:text-[20px] font-bold text-black mb-1 leading-tight">
        {step.number} {step.title}
      </h3>
      <p className="text-[13px] text-black/70 max-w-[220px]">{step.description}</p>
    </div>
  );
}

export default function NumbersSection() {
  const deliverables = ["Brand Narrative Document", "Brand Narrative Document", "Brand Narrative Document"];

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const svgRef = useRef(null);
  const groupRef = useRef(null);

  // Fit the exported viewBox into our canvas with uniform scale and center
  const fitSvgToCanvas = () => {
    const vbW = 1126;
    const vbH = 1326;
    const canvas = canvasRef.current;
    const g = groupRef.current;
    const svg = svgRef.current;
    if (!canvas || !g || !svg) return;

    const r = canvas.getBoundingClientRect();
    svg.setAttribute("width", `${r.width}`);
    svg.setAttribute("height", `${r.height}`);
    svg.setAttribute("viewBox", `0 0 ${r.width} ${r.height}`);

    const sx = r.width / vbW;
    const sy = r.height / vbH;
    const s = Math.min(sx, sy);                 // keep aspect ratio
    const tx = (r.width - vbW * s) / 2;
    const ty = (r.height - vbH * s) / 2;

    g.setAttribute("transform", `translate(${tx} ${ty}) scale(${s})`);
  };

  // Prepare dash animation for all paths in the group
  const setupDrawAnimation = () => {
    const svg = svgRef.current;
    if (!svg) return [];
    const paths = Array.from(svg.querySelectorAll('[data-animate="draw"]'));
    const lens = paths.map(p => {
      const L = p.getTotalLength();
      p.style.strokeDasharray = `${L}`;
      p.style.strokeDashoffset = `${L}`;
      return L;
    });
    return lens;
  };

  const updateProgress = (lengths) => {
    const section = sectionRef.current;
    const svg = svgRef.current;
    if (!section || !svg || !lengths.length) return;

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)));

    const paths = svg.querySelectorAll('[data-animate="draw"]');
    paths.forEach((p, i) => {
      p.style.strokeDashoffset = `${lengths[i] * (1 - progress)}`;
    });
  };

  useEffect(() => {
    fitSvgToCanvas();
    let lengths = setupDrawAnimation();
    updateProgress(lengths);

    const onResize = () => {
      fitSvgToCanvas();
      lengths = setupDrawAnimation();
      updateProgress(lengths);
    };
    const onScroll = () => updateProgress(lengths);

    const ro = new ResizeObserver(onResize);
    if (canvasRef.current) ro.observe(canvasRef.current);

    const lenis = typeof window !== "undefined" ? window.lenis : null;
    if (lenis && typeof lenis.on === "function") lenis.on("scroll", onScroll);
    else window.addEventListener("scroll", onScroll, { passive: true });

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      ro.disconnect();
      if (lenis && typeof lenis.off === "function") lenis.off("scroll", onScroll);
      else window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-16 md:py-20 overflow-hidden bg-[#E8E3D8]">
      <div className="absolute inset-0">
        <Image src="/images/numbersSection/bg.svg" alt="" fill className="object-cover" priority />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-[#8B3A3A]">Your Brand.</span>{" "}
            <span className="text-black">Define by Narrative. Driven by Purpose.</span>
          </h2>
        </div>

        {/* Canvas. Height should be tall enough to include the box so the path can reach it */}
        <div ref={canvasRef} className="relative mx-auto w-full max-w-[1080px] h-[760px] md:h-[820px]">
          {/* SVG overlay that uses your exported paths */}
          <svg ref={svgRef} className="pointer-events-none absolute inset-0 hidden md:block">
            {/* Keep stroke thin and constant even when scaled */}
            <g ref={groupRef} fill="none" stroke="#8B1E1E" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke">
              <path data-animate="draw" d="M291.103 605.128C291.103 594.668 292.842 575.301 297.67 569.36C303.255 562.487 312.577 558.596 320.06 554.202C326.893 550.191 335.422 548.056 342.457 545.632C349.637 543.158 359.11 541.891 367.489 540.58C374.653 539.459 381.533 536.199 389.661 533.993C397.278 531.925 406.986 529.612 414.917 526.753C418.421 523.921 421.952 520.825 425.456 518.196C427.222 516.872 428.961 515.568 430.753 514.224" />
              <path data-animate="draw" d="M594.116 394.336C595.421 391.28 605.025 384.271 613.852 380.734C621.345 377.731 627.896 375.023 636.677 370.859C646.564 366.171 654.245 367.118 677.682 366.453C684.574 366.257 714.597 365.353 758.284 365.135C781.181 365.021 793.447 363.166 802.023 361.407C809.282 359.648 814.987 358.331 819.15 357.454C821.139 357.013 822.878 356.578 824.67 356.13" />
              <path data-animate="draw" d="M1085.53 698.667C1083.34 700.407 1079.83 708.285 1073.26 720.57C1062.97 739.794 1056.12 754.844 1044.51 767.564C1036.2 776.676 1024.13 789.045 1014.41 797.457C1008.02 802.985 1000.81 807.99 975.709 812.614C958.341 815.813 925.455 813.286 907.788 813.72C884.417 815.921 878.264 816.79 874.76 818.542C872.994 819.425 871.255 820.295 866.829 822.508" />
              <path data-animate="draw" d="M780.587 1300.53C775.21 1297.58 769.192 1293.59 763.376 1290.18C754.371 1284.91 747.156 1280.77 741.651 1275.69C735.927 1270.41 728.694 1264.54 721.883 1258.56C714.847 1252.39 707.875 1246.24 700.803 1240.34C694.216 1234.84 684.999 1228.26 663.665 1206.93C652.031 1195.29 642.91 1187.79 637.348 1181.7C630.531 1174.24 617.904 1159.22 607.047 1152.07C599.333 1147 584.98 1131.38 569.052 1118.47C562.023 1112.77 551.67 1105.29 538.961 1100.25C525.056 1094.75 509.451 1088.74 498.957 1088.85C477.258 1089.08 468.522 1090.15 460.58 1091.05C446.878 1092.61 415.89 1096.85 397.118 1092.8C385.88 1090.37 369.636 1085.94 359.333 1079.6C343.3 1069.71 334.306 1063.97 327.965 1059.41C320.93 1054.35 310.875 1045.95 297.433 1031.73C289.759 1023.6 282.497 1016.54 277.908 1009.12C272.184 999.863 264.75 988.216 260.782 978.138C255.505 964.74 251.091 953.58 249.155 944.109C246.731 932.251 244.96 904.95 247.416 886.582C248.944 875.153 252.008 866.919 252.686 859.146C254.214 841.611 254.957 814.619 249.353 805.77C241.013 792.602 234.874 785.606 234.452 782.984" />
              <path data-animate="draw" d="M61.4308 74.4677C61.0089 73.3381 59.0268 71.0663 56.7507 70.1371C55.6055 69.6696 54.3339 69.4934 52.776 69.9879C49.0884 71.1582 47.237 74.5956 45.9476 77.1573C44.4861 80.0611 44.0999 82.6941 44.1659 87.9454C44.2065 91.1662 47.6377 92.5062 49.9841 93.6443C52.5166 94.8726 56.009 94.9272 60.5634 93.6549C63.2805 92.8959 63.9797 88.2694 64.8386 85.4881C65.267 82.5748 65.4077 80.2987 65.6208 78.3209C65.6932 76.9058 65.6932 74.6552 65.267 71.9102" />
              <path data-animate="draw" d="M779.425 1297.95C781.36 1298.23 785.797 1299.89 790.526 1301.98C796.243 1304.5 801.644 1304.34 815.79 1304.76C828.572 1305.14 845.849 1304.91 850.302 1302.97C854.756 1300.46 858.092 1298.24 860.311 1297.13C861.429 1296.57 862.53 1296.02 863.664 1295.45" />
              <path data-animate="draw" d="M863.155 1297.47C863.82 1297.12 865.49 1296.29 866.642 1295.37C867.3 1294.85 867.222 1293.94 867.223 1292.66C867.224 1291.8 866.559 1290.92 866.172 1290.29C865.623 1289.39 864.701 1288.67 863.964 1288.22C863.19 1287.74 862.667 1287.52 862.053 1287.27C861.627 1287.1 859.734 1287.06 857.123 1287.09C854.927 1287.12 853.583 1288.53 853.004 1289.23C852.465 1289.88 851.691 1291.12 850.918 1292.28C850.266 1293.26 849.829 1294.52 849.165 1296.33C848.594 1297.88 847.765 1299.08 847.043 1300.38C845.624 1302.94 843.834 1304.8 843.308 1305.42C842.572 1306.27 841.941 1306.56 841.153 1307.05C839.497 1308.08 838.265 1308.55 837.294 1308.89C836.243 1309.25 835.489 1309.5 833.739 1309.75C832.563 1309.91 831.734 1309.71 831.332 1309.47C830.752 1309.12 830.401 1308.49 830.035 1307.58C829.351 1305.89 829.103 1304.18 828.998 1302.78C828.851 1300.83 829.136 1298.68 829.52 1296.94C829.93 1295.1 830.818 1294.74 831.414 1294.22C832.588 1293.18 834.605 1292.67 835.55 1292.55C836.723 1292.39 837.623 1292.56 837.972 1292.72C839.677 1293.49 841.126 1296.2 841.847 1297.3C842.334 1298.03 842.951 1299.64 843.634 1301.41C843.962 1302.26 844.286 1302.94 844.809 1304.22C845.543 1306 846.355 1307.12 846.826 1307.83C847.748 1309.23 848.701 1310.86 849.524 1311.95C850.286 1312.95 851.018 1313.5 853.448 1315.81C854.235 1316.55 854.7 1317.04 855.26 1317.5C855.855 1317.98 857.286 1319.21 859.144 1320.66C860.321 1321.58 860.908 1321.99 861.922 1322.55C862.829 1322.93 863.539 1323.18 864.114 1323.23C864.516 1323.25 865.141 1323.25 865.785 1323.25" />
              <path data-animate="draw" d="M44.3495 2.00024C47.2992 6.41739 53.2135 19.2241 55.2145 29.8742C59.3796 52.0417 55.7333 79.0185 49.0705 93.8411C42.8422 107.697 38.9244 115.601 34.2405 124.746C29.4477 134.104 22.1749 154.05 14.9711 176.344C11.7599 186.281 10.7616 196.117 10.9913 240.718C11.0734 256.647 19.6255 263.827 22.5974 271.986C26.0969 281.595 34.9223 291.456 39.1468 302.365C44.227 315.485 46.8101 323.117 47.5587 331.032C48.3214 339.098 50.2786 346.833 51.5088 360.144C53.7416 384.302 44.8832 403.07 37.4644 420.909C25.5593 449.536 24.1018 458.003 21.8785 469.112C19.297 482.011 16.1865 490.612 10.5318 512.046C4.25996 535.818 4.32854 551.83 3.09828 565.956C2.3009 575.111 1.36395 619.213 2.5943 647.235C3.18069 660.591 5.30682 672.426 6.05535 681.09C7.05035 692.607 16.157 705.036 19.6329 713.455C23.1941 722.081 29.4973 728.278 37.6497 739.38C43.6349 747.531 48.7666 754.959 54.7031 762.37C60.6468 769.79 66.5538 775.71 75.1953 781.402C83.0639 786.585 92.7305 787.094 131.403 787.353C145.618 785.627 153.503 783.655 161.174 779.712C162.915 778.23 164.383 776.273 165.895 774.258" />
              <path data-animate="draw" d="M1047.32 352.178C1053.01 354.8 1060.89 361.795 1073.84 373.87C1082.51 381.95 1094.22 393.809 1101.32 403.532C1106.08 410.049 1109.66 417.576 1114.05 427.892C1117.99 437.128 1116.7 450.934 1116.93 474.826C1117.06 488.815 1114.51 498.362 1113.42 506.511C1112.27 515.03 1111.87 533.406 1113.4 546.469C1116.26 556.804 1118.01 563.813 1120.21 571.066C1121.08 573.049 1122.39 575.222 1123.73 578.779" />
            </g>
          </svg>

          {/* Desktop absolute placement - keep your existing nodes and box */}
          <div className="hidden md:block absolute inset-0">
            <StepBubble step={steps[0]} className="left-[40px] bottom-[210px]" />
            <StepBubble step={steps[1]} className="left-[250px] top-[150px]" />
            <StepBubble step={steps[2]} className="right-[140px] top-[10px]" largeIcon isPositioning />
            <StepBubble step={steps[3]} className="left-[470px] bottom-[180px]" />
            <StepBubble step={steps[4]} className="right-[60px] top-[250px]" />

            <div className="numbers-deliverables absolute right-[0px] bottom-[10px] w-[380px] bg-[#F5F1E8] border-2 border-[#8B3A3A] rounded-lg overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b-2 border-[#8B3A3A]">
                <Image src="/images/numbersSection/delivarables.svg" alt="Deliverables" width={48} height={48} />
                <h3 className="text-2xl font-bold text-black">Deliverables</h3>
              </div>
              <div className="p-5 space-y-3">
                {deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#8B3A3A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#C4A574] p-5 text-center">
                <button className="text-white font-semibold text-lg hover:opacity-90 transition-opacity">
                  Let&apos;s Write Your Brand Narrative
                </button>
              </div>
            </div>
          </div>

          {/* Mobile fallback unchanged */}
          <div className="md:hidden grid grid-cols-2 gap-6">
            {steps.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full border border-black/10 bg-white/60 flex items-center justify-center mb-2">
                  <Image src={s.icon} alt={s.title} width={56} height={56} />
                </div>
                <h3 className="text-base font-bold">{s.number} {s.title}</h3>
                <p className="text-xs text-black/70">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
