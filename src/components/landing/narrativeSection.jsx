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
      className="py-20 relative overflow-hidden bg-[#1C1C1C]"
    >
      <div className="px-16">
        {/* Header with title and CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#F8F7F5]">
            Our Services Include:
          </h2>
          <button 
            className="px-6 py-3 bg-[#F8F7F5] text-[#1C1C1C] text-sm md:text-base font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap cursor-pointer"
            onClick={() => {
              const formSection = document.getElementById('formSection');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Let's Craft Your Boutique Narrative
          </button>
        </div>

        {/* Horizontal separator line */}
        <div className="w-full h-px bg-[#F8F7F520] bg-opacity-20 mb-16"></div>
      </div>

      {/* Horizontal scrolling carousel - Full width */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory pl-4 md:pl-8 lg:pl-12"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
              style={{
                marginLeft : index === 0 ? "16px" : ""
              }}
            >
              <div className="group relative h-full rounded-2xl flex flex-col items-center">
                {/* Circular image container */}
                <div className="w-full aspect-square rounded-full overflow-hidden mb-6 bg-[#F8F7F5] bg-opacity-5 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
                  />
                </div>

                {/* Card container with title and description */}
                <div className="w-full bg-[#F8F7F510] bg-opacity-10 rounded-xl p-4 flex-grow flex flex-col justify-center">
                  {/* Service title */}
                  <div className="flex items-center justify-center mb-3 w-full">
                    <h3 className="text-lg md:text-xl font-medium text-[#F8F7F5] leading-tight text-center">
                      {service.title}
                    </h3>
                  </div>

                  {/* Service description */}
                  <p className="text-sm text-[#F8F7F5] text-opacity-70 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Custom Request Card */}
          <div className="flex-shrink-0 w-[280px] md:w-[320px] snap-start mr-16">
            <div 
              className="relative h-full rounded-2xl flex flex-col justify-end p-8 border border-[#F8F7F5] border-opacity-10 overflow-hidden"
              style={{ 
                backgroundImage: "url('/images/narrativeSection/bulbBg.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Content Container - pushing content to bottom to not overlap with bulb if it's in the top of bg */}
              <div className="flex flex-col items-center w-full mt-32">
                {/* Title */}
                <h3 className="text-3xl md:text-3xl font-normal text-[#F8F7F5] mb-4 text-center leading-tight">
                  Something Else in Mind?
                </h3>

                {/* Description */}
                <p className="text-base text-[#F8F7F5] text-opacity-80 text-center mb-8">
                  Share your vision, We’ll build the narrative around it.
                </p>

                {/* CTA Button */}
                <button
                  className="px-6 py-3 bg-[#F8F7F5] text-[#1C1C1C] text-sm md:text-base font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 w-full cursor-pointer z-10"
                  onClick={() => {
                    const formSection = document.getElementById('formSection');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Start a Custom Request
                </button>
              </div>
            </div>
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
