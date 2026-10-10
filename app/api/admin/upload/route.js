import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { v4 as uuidv4 } from 'uuid'
import { BLOG_UPLOAD_DIR, detectImageType } from '@/lib/uploads'

const MAX_SIZE = 5 * 1024 * 1024 // 5MB

// SVG is deliberately not accepted: it can carry script and would be served
// from our own origin.
export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('upload') || formData.get('image')

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: { message: 'No file provided.' } }, { status: 400 })
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: { message: 'File too large (max 5MB).' } }, { status: 400 })
    }

    const bytes = Buffer.from(await file.arrayBuffer())
    // Trust the file's actual bytes, not the browser-supplied MIME type.
    const ext = detectImageType(bytes)
    if (!ext) {
      return NextResponse.json(
        { error: { message: 'Unsupported file type. Use PNG, JPG, WebP or GIF.' } },
        { status: 400 },
      )
    }

    const filename = `${uuidv4()}.${ext}`
    await mkdir(BLOG_UPLOAD_DIR, { recursive: true })
    await writeFile(`${BLOG_UPLOAD_DIR}/${filename}`, bytes)

    const url = `/uploads/blog/${filename}`
    return NextResponse.json({ url, default: url })
  } catch (error) {
    console.error('Blog image upload failed:', error)
    return NextResponse.json({ error: { message: 'Upload failed.' } }, { status: 500 })
  }
}
