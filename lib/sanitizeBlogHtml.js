import sanitizeHtml from 'sanitize-html'

// Allowlist matched to what the CKEditor toolbar in the admin panel can
// actually produce (headings, lists, tables, images, code blocks, inline
// color/alignment via style attrs, etc). Run on every save, server-side, so
// stored content is safe even if a request bypasses the admin UI.
const options = {
  allowedTags: [
    'h1', 'h2', 'h3', 'h4', 'p', 'br', 'hr',
    'strong', 'b', 'em', 'i', 'u', 's', 'sub', 'sup', 'span', 'a',
    'ul', 'ol', 'li',
    'blockquote', 'pre', 'code',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'figure', 'figcaption', 'img',
  ],
  allowedAttributes: {
    a: ['href', 'target', 'rel'],
    img: ['src', 'alt', 'width', 'height', 'style'],
    span: ['style', 'class'],
    p: ['style'],
    h1: ['style'], h2: ['style'], h3: ['style'], h4: ['style'],
    td: ['colspan', 'rowspan', 'style'],
    th: ['colspan', 'rowspan', 'style'],
    table: ['style'],
    code: ['class'],
    pre: ['class'],
  },
  allowedStyles: {
    '*': {
      color: [/^.*$/],
      'background-color': [/^.*$/],
      'text-align': [/^.*$/],
      'font-family': [/^.*$/],
      'font-size': [/^.*$/],
    },
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowProtocolRelative: false,
  transformTags: {
    a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' }, true),
  },
}

export function sanitizeBlogHtml(html) {
  return sanitizeHtml(html || '', options)
}
