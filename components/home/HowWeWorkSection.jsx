import Image from 'next/image';
import { process } from '@/lib/siteData';
import { Container, Section, SectionHeader } from '@/components/site/ui';

export default function HowWeWorkSection() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeader
          eyebrow="How we work"
          title="From first idea to"
          accent="successful launch."
          description="A clear, collaborative process from discovery and design to development, testing and launch, so you always know what happens next."
        />

        <div className="relative mt-16">
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li key={step.step} className="group relative">
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#0B0F19] text-sm font-bold text-white transition-colors duration-300 group-hover:bg-blue-600">
                  {step.step}
                </div>
                <div className="card-lift mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                  <div className="media-zoom relative aspect-[4/3] overflow-hidden">
                    <Image src={step.image} alt={step.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
