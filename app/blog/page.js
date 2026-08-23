import Link from 'next/link'
import { getDb } from '@/lib/mongodb'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Blog — StandoutDev',
  description: 'Notes on websites, apps, and custom software from the StandoutDev team.',
}

const gT = {
  background: 'linear-gradient(135deg,#60a5fa 0%,#06b6d4 50%,#818cf8 100%)',
  WebkitBackgroundClip: 'text', backgroundClip: 'text',
  WebkitTextFillColor: 'transparent', color: 'transparent',
}
const LBL = {
  fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.3em',
  color: 'rgba(96,165,250,0.8)', marginBottom: 16, fontWeight: 600,
}

export default async function BlogIndexPage() {
  const db = await getDb()
  const posts = await db.collection('blogs')
    .find({ status: 'published' }, { projection: { content: 0 } })
    .sort({ publishedAt: -1 })
    .toArray()

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <div style={LBL}>Journal</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          Ideas, notes &amp; <span style={gT}>field reports</span>
        </h1>
        <p className="mt-4 text-slate-500">
          Notes on websites, apps, and custom software from the StandoutDev team.
        </p>
      </div>

      {!posts.length && (
        <p className="mt-20 text-slate-400">No posts published yet — check back soon.</p>
      )}

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            {post.tags?.[0] && (
              <div className="mb-2 text-xs uppercase tracking-wider text-cyan-600">{post.tags[0]}</div>
            )}
            <h2 className="text-xl font-semibold text-slate-900">{post.title}</h2>
            {post.excerpt && (
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">{post.excerpt}</p>
            )}
            <p className="mt-4 text-xs text-slate-400">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                : ''}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
