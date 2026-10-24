"use client";

import HeroSection from "@/components/about/HeroSection";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import CTASection from "@/components/about/CTASection";

export default function AboutClient() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeroSection />
      <WhoWeAreSection />
      <PrinciplesSection />
      <StorySection />
      <ValuesSection />
      <CTASection />
    </main>
  );
}