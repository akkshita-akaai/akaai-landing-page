"use client";

import Image from "next/image";

/**
 * Tailwind helpers used:
 * - rounded-[22px] to mimic the pill corners on the poster
 * - before/after pseudo elements to draw the short red header strokes
 * - absolute badge images that overlap card borders
 * - light translucent white to mimic the paper card feel
 */
export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/contactSection/bg.svg" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
            <span className="text-[#8B4049]">Bespoke</span>{" "}
            <span className="italic font-serif">Solutions</span>
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-6">Designed Around You.</p>

          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Every brand deserves its own <span className="italic">rhythm</span>, its own{" "}
            <span className="italic">roadmap</span>. Our boutique model means we don't hand you a template - we{" "}
            <span className="italic">handcraft</span> your narrative.
          </p>
        </div>

        {/* Services include */}
        <div className="relative">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-[#C9956B] mb-8 md:mb-10">
            Our Services Include
          </h3>

          {/* 12-col grid to lock left and right columns like the poster */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-10 gap-y-8 md:gap-y-16">
            {/* Left column */}
            <div className="md:col-span-5 md:col-start-1">
              <ServiceCard
                title="Digital Campaign Strategy"
                description="Story-based content, calendar creation, campaign design."
                badge={{
                  src: "/images/contactSection/digitalCampaignStrategy.svg",
                  alt: "",
                  className: "absolute -top-8 right-8 w-10 h-10" // angled tools above the top border
                }}
              />
            </div>

            <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:mt-6">
              <ServiceCard
                title="Social Media Narratives"
                description="Story-based content, calendar creation, campaign design."
                badge={{
                  src: "/images/contactSection/socialMediaNarrativs.svg",
                  alt: "",
                  className: "absolute -top-7 right-6 w-12 h-12" // circular stamp sitting on the top edge
                }}
              />
            </div>

            <div className="md:col-span-5 md:col-start-1 md:row-start-2 md:-mt-2">
              <ServiceCard
                title="Thought Leadership Narratives"
                description="Story-based content, calendar creation, campaign design."
                badge={{
                  src: "/images/contactSection/thoughLeaderShipNarratives.svg",
                  alt: "",
                  className: "absolute -top-7 left-1/2 -translate-x-1/2 w-12 h-12" // bulb centered overlapping the border
                }}
              />
            </div>

            <div className="md:col-span-5 md:col-start-8 md:row-start-2 md:-mt-6">
              <ServiceCard
                title="Brand Story Films"
                description="Story-based content, calendar creation, campaign design."
                badge={{
                  src: "/images/contactSection/brandStoryFilms.svg",
                  alt: "",
                  className: "absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14" // big circular seal squarely on top edge
                }}
              />
            </div>

            <div className="md:col-span-5 md:col-start-1 md:row-start-3 md:-mt-2">
              <ServiceCard
                title="Editorial Design & Visual Storytelling"
                description="Story-based content, calendar creation, campaign design."
                badge={{
                  src: "/images/contactSection/editorialDesign.svg",
                  alt: "",
                  className: "absolute -top-7 left-6 w-11 h-11" // notebook icon clipped into the corner
                }}
              />
            </div>

            <div className="md:col-span-5 md:col-start-8 md:row-start-3 md:-mt-6">
              <ServiceCard
                title="Community Building"
                description="Story-based content, calendar creation, campaign design."
                badge={{
                  src: "/images/contactSection/communityBuilding.svg",
                  alt: "",
                  className: "absolute -top-7 left-6 w-11 h-11" // building icon touching the inner border
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom band */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl md:text-3xl font-light text-[#C9956B] text-center mb-8 md:mb-10">
            Each brand gets:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-8 md:mb-10">
            <BenefitChip
              icon="/images/contactSection/narrativeWorkShops.svg"
              title="1:1 narrative workshops"
            />
            <BenefitChip
              icon="/images/contactSection/tailoredServices.svg"
              title="Tailored services"
            />
            <BenefitChip
              icon="/images/contactSection/monthlyStoryTelling.svg"
              title="Monthly storytelling calendars"
            />
            <BenefitChip
              icon="/images/contactSection/measureableemotion.svg"
              title="Measurable emotion led impact"
            />
          </div>

          {/* CTA aligned left like the poster, but centered on small screens */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#C9966C] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-lg text-sm md:text-lg font-medium shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:brightness-95 transition">
              {"Let's"} Craft Your Boutique Narrative
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Cards that match the poster styling ---------- */

function ServiceCard({
  title,
  description,
  badge
}) {
  return (
    <div className="relative">
      {/* Badge that overlaps the border */}
      {badge ? (
        <div className={badge.className}>
          <Image src={badge.src} alt={badge.alt || ""} fill className="object-contain" />
        </div>
      ) : null}

      {/* Card */}
      <div className="
        relative bg-white/85 backdrop-blur-[2px]
        border-2 border-[#8B4049] rounded-[22px]
        p-5 md:p-6 pr-6 max-w-[420px]
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        before:content-[''] before:absolute before:top-3 before:left-4 before:h-[2px] before:w-16 before:bg-[#8B4049]
        after:content-[''] after:absolute after:top-3 after:right-4 after:h-[2px] after:w-16 after:bg-[#8B4049]
      ">
        <h4 className="text-[20px] md:text-[22px] leading-tight font-serif font-bold text-gray-900 mb-3">
          {title}
        </h4>
        <p className="text-sm md:text-[15px] leading-6 text-gray-800">
          {description}
        </p>
      </div>
    </div>
  );
}

function BenefitChip({ icon, title }) {
  return (
    <div
      className="
        relative bg-white/85 backdrop-blur-[2px]
        border-2 border-[#8B4049] rounded-xl
        py-4 px-4 md:py-5 md:px-5
        shadow-[0_3px_10px_rgba(0,0,0,0.08)]
        before:content-[''] before:absolute before:top-2.5 before:left-3.5 before:h-[2px] before:w-10 before:bg-[#8B4049]
        after:content-[''] after:absolute after:top-2.5 after:right-3.5 after:h-[2px] after:w-10 after:bg-[#8B4049]
      "
    >
      <div className="flex items-center gap-3">
        <span className="relative w-8 h-8 md:w-9 md:h-9">
          <Image src={icon} alt="" fill className="object-contain" />
        </span>
        <h4 className="text-sm md:text-base font-semibold text-gray-900">{title}</h4>
      </div>
    </div>
  );
}
