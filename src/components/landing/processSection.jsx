import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    { title: "Discover", icon: "/images/processSection/bulb.svg", subtitle: "Uncover your brand DNA." },
    { title: "Define", icon: "/images/processSection/define.svg", subtitle: "Uncover your brand DNA." },
    { title: "Design", icon: "/images/processSection/design.svg", subtitle: "Uncover your brand DNA." },
    { title: "Deliver", icon: "/images/processSection/deliver.svg", subtitle: "Uncover your brand DNA." },
  ];

  return (
    <section
      id="process"
      className="section relative overflow-hidden bg-[#E8DED0]"
    >
      {/* Background Image with Low Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/images/processSection/bg.svg)', width: "110vw" }}
      />


      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[#E8DED0]/60" />

      <div className="container relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 md:mb-24">
          <span className="text-[#8B2E2E]">
            We see
          </span> <span className="italic" style={{ fontFamily: 'Playfair Display, serif' }}>what others feel</span>
          <span className="text-[#8B2E2E]">!</span>
        </h2>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Left/Right Text */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                <p className="text-[#8B2E2E] italic text-xl md:text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {step.subtitle}
                </p>
              </div>

              {/* Icon Circle */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#8B2E2E] flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
              </div>

              {/* Right/Left Text */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                <h3 className="text-3xl md:text-5xl font-bold">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
