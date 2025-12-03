"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden bg-beige">

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        
        {/* Main Headline */}
        <h1 className="font-nhd font-medium text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tight text-charcoal uppercase max-w-6xl mx-auto">
          Welcome to <br />
          The Akaai Project
        </h1>

        {/* Subtext */}
        <div className="mt-12 max-w-3xl mx-auto space-y-2 text-charcoal/90 text-base md:text-lg font-sans">
          <p>
            A Narrative Lab where ideas take shape, stories find voice, and brands become movements.
          </p>
          <p>
            We aren't just here to sell your brand. We're here to script your story, visualise your essence, and amplify it-
            through strategy; creative and media- across every platform, every pixel, every post.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
           <Button 
            className="bg-[#D6CCC2] hover:bg-[#c5b8ab] text-charcoal rounded-md px-8 py-6 text-base font-medium min-w-[180px]"
          >
            Explore the Lab
          </Button>
          <Button 
            variant="outline" 
            className="border-charcoal text-charcoal hover:bg-charcoal hover:text-beige rounded-md px-8 py-6 text-base font-medium min-w-[180px] bg-transparent"
          >
            Build your narrative
          </Button>
        </div>

      </div>
    </section>
  );
}
