import { Container, CTABand, Section, SectionHeader } from '@/components/site/ui';
import ServicesList from '@/components/services/ServicesList';
import AppShowcase from '@/components/site/AppShowcase';
import TechStack from '@/components/services/TechStack';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import WhyStandoutDev from '@/components/home/WhyStandoutDev';
import { EngagementCards } from '@/components/home/PricingSection';
import FAQSection from '@/components/home/FAQSection';

export default function ServiceClient() {
  return (
    <>
      <AppShowcase
        hero
        eyebrow="Our services"
        title="Digital services."
        accent="Built to stand out."
        description="From high-performance websites and mobile apps to custom software, we help ambitious businesses turn ideas into products people love to use."
        primary={{ href: '/contact', label: 'Start a project' }}
        secondary={{ href: '#all-services', label: 'Explore services' }}
      />
      <ServicesList />
      <HowWeWorkSection />
      <TechStack />
      <WhyStandoutDev />
      <Section tone="white">
        <Container>
          <SectionHeader
            eyebrow="Engagement models"
            title="Clear scope."
            accent="The right investment."
            description="Every project is different. We discuss your goals, features and timeline first, then prepare a proposal that fits your requirements."
          />
          <div className="mt-14">
            <EngagementCards dark={false} />
          </div>
        </Container>
      </Section>
      <FAQSection />
      <CTABand title="Your next big idea" accent="starts right here." />
    </>
  );
}
