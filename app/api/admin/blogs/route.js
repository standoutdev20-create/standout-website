import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { getDb } from '@/lib/mongodb'
import {
  buildBlogDoc,
  ensureBlogIndexes,
  serializeBlog,
  uniqueSlug,
  validateBlogInput,
} from '@/lib/blog'

export async function GET() {
  try {
    const db = await getDb()
    await ensureBlogIndexes(db)
    const posts = await db.collection('blogs').find({}).sort({ createdAt: -1 }).toArray()
    return NextResponse.json({ posts: posts.map(serializeBlog) })
  } catch (error) {
    console.error('Failed to list blog posts:', error)
    return NextResponse.json({ error: 'Failed to load posts.' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const error = validateBlogInput(body)
    if (error) return NextResponse.json({ error }, { status: 400 })

    const db = await getDb()
    await ensureBlogIndexes(db)
    const slug = await uniqueSlug(db, body.slug || body.title)
    const now = new Date()
    const fields = buildBlogDoc({ ...body, slug })

    const doc = {
      id: uuidv4(),
      ...fields,
      createdAt: now,
    }

    await db.collection('blogs').insertOne(doc)
    return NextResponse.json({ post: serializeBlog(doc) }, { status: 201 })
  } catch (error) {
    if (error?.code === 11000) {
      return NextResponse.json({ error: 'A post with this URL already exists.' }, { status: 409 })
    }
    console.error('Failed to create blog post:', error)
    return NextResponse.json({ error: 'Failed to create post.' }, { status: 500 })
  }
}
