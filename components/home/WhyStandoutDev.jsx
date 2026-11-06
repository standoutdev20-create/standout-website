import Image from 'next/image';
import { benefits } from '@/lib/siteData';
import { Container, IconTile, Section, SectionHeader } from '@/components/site/ui';

export default function WhyStandoutDev() {
  return (
    <Section tone="muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                align="left"
                eyebrow="Why StandoutDev"
                title="Technology that moves your"
                accent="business forward."
                description="The right digital partner brings more than technical skills. We combine thoughtful planning, purposeful design and reliable execution."
              />
              <div className="media-zoom relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10">
                <Image src="/images/stock/developers-pair.jpg" alt="Two developers reviewing work together" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur sm:right-auto">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <p className="text-sm font-semibold text-slate-900">Replies within one business day</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`card-lift rounded-3xl border p-7 ${
                  i === 0 ? 'border-transparent bg-[#0B0F19] text-white' : 'border-slate-200 bg-white'
                }`}
              >
                <IconTile icon={b.icon} dark={i === 0} />
                <h3 className={`mt-6 text-lg font-bold ${i === 0 ? 'text-white' : 'text-slate-900'}`}>{b.title}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${i === 0 ? 'text-slate-400' : 'text-slate-600'}`}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
