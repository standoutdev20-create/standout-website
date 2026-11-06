import Image from 'next/image';
import { Check } from 'lucide-react';
import { services } from '@/lib/siteData';
import { ButtonLink, Container, IconTile, Section, SectionHeader } from '@/components/site/ui';

export default function ServicesList() {
  return (
    <Section tone="white" id="all-services">
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="Everything you need to"
          accent="grow digitally."
          description="From your first idea to a polished digital product, we bring strategy, design and development together to help your business move forward."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map(({ slug, icon, title, short, image, points }, i) => (
            <article
              key={slug}
              id={slug}
              className="card-lift group flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >
              <div className="media-zoom relative aspect-[16/9] overflow-hidden">
                <Image src={image} alt={title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <IconTile icon={icon} />
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{title}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{short}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Check className="h-3 w-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <ButtonLink href="/contact" variant="secondary" size="sm">
                    Discuss this service
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
