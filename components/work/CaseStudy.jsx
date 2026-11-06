import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Calendar, Layers, Lightbulb, Target, Wrench } from 'lucide-react';
import LivePreview from '@/components/work/LivePreview';
import { projects } from '@/components/work/projectsData';
import { BrowserFrame, ButtonLink, Container, CTABand, Eyebrow, HeroBackdrop, IconTile, Section, SectionHeader } from '@/components/site/ui';

function Meta({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm ring-1 ring-slate-200">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</dt>
        <dd className="mt-0.5 font-semibold text-slate-900">{children}</dd>
      </div>
    </div>
  );
}

export default function CaseStudy({ project }) {
  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];
  const shots = project.screenshots?.length ? project.screenshots : [project.thumbnail];

  return (
    <>
      {/* Hero */}
      <section data-no-reveal className="relative overflow-hidden bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
        <HeroBackdrop />
        <Container className="relative">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                {project.isNew && <span className="rounded-full bg-blue-600 px-3 py-1 text-white">Latest project</span>}
                <span className="rounded-full bg-white px-3 py-1 text-blue-700 ring-1 ring-blue-200">{project.tag}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
                </span>
              </div>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">{project.title}</h1>
              <p className="mt-3 text-lg font-medium text-blue-600 sm:text-xl">{project.subtitle}</p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{project.fullDescription || project.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={project.url}>Visit live site</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Start a similar project
                </ButtonLink>
              </div>
            </div>

            <dl className="grid gap-5 rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:p-8">
              <Meta icon={Layers} label="Industry">{project.tag}</Meta>
              <Meta icon={Calendar} label={project.duration ? 'Year · Timeline' : 'Year'}>
                {project.year}
                {project.duration ? ` · ${project.duration}` : ''}
              </Meta>
              <Meta icon={Wrench} label="Services">{project.services?.join(', ')}</Meta>
              <Meta icon={Target} label="Built with">{project.technologies?.join(', ')}</Meta>
            </dl>
          </div>
        </Container>
      </section>

      {/* Live preview */}
      <Section tone="muted" className="!pt-16 sm:!pt-20">
        <Container>
          <SectionHeader
            eyebrow="Live preview"
            title="See it"
            accent="in action."
            description="Explore the real website right here. Switch between desktop, tablet and mobile to see how it adapts."
          />
          <div className="mt-12">
            <LivePreview url={project.url} title={project.title} poster={project.thumbnail} />
          </div>
        </Container>
      </Section>

      {/* Challenge & solution */}
      <Section tone="white">
        <Container>
          <SectionHeader eyebrow="The project" title="From brief" accent="to launch." />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
              <IconTile icon={Target} />
              <h3 className="mt-6 text-xl font-bold text-slate-900">The challenge</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">{project.challenge}</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-[#0B0F19] p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-600/30 blur-[90px]" />
              <IconTile icon={Lightbulb} dark className="relative" />
              <h3 className="relative mt-6 text-xl font-bold">Our solution</h3>
              <p className="relative mt-3 text-[15px] leading-relaxed text-slate-300 sm:text-base">{project.solution}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      {shots.length > 1 && (
        <Section tone="muted">
          <Container>
            <SectionHeader eyebrow="Gallery" title="A closer look at" accent="the details." />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {shots.map((src, i) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={i === 0 && shots.length % 2 === 1 ? 'md:col-span-2' : ''}
                  aria-label={`Open screenshot ${i + 1} of ${project.title}`}
                >
                  <BrowserFrame src={src} alt={`${project.title} screenshot ${i + 1}`} url={i === 0 ? project.url : undefined} sizes="(min-width: 768px) 50vw, 100vw" className="card-lift" />
                </a>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Features */}
      {project.features?.length > 0 && (
        <Section tone="white">
          <Container>
            <SectionHeader eyebrow="What we built" title="Key features" accent="of the website." />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((f) => (
                <div key={f.title} className="card-lift rounded-3xl border border-slate-200 bg-white p-7">
                  <IconTile icon={f.icon} />
                  <h3 className="mt-6 text-lg font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{f.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Outcomes */}
      {project.results?.length > 0 && (
        <Section tone="dark" className="overflow-hidden !py-16 sm:!py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
          <Container className="relative">
            <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {project.results.map((r) => (
                <div key={r.label} className="bg-[#0B0F19] p-7 text-center">
                  <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{r.metric}</p>
                  <p className="mt-2 text-sm text-slate-400">{r.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Next project */}
      {next && next.id !== project.id && (
        <Section tone="white" className="!pb-0">
          <Container>
            <Link href={`/work/${next.id}`} className="card-lift group grid items-center gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-10 md:grid-cols-2">
              <div>
                <Eyebrow>Next project</Eyebrow>
                <p className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{next.title}</p>
                <p className="mt-2 text-slate-600">{next.subtitle}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-slate-900">
                  View case study
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B0F19] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
                <Image src={next.thumbnail} alt={`${next.title} website`} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
            </Link>
          </Container>
        </Section>
      )}

      <CTABand title="Want results like this?" accent="Let's talk." />
    </>
  );
}
