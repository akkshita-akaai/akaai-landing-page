export default function ProcessSection() {
  const steps = [
    ["1", "Discover", "Uncover brand DNA"],
    ["2", "Define", "Articulate story and tone"],
    ["3", "Design", "Visualise emotion"],
    ["4", "Deploy", "Execute across channels"],
    ["5", "Distill", "Measure, refine, evolve"],
  ];
  return (
    <section id="process" className="section bg-taupe/60">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
          We See What Others Feel
        </h2>
        <p className="mt-6 text-center max-w-2xl mx-auto opacity-70">
          Our proven methodology transforms brands through strategic narrative
          development.
        </p>
        <div className="mt-10 flex flex-wrap items-start justify-between gap-6">
          {steps.map(([n, h, d], i) => (
            <div
              key={n}
              className="fade-in-up min-w-[180px] flex-1 text-center relative"
            >
              <div className="mx-auto mb-2 grid h-14 w-14 place-items-center rounded-full bg-cherry text-offwhite text-xl font-bold">
                {n}
              </div>
              <h3 className="font-bold">{h}</h3>
              <p className="opacity-80">{d}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-12px] top-6 text-cherry text-xl font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
