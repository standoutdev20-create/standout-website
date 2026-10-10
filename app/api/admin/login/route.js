import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { createSessionToken } from '@/lib/adminAuth'
import { ADMIN_COOKIE } from '@/lib/constants/admin'
import { checkRateLimit, clientIp, recordHit, resetHits } from '@/lib/rateLimit'

// 5 failed attempts per IP per 15 minutes.
const LOGIN_LIMIT = { limit: 5, windowMs: 15 * 60 * 1000 }

export async function POST(request) {
  const rateKey = `login:${clientIp(request)}`
  const { allowed, retryAfter } = checkRateLimit(rateKey, LOGIN_LIMIT)
  if (!allowed) {
    return NextResponse.json(
      { error: `Too many failed attempts. Try again in ${Math.ceil(retryAfter / 60)} min.` },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } },
    )
  }

  try {
    const { username, password } = await request.json()

    if (!username?.trim() || !password) {
      return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 })
    }

    const validUsername = process.env.ADMIN_USERNAME
    const passwordHash = process.env.ADMIN_PASSWORD_HASH

    if (!validUsername || !passwordHash) {
      console.error('ADMIN_USERNAME / ADMIN_PASSWORD_HASH are not configured in .env')
      return NextResponse.json({ error: 'Admin login is not configured.' }, { status: 500 })
    }

    const usernameMatches = username === validUsername
    const passwordMatches = await bcrypt.compare(password, passwordHash)

    if (!usernameMatches || !passwordMatches) {
      recordHit(rateKey, LOGIN_LIMIT)
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 })
    }

    resetHits(rateKey)
    const token = await createSessionToken({ sub: validUsername, role: 'admin' })

    const response = NextResponse.json({ success: true })
    response.cookies.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return response
  } catch (error) {
    console.error('Admin login failed:', error)
    return NextResponse.json({ error: 'Login failed. Please try again.' }, { status: 500 })
  }
}
