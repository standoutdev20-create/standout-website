import Link from 'next/link'
import { getDb } from '@/lib/mongodb'
import { listPublishedPosts } from '@/lib/blog'
import { formatPostDate } from '@/components/blog/BlogArticle'
import { defaultOgImages } from '@/lib/seo'

export const dynamic = 'force-dynamic'

const DESCRIPTION = 'Notes on websites, apps, and custom software from the StandoutDev team.'

export async function generateMetadata({ searchParams }) {
  const { tag, page } = await searchParams
  const filtered = Boolean(tag) || Number(page) > 1
  return {
    title: tag ? `Blog — ${tag}` : 'Blog',
    description: DESCRIPTION,
    alternates: { canonical: '/blog' },
    // Tag/page variants are thin duplicates of /blog; keep them out of the index.
    ...(filtered ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: 'Blog — StandoutDev',
      description: DESCRIPTION,
      url: '/blog',
      images: defaultOgImages,
    },
  }
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

function pageHref(page, tag) {
  const params = new URLSearchParams()
  if (tag) params.set('tag', tag)
  if (page > 1) params.set('page', String(page))
  const qs = params.toString()
  return qs ? `/blog?${qs}` : '/blog'
}

export default async function BlogIndexPage({ searchParams }) {
  const sp = await searchParams
  const tag = typeof sp.tag === 'string' && sp.tag.trim() ? sp.tag.trim() : undefined
  const page = Math.max(Math.floor(Number(sp.page)) || 1, 1)

  const db = await getDb()
  const { posts, totalPages } = await listPublishedPosts(db, { page, tag })

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <div style={LBL}>Journal</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          Ideas, notes &amp; <span style={gT}>field reports</span>
        </h1>
        <p className="mt-4 text-slate-500">{DESCRIPTION}</p>
      </div>

      {tag && (
        <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
          <span>
            Tagged <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-cyan-700">{tag}</span>
          </span>
          <Link href="/blog" className="text-slate-400 underline underline-offset-2 hover:text-slate-600">Clear</Link>
        </div>
      )}

      {!posts.length && (
        <p className="mt-20 text-slate-400">
          {tag || page > 1 ? 'No posts found here.' : 'No posts published yet — check back soon.'}
        </p>
      )}

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            {post.coverImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.coverImage}
                alt=""
                loading="lazy"
                className="aspect-[16/9] w-full border-b border-slate-200 object-cover"
              />
            )}
            <div className="flex flex-1 flex-col p-6">
              {post.tags?.[0] && (
                <div className="mb-2 text-xs uppercase tracking-wider text-cyan-600">{post.tags[0]}</div>
              )}
              <h2 className="text-xl font-semibold text-slate-900 group-hover:text-cyan-700">{post.title}</h2>
              {post.excerpt && (
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">{post.excerpt}</p>
              )}
              <p className="mt-auto pt-4 text-xs text-slate-400">
                {[formatPostDate(post.publishedAt, 'short'), post.readingMinutes && `${post.readingMinutes} min read`]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="mt-16 flex items-center justify-center gap-4 text-sm" aria-label="Pagination">
          {page > 1 ? (
            <Link href={pageHref(page - 1, tag)} className="rounded-full border border-slate-200 px-4 py-2 text-slate-600 hover:bg-slate-50">
              ← Newer
            </Link>
          ) : <span />}
          <span className="text-slate-400">Page {page} of {totalPages}</span>
          {page < totalPages ? (
            <Link href={pageHref(page + 1, tag)} className="rounded-full border border-slate-200 px-4 py-2 text-slate-600 hover:bg-slate-50">
              Older →
            </Link>
          ) : <span />}
        </nav>
      )}
    </div>
  )
}
