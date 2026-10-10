import path from 'path'

// Uploads live under public/ so `next dev` serves them directly, but a
// production server only serves public files that existed at build time —
// app/uploads/blog/[file]/route.js serves anything uploaded after that.
// In Docker this directory is a named volume (see docker-compose.yml).
export const BLOG_UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'blog')

export const IMAGE_CONTENT_TYPES = {
  png: 'image/png',
  jpg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif',
}

export function detectImageType(bytes) {
  if (bytes.length < 12) return null
  if (bytes[0] === 0x89 && bytes.toString('ascii', 1, 4) === 'PNG') return 'png'
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'jpg'
  if (bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP') return 'webp'
  if (bytes.toString('ascii', 0, 4) === 'GIF8') return 'gif'
  return null
}
