"use client";

import Image from "next/image";

export default function ContactSection() {
  // predictable vertical steps per row on desktop

  const services = [
    {
      side: "left",
      step: 0,
      title: "Digital Campaign Strategy",
      description: "Story-based content, calendar creation, campaign design.",
      badge: {
        src: "/images/contactSection/digitalCampaignStrategy.svg",
        className:
          "absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 z-10",
      },
    },
    {
      side: "right",
      step: 1,
      title: "Social Media Narratives",
      description: "Story-based content, calendar creation, campaign design.",
      badge: {
        src: "/images/contactSection/socialMediaNarrativs.svg",
        className:
          "absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 z-10",
      },
    },
    {
      side: "left",
      step: 1,
      title: "Thought Leadership Narratives",
      description: "LinkedIn positioning for founders & brand heads.",
      badge: {
        src: "/images/contactSection/thoughLeaderShipNarratives.svg",
        className:
          "absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 z-10",
      },
    },
    {
      side: "right",
      step: 2,
      title: "Brand Story Films",
      description: "Short-form narrative storytelling for web and social.",
      badge: {
        src: "/images/contactSection/brandStoryFilms.svg",
        className:
          "absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 z-10",
      },
    },
    {
      side: "left",
      step: 2,
      title: "Editorial Design & Visual Storytelling",
      description: "For brands that want design with depth.",
      badge: {
        src: "/images/contactSection/editorialDesign.svg",
        className:
          "absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 z-10",
      },
    },
    {
      side: "right",
      step: 2,
      title: "Community Building",
      description: "Turning audiences into ambassadors.",
      badge: {
        src: "/images/contactSection/communityBuilding.svg",
        className:
          "absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 z-10",
      },
    },
  ];
  // vertical stagger
  const step = ["md:mt-0", "md:mt-12", "md:mt-24", "md:mt-36"]; // added a 4th step

  // inward lane margins
  const laneMargin = {
    left: "md:pr-4 lg:pr-8",
    right: "md:pl-4 lg:pl-8",
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-16 md:py-20 px-10 overflow-hidden bg-beige"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contactSection/bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl lg:max-w-7xl">
        {/* Title block */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#8B4049]">Bespoke</span>{" "}
            <span className="italic font-serif">Solutions</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light mt-2">Designed Around You.</p>

          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-6">
            Every brand deserves its own <span className="italic">rhythm</span>, its own{" "}
            <span className="italic">roadmap</span>. Our boutique model does not hand you a template, we{" "}
            <span className="italic">handcraft</span> your narrative.
          </p>
        </header>

        {/* Services */}
        <div className="relative">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-black mb-8 md:mb-10">
            Our Services Include
          </h2>

          {/* tighter center gap */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-8 md:gap-y-14 md:gap-x-6 lg:gap-x-8">
            {services.map((s, idx) => (
              <div
                key={idx}
                className={[
                  // 2 cols on mobile, 6/6 split on desktop
                  "col-span-1 md:col-span-6",
                  s.side === "left"
                    ? "md:col-start-1 md:ml-auto" // push toward center on desktop
                    : "md:col-start-7 md:mr-auto", // push toward center on desktop
                  laneMargin[s.side], // inward lane padding
                  step[s.step],       // vertical stagger
                ].join(" ")}
              >
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  badge={s.badge}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom band */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-black text-center mb-8 md:mb-10">
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

          <div className="flex justify-center">
            <button className="bg-[#C9966C] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-lg text-base md:text-lg font-medium shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:brightness-95 transition">
              {"Let's"} Craft Your Boutique Narrative
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Cards ---------- */

function ServiceCard({
  title,
  description,
  badge,
}) {
  return (
    <div className="relative w-full">
      {badge ? (
        <span className={`${badge.className} bg-beige rounded-full p-2`}>
          <Image src={badge.src} alt={badge.alt || ""} fill className="object-contain" />
        </span>
      ) : null}

      <div
        className="
          relative bg-transparent
          border-2 border-[#8B4049] rounded-[28px]
          pt-8 px-4 pb-4 md:p-6 lg:p-8 max-w-[520px]
          h-[190px] md:h-[190px]
          shadow-[0_4px_12px_rgba(0,0,0,0.08)]
          flex flex-col
        "
      >
        <h4 className="text-base md:text-lg lg:text-xl xl:text-2xl leading-tight font-serif font-bold text-gray-900 mb-2 md:mb-3">
          {title}
        </h4>
        <p className="text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed text-gray-800 flex-1">
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
        <span className="relative w-8 h-8">
          <Image src={icon} alt="" fill className="object-contain" />
        </span>
        <h4 className="text-xs md:text-sm lg:text-base font-semibold text-gray-900">
          {title}
        </h4>
      </div>
    </div>
  );
}
