import { v4 as uuidv4 } from 'uuid'
import { slugify } from '@/lib/slug'
import { sanitizeBlogHtml } from '@/lib/sanitizeBlogHtml'
import { excerptFromHtml } from '@/lib/blogFields'

export { TITLE_MAX, isEmptyHtml, validateBlogInput } from '@/lib/blogFields'

export function serializeBlog(doc) {
  if (!doc) return null
  const { _id, ...rest } = doc
  return rest
}

export async function uniqueSlug(db, base, excludeId) {
  let slug = slugify(base)
  if (!slug) slug = uuidv4().slice(0, 8)

  for (let i = 0; i < 8; i += 1) {
    const candidate = i === 0 ? slug : `${slug}-${i + 1}`
    const query = excludeId ? { slug: candidate, id: { $ne: excludeId } } : { slug: candidate }
    const clash = await db.collection('blogs').findOne(query, { projection: { _id: 1 } })
    if (!clash) return candidate
  }

  return `${slug}-${Date.now().toString(36)}`
}

export function buildBlogDoc({ title, slug, content, status }, existing) {
  const now = new Date()
  const isPublished = status === 'published'
  const wasPublished = existing?.status === 'published'
  const cleanContent = sanitizeBlogHtml(content)

  return {
    title: title.trim(),
    slug,
    excerpt: excerptFromHtml(cleanContent),
    content: cleanContent,
    tags: existing?.tags || [],
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
      { key: { status: 1, publishedAt: -1 }, name: 'blogs_status_publishedAt' },
    ])
  } catch (error) {
    console.error('Failed to ensure blog indexes:', error)
  }
  global._blogIndexesEnsured = true
}
