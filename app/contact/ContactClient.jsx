import Image from 'next/image'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '@/components/site/ContactForm'
import { FAQList } from '@/components/home/FAQSection'
import { CONTACT, faqs } from '@/lib/siteData'
import { Container, Eyebrow, HeroBackdrop, Section, SectionHeader } from '@/components/site/ui'

const contactItems = [
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: 'Phone', value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: MapPin, label: 'Studio', value: `${CONTACT.location} · Working worldwide` },
  { icon: Clock, label: 'Response time', value: 'Within one business day' },
]

const nextSteps = [
  'We read your brief and reply within one business day.',
  'A short call to understand goals, timeline and budget.',
  'You get a clear scope and estimate. No obligation.',
]

export default function Contact() {
  return (
    <>
      <section data-no-reveal className="relative overflow-hidden bg-white pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
        <HeroBackdrop />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Eyebrow>Contact us</Eyebrow>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Tell us about <span className="text-shimmer">your project.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                A new website, a mobile app or software for your team: share a few details and we&apos;ll come back with next steps and a rough scope.
              </p>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactItems.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">{label}</span>
                        <span className="block break-words font-semibold text-slate-900">{value}</span>
                      </span>
                    </>
                  )
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className="card-lift flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">{inner}</div>
                      )}
                    </li>
                  )
                })}
              </ul>

              <div className="relative mt-8 hidden overflow-hidden rounded-3xl lg:block">
                <div className="relative aspect-[16/10]">
                  <Image src="/images/stock/team-meeting.jpg" alt="A project kickoff conversation" fill sizes="40vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/85 via-[#0B0F19]/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">What happens next</p>
                  <ol className="mt-3 space-y-2">
                    {nextSteps.map((s, i) => (
                      <li key={s} className="flex gap-3 text-sm text-white/90">
                        <span className="font-bold text-blue-300">{i + 1}.</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm idPrefix="contact" />
              <ol className="mt-6 grid gap-3 sm:grid-cols-3 lg:hidden">
                {nextSteps.map((s, i) => (
                  <li key={s} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 ring-1 ring-slate-200">
                    <span className="mb-1 block font-bold text-blue-600">{String(i + 1).padStart(2, '0')}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="muted">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="Questions before" accent="you reach out?" />
          <div className="mt-12">
            <FAQList items={faqs.slice(2, 8)} />
          </div>
        </Container>
      </Section>
    </>
  )
}
