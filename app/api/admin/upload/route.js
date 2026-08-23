import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const ALLOWED_TYPES = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
}
const MAX_SIZE = 5 * 1024 * 1024 // 5MB

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('upload') || formData.get('image')

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 })
    }
    const ext = ALLOWED_TYPES[file.type]
    if (!ext) {
      return NextResponse.json({ error: 'Unsupported file type.' }, { status: 400 })
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'File too large (max 5MB).' }, { status: 400 })
    }

    const bytes = Buffer.from(await file.arrayBuffer())
    const filename = `${uuidv4()}.${ext}`
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'blog')
    await mkdir(uploadDir, { recursive: true })
    await writeFile(path.join(uploadDir, filename), bytes)

    const url = `/uploads/blog/${filename}`
    // CKEditor's upload adapter expects `url`; we also return it as `default`
    // for parity with the format some adapters look for.
    return NextResponse.json({ url, default: url })
  } catch (error) {
    console.error('Blog image upload failed:', error)
    return NextResponse.json({ error: 'Upload failed.' }, { status: 500 })
  }
}
