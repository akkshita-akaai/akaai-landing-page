"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden bg-offwhite">

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center pb-20">
        
        {/* Main Headline */}
        {/* Main Headline */}
        <h1 className="font-normal text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-charcoal uppercase max-w-6xl mx-auto">
          Welcome to <br />
          The Akaai Project
        </h1>

        {/* Subtext */}
        <div className="mt-12 max-w-3xl mx-auto space-y-2 text-charcoal/90 text-base md:text-lg">
          <p>
            A Narrative Lab where ideas take shape, stories find voice, and brands become movements.
          </p>
          <p>
            We aren't just here to sell your brand. We're here to script your story, visualise your essence, and amplify it-
            through strategy; creative and media- across every platform, every pixel, every post.
          </p>
        </div>

       <div className="flex items-center gap-2 mt-4">


           <Button 
            className="bg-charcoal hover:bg-charcoal/90 text-taupe rounded-md px-8 py-6 text-base font-medium min-w-[140px]"
          >
            Explore the Lab
          </Button>
          <Button 
            variant="outline" 
            className="border-charcoal text-charcoal rounded-md px-8 py-5.5 text-base font-medium min-w-[140px] bg-transparent"
          >
            Build your narrative
          </Button>


       </div>
        </div>

      {/* Cards and Bottom Button Container */}
      {/* <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end z-0 pointer-events-none select-none overflow-hidden h-[60vh]">
         <motion.img
            src="/images/heroSection/cards.svg"
            alt="Hero Cards Ring"
            className="w-[120%] md:w-full h-auto object-cover origin-bottom translate-y-[35%]"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "50% 150%" }}
         />
      </div> */}
      
      {/* Explore All Services Button */}
      {/* <div className="absolute bottom-8 z-20">
          <Button className="bg-cherry hover:bg-cherry/90 text-white rounded-md px-8 py-6 text-base font-medium min-w-[180px]">
            Explore All Services
          </Button>
      </div> */}

    </section>
  );
}
