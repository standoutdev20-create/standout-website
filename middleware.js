import { NextResponse } from 'next/server'
import { verifySessionToken } from '@/lib/adminAuth'
import { ADMIN_BASE, ADMIN_DASHBOARD, ADMIN_COOKIE } from '@/lib/constants/admin'

// NOTE: matcher must be a static literal (Next.js parses it at build time),
// so it can't reference ADMIN_BASE — keep this in sync with lib/constants/admin.js.
export const config = {
  matcher: ['/studio-465276/:path*', '/api/admin/:path*'],
}

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // The login page itself and the login API must stay reachable without a session.
  const isLoginPage = pathname === ADMIN_BASE
  const isLoginApi = pathname === '/api/admin/login'
  if (isLoginApi) return NextResponse.next()

  const token = request.cookies.get(ADMIN_COOKIE)?.value
  const session = await verifySessionToken(token)

  if (!session) {
    if (isLoginPage) return NextResponse.next()
    if (pathname.startsWith('/api/admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return NextResponse.redirect(new URL(ADMIN_BASE, request.url))
  }

  if (isLoginPage) {
    return NextResponse.redirect(new URL(ADMIN_DASHBOARD, request.url))
  }

  return NextResponse.next()
}
