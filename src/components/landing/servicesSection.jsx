export default function ServicesSection() {
  const items = [
    {
      h: "Brand Strategy & Planning",
      b: "Deep dive brand DNA discovery and narrative crafting. We uncover the essence of your brand and build strategic foundations that resonate.",
    },
    {
      h: "Content Marketing & Creative Design",
      b: "Story based content and visual storytelling. We create content that connects, engages, and converts through powerful narratives.",
    },
    {
      h: "AI Integration & Digital Campaigns",
      b: "Narrative led advertising and emotional funnels. We leverage technology to amplify your story across all digital touchpoints.",
    },
    {
      h: "Boutique Services",
      b: "Bespoke solutions designed around your brand. Custom narrative architecture tailored to your market and goals.",
    },
  ];
  return (
    <section id="services" className="section bg-beige">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
          Our Services
        </h2>
        <p className="mt-6 text-center max-w-2xl mx-auto opacity-70">
          Every brand has a story waiting to be told. We help you find it, shape
          it, and share it.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <div
              key={s.h}
              className=" rounded-lg border border-charcoal/10 bg-beige p-8 hover:-translate-y-0.5 transition"
            >
              <h3 className="text-lg font-bold">{s.h}</h3>
              <p className="mt-2 opacity-80">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
