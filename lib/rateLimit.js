// Tiny in-memory fixed-window limiter. Good enough for a single-instance
// deployment (the Docker setup here); swap for Redis if this ever scales out.
const buckets = global._rateLimitBuckets || (global._rateLimitBuckets = new Map())

export function checkRateLimit(key, { limit, windowMs }) {
  const now = Date.now()
  const bucket = buckets.get(key)
  if (!bucket || bucket.resetAt <= now) {
    return { allowed: true, retryAfter: 0 }
  }
  if (bucket.count >= limit) {
    return { allowed: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) }
  }
  return { allowed: true, retryAfter: 0 }
}

export function recordHit(key, { windowMs }) {
  const now = Date.now()
  const bucket = buckets.get(key)
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
  } else {
    bucket.count += 1
  }
  if (buckets.size > 5000) {
    for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k)
  }
}

export function resetHits(key) {
  buckets.delete(key)
}

export function clientIp(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}
