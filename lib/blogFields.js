export const TITLE_MAX = 140
export const EXCERPT_MAX = 280

export function htmlToText(html) {
  return String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

export function isEmptyHtml(html) {
  return !htmlToText(html)
}

export function excerptFromHtml(html, max = EXCERPT_MAX) {
  const text = htmlToText(html)
  if (!text) return ''
  if (text.length <= max) return text
  return `${text.slice(0, max).replace(/\s+\S*$/, '')}…`
}

export function validateBlogInput({ title, content }) {
  const cleanTitle = String(title || '').trim()
  if (cleanTitle.length < 3) return 'Add a title (at least 3 characters).'
  if (cleanTitle.length > TITLE_MAX) return `Title must be ${TITLE_MAX} characters or less.`
  if (isEmptyHtml(content)) return 'Add some content before saving.'
  return null
}
