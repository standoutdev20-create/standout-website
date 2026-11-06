import Image from 'next/image';
import { Clock, Mail, Phone } from 'lucide-react';
import ContactForm from '@/components/site/ContactForm';
import { CONTACT } from '@/lib/siteData';
import { Container, Eyebrow, Section } from '@/components/site/ui';

const steps = [
  'We read your brief and reply within one business day.',
  'A short call to understand goals, timeline and budget.',
  'You get a clear scope and estimate. No obligation.',
];

export default function ContactSection() {
  return (
    <Section tone="dark" id="contact" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/stock/office-loft.jpg" alt="" fill sizes="100vw" className="object-cover opacity-[0.08]" />
        <div className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/25 blur-[140px]" />
      </div>
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow dark>Let&apos;s build something</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Have a project? <span className="text-blue-400">Let&apos;s talk.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
              Tell us about your business, idea or digital product. We&apos;ll help you explore the right solution for your goals.
            </p>

            <ol className="mt-10 space-y-5">
              {steps.map((s, i) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-blue-300 ring-1 ring-white/10">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-[15px] text-slate-300">{s}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="break-all text-sm text-white">{CONTACT.email}</span>
              </a>
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-white">{CONTACT.phone}</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:col-span-2 lg:col-span-1">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-white">Reply within one business day</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm idPrefix="home-contact" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
