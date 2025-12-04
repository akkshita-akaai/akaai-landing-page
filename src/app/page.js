"use client";

import { Header } from "@/components/landing/header";
import HeroSection from "@/components/landing/heroSection";
import WelcomeSection from "@/components/landing/welcomeSection";
import ServicesSection from "@/components/landing/servicesSection";
import ProcessSection from "@/components/landing/processSection";
import BespokeSolutionsSection from "@/components/landing/bespokeSolutionsSection";
import NarrativeSection from "@/components/landing/narrativeSection";
import BrandBenefitsSection from "@/components/landing/brandBenefitsSection";
import GraphSection from "@/components/landing/graphSection";
import NumbersSection from "@/components/landing/numbersSection";
import FormSection from "@/components/landing/formSection";
import FooterSection from "@/components/landing/footerSection";
import LenisProvider from "@/components/lenis/lenisProvider";

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
      <GraphSection />
      <NumbersSection />
      <FormSection />
      
      {/* Footer Section */}
      <FooterSection />
      
      {/* ContactSection and old Footer removed/commented as requested to add footer after FormSection */}
      {/* <ContactSection /> */}
      {/* <footer>
        <Footer />
      </footer> */}
    </LenisProvider>
  );
}
