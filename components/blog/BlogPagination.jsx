import Link from "next/link";

function pageHref(page, tag) {
  const params = new URLSearchParams();

  if (tag) params.set("tag", tag);
  if (page > 1) params.set("page", String(page));

  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export default function BlogPagination({ page, totalPages, tag }) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="mt-16 flex items-center justify-center gap-4 text-sm"
      aria-label="Pagination"
    >
      {page > 1 ? (
        <Link
          href={pageHref(page - 1, tag)}
          className="rounded-full border border-slate-200 px-4 py-2 text-slate-600 hover:bg-slate-50"
        >
          ← Newer
        </Link>
      ) : (
        <span />
      )}

      <span className="text-slate-400">
        Page {page} of {totalPages}
      </span>

      {page < totalPages ? (
        <Link
          href={pageHref(page + 1, tag)}
          className="rounded-full border border-slate-200 px-4 py-2 text-slate-600 hover:bg-slate-50"
        >
          Older →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}