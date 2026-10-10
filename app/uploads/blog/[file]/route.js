import { readFile } from 'fs/promises'
import path from 'path'
import { BLOG_UPLOAD_DIR, IMAGE_CONTENT_TYPES } from '@/lib/uploads'

// Fallback for images uploaded after `next build` (see lib/uploads.js).
export async function GET(_request, { params }) {
  const { file } = await params
  const match = /^[\w-]+\.(png|jpg|webp|gif)$/.exec(file || '')
  if (!match) return new Response('Not found', { status: 404 })

  try {
    const bytes = await readFile(path.join(BLOG_UPLOAD_DIR, file))
    return new Response(bytes, {
      headers: {
        'Content-Type': IMAGE_CONTENT_TYPES[match[1]],
        // Filenames are random UUIDs and never reused, so cache forever.
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch {
    return new Response('Not found', { status: 404 })
  }
}
