"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-[#212121] text-white pt-20 pb-10 overflow-hidden">
      {/* Top Section */}
      <div className="w-full px-4 md:px-8 lg:px-12 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
              The Narrative Doesn't End Here - It Begins.
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              We help brands evolve with intention; shaping meaning, building systems, and creating impact that lasts.
            </p>
          </div>
          
          <div>
            <Link 
              href="/contact" 
              className="group relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#960019] text-white hover:bg-[#7a0014] transition-colors duration-300"
            >
              <span className="text-lg font-medium z-10">Let's Start</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full mb-10">
        <div className="relative w-full aspect-[3/1] md:aspect-[4/1]">
            <Image 
              src="/images/footerSection/banner.svg" 
              alt="Akaai Banner" 
              fill
              className="object-cover object-center"
              unoptimized
            />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-white/60">
              &copy; 2025 Akaai All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/company/the-akaai-project/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/footerSection/linkedIn.svg" 
                alt="LinkedIn" 
                width={40} 
                height={40}
                unoptimized
              />
            </Link>
            <Link href="https://www.instagram.com/theakaaiproject/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/footerSection/insta.svg" 
                alt="Instagram" 
                width={40} 
                height={40}
                unoptimized
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
