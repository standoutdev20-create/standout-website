import { SignJWT, jwtVerify } from 'jose'

// jose (not jsonwebtoken) on purpose: this needs to run both in the Node
// login route and in Edge middleware, and jose is the one that works in both.

function getSecretKey() {
  const secret = process.env.SESSION_SECRET
  if (!secret) {
    throw new Error('SESSION_SECRET is not set — add it to .env')
  }
  return new TextEncoder().encode(secret)
}

export async function createSessionToken(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecretKey())
}

export async function verifySessionToken(token) {
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, getSecretKey())
    return payload
  } catch {
    return null
  }
}
