import { Check } from 'lucide-react';
import { engagements } from '@/lib/siteData';
import { ButtonLink, Container, Section, SectionHeader } from '@/components/site/ui';

export function EngagementCards({ dark = true }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {engagements.map((plan) => {
        const featured = plan.featured;
        const base = dark
          ? featured
            ? 'bg-white text-slate-900 ring-2 ring-blue-500'
            : 'bg-white/[0.04] text-white ring-1 ring-white/10'
          : featured
            ? 'bg-[#0B0F19] text-white ring-2 ring-blue-600'
            : 'bg-white text-slate-900 ring-1 ring-slate-200';
        const muted = (dark && !featured) || (!dark && featured) ? 'text-slate-400' : 'text-slate-600';
        return (
          <div key={plan.name} className={`card-lift relative flex flex-col rounded-3xl p-7 sm:p-8 ${base}`}>
            {featured && (
              <span className="absolute -top-3 left-7 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30">
                Most requested
              </span>
            )}
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{plan.tagline}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold tracking-tight">Custom quote</span>
            </div>
            <p className={`mt-1 text-xs ${muted}`}>Based on project scope</p>
            <ul className="mt-7 flex-1 space-y-3.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px]">
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured || !dark ? 'bg-blue-600 text-white' : 'bg-white/10 text-blue-300'}`}>
                    <Check className="h-3 w-3" />
                  </span>
                  <span className={featured && dark ? 'text-slate-700' : ''}>{f}</span>
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/contact"
              variant={dark ? (featured ? 'primary' : 'light') : featured ? 'blue' : 'primary'}
              size="sm"
              className="mt-8 w-full"
            >
              Discuss your project
            </ButtonLink>
          </div>
        );
      })}
    </div>
  );
}

export default function PricingSection() {
  return (
    <Section tone="dark" className="overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      <Container className="relative">
        <SectionHeader
          dark
          eyebrow="Engagement models"
          title="Clear scope."
          accent="Transparent pricing."
          description="Every project is different. We discuss your goals, features and timeline first, then prepare a proposal with clear deliverables."
        />
        <div className="mt-14">
          <EngagementCards />
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Final pricing, timelines, hosting and maintenance are confirmed according to the agreed project scope.
        </p>
      </Container>
    </Section>
  );
}
