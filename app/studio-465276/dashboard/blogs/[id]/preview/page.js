import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDb } from '@/lib/mongodb'
import { ADMIN_BLOGS } from '@/lib/constants/admin'
import BlogArticle from '@/components/blog/BlogArticle'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Preview — StandoutDev', robots: { index: false, follow: false } }

// Renders any post (drafts included) exactly as the public page would.
export default async function PreviewBlogPostPage({ params }) {
  const { id } = await params
  const db = await getDb()
  const post = await db.collection('blogs').findOne({ id })
  if (!post) notFound()

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        <span>
          Preview of the last saved version · <strong className="font-semibold">{post.status}</strong>
          {post.status !== 'published' && ' — not visible to the public yet'}
        </span>
        <Link href={`${ADMIN_BLOGS}/${id}`} className="font-medium underline underline-offset-2">
          Back to editor
        </Link>
      </div>
      <article className="mx-auto max-w-3xl">
        <BlogArticle post={post} backHref={`${ADMIN_BLOGS}/${id}`} backLabel="← Back to editor" tagLinks={false} />
      </article>
    </div>
  )
}
