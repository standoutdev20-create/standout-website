import Link from 'next/link'
import { FileText, CheckCircle2, PenLine, Mail } from 'lucide-react'
import { getDb } from '@/lib/mongodb'
import { ADMIN_BLOGS, ADMIN_CONTACTS } from '@/lib/constants/admin'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Dashboard', robots: { index: false, follow: false } }

export default async function AdminOverviewPage() {
  const db = await getDb()
  const [total, published, drafts, contacts] = await Promise.all([
    db.collection('blogs').countDocuments({}),
    db.collection('blogs').countDocuments({ status: 'published' }),
    db.collection('blogs').countDocuments({ status: 'draft' }),
    db.collection('contact_messages').countDocuments({}),
  ])

  const stats = [
    { label: 'Total Posts', value: total, icon: FileText, href: ADMIN_BLOGS },
    { label: 'Published', value: published, icon: CheckCircle2, href: ADMIN_BLOGS },
    { label: 'Drafts', value: drafts, icon: PenLine, href: ADMIN_BLOGS },
    { label: 'Contact Requests', value: contacts, icon: Mail, href: ADMIN_CONTACTS },
  ]

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-500">Overview of your blog and inbound leads.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <Icon size={18} className="text-cyan-600" />
            <p className="mt-4 text-2xl font-bold text-slate-900">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-slate-800">Quick actions</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`${ADMIN_BLOGS}/new`}
            className="rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            + New Post
          </Link>
          <Link
            href={ADMIN_BLOGS}
            className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Manage Posts
          </Link>
          <Link
            href={ADMIN_CONTACTS}
            className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            View Contact Requests
          </Link>
        </div>
      </div>
    </div>
  )
}
