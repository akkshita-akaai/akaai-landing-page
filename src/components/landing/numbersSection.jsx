"use client";

import Image from "next/image";

export default function NumbersSection() {
  const stats = [
    {
      id: 1,
      value: "30+",
      label: "Campaigns delivered",
      icon: "/images/numberStory/campaignsDelivered.svg",
    },
    {
      id: 2,
      value: "10+",
      label: "Brands Served",
      icon: "/images/numberStory/brandsServed.svg",
    },
    {
      id: 3,
      value: "4+",
      label: "Industries",
      icon: "/images/numberStory/industries.svg",
    },
    {
      id: 4,
      value: "85%",
      label: "Average % elevation in digital presence",
      icon: "/images/numberStory/average.svg",
    },
  ];

  return (
    <section className="w-full bg-[#F8F7F5] py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Narrative Content */}
        <div className="lg:col-span-1 bg-[#EBE7E0] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[500px]">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/numberStory/boxbg.svg"
              alt="Background Pattern"
              fill
              className="object-cover opacity-50"
              unoptimized
            />
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1C] leading-[1.1] mb-8">
                Narrating
                <br />
                the Number
                <br />
                story
              </h2>

              <button
                onClick={() => document.getElementById('formSection')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-[#F8F7F5] text-[#1C1C1C] text-sm md:text-base font-medium rounded-md hover:bg-[#8B1E1E] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Let's Craft Your Boutique Narrative
              </button>
            </div>

            <p className="text-base md:text-lg text-[#1C1C1C] leading-relaxed max-w-sm mt-12">
              Every number tells a story - of campaigns structured with intention,
              brands guided with clarity, and outcomes built through strategy.
            </p>
          </div>
        </div>

        {/* Right Column: Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#F8F7F5] border border-[#EBE7E0] rounded-[2rem] p-8 flex flex-col justify-between h-[300px] md:h-auto hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-end">
                <div className="w-12 h-12 md:w-16 md:h-16 relative">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              <div className="mt-auto">
                <span className="text-5xl md:text-6xl font-normal text-[#1C1C1C] block mb-2">
                  {stat.value}
                </span>
                <p className="text-lg text-[#1C1C1C]">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
