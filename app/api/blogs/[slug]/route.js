import { NextResponse } from 'next/server'
import { getDb } from '@/lib/mongodb'

export async function GET(request, { params }) {
  const { slug } = await params
  try {
    const db = await getDb()
    const post = await db.collection('blogs').findOne({ slug, status: 'published' })
    if (!post) return NextResponse.json({ error: 'Not found.' }, { status: 404 })
    const { _id, ...rest } = post
    return NextResponse.json({ post: rest })
  } catch (error) {
    console.error('Failed to load blog post:', error)
    return NextResponse.json({ error: 'Failed to load post.' }, { status: 500 })
  }
}
