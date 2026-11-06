'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { ADMIN_BASE } from '@/lib/constants/admin'
import { services, CONTACT } from '@/lib/siteData'

const company = [
  { href: '/about', label: 'About us' },
  { href: '/work', label: 'Our work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const legal = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
]

export default function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith(ADMIN_BASE)) return null

  return (
    <footer className="relative overflow-hidden bg-[#0B0F19] text-slate-400">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: brand + newsletter-style CTA */}
        <div className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10">
                <Image src="/images/Group.png" alt="" fill sizes="40px" className="object-contain p-2" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Standout<span className="text-blue-400">Dev</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
              Websites, web apps and custom software built around your business goals. Designed, developed and delivered by one team.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Start a project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B0F19] text-white transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="text-sm font-semibold text-white">Services</h3>
              <ul className="mt-4 space-y-3 text-[15px]">
                {services.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services#${s.slug}`} className="transition-colors hover:text-white">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-3 text-[15px]">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-white">Get in touch</h3>
              <ul className="mt-4 space-y-3 text-[15px]">
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2.5 break-all transition-colors hover:text-white">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a href={CONTACT.phoneHref} className="flex items-start gap-2.5 transition-colors hover:text-white">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                  {CONTACT.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} StandoutDev. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="font-display -mb-[0.22em] text-center text-[19vw] font-extrabold leading-none tracking-tighter text-white/[0.04]">
          StandoutDev
        </p>
      </div>
    </footer>
  )
}
