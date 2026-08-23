import { NextResponse } from 'next/server'
import { getDb } from '@/lib/mongodb'

// GET /api/blogs — published posts only, for any public consumer that wants JSON.
// The /blog pages themselves query MongoDB directly (server components); this
// route exists for client-side use (search, "load more", etc.) if needed later.
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const tag = searchParams.get('tag')
    const limit = Math.min(Number(searchParams.get('limit')) || 20, 50)
    const page = Math.max(Number(searchParams.get('page')) || 1, 1)

    const db = await getDb()
    const query = { status: 'published' }
    if (tag) query.tags = tag

    const total = await db.collection('blogs').countDocuments(query)
    const posts = await db.collection('blogs')
      .find(query, { projection: { content: 0 } })
      .sort({ publishedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()

    return NextResponse.json({
      posts: posts.map(({ _id, ...rest }) => rest),
      total,
      page,
      totalPages: Math.max(Math.ceil(total / limit), 1),
    })
  } catch (error) {
    console.error('Failed to list published posts:', error)
    return NextResponse.json({ error: 'Failed to load posts.' }, { status: 500 })
  }
}
