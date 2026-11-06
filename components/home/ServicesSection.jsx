import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '@/lib/siteData';
import { ButtonLink, Container, IconTile, Section, SectionHeader } from '@/components/site/ui';

function FeatureCard({ service, className, tall }) {
  const { slug, icon, title, short, image, points } = service;
  return (
    <Link
      href={`/services#${slug}`}
      className={`card-lift group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white ${className}`}
    >
      <div className={`media-zoom relative overflow-hidden ${tall ? 'aspect-[16/10] lg:aspect-auto lg:flex-1' : 'aspect-[16/10]'}`}>
        <Image src={image} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <IconTile icon={icon} />
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#0B0F19] group-hover:bg-[#0B0F19] group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{short}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {points.map((p) => (
            <li key={p} className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
              <Check className="h-3 w-3 text-blue-600" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

function CompactCard({ service }) {
  const { slug, icon, title, short } = service;
  return (
    <Link
      href={`/services#${slug}`}
      className="card-lift group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-7"
    >
      <div>
        <IconTile icon={icon} />
        <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{short}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </Link>
  );
}

export default function ServicesSection() {
  const [web, apps, design, commerce, mobile, seo] = services;
  return (
    <Section tone="muted" id="services">
      <Container>
        <SectionHeader
          eyebrow="Our services"
          title="Everything your business needs to"
          accent="build and grow."
          description="From design and development to scalable software, we help businesses turn ideas into reliable digital products."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          <FeatureCard service={web} tall className="lg:col-span-2" />
          <FeatureCard service={apps} />
          <CompactCard service={design} />
          <CompactCard service={commerce} />
          <CompactCard service={mobile} />
        </div>

        <div className="mt-5">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#0B0F19] p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-center gap-4">
              <IconTile icon={seo.icon} dark />
              <div>
                <p className="text-lg font-semibold">Plus SEO, branding and ongoing support.</p>
                <p className="text-sm text-slate-400">One partner from first idea to long-term growth.</p>
              </div>
            </div>
            <ButtonLink href="/services" variant="light" size="sm">
              Explore all services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
