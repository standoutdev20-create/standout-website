import { v4 as uuidv4 } from 'uuid'
import { slugify } from '@/lib/slug'
import { sanitizeBlogHtml } from '@/lib/sanitizeBlogHtml'
import {
  SLUG_MAX,
  excerptFromHtml,
  normalizeCoverImage,
  normalizeTags,
  readingMinutes,
} from '@/lib/blogFields'

export { TITLE_MAX, isEmptyHtml, validateBlogInput } from '@/lib/blogFields'

export const BLOG_STATUSES = ['draft', 'published']

export function serializeBlog(doc) {
  if (!doc) return null
  const { _id, ...rest } = doc
  return rest
}

// Same as serializeBlog, but with Dates turned into ISO strings so the result
// can be passed from a server component into a client component.
export function serializeBlogForClient(doc) {
  const post = serializeBlog(doc)
  if (!post) return null
  return {
    ...post,
    createdAt: post.createdAt?.toISOString?.() ?? null,
    updatedAt: post.updatedAt?.toISOString?.() ?? null,
    publishedAt: post.publishedAt?.toISOString?.() ?? null,
  }
}

export async function uniqueSlug(db, base, excludeId) {
  let slug = slugify(base).slice(0, SLUG_MAX).replace(/-+$/, '')
  if (!slug) slug = uuidv4().slice(0, 8)

  for (let i = 0; i < 8; i += 1) {
    const candidate = i === 0 ? slug : `${slug}-${i + 1}`
    const query = excludeId ? { slug: candidate, id: { $ne: excludeId } } : { slug: candidate }
    const clash = await db.collection('blogs').findOne(query, { projection: { _id: 1 } })
    if (!clash) return candidate
  }

  return `${slug}-${Date.now().toString(36)}`
}

export function buildBlogDoc({ title, slug, content, status, excerpt, tags, coverImage }, existing) {
  const now = new Date()
  const isPublished = status === 'published'
  const wasPublished = existing?.status === 'published'
  const cleanContent = sanitizeBlogHtml(content)
  const customExcerpt = String(excerpt || '').trim()

  return {
    title: title.trim(),
    slug,
    excerpt: customExcerpt || excerptFromHtml(cleanContent),
    customExcerpt: Boolean(customExcerpt),
    content: cleanContent,
    coverImage: normalizeCoverImage(coverImage) || '',
    tags: tags === undefined ? existing?.tags || [] : normalizeTags(tags),
    readingMinutes: readingMinutes(cleanContent),
    status: isPublished ? 'published' : 'draft',
    updatedAt: now,
    publishedAt: isPublished
      ? (wasPublished ? existing.publishedAt || now : now)
      : existing?.publishedAt || null,
  }
}

export async function ensureBlogIndexes(db) {
  if (global._blogIndexesEnsured) return
  try {
    await db.collection('blogs').createIndexes([
      { key: { slug: 1 }, unique: true, name: 'blogs_slug_unique' },
      { key: { id: 1 }, unique: true, name: 'blogs_id_unique' },
      { key: { status: 1, publishedAt: -1 }, name: 'blogs_status_publishedAt' },
    ])
    global._blogIndexesEnsured = true
  } catch (error) {
    console.error('Failed to ensure blog indexes:', error)
  }
}

export const PUBLIC_PAGE_SIZE = 12

// Published posts for the public /blog index (no content field — it's big).
export async function listPublishedPosts(db, { page = 1, tag, limit = PUBLIC_PAGE_SIZE } = {}) {
  const query = { status: 'published' }
  if (tag) query.tags = tag
  const [total, posts] = await Promise.all([
    db.collection('blogs').countDocuments(query),
    db.collection('blogs')
      .find(query, { projection: { content: 0 } })
      .sort({ publishedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray(),
  ])
  return {
    posts: posts.map(serializeBlog),
    total,
    page,
    totalPages: Math.max(Math.ceil(total / limit), 1),
  }
}
