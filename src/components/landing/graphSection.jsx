"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GraphSection() {
  const sectionRef = useRef(null);

  // Track scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to line height
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="w-full bg-[#F8F7F5] py-16 px-4 md:px-8 lg:px-12 relative">
      {/* Scroll-triggered cherry red line - Full section height, behind content */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-cherry origin-top top-0 z-0"
        style={{
          height: lineHeight,
          minHeight: '0px'
        }}
      />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Column: Text Content - fades in once */}
        <motion.div
          className="flex flex-col gap-8 bg-[#F8F7F5]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1C] leading-[1.1]">
            From Inception To Execution, Your Narrative Has A Partner
          </h2>
          <p className="text-lg md:text-xl text-[#1C1C1C] leading-relaxed max-w-xl">
            We support your brand at every stage - from the first spark of an
            idea to full-scale rollout, refinement, and growth.
          </p>
          <div>
            <button
              onClick={() => document.getElementById('formSection')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#8B1E1E] text-[#F8F7F5] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#6d1717] transition-colors duration-300 cursor-pointer"
            >
              Let's Craft Your Boutique Narrative
            </button>
          </div>
        </motion.div>

        {/* Right Column: Stats & Graph - fades in once */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="bg-[#E9E4DC] rounded-[2rem] pt-6 px-4 md:pt-8 md:px-8 flex flex-col items-center justify-between h-[200px] md:h-[320px] md:aspect-auto overflow-hidden relative">
              <h3 className="text-[#1C1C1C] text-sm md:text-lg font-medium text-center mb-2 md:mb-4 z-10 leading-tight">
                Narrative Clarity Improvement
              </h3>
              <div className="flex flex-col items-center justify-end flex-1 w-full translate-y-2">
                <Gauge percentage={82} />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E9E4DC] rounded-[2rem] pt-6 px-4 md:pt-8 md:px-8 flex flex-col items-center justify-between h-[200px] md:h-[320px] md:aspect-auto overflow-hidden relative">
              <h3 className="text-[#1C1C1C] text-sm md:text-lg font-medium text-center mb-2 md:mb-4 z-10 leading-tight">
                Brand Consistency Boost
              </h3>
              <div className="flex flex-col items-center justify-end flex-1 w-full translate-y-2">
                <Gauge percentage={76} />
              </div>
            </div>
          </div>

          {/* Graph Image */}
          <div className="w-full rounded-[2rem] h-[306px] overflow-hidden bg-[#E9E4DC] relative">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/graphSection/trimmed.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Gauge({ percentage }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a small delay for better visual effect
          setTimeout(() => {
            setAnimatedPercentage(percentage);
          }, 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  // SVG configuration
  const size = 260; // Increased size slightly to fill width better
  const strokeWidth = 25;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI; // Half circle circumference
  const offset = circumference - (animatedPercentage / 100) * circumference;

  // Unique ID for gradient
  const gradientId = `gauge-gradient-${percentage}`;

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-end w-full">
      {/* Percentage Text - Centered above the gauge */}
      <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-[#1C1C1C] text-center mb-2 md:mb-4 ml-2 md:ml-4">
        {percentage}%
      </div>

      {/* SVG Gauge */}
      <svg
        width="100%"
        viewBox={`0 0 ${size} ${size / 2 + strokeWidth / 2}`}
        className="overflow-visible block"
        style={{ maxWidth: '260px' }}
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF9696" />
            <stop offset="64%" stopColor="#8B1E1E" />
            <stop offset="100%" stopColor="#8B1E1E" />
          </linearGradient>
        </defs>

        {/* Background Track */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke="#D4CFC7"
          strokeWidth={strokeWidth}
        />
        {/* Progress Arc with Gradient */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </svg>
    </div>
  );
}
