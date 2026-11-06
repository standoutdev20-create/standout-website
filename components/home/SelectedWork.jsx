import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projects } from '@/components/work/projectsData';
import { BrowserFrame, ButtonLink, Container, Section, SectionHeader, cx } from '@/components/site/ui';

export default function SelectedWork() {
  // Newest project first, then the rest; the home page shows three.
  const ordered = [...projects.filter((p) => p.isNew), ...projects.filter((p) => !p.isNew)].slice(0, 3);

  return (
    <Section tone="muted">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow="Selected work"
            title="Digital products,"
            accent="built to stand out."
            description="A closer look at websites and platforms we've designed and shipped for real businesses."
          />
          <ButtonLink href="/work" variant="secondary" className="shrink-0">
            View all projects
          </ButtonLink>
        </div>

        <div className="no-scrollbar -mx-4 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 pt-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {ordered.map((project) => {
            const latest = project.isNew;
            return (
              <article
                key={project.id}
                className={cx(
                  'card-lift group relative flex w-[85%] shrink-0 snap-start flex-col overflow-visible rounded-[1.75rem] border bg-white sm:w-[60%] md:w-[46%] lg:w-auto',
                  latest ? 'border-blue-600 shadow-xl shadow-blue-600/15 ring-4 ring-blue-600/10' : 'border-slate-200'
                )}
              >
                {latest && (
                  <span className="absolute -top-3.5 left-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1 text-xs font-bold text-white shadow-lg shadow-blue-600/30">
                    <Sparkles className="h-3.5 w-3.5" /> Latest project
                  </span>
                )}

                <Link
                  href={`/work/${project.id}`}
                  className={cx(
                    'relative block overflow-hidden rounded-t-[1.7rem] p-4 sm:p-5',
                    latest ? 'bg-gradient-to-br from-[#0B0F19] via-[#111a33] to-[#1e2a6b]' : 'bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100'
                  )}
                  aria-label={`Open ${project.title} case study`}
                >
                  <BrowserFrame
                    src={project.thumbnail}
                    alt={`${project.title} website`}
                    url={project.url}
                    dark={latest}
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  />
                  <span className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0F19] text-white opacity-0 shadow-lg ring-1 ring-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 ring-1 ring-blue-100">{project.tag}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
                    </span>
                    {project.duration && <span className="ml-auto text-slate-400">{project.duration}</span>}
                    {latest && <span className="ml-auto text-slate-400">{project.year}</span>}
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900">{project.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-slate-500">{project.subtitle}</p>
                  <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-slate-600">{project.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((t) => (
                      <li key={t} className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="flex-1" />
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <Link
                      href={`/work/${project.id}`}
                      className={cx(
                        'inline-flex items-center gap-1.5 text-sm font-semibold transition-colors',
                        latest ? 'text-blue-600 hover:text-blue-700' : 'text-slate-900 hover:text-blue-600'
                      )}
                    >
                      View case study <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
                    >
                      Live site <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
