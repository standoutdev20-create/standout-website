import { getDb } from "@/lib/mongodb";
import { listPublishedPosts } from "@/lib/blog";
import { defaultOgImages } from "@/lib/seo";
import BlogHero from "@/components/blog/BlogHero";
import { HeroBackdrop } from "@/components/site/ui";
import BlogPostGrid from "@/components/blog/BlogPostGrid";
import BlogPagination from "@/components/blog/BlogPagination";

export const dynamic = "force-dynamic";

const DESCRIPTION =
  "Notes on websites, apps, and custom software from the StandoutDev team.";

export async function generateMetadata({ searchParams }) {
  const { tag, page } = await searchParams;
  const filtered = Boolean(tag) || Number(page) > 1;

  return {
    title: tag ? `Blog — ${tag}` : "Blog",
    description: DESCRIPTION,
    alternates: { canonical: "/blog" },
    ...(filtered
      ? { robots: { index: false, follow: true } }
      : {}),
    openGraph: {
      title: "Blog — StandoutDev",
      description: DESCRIPTION,
      url: "/blog",
      images: defaultOgImages,
    },
  };
}

export default async function BlogIndexPage({ searchParams }) {
  const sp = await searchParams;

  const tag =
    typeof sp.tag === "string" && sp.tag.trim()
      ? sp.tag.trim()
      : undefined;

  const requestedPage = Math.max(
    Math.floor(Number(sp.page) || 1),
    1
  );

  const db = await getDb();
  const { posts, totalPages } = await listPublishedPosts(db, {
    page: requestedPage,
    tag,
  });

  const page = Math.min(
    requestedPage,
    Math.max(totalPages, 1)
  );

  return (
    <>
    <section data-no-reveal className="relative overflow-hidden bg-white pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-6xl px-6">
        <BlogHero tag={tag} />
      </div>
    </section>
    <div className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">

      <BlogPostGrid posts={posts} tag={tag} page={page} />

      <BlogPagination
        page={page}
        totalPages={totalPages}
        tag={tag}
      />
    </div>
    </>
  );
}