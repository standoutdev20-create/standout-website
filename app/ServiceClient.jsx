
"use client";

import HeroSection from "../components/services/sections/HeroSection";
import ServicesGridSection from "../components/services/sections/ServicesGridSection";
import FeaturedServiceSection from "../components/services/sections/FeaturedServiceSection";
import BenefitsSection from "../components/services/sections/BenefitsSection";
import ProcessSection from "../components/services/sections/ProcessSection";
import TechStackSection from "../components/services/sections/TechStackSection";
import PricingSection from "../components/services/sections/PricingSection";
import FAQSection from "../components/services/sections/FAQSection";
import FinalCTASection from "../components/services/sections/FinalCTASection";

export default function ServiceClient() {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <ServicesGridSection />
      <FeaturedServiceSection />
      <BenefitsSection />
      <ProcessSection />
      <TechStackSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
