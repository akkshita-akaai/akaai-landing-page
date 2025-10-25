"use client";

import HeroSection from "@/components/landing/heroSection";
import WelcomeSection from "@/components/landing/welcomeSection";
import ServicesSection from "@/components/landing/servicesSection";
import ProcessSection from "@/components/landing/processSection";
import NumbersSection from "@/components/landing/numbersSection";
import ContactSection from "@/components/landing/contactsSection";
import LenisProvider from "@/components/lenis/lenisProvider";
import Footer from "./footer";

export default function Page() {
  return (
    <LenisProvider>
      {/* Hero */}
      <HeroSection />

      {/* Content sections */}
      <WelcomeSection />
      <ServicesSection />
      <ProcessSection />
      <NumbersSection />
      <ContactSection />

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </LenisProvider>
  );
}
