import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { ButtonLink, Container, Section, SectionHeader } from '@/components/site/ui';

const points = [
  'Want to build a professional website, web app or digital product.',
  'Need a reliable team to turn their idea into a working solution.',
  'Value thoughtful design, scalable development and clear communication.',
  'Want a long-term technology partner, not a one-time vendor.',
];

export default function WhoWeWorkWith() {
  return (
    <Section tone="white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="media-zoom relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/15 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image src="/images/WeWork.png" alt="A team reviewing a product design together" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 right-4 w-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:right-8 sm:w-64">
              <div className="relative aspect-[4/3]">
                <Image src="/images/stock/team-meeting.jpg" alt="Planning meeting" fill sizes="256px" className="object-cover" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="Who we work with"
              title="Built for businesses ready to"
              accent="stand out."
              description="We work best with businesses that:"
            />
            <ul className="mt-7 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-base text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-7">
              <p className="text-lg font-bold text-slate-900">Not sure where to start?</p>
              <p className="mt-1.5 text-[15px] text-slate-600">
                Tell us about your business or idea. We&apos;ll help you identify the right digital solution for your goals.
              </p>
              <ButtonLink href="/contact" className="mt-5">
                Let&apos;s discuss your project
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
