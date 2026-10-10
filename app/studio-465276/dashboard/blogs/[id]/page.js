import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDb } from '@/lib/mongodb'
import { serializeBlogForClient } from '@/lib/blog'
import { ADMIN_BLOGS } from '@/lib/constants/admin'
import BlogForm from '@/components/admin/BlogForm'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Edit Post — StandoutDev', robots: { index: false, follow: false } }

export default async function EditBlogPostPage({ params }) {
  const { id } = await params
  const db = await getDb()
  const post = await db.collection('blogs').findOne({ id })
  if (!post) notFound()

  return (
    <div>
      <Link href={ADMIN_BLOGS} className="text-sm text-slate-500 hover:text-slate-800">
        ← Back to Blogs
      </Link>
      <h1 className="mt-4 text-2xl font-semibold text-slate-900">Edit Post</h1>
      <div className="mt-8">
        <BlogForm initialPost={serializeBlogForClient(post)} />
      </div>
    </div>
  )
}
