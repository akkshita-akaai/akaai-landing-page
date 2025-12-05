"use client";

export default function BrandBenefitsSection() {
  const benefits = [
    "1:1 Consultation",
    "Custom Audit",
    "Made-for-Brand Services",
    "End to End Support",
  ];

  return (
    <section className="w-full bg-[#8B1E1E] py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto bg-[#E9E4DC] rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
        {/* Heading */}
        <div className="flex-shrink-0 max-w-md">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1C] leading-tight uppercase">
            Each Brand
            <br />
            Gets:
          </h2>
        </div>

        {/* Benefits Pills */}
        <div className="flex flex-wrap justify-start md:justify-end gap-3 md:gap-4 max-w-xl">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full border border-[#1C1C1C] text-[#1C1C1C] text-lg md:text-xl font-normal bg-transparent hover:bg-[#1C1C1C] hover:text-[#E9E4DC] transition-colors duration-300 cursor-default"
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
