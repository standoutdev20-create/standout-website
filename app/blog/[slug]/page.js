import { cache } from 'react'
import { notFound } from 'next/navigation'
import { getDb } from '@/lib/mongodb'
import { SITE_URL, defaultOgImages, defaultTwitterImages } from '@/lib/seo'
import BlogArticle from '@/components/blog/BlogArticle'

export const dynamic = 'force-dynamic'

// Shared between generateMetadata and the page so it's one DB round-trip.
const getPublishedPost = cache(async (slug) => {
  const db = await getDb()
  return db.collection('blogs').findOne({ slug, status: 'published' })
})

function absolute(url) {
  return url?.startsWith('/') ? `${SITE_URL}${url}` : url
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPublishedPost(slug)
  if (!post) return { title: 'Post not found', robots: { index: false, follow: false } }

  const ogImages = post.coverImage ? [{ url: post.coverImage, alt: post.title }] : defaultOgImages
  return {
    title: post.title,
    description: post.excerpt || undefined,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt || undefined,
      url: `/blog/${slug}`,
      publishedTime: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
      modifiedTime: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
      tags: post.tags || undefined,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || undefined,
      images: post.coverImage ? [post.coverImage] : defaultTwitterImages,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPublishedPost(slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || undefined,
    image: post.coverImage ? absolute(post.coverImage) : undefined,
    keywords: post.tags?.length ? post.tags.join(', ') : undefined,
    datePublished: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
    dateModified: post.updatedAt ? new Date(post.updatedAt).toISOString() : (post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined),
    author: { '@type': 'Organization', name: 'StandoutDev' },
    publisher: { '@type': 'Organization', name: 'StandoutDev', logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <script
        type="application/ld+json"
        // Escape "<" so post text can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
      />
      <BlogArticle post={post} />
    </article>
  )
}
