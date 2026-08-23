import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDb } from '@/lib/mongodb'
import { ADMIN_BLOGS } from '@/lib/constants/admin'
import BlogForm from '@/components/admin/BlogForm'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Edit Post', robots: { index: false, follow: false } }

export default async function EditBlogPostPage({ params }) {
  const { id } = await params
  const db = await getDb()
  const post = await db.collection('blogs').findOne({ id })
  if (!post) notFound()

  const { _id, ...rest } = post
  const serialized = {
    ...rest,
    createdAt: rest.createdAt?.toISOString?.() ?? null,
    updatedAt: rest.updatedAt?.toISOString?.() ?? null,
    publishedAt: rest.publishedAt?.toISOString?.() ?? null,
  }

  return (
    <div>
      <Link href={ADMIN_BLOGS} className="text-sm text-slate-500 hover:text-slate-800">
        ← Back to Blogs
      </Link>
      <h1 className="mt-4 text-2xl font-semibold text-slate-900">Edit Post</h1>
      <div className="mt-8">
        <BlogForm initialPost={serialized} />
      </div>
    </div>
  )
}
