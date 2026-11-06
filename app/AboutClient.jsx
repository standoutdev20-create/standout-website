import Image from 'next/image';
import { BarChart3, Compass, Gauge, HeartHandshake, KeyRound, Rocket, Target, Users, Cpu } from 'lucide-react';
import { values } from '@/lib/siteData';
import { ButtonLink, Container, CTABand, IconTile, PageHero, Section, SectionHeader } from '@/components/site/ui';

const pillars = [
  { icon: Target, title: 'Business-first thinking', text: 'We start with your business goals and build solutions around what you need to achieve.' },
  { icon: Cpu, title: 'Technology that works', text: 'Thoughtful design and reliable development, combined into useful digital products.' },
  { icon: Users, title: 'Built around people', text: 'We focus on the experience of the people who will use your website, app or software.' },
];

const milestones = [
  { when: 'Aug 2026', title: 'StandoutDev founded', text: 'Started in Pune with a mission to build websites, apps and software that stand out.' },
  { when: 'Today', title: 'First client projects live', text: 'Projects for Uma Metal Craft, Siddhanath Krupa Physics and Digital Developers are live.' },
  { when: 'Next', title: 'Growing with purpose', text: 'Taking on new projects while giving each client focused attention.' },
];

const principles = [
  { icon: Rocket, title: 'Ship fast, iterate faster', text: 'We move quickly and learn from real users.' },
  { icon: Compass, title: 'Every feature has a purpose', text: 'Every screen and feature should support a real user or business goal.' },
  { icon: KeyRound, title: 'You own everything', text: 'Source code, design files and assets belong to you.' },
  { icon: Gauge, title: 'Radical transparency', text: 'Clear scope, honest timelines and regular updates.' },
  { icon: BarChart3, title: 'Measure what matters', text: 'We care about performance, conversions and real results.' },
  { icon: HeartHandshake, title: 'Long-term thinking', text: 'We build lasting client relationships, not just projects.' },
];

export default function AboutClient() {
  return (
    <>
      <PageHero
        eyebrow="About StandoutDev"
        title="An IT company built for"
        accent="products that work."
        description="StandoutDev is an IT solutions company based in Pune, India. We build websites, mobile apps and custom software that convert visitors, retain users and support real business work. No fluff. No templates."
        image="/images/stock/office-team.jpg"
        imageAlt="The StandoutDev team at work"
        actions={
          <>
            <ButtonLink href="/work">See our work</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Start building
            </ButtonLink>
          </>
        }
      />

      {/* Who we are */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="media-zoom relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl">
                <Image src="/images/stock/workshop.jpg" alt="Team workshop" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
              <div className="media-zoom relative aspect-square overflow-hidden rounded-3xl">
                <Image src="/images/stock/wireframes-table.jpg" alt="Planning product wireframes" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
              </div>
              <div className="media-zoom relative aspect-square overflow-hidden rounded-3xl">
                <Image src="/images/stock/code-dark.jpg" alt="Code on a laptop screen" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
              </div>
            </div>
            <div>
              <SectionHeader
                align="left"
                eyebrow="Who we are"
                title="More than code."
                accent="A partner in growth."
                description="We are an IT solutions team helping businesses turn ideas into practical digital experiences. From websites to custom software, we focus on clarity, performance and measurable value."
              />
              <div className="mt-9 space-y-5">
                {pillars.map(({ icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <IconTile icon={icon} />
                    <div>
                      <p className="font-bold text-slate-900">{title}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="dark" className="overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[130px]" />
        <Container className="relative">
          <SectionHeader dark eyebrow="How we operate" title="What guides" accent="everything we do." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="card-lift rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10">
                <span className="text-sm font-bold text-blue-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="Our journey"
                title="Every great journey"
                accent="starts with an idea."
                description="Here are the milestones that shaped ours so far."
              />
              <div className="media-zoom relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src="/images/stock/launch-celebration.jpg" alt="Celebrating a project launch" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
            <ol className="space-y-5 lg:col-span-7">
              {milestones.map((m, i) => (
                <li key={m.title} className="card-lift flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${
                      i === milestones.length - 2 ? 'bg-blue-600 text-white' : 'bg-[#0B0F19] text-white'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">{m.when}</p>
                    <h3 className="mt-1.5 text-xl font-bold text-slate-900">{m.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section tone="muted">
        <Container>
          <SectionHeader eyebrow="Our principles" title="The values behind" accent="every project." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map(({ icon, title, text }) => (
              <div key={title} className="card-lift rounded-3xl border border-slate-200 bg-white p-7">
                <IconTile icon={icon} />
                <h3 className="mt-6 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand title="Have an idea?" accent="Let's make it happen." primary={{ href: '/contact', label: 'Book free consultation' }} />
    </>
  );
}
