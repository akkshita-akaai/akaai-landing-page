export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-beige p-10">
      {/* torn paper background */}
      {/* <img
        src="/images/servicesSection/bg.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      /> */}

      <div className="container relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight mb-16">
          What We Do
        </h2>

        {/* Row 1 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Paper image card */}
          <div className="relative rounded-2xl border border-[#d9cdb4] shadow-xl overflow-hidden bg-gradient-to-b from-[#f4ead8] to-[#efe3cc]">

            <img
              src="/images/servicesSection/brandConsultation.svg"
              alt="Brand Consultation Services"
              className="relative w-full object-fill"
            />

          </div>

          {/* Text block */}
          <div className="relative p-8">
            <div className="relative mb-3">
              <img
                src="/images/servicesSection/pin.svg"
                alt=""
                className="absolute w-6 h-6 -left-1 -top-1 rotate-[-45] z-10"
              />
              <h3 className="text-xl md:text-2xl font-bold text-charcoal pl-6">
                Brand Consultation Services
              </h3>
            </div>
            <p className="text-base md:text-lg text-charcoal/80 leading-relaxed mb-4 pl-6">
              Deep dive brand DNA discovery and narrative crafting. We uncover the essence of your brand and build strategic foundations that resonate.
            </p>

            {/* bullets with pins */}
            <ul className="space-y-2 pl-6">
              {[
                "Brand Strategy & Planning",
                "Brand Innovation",
                "Brand Management"
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm md:text-base text-charcoal/80">
                  <img
                    src="/images/servicesSection/pin.svg"
                    alt=""
                    className="w-4 h-4 shrink-0 rotate-[-15deg]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-14">
          {/* Text block (left on desktop) */}
          <div className="relative p-8 order-2 lg:order-1">
            <div className="relative mb-3">
              <img
                src="/images/servicesSection/pin.svg"
                alt=""
                className="absolute w-6 h-6 -left-1 -top-1 rotate-[-45] z-10"
              />
              <h3 className="text-xl md:text-2xl font-bold text-charcoal pl-6">
                Content Marketing
              </h3>
            </div>
            <p className="text-base md:text-lg text-charcoal/80 leading-relaxed mb-4 pl-6">
              Story based content and visual storytelling. We create content that connects, engages, and converts through powerful narratives.
            </p>
            <ul className="space-y-2 pl-6">
              {[
                "AI Integration",
                "Content and Creative Design",
                "Packaging"
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm md:text-base text-charcoal/80">
                  <img
                    src="/images/servicesSection/pin.svg"
                    alt=""
                    className="w-4 h-4 shrink-0 rotate-[-15deg]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paper image card */}
          <div className="relative rounded-2xl border border-[#d9cdb4] shadow-xl overflow-hidden bg-gradient-to-b from-[#f4ead8] to-[#efe3cc] order-1 lg:order-2">

            <img
              src="/images/servicesSection/contentMarketing.svg"
              alt="Content Marketing"
              className="relative w-full object-fill"
            />


          </div>
        </div>
      </div>
    </section>
  );
}
