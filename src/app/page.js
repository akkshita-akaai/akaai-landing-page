"use client";

import { Header } from "@/components/landing/header";
import HeroSection from "@/components/landing/heroSection";
import WelcomeSection from "@/components/landing/welcomeSection";
import ServicesSection from "@/components/landing/servicesSection";
import ProcessSection from "@/components/landing/processSection";
import BespokeSolutionsSection from "@/components/landing/bespokeSolutionsSection";
import NarrativeSection from "@/components/landing/narrativeSection";
import BrandBenefitsSection from "@/components/landing/brandBenefitsSection";
import NumbersSection from "@/components/landing/numbersSection";
import ContactSection from "@/components/landing/contactsSection";
import LenisProvider from "@/components/lenis/lenisProvider";
import Footer from "./footer";

export default function Page() {
  return (
    <LenisProvider>
      {/* Header */}
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* Content sections */}
      <WelcomeSection />
      <ServicesSection />
      <ProcessSection />
      <BespokeSolutionsSection />
      <NarrativeSection />
      <BrandBenefitsSection />
      <NumbersSection />
      <ContactSection />

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </LenisProvider>
  );
}
