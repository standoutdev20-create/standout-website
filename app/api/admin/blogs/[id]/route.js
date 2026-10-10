import { NextResponse } from 'next/server'
import { getDb } from '@/lib/mongodb'
import {
  BLOG_STATUSES,
  buildBlogDoc,
  ensureBlogIndexes,
  serializeBlog,
  uniqueSlug,
  validateBlogInput,
} from '@/lib/blog'

export async function GET(_request, { params }) {
  const { id } = await params
  try {
    const db = await getDb()
    const post = await db.collection('blogs').findOne({ id })
    if (!post) return NextResponse.json({ error: 'Not found.' }, { status: 404 })
    return NextResponse.json({ post: serializeBlog(post) })
  } catch (error) {
    console.error('Failed to load blog post:', error)
    return NextResponse.json({ error: 'Failed to load post.' }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  const { id } = await params
  try {
    const body = await request.json()
    const error = validateBlogInput(body)
    if (error) return NextResponse.json({ error }, { status: 400 })

    const db = await getDb()
    await ensureBlogIndexes(db)
    const existing = await db.collection('blogs').findOne({ id })
    if (!existing) return NextResponse.json({ error: 'Not found.' }, { status: 404 })

    // Keep the existing URL unless the admin explicitly changed the slug —
    // retitling a published post must not silently break inbound links.
    const slug = await uniqueSlug(db, body.slug || existing.slug || body.title, id)
    const update = buildBlogDoc({ ...body, slug }, existing)

    await db.collection('blogs').updateOne({ id }, { $set: update })
    return NextResponse.json({ post: serializeBlog({ ...existing, ...update }) })
  } catch (error) {
    if (error?.code === 11000) {
      return NextResponse.json({ error: 'A post with this URL already exists.' }, { status: 409 })
    }
    console.error('Failed to update blog post:', error)
    return NextResponse.json({ error: 'Failed to update post.' }, { status: 500 })
  }
}

// Quick publish / unpublish from the posts table without resending the body.
export async function PATCH(request, { params }) {
  const { id } = await params
  try {
    const { status } = await request.json()
    if (!BLOG_STATUSES.includes(status)) {
      return NextResponse.json({ error: 'Invalid status.' }, { status: 400 })
    }

    const db = await getDb()
    const existing = await db.collection('blogs').findOne({ id })
    if (!existing) return NextResponse.json({ error: 'Not found.' }, { status: 404 })

    const now = new Date()
    const update = { status, updatedAt: now }
    if (status === 'published' && existing.status !== 'published') update.publishedAt = now

    await db.collection('blogs').updateOne({ id }, { $set: update })
    return NextResponse.json({ post: serializeBlog({ ...existing, ...update }) })
  } catch (error) {
    console.error('Failed to change blog post status:', error)
    return NextResponse.json({ error: 'Failed to update post.' }, { status: 500 })
  }
}

export async function DELETE(_request, { params }) {
  const { id } = await params
  try {
    const db = await getDb()
    const result = await db.collection('blogs').deleteOne({ id })
    if (!result.deletedCount) return NextResponse.json({ error: 'Not found.' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete blog post:', error)
    return NextResponse.json({ error: 'Failed to delete post.' }, { status: 500 })
  }
}
