import Image from 'next/image';
import { Check, X } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/site/ui';

const common = [
  'Separate designers, developers and agencies',
  'Scattered communication and slow handoffs',
  'Inconsistent design across screens',
  'Unclear timelines and surprise costs',
];

const ours = [
  'One team for design, development and delivery',
  'A single point of contact and regular updates',
  'A consistent design system from day one',
  'Clear scope, honest timelines, no surprises',
];

export default function ApproachSection() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeader
          eyebrow="The StandoutDev approach"
          title="Disconnected teams create"
          accent="disconnected products."
          description="Scattered communication, inconsistent design and delayed development slow your product down. StandoutDev brings design, development and delivery together in one team."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-12">
          {/* Common approach */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">The common approach</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Disconnected teams.
              <br />
              Endless delays.
            </h3>
            <ul className="mt-7 space-y-4">
              {common.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-slate-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                    <X className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="media-zoom relative min-h-[280px] overflow-hidden rounded-3xl lg:col-span-4">
            <Image src="/images/stock/collaboration-top.jpg" alt="A team collaborating around laptops" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/70 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/90 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">Design + development, in one room.</p>
              <p className="mt-1 text-xs text-slate-500">Fewer handoffs means faster, better decisions.</p>
            </div>
          </div>

          {/* StandoutDev way */}
          <div className="relative overflow-hidden rounded-3xl bg-[#0B0F19] p-7 text-white sm:p-9 lg:col-span-4">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-600/30 blur-[90px]" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">The StandoutDev way</p>
            <h3 className="relative mt-3 text-2xl font-bold">
              One team.
              <br />
              One clear direction.
            </h3>
            <ul className="relative mt-7 space-y-4">
              {ours.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
