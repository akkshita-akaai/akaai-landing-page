"use client";

import { useEffect } from "react";
import HeroSection from "@/components/landing/heroSection";
import ScrollThread from "@/components/landing/scrollThread";
import WelcomeSection from "@/components/landing/welcomeSection";
import ServicesSection from "@/components/landing/servicesSection";
import ProcessSection from "@/components/landing/processSection";
import NumbersSection from "@/components/landing/numbersSection";
import ContactSection from "@/components/landing/contactsSection";
import HeroSnapGate from "@/components/layout/heroSnapGate";
import LenisProvider from "@/components/lenis/lenisProvider";

export default function Page() {
  return (
    <LenisProvider>
      {/* Snap only the hero using Lenis, then free scroll */}
      <HeroSnapGate
        hero="#home"
        next="#about"
        snapThreshold={0.9}
        duration={1.0}
      />

      {/* Hero */}
      <HeroSection />

      {/* Scroll thread reveals only after hero is past */}
      <ScrollThread
        color="#B33C46"
        width={3}
        baseAmplitude={10}
        bigAmplitude={26}
        pitch={80}
        bigEvery={6}
        startAfter="#home"
      />

      {/* Content sections */}
      <WelcomeSection />
      <ServicesSection />
      <ProcessSection />
      <NumbersSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-charcoal text-offwhite text-center py-8">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} The Akaai Project. All rights
            reserved. | Not an agency. A narrative lab.
          </p>
        </div>
      </footer>
    </LenisProvider>
  );
}
