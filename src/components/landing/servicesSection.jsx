export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-beige">
      {/* torn paper background */}
      <img
        src="/images/servicesSection/bg.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      <div className="container relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight mb-16">
          Our Services
        </h2>

        {/* Row 1 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Paper image card */}
          <div className="relative rounded-2xl border border-[#d9cdb4] shadow-xl overflow-hidden bg-gradient-to-b from-[#f4ead8] to-[#efe3cc]">
            {/* tape strips */}
            <div
              className="absolute w-20 h-6 bg-yellow-200/70 rounded -left-2 -top-3 rotate-[-8deg]"
              style={{ boxShadow: "inset 0 6px 12px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.12)" }}
            />
            <div
              className="absolute w-20 h-6 bg-yellow-200/70 rounded right-3 -top-2 rotate-[7deg]"
              style={{ boxShadow: "inset 0 6px 12px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.12)" }}
            />

            {/* subtle paper noise overlay */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='120' height='120' filter='url(%23n)' opacity='0.06'/></svg>\")",
                backgroundSize: "220px 220px"
              }}
            />

            <img
              src="/images/servicesSection/brandConsultation.svg"
              alt="Brand Consultation Services"
              className="relative w-full h-64 md:h-80 object-contain p-8"
            />
            <div className="absolute bottom-3 right-4 text-xs md:text-sm italic text-charcoal/70 bg-white/70 px-3 py-1 rounded">
              We chart your path to clarity.
            </div>
          </div>

          {/* Text block */}
          <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
            <div className="absolute w-3 h-3 bg-red-600 left-4 top-6 rotate-45 rounded-[2px] shadow" />
            <h3 className="text-2xl font-bold text-charcoal mb-3 pl-7">
              Brand Consultation Services
            </h3>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Deep dive brand DNA discovery and narrative crafting. We uncover the essence of your brand and build strategic foundations that resonate.
            </p>

            {/* bullets without custom CSS */}
            <ul className="space-y-2">
              {[
                "Brand audits and interviews",
                "Positioning and messaging",
                "Story frameworks and tone guides"
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-charcoal/80">
                  <span className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-14">
          {/* Text block (left on desktop) */}
          <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 order-2 lg:order-1">
            <div className="absolute w-3 h-3 bg-red-600 left-4 top-6 rotate-45 rounded-[2px] shadow" />
            <h3 className="text-2xl font-bold text-charcoal mb-3 pl-7">
              Content Marketing
            </h3>
            <p className="text-white/90 lg:text-charcoal/80 lg:text-current leading-relaxed mb-4 text-charcoal/80">
              Story based content and visual storytelling. We create content that connects, engages, and converts through powerful narratives.
            </p>
            <ul className="space-y-2">
              {[
                "Editorial strategy and calendars",
                "Long and short form writing",
                "Design assets and micro visuals"
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-charcoal/80">
                  <span className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paper image card */}
          <div className="relative rounded-2xl border border-[#d9cdb4] shadow-xl overflow-hidden bg-gradient-to-b from-[#f4ead8] to-[#efe3cc] order-1 lg:order-2">
            <div
              className="absolute w-20 h-6 bg-yellow-200/70 rounded -left-1 -top-3 rotate-[5deg]"
              style={{ boxShadow: "inset 0 6px 12px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.12)" }}
            />
            <div
              className="absolute w-20 h-6 bg-yellow-200/70 rounded right-2 -top-1 rotate-[-6deg]"
              style={{ boxShadow: "inset 0 6px 12px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.12)" }}
            />

            <img
              src="/images/servicesSection/contentMarketing.svg"
              alt="Content Marketing"
              className="relative w-full h-64 md:h-80 object-contain p-8"
            />

            <div className="absolute top-4 left-4 text-xs md:text-sm font-extrabold tracking-wider bg-black text-white px-3 py-1 rounded">
              CONTENT MARKETING
            </div>
            <div className="absolute bottom-3 right-4 text-xs md:text-sm italic text-charcoal/70 bg-white/70 px-3 py-1 rounded">
              Stories that connect. Audiences that grow.
            </div>

            {/* subtle paper noise */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='120' height='120' filter='url(%23n)' opacity='0.06'/></svg>\")",
                backgroundSize: "220px 220px"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
