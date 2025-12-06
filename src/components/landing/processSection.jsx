"use client";

import Image from "next/image";

export default function ProcessSection() {
  const services = [
    {
      id: 1,
      title: "Strategic Alliances",
      icon: "/images/processSection/strategicAlliances.svg",
      points: [
        "OEM/Partnerships",
        "Publishers & Networks",
        "Influencers & Affiliates",
        "Media and Digital agencies"
      ]
    },
    {
      id: 2,
      title: "Data & Insights",
      icon: "/images/processSection/dataInsights.svg",
      points: [
        "Market & Audience Research",
        "Surveys, Systems and First hand Feedback",
        "Competitor & Campaign Analysis",
        "MMP's and Third party tools"
      ]
    },
    {
      id: 3,
      title: "Brand Building",
      icon: "/images/processSection/brandBuilding.svg",
      points: [
        "Strategy & Positioning",
        "Identity & Guidelines",
        "GTM",
        "Product launches"
      ]
    },
    {
      id: 4,
      title: "Brand Solutioning",
      icon: "/images/processSection/brandSolutioning.svg",
      points: [
        "Integrated Campaigns",
        "Digital-first Experiences",
        "Tech-led Innovations",
        "Omni Channel communication",
        "Website and App monetisation"
      ]
    },
    {
      id: 5,
      title: "Brand Consultation",
      icon: "/images/processSection/brandConsultation.svg",
      points: [
        "Brand Audits",
        "Narrative and Advisory",
        "Growth Road mapping"
      ]
    },
    {
      id: 6,
      title: "Brand Innovation",
      icon: "/images/processSection/brandInnovation.svg",
      points: [
        "New Product Concepts",
        "Trend Mapping",
        "Brand Extensions"
      ]
    },
    {
      id: 7,
      title: "Brand Management",
      icon: "/images/processSection/brandManagement.svg",
      points: [
        "Narrative & Reputation Control, ORM",
        "Channel and platform Optimization",
        "Always-on Execution",
        "Media Mix"
      ]
    },
    {
      id: 8,
      title: "Content Marketing",
      icon: "/images/processSection/contentMarketing.svg",
      points: [
        "Multi-format Storytelling Systems",
        "Platform-specific Content Architecture",
        "Trend & Culture Mapping",
        "Campaign Adaptations & Content Extensions"
      ]
    },
    {
      id: 9,
      title: "Digital Marketing",
      icon: "/images/processSection/digitalMarketing.svg",
      points: [
        "SEO / SEM / SMM",
        "Publisher, Website and App monetisation",
        "Automation and Enterprise",
        "Social media management",
        "Campaign execution"
      ]
    },
    {
      id: 10,
      title: "Performance Marketing",
      icon: "/images/processSection/performanceMarketing.svg",
      points: [
        "Mobile, Tech, OEM's, Affiliates",
        "UA & App Growth"
      ]
    },
    {
      id: 11,
      title: "Packaging & Design",
      icon: "/images/processSection/packagingDesign.svg",
      points: [
        "Packaging Systems",
        "Retail, Display & Merchandising"
      ]
    }
  ];

  return (
    <section
      id="process"
      className="py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-[#1C1C1C]"
    >
      <div className="container relative z-20 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <div className="flex items-start gap-2">
            <h2 className="text-5xl md:text-7xl font-normal text-white">
              What We Do
            </h2>
            <div className="flex flex-col items-start -mt-8 -ml-8 ">
              <p className="text-sm text-[#8B1E1E] italic">
                ( Narrative lab. )
              </p>
              <Image
                src="/images/processSection/leftPointingRoundedArrow.svg"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 -mt-0 ml-10"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(13%) sepia(61%) saturate(5427%) hue-rotate(355deg) brightness(90%) contrast(104%)",
                }}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-[#2A2A2A] rounded-lg p-5 md:p-6 transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
              
              {/* Icon */}
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* Flexible spacer - shrinks on hover */}
              <div className="flex-grow transition-all duration-300 group-hover:flex-grow-0 min-h-[60px] md:min-h-[80px] group-hover:min-h-[16px] md:group-hover:min-h-[20px]" />

              {/* Title */}
              <h3 className="relative z-10 text-base md:text-lg font-medium text-white mb-0 group-hover:mb-2 transition-all duration-300">
                {service.title}
              </h3>

              {/* Bullet Points - Hidden by default, visible on hover/tap */}
              <ul className="relative z-10 space-y-1 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40 group-focus:opacity-100 group-focus:max-h-40">
                {service.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-xs md:text-sm text-gray-400 flex items-start gap-1.5"
                  >
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Last Card - CTA */}
          <div 
            className="service-card group relative bg-[#F8F7F5] rounded-lg p-5 md:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            onClick={() => {
              const formSection = document.getElementById('formSection');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {/* Arrow Icon - Top Right */}
            <div className="flex justify-end">
              <div className="w-8 h-8 bg-[#1C1C1C] rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/processSection/gotoArrow.svg"
                  alt="Go"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  unoptimized
                />
              </div>
            </div>
            
            {/* Text - Bottom Left */}
            <h3 className="text-lg md:text-xl font-medium text-[#1C1C1C] leading-tight mt-auto">
              Let's build your<br />brand story
            </h3>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-card {
          min-height: 180px;
        }
        @media (min-width: 768px) {
          .service-card {
            min-height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
