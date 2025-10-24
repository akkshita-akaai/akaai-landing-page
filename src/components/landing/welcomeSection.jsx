export default function WelcomeSection() {
  return (
    <section id="about" className="section bg-offwhite">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
          Welcome to The Akaai Project
        </h2>
        <p className="mt-6 font-accent text-xl italic text-center">
          "A Narrative Lab where ideas take shape, stories find voice, and
          brands become movements."
        </p>
        <p className="mt-6 text-center max-w-2xl mx-auto opacity-70">
          We do not chase trends. We trace roots. We design narratives, not
          templates. We build brand presence, not noise. Meaning is the new
          marketing.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Social Lab", s: "Where stories go Social" },
            { t: "Strategy Lab", s: "Where brands find purpose" },
            {
              t: "Visual Lab",
              s: "We visualize emotions, not just aesthetics",
            },
            {
              t: "Founder Lab",
              s: "Where thought leadership meets storytelling",
            },
          ].map((card) => (
            <div
              key={card.t}
              className="rounded-lg p-8 text-center shadow-[var(--shadow-subtle)] bg-taupe/60 hover:shadow-[var(--shadow-medium)] transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold">{card.t}</h3>
              <p className="mt-1 opacity-80">{card.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
