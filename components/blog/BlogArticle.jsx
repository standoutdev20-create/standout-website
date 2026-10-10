import Link from 'next/link'
import { readingMinutes } from '@/lib/blogFields'

export function formatPostDate(value, month = 'long') {
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-US', { month, day: 'numeric', year: 'numeric' })
}

// Shared by the public post page and the admin draft preview so what the
// admin previews is exactly what readers get.
export default function BlogArticle({ post, backHref = '/blog', backLabel = '← Back to Blog', tagLinks = true }) {
  const minutes = post.readingMinutes || readingMinutes(post.content)
  const date = formatPostDate(post.publishedAt || post.updatedAt)

  return (
    <>
      <Link href={backHref} className="text-sm text-slate-400 hover:text-slate-600">{backLabel}</Link>

      <header className="mt-6">
        {post.tags?.[0] && (
          <div className="mb-3 text-xs uppercase tracking-wider text-cyan-600">{post.tags[0]}</div>
        )}
        <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-sm text-slate-400">
          {[date, `${minutes} min read`].filter(Boolean).join(' · ')}
        </p>
      </header>

      {post.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.coverImage}
          alt=""
          className="mt-10 aspect-[16/9] w-full rounded-2xl border border-slate-200 object-cover"
        />
      )}

      <div className="blog-content mt-10" dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.tags?.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-200 pt-8">
          {post.tags.map((tag) =>
            tagLinks ? (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 hover:border-cyan-300 hover:text-cyan-700"
              >
                {tag}
              </Link>
            ) : (
              <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                {tag}
              </span>
            ),
          )}
        </div>
      )}
    </>
  )
}
