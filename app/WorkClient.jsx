'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Layers, MonitorSmartphone, Sparkles } from 'lucide-react';
import { projects, filters } from '@/components/work/projectsData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BrowserFrame, ButtonLink, Container, CTABand, Eyebrow, HeroBackdrop, Section, SectionHeader, cx } from '@/components/site/ui';

const stats = [
  { value: String(projects.length).padStart(2, '0'), label: 'Live projects' },
  { value: String(new Set(projects.map((p) => p.tag)).size).padStart(2, '0'), label: 'Industries' },
  { value: '100%', label: 'Responsive builds' },
];

function WorkHero() {
  const [a, b, c] = projects;
  return (
    <section data-no-reveal className="relative overflow-hidden bg-white pb-20 pt-32 sm:pb-28 sm:pt-36 lg:pt-40">
      <HeroBackdrop />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Our work</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Good ideas.
              <br />
              <span className="text-shimmer">Great digital work.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Websites and digital products we&apos;ve designed and built for real businesses, with thoughtful design, modern technology and a focus on results.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#projects">Explore projects</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Start a project
              </ButtonLink>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs text-slate-500 sm:text-sm">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Fanned screenshots */}
          <div className="relative lg:col-span-7">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-[8%] w-[62%]"
              >
                <BrowserFrame src={b.thumbnail} alt={b.title} sizes="40vw" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 6 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-[4%] w-[62%]"
              >
                <BrowserFrame src={c.thumbnail} alt={c.title} sizes="40vw" dark />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-1/2 w-[78%] -translate-x-1/2"
              >
                <BrowserFrame src={a.thumbnail} alt={a.title} url={a.url} sizes="55vw" priority />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <article
      className={cx(
        'card-lift group overflow-hidden rounded-[2rem] border border-slate-200 bg-white',
        featured && 'lg:col-span-2'
      )}
    >
      <Link href={`/work/${project.id}`} className="block w-full text-left" aria-label={`Open ${project.title} case study`}>
        <div className={cx('relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100', featured ? 'p-4 sm:p-8 lg:p-12' : 'p-4 sm:p-6')}>
          <BrowserFrame
            src={project.thumbnail}
            alt={`${project.title} website`}
            url={project.url}
            sizes={featured ? '(min-width: 1024px) 80vw, 100vw' : '(min-width: 1024px) 40vw, 100vw'}
          />
          <span className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#0B0F19] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100 sm:right-8 sm:top-8">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </Link>

      <div className={cx('p-6 sm:p-8', featured && 'lg:grid lg:grid-cols-12 lg:items-end lg:gap-10')}>
        <div className={featured ? 'lg:col-span-8' : ''}>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 ring-1 ring-blue-100">{project.tag}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">{project.category}</span>
            {project.isNew && <span className="rounded-full bg-[#0B0F19] px-3 py-1 text-white">New</span>}
            {project.duration && <span className="text-slate-400">· {project.duration}</span>}
          </div>
          <h3 className={cx('mt-4 font-bold tracking-tight text-slate-900', featured ? 'text-2xl sm:text-4xl' : 'text-2xl')}>{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-slate-500">{project.subtitle}</p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li key={t} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className={cx('mt-7 flex flex-wrap items-center gap-3', featured && 'lg:col-span-4 lg:mt-0 lg:justify-end')}>
          <Link
            href={`/work/${project.id}`}
            className="btn-shine group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#0B0F19] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
          >
            View case study
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 transition-transform duration-300 group-hover/btn:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600"
          >
            Live site <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [filter, setFilter] = useState('All');
  const list = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)), [filter]);

  return (
    <Section tone="white" id="projects" className="scroll-mt-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader align="left" eyebrow="Selected portfolio" title="Work worth" accent="exploring." description="Click any project to see the full case study." />
          <div className="flex gap-1 rounded-full border border-slate-200 bg-slate-50 p-1" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cx(
                  'relative rounded-full px-5 py-2 text-sm font-semibold transition-colors',
                  filter === f ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                )}
              >
                {filter === f && <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-[#0B0F19]" transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className={i === 0 && list.length > 1 ? 'lg:col-span-2' : ''}
              >
                <ProjectCard project={p} featured={i === 0 && list.length > 1} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}

const approach = [
  { icon: Sparkles, title: 'Purposeful design', text: 'Every screen is designed around a real user or business goal, not decoration.' },
  { icon: MonitorSmartphone, title: 'Responsive by default', text: 'Layouts adapted and tested for mobile, tablet and desktop before launch.' },
  { icon: Layers, title: 'Built to grow', text: 'Clean, maintainable code on a modern stack, ready for the next feature.' },
];

function Industries() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeader
          eyebrow="Across industries"
          title="Different needs."
          accent="Thoughtful digital work."
          description="Our portfolio spans architecture, manufacturing, education and digital services. The approach stays the same."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <div key={p.id} className="card-lift group relative overflow-hidden rounded-3xl bg-[#0B0F19]">
              <div className="media-zoom relative aspect-[4/3]">
                <Image src={p.screenshots?.[1] || p.thumbnail} alt={`${p.title} screen`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-top opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">{p.tag}</p>
                <p className="mt-1 text-lg font-bold text-white">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {approach.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold text-slate-900">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function WorkClient() {
  const router = useRouter();

  // Old deep links like /work?project=uma-metals now live at /work/uma-metals
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('project');
    if (id && projects.some((p) => p.id === id)) router.replace(`/work/${id}`);
  }, [router]);

  return (
    <>
      <WorkHero />
      <Projects />
      <Industries />
      <CTABand title="Have a project in mind?" accent="Let's build it." secondary={{ href: '/services', label: 'Our services' }} />
    </>
  );
}
