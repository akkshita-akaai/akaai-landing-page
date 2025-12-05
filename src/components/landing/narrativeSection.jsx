"use client";

import { useRef } from "react";

export default function NarrativeSection() {
  const scrollContainerRef = useRef(null);

  const services = [
    {
      title: "Technology Solutions",
      description: "Story-based content, calendar creation, campaign design.",
      image: "/images/narrativeSection/technologySolutions.svg",
    },
    {
      title: "Enterprise Solutions",
      description: "Story-based content, calendar creation, campaign design.",
      image: "/images/narrativeSection/enterpriseSolution.svg",
    },
    {
      title: "Brand Solutions",
      description: "Google + Meta storytelling, narrative-led ad copy, emotional funnels.",
      image: "/images/narrativeSection/brandSolution.svg",
    },
    {
      title: "Strategy & Consultation",
      description: "Google Docs content strategies for ads and social.",
      image: "/images/narrativeSection/strategyConsultation.svg",
    },
    {
      title: "Community Building",
      description: "LinkedIn positioning for founders & brand communities.",
      image: "/images/narrativeSection/communityBuilding.svg",
    },
    {
      title: "Training, Learning & Development",
      description: "Training materials and development.",
      image: "/images/narrativeSection/training.svg",
    },
    {
      title: "Brand Shoots and Film Scripting",
      description: "Narrative film and story-driven visuals.",
      image: "/images/narrativeSection/brandShoots.svg",
    },
    {
      title: "Thought Leadership",
      description: "Corporate-level work design and build.",
      image: "/images/narrativeSection/thoughtLeadership.svg",
    },
  ];

  return (
    <section
      id="narrative-section"
      className="py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-[#1C1C1C]"
    >
      <div className="container">
        {/* Header with title and CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#F8F7F5]">
            Our Services Include:
          </h2>
          <button className="px-6 py-3 bg-[#F8F7F5] text-[#1C1C1C] text-sm md:text-base font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap">
            Let's Craft Your Boutique Narrative
          </button>
        </div>

        {/* Horizontal scrolling carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
              >
                <div className="group relative h-full bg-transparent bg-opacity-10 rounded-2xl p-6 hover:bg-opacity-15 transition-all duration-300 cursor-pointer flex flex-col items-center">
                  {/* Circular image container */}
                  <div className="w-full aspect-square rounded-full overflow-hidden mb-6 bg-[#F8F7F5] bg-opacity-5 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
                    />
                  </div>

                  {/* Service title and arrow */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg md:text-xl font-medium text-[#F8F7F5] flex-1 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Service description */}
                  <p className="text-sm text-[#F8F7F5] text-opacity-70 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
