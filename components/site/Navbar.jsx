'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { ADMIN_BASE } from '@/lib/constants/admin'
import { services, CONTACT } from '@/lib/siteData'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', mega: true },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
]

function isActive(pathname, href) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname?.startsWith(`${href}/`)
}

function ServicesMenu({ onNavigate }) {
  return (
    <div className="grid w-[min(860px,calc(100vw-2rem))] grid-cols-[1fr_260px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15">
      <div className="grid grid-cols-2 gap-1 p-3">
        {services.map(({ slug, icon: Icon, title, short }) => (
          <Link
            key={slug}
            href={`/services#${slug}`}
            onClick={onNavigate}
            className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
              <Icon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900">{title}</span>
              <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-slate-500">{short}</span>
            </span>
          </Link>
        ))}
      </div>
      <Link href="/work" onClick={onNavigate} className="group relative flex flex-col justify-end overflow-hidden bg-[#0B0F19] p-5">
        <Image src="/uma1.webp" alt="" fill sizes="260px" className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
        <div className="relative">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-400">Case studies</span>
          <p className="mt-2 text-base font-semibold leading-snug text-white">See the products we&apos;ve shipped for real businesses.</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white">
            View our work <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </div>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on navigation
  useEffect(() => {
    setOpen(false)
    setMegaOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setMegaOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (pathname?.startsWith(ADMIN_BASE)) return null

  const openMega = () => {
    clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  const solid = scrolled || open

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div className={`px-3 transition-all duration-300 sm:px-4 ${scrolled ? 'pt-2' : 'pt-3 sm:pt-4'}`}>
        <div
          className={`glass-nav relative mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl px-3 pl-4 transition-all duration-300 sm:px-4 sm:pl-5 lg:h-16 lg:px-5 ${
            solid ? 'glass-nav-solid' : ''
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="StandoutDev home">
            <span className="relative h-9 w-9 overflow-hidden rounded-xl bg-[#0B0F19] p-1.5 shadow-sm">
              <Image src="/images/Group.png" alt="" fill sizes="36px" priority className="object-contain p-1.5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-slate-900">
              Standout<span className="text-blue-600">Dev</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {links.map((link) =>
              link.mega ? (
                <div key={link.href} onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <Link
                    href={link.href}
                    aria-expanded={megaOpen}
                    onFocus={openMega}
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                      isActive(pathname, link.href) ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <AnimatePresence>
                    {megaOpen && (
                      // Centred under the whole bar; the outer div handles position,
                      // the inner motion.div only animates (so transforms don't clash).
                      <div className="pointer-events-none absolute inset-x-0 top-full flex justify-center pt-3">
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="pointer-events-auto"
                          onMouseEnter={openMega}
                        >
                          <ServicesMenu onNavigate={() => setMegaOpen(false)} />
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                    isActive(pathname, link.href) ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive(pathname, link.href) && (
                    <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-600" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/contact" className="rounded-full px-4 py-2 text-[15px] font-medium text-slate-600 transition-colors hover:text-slate-900">
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn-shine group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#0B0F19] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Book a Call
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/60 text-slate-900 shadow-sm backdrop-blur lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="glass-panel fixed inset-x-3 bottom-3 top-[76px] overflow-y-auto rounded-3xl sm:inset-x-4 lg:hidden"
          >
            <nav className="mx-auto flex max-w-lg flex-col px-4 pb-10 pt-4 sm:px-6" aria-label="Mobile">
              {links.map((link) =>
                link.mega ? (
                  <div key={link.href} className="border-b border-slate-100">
                    <button
                      type="button"
                      onClick={() => setMobileServices((v) => !v)}
                      className="flex w-full items-center justify-between py-4 text-lg font-semibold text-slate-900"
                      aria-expanded={mobileServices}
                    >
                      {link.label}
                      <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileServices && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-1 pb-4">
                            <Link href="/services" className="rounded-xl px-3 py-2.5 text-sm font-semibold text-blue-600 hover:bg-slate-50">
                              All services →
                            </Link>
                            {services.map(({ slug, icon: Icon, title }) => (
                              <Link
                                key={slug}
                                href={`/services#${slug}`}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] text-slate-700 hover:bg-slate-50"
                              >
                                <Icon className="h-4 w-4 text-slate-400" />
                                {title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between border-b border-slate-100 py-4 text-lg font-semibold ${
                      isActive(pathname, link.href) ? 'text-blue-600' : 'text-slate-900'
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-5 w-5 text-slate-300" />
                  </Link>
                )
              )}

              <Link
                href="/contact"
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#0B0F19] px-6 py-4 text-base font-semibold text-white"
              >
                Book a Call <ArrowUpRight className="h-5 w-5" />
              </Link>

              <div className="mt-8 grid gap-3 rounded-2xl bg-white/60 p-5 text-sm text-slate-600 ring-1 ring-white/70">
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-600" /> {CONTACT.email}
                </a>
                <a href={CONTACT.phoneHref} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-blue-600" /> {CONTACT.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
