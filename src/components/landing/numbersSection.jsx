export default function NumbersSection() {
  const stats = [
    ["130+", "Brands Served"],
    ["11+", "Industries"],
    ["500+", "Campaigns Delivered"],
    ["85%+", "Elevation in Digital Presence"],
  ];
  return (
    <section className="section bg-charcoal text-offwhite">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
          Narrative Numbers
        </h2>
        <p className="mt-6 text-center max-w-2xl mx-auto opacity-90">
          Results that speak louder than words.
        </p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map(([n, l]) => (
            <div key={n} className="">
              <span className="block font-bold text-5xl text-cherry">{n}</span>
              <span className="mt-1 block text-lg opacity-90">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
