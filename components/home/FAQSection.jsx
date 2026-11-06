'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs as defaultFaqs, CONTACT } from '@/lib/siteData';
import { ButtonLink, Container, Section, SectionHeader } from '@/components/site/ui';

export function FAQList({ items = defaultFaqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
            >
              <span className="text-base font-semibold text-slate-900 sm:text-lg">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-slate-600 sm:px-8">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQSection({ items }) {
  return (
    <Section tone="muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              align="left"
              eyebrow="FAQ"
              title="Everything you need to know"
              accent="before you start."
              description="Can't find what you're looking for? Our team is happy to help."
            />
            <div className="mt-8 rounded-3xl bg-[#0B0F19] p-6 text-white">
              <p className="font-semibold">Still have questions?</p>
              <p className="mt-1 text-sm text-slate-400">Email us at {CONTACT.email}</p>
              <ButtonLink href="/contact" variant="light" size="sm" className="mt-5">
                Contact our team
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQList items={items} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
