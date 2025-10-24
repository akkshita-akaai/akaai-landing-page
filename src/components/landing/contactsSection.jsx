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
                  className: "absolute -top-8 left-1/2 -translate-x-1/2 -ml-1 w-16 h-16 z-10"
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
                  className: "absolute -top-8 left-1/2 -translate-x-1/2 -ml-1 w-16 h-16 z-10"
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
                  className: "absolute -top-8 left-1/2 -translate-x-1/2 -ml-1 w-16 h-16 z-10"
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
                  className: "absolute -top-8 left-1/2 -translate-x-1/2 -ml-1 w-16 h-16 z-10"
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
                  className: "absolute -top-8 left-1/2 -translate-x-1/2 -ml-1 w-16 h-16 z-10"
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
                  className: "absolute -top-8 left-1/2 -translate-x-1/2 -ml-1 w-16 h-16 z-10"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-10 max-w-4xl mx-auto">
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

          {/* CTA at the bottom */}
          <div className="flex justify-center">
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
        <div className={`${badge.className} bg-[#F5F1E8] rounded-full p-2`}>
          <Image src={badge.src} alt={badge.alt || ""} fill className="object-contain" />
        </div>
      ) : null}

      {/* Card */}
      <div className="
        relative bg-transparent
        border-2 border-[#8B4049] rounded-[28px]
        p-6 md:p-8 max-w-[420px]
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
      ">
        <h4 className="text-[22px] md:text-[26px] leading-tight font-serif font-bold text-gray-900 mb-4">
          {title}
        </h4>
        <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-800">
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
        relative bg-transparent
        border-2 border-[#8B4049] rounded-2xl
        py-3 px-4 md:py-4 md:px-5
        shadow-[0_3px_10px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex items-center gap-2.5">
        <span className="relative w-6 h-6 md:w-7 md:h-7">
          <Image src={icon} alt="" fill className="object-contain" />
        </span>
        <h4 className="text-xs md:text-sm font-semibold text-gray-900">{title}</h4>
      </div>
    </div>
  );
}
