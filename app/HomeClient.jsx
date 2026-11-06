import HeroSection from '@/components/home/HeroSection';
import LogoMarquee from '@/components/home/LogoMarquee';
import ServicesSection from '@/components/home/ServicesSection';
import ApproachSection from '@/components/home/ApproachSection';
import AppShowcase from '@/components/site/AppShowcase';
import SelectedWork from '@/components/home/SelectedWork';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import WhyStandoutDev from '@/components/home/WhyStandoutDev';
import PricingSection from '@/components/home/PricingSection';
import WhoWeWorkWith from '@/components/home/WhoWeWorkWith';
import FAQSection from '@/components/home/FAQSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomeClient() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <AppShowcase eyebrow="What we build" title="Built for every screen." accent="Designed to convert." />
      <ApproachSection />
      <SelectedWork />
      <HowWeWorkSection />
      <WhyStandoutDev />
      <PricingSection />
      <WhoWeWorkWith />
      <FAQSection />
      <ContactSection />
    </>
  );
}
