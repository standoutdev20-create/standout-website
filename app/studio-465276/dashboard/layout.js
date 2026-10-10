import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifySessionToken } from '@/lib/adminAuth'
import { ADMIN_BASE, ADMIN_COOKIE } from '@/lib/constants/admin'
import AdminShell from '@/components/admin/AdminShell'

export default async function DashboardLayout({ children }) {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE)?.value
  const session = await verifySessionToken(token)
  // middleware.js already gates this, but don't rely on a single check.
  if (!session) redirect(ADMIN_BASE)

  return <AdminShell username={session.sub || 'Administrator'}>{children}</AdminShell>
}
