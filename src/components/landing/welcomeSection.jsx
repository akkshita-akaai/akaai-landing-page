"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WelcomeSection() {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  // Track scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to line height
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  const cards = [
    {
      title: "Strategy lab",
      subtitle: "Where brands find purpose",
      description: "We distill insight into strategy, clarifying your brand's purpose, audience, and competitive edge to build a narrative system that drives alignment, coherence, and measurable impact.",
      icon: "/images/welcomeSection/strategyLab.svg"
    },
    {
      title: "Visual Lab",
      subtitle: "Where emotions become identity",
      description: "We turn your brand's truth into design - building identities and systems that convey emotion, create clarity, and feel instantly recognizable.",
      icon: "/images/welcomeSection/visualLab.svg"
    },
    {
      title: "Media lab",
      subtitle: "Where precision drives performance",
      description: "We engineer performance using data, audience intelligence, and channel strategy to plan, optimise, and scale media that delivers measurable growth with precision.",
      icon: "/images/welcomeSection/mediaLab.svg"
    },
    {
      title: "Social Lab",
      subtitle: "Where stories go Social",
      description: "We turn stories into conversations, building relevance, community, and culture across platforms through content that adapts, resonates, and stays ahead of the moment.",
      icon: "/images/welcomeSection/socialLab.svg"
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative z-10 py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-offwhite">
      {/* Scroll-triggered cherry red line - Full section height, behind content */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-cherry origin-top top-0 z-0"
        style={{
          height: lineHeight,
          minHeight: '0px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 bg-offwhite  md:bg-transparent">
          <div className="flex flex-col justify-start">
            <div className="flex items-start gap-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight">
                About
              </h2>
              <div className="flex flex-col items-start gap-1 mt-2">
                <span className="text-[#8B1E1E] text-sm md:text-base whitespace-nowrap">( Narrative lab. )</span>
                <Image
                  src="/images/welcomeSection/leftPointingRoundedArrow.svg"
                  alt="Arrow"
                  width={40}
                  height={40}
                  className="w-6 h-6 md:w-8 md:h-8 ml-6"
                />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight">
              the Lab
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-base md:text-lg leading-relaxed">
              We're not an agency, because you don't need one. You need strategists and thinkers, storytellers and media architects who dive deep into your narrative and sculpt it into something unforgettable. At The Akaai Project, we blend strategy, creativity, and storytelling to create brands that breathe, feel, and connect. We design narratives, not just templates. We build brand presence, not noise.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative rounded-[16px] p-8 md:p-10 overflow-hidden transition-all duration-500 ease-in-out border-2 border-transparent hover:border-[#8B1E1E] [&.active]:border-[#8B1E1E] bg-[#EBE9E4] hover:bg-gradient-to-br [&.active]:bg-gradient-to-br hover:from-[#6B1515] [&.active]:from-[#6B1515] hover:to-[#4A0F0F] [&.active]:to-[#4A0F0F] flex flex-col h-full min-h-[350px] cursor-pointer ${activeCard === index ? 'active' : ''}`}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              {/* Icon */}
              <div className="transition-all duration-500 flex-shrink-0">
                <div
                  className="w-12 h-12 md:w-16 md:h-16 transition-all duration-500 group-hover:scale-110 group-[.active]:scale-110 bg-[#8B1E1E] group-hover:bg-white group-[.active]:bg-white"
                  style={{
                    maskImage: `url(${card.icon})`,
                    WebkitMaskImage: `url(${card.icon})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                  role="img"
                  aria-label={card.title}
                />
              </div>

              {/* Flexible spacer - shrinks on hover */}
              <div className="flex-grow transition-all duration-500 group-hover:flex-grow-0 group-[.active]:flex-grow-0 min-h-[40px] group-hover:min-h-[20px] group-[.active]:min-h-[20px]" />

              {/* Content Container */}
              <div className="relative z-10 flex flex-col justify-end">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-medium mb-3 transition-colors duration-500 text-[#1C1C1C] group-hover:text-white group-[.active]:text-white">
                  {card.title}
                </h3>

                {/* Divider */}
                <div className="w-full h-px transition-colors duration-500 mb-4 bg-[#1C1C1C]/20 group-hover:bg-white/30 group-[.active]:bg-white/30" />

                {/* Subtitle */}
                <p className="text-sm md:text-base mb-4 transition-colors duration-500 text-[#1C1C1C] group-hover:text-white group-[.active]:text-white">
                  {card.subtitle}
                </p>

                {/* Description - visible only on hover */}
                <p className="text-sm md:text-base leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-[.active]:opacity-100 group-hover:max-h-[200px] group-[.active]:max-h-[200px] text-white">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
