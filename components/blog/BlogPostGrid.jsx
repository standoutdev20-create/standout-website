import Link from "next/link";
import { formatPostDate } from "@/components/blog/BlogArticle";

export default function BlogPostGrid({ posts, tag, page }) {
  if (!posts.length) {
    return (
      <p className="mt-20 text-slate-400">
        {tag || page > 1
          ? "No posts found here."
          : "No posts published yet — check back soon."}
      </p>
    );
  }

  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={String(post._id)}
          href={`/blog/${post.slug}`}
          className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-slate-300 hover:bg-slate-50"
        >
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt=""
              loading="lazy"
              className="aspect-[16/9] w-full border-b border-slate-200 object-cover"
            />
          )}

          <div className="flex flex-1 flex-col p-6">
            {post.tags?.[0] && (
              <div className="mb-2 text-xs uppercase tracking-wider text-cyan-600">
                {post.tags[0]}
              </div>
            )}

            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-cyan-700">
              {post.title}
            </h2>

            {post.excerpt && (
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                {post.excerpt}
              </p>
            )}

            <p className="mt-auto pt-4 text-xs text-slate-400">
              {[
                formatPostDate(post.publishedAt, "short"),
                post.readingMinutes && `${post.readingMinutes} min read`,
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}