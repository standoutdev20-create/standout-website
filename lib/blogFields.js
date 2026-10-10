// Shared between the admin UI (client) and the API routes (server), so keep
// this file free of server-only imports.

export const TITLE_MAX = 140
export const EXCERPT_MAX = 280
export const SLUG_MAX = 100
export const TAG_MAX = 32
export const TAGS_MAX = 8

export function htmlToText(html) {
  return String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

export function isEmptyHtml(html) {
  // An image-only post is still a post.
  return !htmlToText(html) && !/<img\b/i.test(String(html || ''))
}

export function excerptFromHtml(html, max = EXCERPT_MAX) {
  const text = htmlToText(html)
  if (!text) return ''
  if (text.length <= max) return text
  return `${text.slice(0, max).replace(/\s+\S*$/, '')}…`
}

export function readingMinutes(html) {
  const words = htmlToText(html).split(' ').filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

export function normalizeTags(input) {
  const raw = Array.isArray(input) ? input : String(input || '').split(',')
  const seen = new Set()
  const tags = []
  for (const value of raw) {
    const tag = String(value || '').trim().replace(/\s+/g, ' ').slice(0, TAG_MAX)
    const key = tag.toLowerCase()
    if (!tag || seen.has(key)) continue
    seen.add(key)
    tags.push(tag)
    if (tags.length >= TAGS_MAX) break
  }
  return tags
}

// Only allow covers we host ourselves (uploaded through the admin) or https URLs.
export function normalizeCoverImage(input) {
  const url = String(input || '').trim()
  if (!url) return ''
  if (/^\/uploads\/blog\/[\w-]+\.(png|jpe?g|webp|gif)$/i.test(url)) return url
  if (/^https:\/\/[^\s"'<>]+$/i.test(url)) return url
  return null
}

export function validateBlogInput({ title, content, excerpt, slug, coverImage }) {
  const cleanTitle = String(title || '').trim()
  if (cleanTitle.length < 3) return 'Add a title (at least 3 characters).'
  if (cleanTitle.length > TITLE_MAX) return `Title must be ${TITLE_MAX} characters or less.`
  if (isEmptyHtml(content)) return 'Add some content before saving.'
  if (String(excerpt || '').trim().length > EXCERPT_MAX) {
    return `Excerpt must be ${EXCERPT_MAX} characters or less.`
  }
  if (String(slug || '').length > SLUG_MAX) return `URL slug must be ${SLUG_MAX} characters or less.`
  if (normalizeCoverImage(coverImage) === null) return 'Cover image must be an uploaded image or an https URL.'
  return null
}
