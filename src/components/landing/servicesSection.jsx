export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-beige p-10">
      {/* torn paper background */}
      <img
        src="/images/servicesSection/bg.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      <div className="container relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight mb-16">
          What We Do
        </h2>

        {/* Row 1 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Paper image card */}
          <div className="relative rounded-2xl border border-[#d9cdb4] shadow-xl overflow-hidden bg-gradient-to-b from-[#f4ead8] to-[#efe3cc]">
            {/* pins */}
            <img
              src="/images/servicesSection/pin.svg"
              alt=""
              className="absolute w-6 h-6 -left-2 -top-3 rotate-[-15deg] z-10"
            />
            <img
              src="/images/servicesSection/pin.svg"
              alt=""
              className="absolute w-6 h-6 right-3 -top-2 rotate-[20deg] z-10"
            />

            {/* vintage paper texture overlay */}
            <div
              className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23noiseFilter)' opacity='0.4'/></svg>\")",
                backgroundSize: "300px 300px"
              }}
            />

            {/* aged paper stains */}
            <div className="absolute top-8 right-12 w-8 h-8 bg-amber-800/10 rounded-full blur-sm" />
            <div className="absolute bottom-16 left-8 w-6 h-6 bg-amber-900/15 rounded-full blur-sm" />
            <div className="absolute top-20 left-16 w-4 h-4 bg-amber-800/8 rounded-full blur-sm" />

            <img
              src="/images/servicesSection/brandConsultation.svg"
              alt="Brand Consultation Services"
              className="relative w-full h-64 md:h-80 object-contain p-8"
            />

          </div>

          {/* Text block */}
          <div className="relative p-8">
            <img
              src="/images/servicesSection/pin.svg"
              alt=""
              className="absolute w-6 h-6 left-0 top-0 rotate-[15deg] z-10"
            />
            <h3 className="text-2xl font-bold text-charcoal mb-3 pl-7">
              Brand Consultation Services
            </h3>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Deep dive brand DNA discovery and narrative crafting. We uncover the essence of your brand and build strategic foundations that resonate.
            </p>

            {/* bullets with pins */}
            <ul className="space-y-2">
              {[
                "Brand Strategy & Planning",
                "Brand Innovation",
                "Brand Management"
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-charcoal/80">
                  <img
                    src="/images/servicesSection/pin.svg"
                    alt=""
                    className="mt-1 w-4 h-4 shrink-0 rotate-12"
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
            <img
              src="/images/servicesSection/pin.svg"
              alt=""
              className="absolute w-6 h-6 left-0 top-0 rotate-[-10deg] z-10"
            />
            <h3 className="text-2xl font-bold text-charcoal mb-3 pl-7">
              Content Marketing
            </h3>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Story based content and visual storytelling. We create content that connects, engages, and converts through powerful narratives.
            </p>
            <ul className="space-y-2">
              {[
                "AI Integration",
                "Content and Creative Design",
                "Packaging"
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-charcoal/80">
                  <img
                    src="/images/servicesSection/pin.svg"
                    alt=""
                    className="mt-1 w-4 h-4 shrink-0 rotate-[-8deg]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paper image card */}
          <div className="relative rounded-2xl border border-[#d9cdb4] shadow-xl overflow-hidden bg-gradient-to-b from-[#f4ead8] to-[#efe3cc] order-1 lg:order-2">
            {/* pins */}
            <img
              src="/images/servicesSection/pin.svg"
              alt=""
              className="absolute w-6 h-6 -left-1 -top-3 rotate-[12deg] z-10"
            />
            <img
              src="/images/servicesSection/pin.svg"
              alt=""
              className="absolute w-6 h-6 right-2 -top-1 rotate-[-18deg] z-10"
            />

            {/* vintage paper texture overlay */}
            <div
              className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><filter id='noiseFilter2'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23noiseFilter2)' opacity='0.4'/></svg>\")",
                backgroundSize: "300px 300px"
              }}
            />

            {/* aged paper stains */}
            <div className="absolute top-12 left-10 w-6 h-6 bg-amber-800/12 rounded-full blur-sm" />
            <div className="absolute bottom-20 right-12 w-8 h-8 bg-amber-900/10 rounded-full blur-sm" />
            <div className="absolute top-32 right-8 w-4 h-4 bg-amber-800/8 rounded-full blur-sm" />

            <img
              src="/images/servicesSection/contentMarketing.svg"
              alt="Content Marketing"
              className="relative w-full h-64 md:h-80 object-contain p-8"
            />

            <div className="absolute top-4 left-4 text-xs md:text-sm font-extrabold tracking-wider bg-black text-white px-3 py-1 rounded">
              CONTENT MARKETING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
