import { getDb } from '@/lib/mongodb'
import ContactTable from '@/components/admin/ContactTable'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Contact Requests — StandoutDev', robots: { index: false, follow: false } }

export default async function ContactRequestsPage() {
  const db = await getDb()
  const messages = await db.collection('contact_messages').find({}).sort({ createdAt: -1 }).toArray()
  const serialized = messages.map(({ _id, ...rest }) => ({
    ...rest,
    createdAt: rest.createdAt?.toISOString?.() ?? null,
  }))

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Contact Requests</h1>
      <p className="mt-1 text-sm text-slate-500">{serialized.length} total</p>
      <ContactTable messages={serialized} />
    </div>
  )
}
