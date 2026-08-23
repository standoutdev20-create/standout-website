import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { createSessionToken } from '@/lib/adminAuth'
import { ADMIN_COOKIE } from '@/lib/constants/admin'

export async function POST(request) {
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
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 })
    }

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
