"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServicesSection() {
  const sectionRef = useRef(null);

  // Track scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to line height - starts when section enters view
  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);
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
      {/* Scroll-triggered cherry red line - Full section height, behind content */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-cherry origin-top top-0 z-0"
        style={{
          height: lineHeight,
          minHeight: '0px'
        }}
      />

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
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-20 last:mb-0"
            >
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-8 md:gap-16">
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
                <div className="relative flex-shrink-0">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
