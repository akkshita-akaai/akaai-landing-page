import Image from "next/image";

export default function WelcomeSection() {
  const cards = [
    {
      t: "Social Lab",
      s: "Where stories go Social",
      image: "/images/welcomeSection/socialLab.png"
    },
    {
      t: "Strategy Lab",
      s: "Where brands find purpose",
      image: "/images/welcomeSection/strategyLab.png"
    },
    {
      t: "Visual Lab",
      s: "We visualize emotions, not just aesthetics",
      image: "/images/welcomeSection/visualLab.png"
    },
    {
      t: "Founder Lab",
      s: "Where thought leadership meets storytelling",
      image: "/images/welcomeSection/founderLab.png"
    },
  ];

  return (
    <section id="about" className="py-24 px-10 bg-beige">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight">
          Welcome to The Akaai Project
        </h2>
        <p className="mt-6 font-accent text-lg md:text-xl italic text-center">
          "A Narrative Lab where ideas take shape, stories find voice, and
          brands become movements."
        </p>
        <p className="mt-6 text-base md:text-lg text-center max-w-2xl mx-auto opacity-70">
          We do not chase trends. We trace roots. We design narratives, not
          templates. We build brand presence, not noise. Meaning is the new
          marketing.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.t}
              className="rounded-lg p-8 text-center shadow-[var(--shadow-subtle)] bg-taupe/60 hover:shadow-[var(--shadow-medium)] transition-transform hover:-translate-y-1 border-2 border-[#8B3A3A]"
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-[#8B3A3A] p-1 flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.t}
                    width={80}
                    height={80}
                    className="w-full h-full rounded-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold">{card.t}</h3>
              <p className="mt-1 text-sm md:text-base opacity-80">{card.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
