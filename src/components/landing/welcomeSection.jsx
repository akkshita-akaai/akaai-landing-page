import Image from "next/image";
import clsx from "clsx";

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
        <p className="mt-6 font-accent text-lg md:text-xl italic text-center sm:block">
          "A Narrative Lab where ideas take shape, stories find voice, and
          brands become movements."
        </p>
        <p className="mt-6 text-base md:text-lg text-center max-w-2xl mx-auto opacity-70 sm:block">
          We do not chase trends. We trace roots. We design narratives, not
          templates. We build brand presence, not noise. Meaning is the new
          marketing.
        </p>
        <div className="mt-10 grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={card.t}
              className={clsx("rounded-lg p-4 md:p-6 shadow-[var(--shadow-subtle)] bg-taupe/60 hover:shadow-[var(--shadow-medium)] transition-transform hover:-translate-y-1 border md:border-2 border-[#8B3A3A]", idx === 0 && "rounded-br-none", idx === 1 && "rounded-bl-none", idx === 2 && "rounded-tr-none", idx === 3 && "rounded-tl-none")}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="max-sm:flex-shrink-0 sm:flex sm:justify-center sm:mb-3">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 md:border-4 border-[#8B3A3A] p-0.5 flex items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.t}
                      width={60}
                      height={60}
                      className="w-full h-full rounded-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="max-sm:flex-1 max-sm:text-left sm:text-center">
                  <h3 className="text-sm md:text-base font-bold">{card.t}</h3>
                  <p className="mt-1 max-sm:hidden text-xs md:text-sm opacity-80">{card.s}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
