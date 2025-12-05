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
        "Retail, Display & Merch"
      ]
    }
  ];

  return (
    <section
      id="process"
      className="py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-[#1C1C1C]"
    >
      <div className="container relative z-20 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-normal text-white mb-4">
            What We Do
          </h2>
          <p className="text-sm text-gray-400 italic">
            ( Narrative lab. )
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-[#2A2A2A] rounded-2xl p-6 transition-all duration-500 hover:bg-[#333333] hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-white mb-4 text-center transition-colors duration-300 group-hover:text-[#F8F7F5]">
                {service.title}
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-2.5">
                {service.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-[#F8F7F5] flex items-start gap-2"
                  >
                    <span className="text-[#F8F7F5] mt-1.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#F8F7F5]/20 transition-all duration-500 pointer-events-none" />
            </div>
          ))}

          {/* Last Card - CTA */}
          <div className="group relative bg-[#F8F7F5] rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-[#1C1C1C] mb-6 leading-tight">
              Let's build your<br />brand story
            </h3>
            <div className="w-12 h-12 bg-[#1C1C1C] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45">
              <Image
                src="/images/processSection/gotoArrow.svg"
                alt="Go"
                width={24}
                height={24}
                className="w-6 h-6"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-card {
          min-height: 280px;
        }
      `}</style>
    </section>
  );
}
