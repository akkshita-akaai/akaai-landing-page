import Image from "next/image";
import clsx from "clsx";


const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep-dive sessions to uncover your brand DNA.",
    icon: "/images/numbersSection/discovery.svg",
  },
  {
    number: "02",
    title: "Narrative Crafting",
    description: "Deep-dive sessions to uncover your brand DNA.",
    icon: "/images/numbersSection/narrativeCrafting.svg",
  },
  {
    number: "03",
    title: "Positioning",
    description: "Deep-dive sessions to uncover your brand DNA.",
    icon: "/images/numbersSection/positioning.svg",
  },
  {
    number: "04",
    title: "Voice & Tone",
    description: "Deep-dive sessions to uncover your brand DNA.",
    icon: "/images/numbersSection/voiceAndTone.svg",
  },
  {
    number: "05",
    title: "Rollout",
    description: "Deep-dive sessions to uncover your brand DNA.",
    icon: "/images/numbersSection/rollout.svg",
  },
];

function StepBubble({
  step,
  className,
  largeIcon = false,
  isPositioning = false,
}) {
  return (
    <div className={clsx("absolute flex flex-col items-center text-center", className)}>
      <div className={clsx(
        "relative mb-3 rounded-full border border-black/10",
        isPositioning && "border-none",
        "bg-transparent",
        largeIcon ? "w-44 h-44" : "w-32 h-32",
        "flex items-center justify-center"
      )}>
        <Image
          src={step.icon}
          alt={step.title}
          width={largeIcon ? 88 : 60}
          height={largeIcon ? 88 : 60}
          className="object-contain"
          priority
        />
      </div>
      <h3 className="text-[18px] md:text-[20px] font-bold text-black mb-1 leading-tight">
        {step.number} {step.title}
      </h3>
      <p className="text-[13px] text-black/70 max-w-[220px]">
        {step.description}
      </p>
    </div>
  );
}

export default function NumbersSection() {
  const deliverables = [
    "Brand Narrative Document",
    "Brand Narrative Document",
    "Brand Narrative Document",
  ];

  return (
    <section className="relative min-h-screen py-16 md:py-20 overflow-hidden bg-[#E8E3D8]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/numbersSection/bg.svg" alt="" fill className="object-cover" priority />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-[#8B3A3A]">Your Brand.</span>{" "}
            <span className="text-black">Define by Narrative. Driven by Purpose.</span>
          </h2>
        </div>

        {/* Canvas matches the mock proportions */}
        <div className="relative mx-auto w-full max-w-[1080px] h-[600px] md:h-[640px]">
          {/* Desktop absolute placement */}
          <div className="hidden md:block absolute inset-0">
            {/* 01 bottom-left */}
            <StepBubble
              step={steps[0]}
              className="left-[40px] bottom-[130px]"
            />
            {/* 02 upper-left center */}
            <StepBubble
              step={steps[1]}
              className="left-[250px] top-[150px]"
            />
            {/* 03 large top-right */}
            <StepBubble
              step={steps[2]}
              className="right-[140px] top-[10px]"
              largeIcon
              isPositioning
            />
            {/* 04 lower middle-right */}
            <StepBubble
              step={steps[3]}
              className="left-[470px] bottom-[140px]"
            />
            {/* 05 right middle */}
            <StepBubble
              step={steps[4]}
              className="right-[60px] top-[250px]"
            />

            {/* Deliverables box bottom-right */}
            <div className="absolute right-[0px] bottom-[-100px] w-[380px] bg-[#F5F1E8] border-2 border-[#8B3A3A] rounded-lg overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b-2 border-[#8B3A3A]">
                <Image
                  src="/images/numbersSection/delivarables.svg"
                  alt="Deliverables"
                  width={48}
                  height={48}
                />
                <h3 className="text-2xl font-bold text-black">Deliverables</h3>
              </div>
              <div className="p-5 space-y-3">
                {deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#8B3A3A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-black">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#C4A574] p-5 text-center">
                <button className="text-white font-semibold text-lg hover:opacity-90 transition-opacity">
                  Let&apos;s Write Your Brand Narrative
                </button>
              </div>
            </div>
          </div>

          {/* Mobile fallback (simple grid) */}
          <div className="md:hidden grid grid-cols-2 gap-6">
            {steps.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full border border-black/10 bg-white/60 flex items-center justify-center mb-2">
                  <Image src={s.icon} alt={s.title} width={56} height={56} />
                </div>
                <h3 className="text-base font-bold">{s.number} {s.title}</h3>
                <p className="text-xs text-black/70">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
