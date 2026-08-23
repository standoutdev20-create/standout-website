import { getDb } from '@/lib/mongodb'

const SITE_URL = 'https://standoutdev.co'

export const dynamic = 'force-dynamic'

const staticRoutes = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/work', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.2 },
]

export default async function sitemap() {
  const now = new Date()

  const entries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  try {
    const db = await getDb()
    const posts = await db
      .collection('blogs')
      .find({ status: 'published' }, { projection: { slug: 1, publishedAt: 1, updatedAt: 1 } })
      .toArray()

    for (const post of posts) {
      if (!post.slug) continue
      entries.push({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.updatedAt || post.publishedAt || now,
        changeFrequency: 'monthly',
        priority: 0.5,
      })
    }
  } catch (err) {
    // Don't let a DB hiccup take down the sitemap — fall back to static routes only.
    console.warn('sitemap: failed to load blog posts', err)
  }

  return entries
}
