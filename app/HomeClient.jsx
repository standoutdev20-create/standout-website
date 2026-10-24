
import HeroSection from '@/components/home/HeroSection';
import LogoMarquee from '@/components/home/LogoMarquee';
import ApproachSection from '@/components/home/ApproachSection';
import ServicesSection from '@/components/home/ServicesSection';
import PricingSection from '@/components/home/PricingSection';  
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import WhoWeWorkWith from '@/components/home/WhoWeWorkWith';
import SelectedWork from '@/components/home/SelectedWork';
import WhyStandoutDev from '@/components/home/WhyStandoutDev';
import FAQSection from '@/components/home/FAQSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';


export default function HomeClient() {
  return (
    <main>
      <HeroSection />
      <LogoMarquee />
      <ApproachSection />
      <ServicesSection />
      <PricingSection  />
      <HowWeWorkSection />
      <WhoWeWorkWith />
      <SelectedWork/>
      <WhyStandoutDev />
      <FAQSection  />
      <ContactSection />
      <Footer   />
    </main>
  );
}
