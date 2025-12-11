"use client";

import { useRef } from "react";
import Image from "next/image";

export default function NarrativeSection() {
  const scrollContainerRef = useRef(null);

  const services = [
    {
      title: "Technology Solutions",
      description: "Future-ready tools that streamline, scale, and strengthen your digital ecosystem.",
      image: "/images/narrativeSection/technologySolutions.jpg",
    },
    {
      title: "Thought Leadership",
      description: "Insightful narratives that positions you as the voice that leads",
      image: "/images/narrativeSection/thoughtLeadership.png",
    },
    {
      title: "Community",
      description: "Engagement systems that turn audiences into loyal, active communities.",
      image: "/images/narrativeSection/communityBuilding.png",
    },
    {
      title: "Strategy & Consultation",
      description: "Focused strategic guidance that sharpens clarity and accelerates growth.",
      image: "/images/narrativeSection/strategyConsultation.png",
    },
    {
      title: "Brand Solutions",
      description: "Cohesive brand refinement for clearer, stronger, consistent expression.",
      image: "/images/narrativeSection/brandSolution.png",
    },
    {
      title: "Training, Learning & Development",
      description: "Skill-building programs that upgrade teams for modern marketing.",
      image: "/images/narrativeSection/training.png",
    },
    {
      title: "Brand Shoots & Film Scripting",
      description: "Story-driven shoots that shape how your brand is seen and remembered.",
      image: "/images/narrativeSection/brandShoots.png",
    },
    {
      title: "Enterprise Solutions",
      description: "Integrated systems that simplify workflows and unify operations.",
      image: "/images/narrativeSection/enterpriseSolution.png",
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
            className="px-6 py-3 bg-[#F8F7F5] text-[#1C1C1C] text-sm md:text-base font-medium rounded-md hover:bg-[#8B1E1E] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
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
                marginLeft: index === 0 ? "16px" : ""
              }}
            >
              <div className="group relative h-full rounded-2xl flex flex-col items-center">
                {/* Circular image container */}
                <div className="w-full aspect-square rounded-full overflow-hidden mb-6 bg-[#F8F7F5] bg-opacity-5 flex items-center justify-center relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover"
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
            <div className="h-full rounded-2xl flex flex-col overflow-hidden bg-[#EAEAEA]">
              {/* Top Image Area */}
              <div
                className="relative h-[240px] w-full shrink-0"
                style={{
                  backgroundImage: "url('/images/narrativeSection/bulbBg.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              {/* Bottom Content Area */}
              <div className="flex-grow p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-normal text-[#8B1E1E] mb-4 leading-tight text-left">
                    Something Else in Mind?
                  </h3>

                  <p className="text-base text-[#1C1C1C] mb-6 text-left leading-snug">
                    Share your vision, We’ll build the narrative around it.
                  </p>
                </div>

                <button
                  className="w-full py-3 bg-transparent border border-[#1C1C1C] text-[#1C1C1C] text-sm md:text-base font-medium rounded-md hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 cursor-pointer"
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
