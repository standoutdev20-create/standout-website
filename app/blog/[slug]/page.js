import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDb } from '@/lib/mongodb'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const db = await getDb()
  const post = await db.collection('blogs').findOne({ slug, status: 'published' })
  if (!post) return { title: 'Post not found — StandoutDev' }
  return {
    title: `${post.title} — StandoutDev Blog`,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const db = await getDb()
  const post = await db.collection('blogs').findOne({ slug, status: 'published' })
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <Link href="/blog" className="text-sm text-slate-400 hover:text-slate-600">← Back to Blog</Link>

      <div className="mt-6">
        {post.tags?.[0] && (
          <div className="mb-3 text-xs uppercase tracking-wider text-cyan-600">{post.tags[0]}</div>
        )}
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-sm text-slate-400">
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
            : ''}
        </p>
      </div>

      <div className="blog-content mt-10" dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.tags?.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-200 pt-8">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
