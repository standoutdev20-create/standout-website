'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, Mail } from 'lucide-react'
import { ADMIN_DASHBOARD, ADMIN_BLOGS, ADMIN_CONTACTS } from '@/lib/constants/admin'
import { ConfirmProvider } from './ConfirmProvider'
import LogoutButton from './LogoutButton'

const navItems = [
  { href: ADMIN_DASHBOARD, label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: ADMIN_BLOGS, label: 'Blogs', icon: FileText },
  { href: ADMIN_CONTACTS, label: 'Contact Requests', icon: Mail },
]

export default function AdminShell({ username, children }) {
  const pathname = usePathname()

  return (
    <ConfirmProvider>
      <div className="flex min-h-screen bg-white text-slate-900">
        <aside className="flex w-[240px] shrink-0 flex-col border-r border-slate-200 bg-slate-50">
          <div className="border-b border-slate-200 p-6">
            <div className="flex items-center gap-2.5">
              <span
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  height: 34, width: 34, borderRadius: 10,
                  background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                  color: '#fff', fontWeight: 900, fontSize: 15,
                }}
              >
                S
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight text-slate-900">StandoutDev</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">Admin Panel</p>
              </div>
            </div>
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

          <div className="border-t border-slate-200 p-3">
            <LogoutButton className="w-full" />
          </div>
        </aside>

        <main className="flex-1 bg-white">
          <div className="mx-auto w-full max-w-4xl px-6 py-10 md:px-10">{children}</div>
        </main>
      </div>
    </ConfirmProvider>
  )
}
