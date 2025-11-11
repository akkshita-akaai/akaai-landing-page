"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

const steps = [
  { number: "01", title: "Discovery", description: "Deep-dive sessions to uncover your brand DNA.", icon: "/images/numbersSection/discovery.svg" },
  { number: "02", title: "Narrative Crafting", description: "Deep-dive sessions to uncover your brand DNA.", icon: "/images/numbersSection/narrativeCrafting.svg" },
  { number: "03", title: "Positioning", description: "Deep-dive sessions to uncover your brand DNA.", icon: "/images/numbersSection/positioning.svg" },
  { number: "04", title: "Voice & Tone", description: "Deep-dive sessions to uncover your brand DNA.", icon: "/images/numbersSection/voiceAndTone.svg" },
  { number: "05", title: "Rollout", description: "Deep-dive sessions to uncover your brand DNA.", icon: "/images/numbersSection/rollout.svg" },
];

function StepBubble({ step, className, largeIcon = false }) {
  const circleSize = largeIcon ? "w-[168px] h-[168px]" : "w-[120px] h-[120px]";
  const iconSize = largeIcon ? 96 : 64;

  return (
    <div className={clsx("absolute flex flex-col items-center text-center", className)}>
      <div
        className={clsx(
          "relative mb-2 rounded-full flex items-center justify-center",
          circleSize
        )}
      >
        <Image
          src={step.icon}
          alt={step.title}
          width={iconSize}
          height={iconSize}
          className="object-contain"
          priority
        />
      </div>
      <h3 className="text-sm md:text-base font-bold text-black mb-0.5 leading-tight">
        {step.number} {step.title}
      </h3>
      <p className="text-xs md:text-sm text-black/70 max-w-[220px]">{step.description}</p>
    </div>
  );
}

export default function NumbersSection() {
  const deliverables = [
    "Brand narrative document",
    "Purpose & voice guide",
    "Campaign strategy",
    "Narrative-led marketing calendar",
  ];

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => { }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[480px] py-8 md:py-12 px-6 md:px-10 overflow-hidden bg-beige"
    >
      <div className="absolute inset-0">
        <Image src="/images/numbersSection/bg.svg" alt="" fill className="object-cover" priority />
      </div>

      <div className="relative container mx-auto">
        <div className="mb-6 md:mb-8 text-left max-w-[920px]">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-[-0.01em]">
            <span className="text-[#8B3A3A]">Your Brand.</span>{" "}
            <span className="text-black">Define by</span>
            <br className="hidden md:block" />
            <span className="text-black">Narrative. Driven by Purpose.</span>
          </h2>
        </div>

        <div ref={canvasRef} className="relative mx-auto w-full max-w-[1080px] h-[520px] md:h-[520px]">
          <div className="hidden lg:block absolute inset-0">
            {/* 01 Discovery - left side */}
            <StepBubble step={steps[0]} className="left-[40px] top-[280px]" />
            {/* 02 Narrative Crafting - top center-left */}
            <StepBubble step={steps[1]} className="left-[220px] top-[100px]" />
            {/* 03 Positioning - top right (moved up and slightly left) */}
            <StepBubble step={steps[2]} className="right-[320px] top-[-40px]" largeIcon />
            {/* 04 Voice & Tone - bottom center */}
            <StepBubble step={steps[3]} className="left-[320px] top-[320px]" />
            {/* 05 Rollout - right side (moved up for better visibility) */}
            <StepBubble step={steps[4]} className="right-[80px] top-[140px]" />

            {/* Deliverables box */}
            <div className="absolute right-0 bottom-[-30px] w-[280px] z-30">
              {/* Book icon positioned outside on the left */}
              <div className="absolute -left-10 top-0 w-[70px] h-[70px] transform -rotate-12 z-10">
                <Image src="/images/numbersSection/delivarables.svg" alt="Deliverables" fill className="object-contain" />
              </div>

              <div className="bg-[#F5F1E8] border-2 border-[#8B3A3A] rounded-lg shadow-md overflow-hidden">
                <div className="p-3 border-b-2 !bg-[#F5F1E8] ml-3 !z-20 border-[#8B3A3A]">
                  <h3 className="text-lg font-bold text-black">Deliverables</h3>
                </div>

                <div className="p-3 space-y-1.5 bg-[#F5F1E8]">
                  {deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#8B3A3A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-black leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#C4A574] p-2.5 text-center rounded-b-md">
                  <button className="w-full text-white font-semibold text-sm hover:opacity-90 transition-opacity">
                    Let&apos;s Write Your Brand Narrative
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile and Tablet */}
          <div className="lg:hidden grid grid-cols-2 gap-3">
            {/* Items 01-03 */}
            {steps.slice(0, 3).map((s, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mb-2">
                  <Image src={s.icon} alt={s.title} width={52} height={52} className="object-contain" />
                </div>
                <h3 className="text-xs font-bold">{s.number} {s.title}</h3>
                <p className="text-[11px] text-black/70">{s.description}</p>
              </div>
            ))}

            {/* Item 04 - Voice & Tone */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mb-2">
                <Image src={steps[3].icon} alt={steps[3].title} width={52} height={52} className="object-contain" />
              </div>
              <h3 className="text-xs font-bold">{steps[3].number} {steps[3].title}</h3>
              <p className="text-[11px] text-black/70">{steps[3].description}</p>
            </div>

            {/* Item 05 - Rollout (below 03) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mb-2">
                <Image src={steps[4].icon} alt={steps[4].title} width={52} height={52} className="object-contain" />
              </div>
              <h3 className="text-xs font-bold">{steps[4].number} {steps[4].title}</h3>
              <p className="text-[11px] text-black/70">{steps[4].description}</p>
            </div>

            {/* Deliverables box - beside Rollout with max-width */}
            <div className="relative max-w-[280px] border-2 bg-[#F5F1E8] border-[#8B3A3A] rounded-lg shadow-md h-fit overflow--md overflow-visible">
              {/* Book icon - positioned on the top-left */}
              <div className="absolute -left-5 -top-5 w-[40px] h-[40px] transform -rotate-12 z-10">
                <Image src="/images/numbersSection/delivarables.svg" alt="Deliverables" fill className="object-contain" />
              </div>

              <div className="p-1.5 border-b-2 border-[#8B3A3A]">
                <h3 className="text-xs font-bold text-black">Deliverables</h3>
              </div>
              <div className="p-1.5 space-y-1">
                {deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-1">
                    <svg className="w-2.5 h-2.5 text-[#8B3A3A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[9px] text-black leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#C4A574] rounded-b-md p-1.5 text-center">
                <button className="w-full text-white font-semibold text-[9px] hover:opacity-90 transition-opacity">
                  Let&apos;s Write Your Brand Narrative
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
