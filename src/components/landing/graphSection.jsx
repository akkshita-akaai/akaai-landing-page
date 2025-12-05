"use client";

import Image from "next/image";

export default function GraphSection() {
  return (
    <section className="w-full bg-[#F8F7F5] py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1C] leading-[1.1]">
            From Inception To Execution, Your Narrative Has A Partner
          </h2>
          <p className="text-lg md:text-xl text-[#1C1C1C] leading-relaxed max-w-xl">
            We support your brand at every stage - from the first spark of an
            idea to full-scale rollout, refinement, and growth.
          </p>
          <div>
            <button className="bg-[#8B1E1E] text-[#F8F7F5] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#6d1717] transition-colors duration-300">
              Let's Craft Your Boutique Narrative
            </button>
          </div>
        </div>

        {/* Right Column: Stats & Graph */}
        <div className="flex flex-col gap-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#E9E4DC] rounded-[2rem] p-8 flex flex-col items-center justify-between aspect-square md:aspect-auto md:h-[320px]">
              <h3 className="text-[#1C1C1C] text-lg font-medium text-center mb-4">
                Narrative Clarity Improvement
              </h3>
              <div className="text-5xl md:text-6xl font-normal text-[#1C1C1C]">
                  82%
                </div>
              <div className="relative w-full flex-1 flex items-end justify-center pb-4">
                <Gauge percentage={82} />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E9E4DC] rounded-[2rem] p-8 flex flex-col items-center justify-between aspect-square md:aspect-auto md:h-[320px]">
              <h3 className="text-[#1C1C1C] text-lg font-medium text-center mb-4">
                Brand Consistency Boost
              </h3>
                 <div className="text-5xl md:text-6xl font-normal text-[#1C1C1C]">
                  76%
                </div>
              <div className="relative w-full flex-1 flex items-end justify-center pb-4">
                <Gauge percentage={76} />
             
              </div>
            </div>
          </div>

          {/* Graph Image */}
          <div className="w-full rounded-[2rem] overflow-hidden">
            <Image
              src="/images/graphSection/largePlot.svg"
              alt="Growth Graph"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Gauge({ percentage }) {
  // SVG configuration
  const size = 200;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI; // Half circle circumference
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={size}
      height={size / 2 + strokeWidth}
      viewBox={`0 0 ${size} ${size / 2 + strokeWidth}`}
      className="overflow-visible"
    >
      {/* Background Track (Light beige semi-circle) */}
      <path
        d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
        fill="none"
        stroke="#D4CFC7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Progress Arc (Dark red semi-circle) */}
      <path
        d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
        fill="none"
        stroke="#8B1E1E"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
}
