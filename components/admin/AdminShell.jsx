'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Toaster } from 'sonner'
import { LayoutDashboard, FileText, Mail, Menu, X } from 'lucide-react'
import { ADMIN_DASHBOARD, ADMIN_BLOGS, ADMIN_CONTACTS } from '@/lib/constants/admin'
import { ConfirmProvider } from './ConfirmProvider'
import LogoutButton from './LogoutButton'

const navItems = [
  { href: ADMIN_DASHBOARD, label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: ADMIN_BLOGS, label: 'Blogs', icon: FileText },
  { href: ADMIN_CONTACTS, label: 'Contact Requests', icon: Mail },
]

function Brand() {
  return (
    <Link href={ADMIN_DASHBOARD} className="flex items-center gap-2.5">
      <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[10px] ring-1 ring-slate-200">
        <Image src="/logo.png" alt="StandoutDev" fill sizes="36px" priority className="object-cover" />
      </span>
      <div>
        <p className="text-sm font-semibold leading-tight text-slate-900">StandoutDev</p>
        <p className="text-[10px] uppercase tracking-wider text-slate-400">Admin Panel</p>
      </div>
    </Link>
  )
}

export default function AdminShell({ username, children }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <ConfirmProvider>
      <Toaster position="top-right" theme="light" richColors closeButton />
      <div className="flex min-h-screen bg-white text-slate-900">
        {/* Mobile top bar */}
        <div className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur md:hidden">
          <Brand />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-slate-900/30 md:hidden" onClick={() => setMenuOpen(false)} />
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-50 flex w-[240px] shrink-0 flex-col border-r border-slate-200 bg-slate-50 transition-transform md:sticky md:top-0 md:h-screen md:translate-x-0 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="border-b border-slate-200 p-6">
            <Brand />
          </div>

          <div className="border-b border-slate-200 px-5 py-4">
            <p className="mb-1 text-[10px] uppercase tracking-wider text-slate-400">Signed in as</p>
            <p className="truncate text-sm font-medium text-slate-800">{username}</p>
          </div>

          <nav className="flex-1 space-y-1 p-3">
            {navItems.map(({ href, label, icon: Icon, exact }) => {
              const active = exact ? pathname === href : pathname?.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20'
                      : 'text-slate-500 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  <Icon size={17} strokeWidth={2} />
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="space-y-2 border-t border-slate-200 p-3">
            <Link
              href="/blog"
              target="_blank"
              className="block rounded-lg px-4 py-2 text-center text-xs text-slate-500 hover:bg-white hover:text-slate-800"
            >
              View public blog ↗
            </Link>
            <LogoutButton className="w-full" />
          </div>
        </aside>

        <main className="min-w-0 flex-1 bg-white pt-14 md:pt-0">
          <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:px-10 md:py-10">{children}</div>
        </main>
      </div>
    </ConfirmProvider>
  )
}
