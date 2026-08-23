import { cookies } from 'next/headers'
import { verifySessionToken } from '@/lib/adminAuth'
import { ADMIN_COOKIE } from '@/lib/constants/admin'
import AdminShell from '@/components/admin/AdminShell'

export default async function DashboardLayout({ children }) {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE)?.value
  const session = await verifySessionToken(token)

  return <AdminShell username={session?.sub || 'Administrator'}>{children}</AdminShell>
}
