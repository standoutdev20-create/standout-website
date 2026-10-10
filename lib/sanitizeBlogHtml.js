import sanitizeHtml from 'sanitize-html'

// Allowlist matched to what the CKEditor toolbar in the admin panel can
// actually produce (headings, lists, tables, images, code blocks, inline
// color/alignment via style attrs, image resize/alignment via figure
// classes + width, indentation via margin-left, etc). Run on every save,
// server-side, so stored content is safe even if a request bypasses the
// admin UI.

// CSS values: no url(), expression(), or anything that could break out.
const SAFE_VALUE = /^(?!.*(url\s*\(|expression\s*\(|javascript:|[<>{};])).{1,200}$/i
const LENGTH = /^\d+(\.\d+)?(px|em|rem|%)?$/

const options = {
  allowedTags: [
    'h1', 'h2', 'h3', 'h4', 'p', 'br', 'hr',
    'strong', 'b', 'em', 'i', 'u', 's', 'sub', 'sup', 'span', 'a', 'mark',
    'ul', 'ol', 'li',
    'blockquote', 'pre', 'code',
    'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'colgroup', 'col', 'caption',
    'figure', 'figcaption', 'img', 'picture', 'source',
  ],
  allowedAttributes: {
    a: ['href', 'target', 'rel'],
    img: ['src', 'alt', 'width', 'height', 'style', 'srcset', 'sizes', 'loading'],
    source: ['srcset', 'sizes', 'type'],
    figure: ['class', 'style'],
    span: ['style', 'class'],
    mark: ['class'],
    p: ['style', 'class'],
    h1: ['style'], h2: ['style'], h3: ['style'], h4: ['style'],
    li: ['style'],
    ul: ['style'], ol: ['style', 'start', 'reversed'],
    blockquote: ['style'],
    td: ['colspan', 'rowspan', 'style'],
    th: ['colspan', 'rowspan', 'style', 'scope'],
    table: ['style'],
    col: ['style', 'span'],
    code: ['class'],
    pre: ['class', 'data-language', 'spellcheck'],
  },
  allowedStyles: {
    '*': {
      color: [SAFE_VALUE],
      'background-color': [SAFE_VALUE],
      'text-align': [/^(left|right|center|justify)$/],
      'font-family': [SAFE_VALUE],
      'font-size': [SAFE_VALUE],
      'margin-left': [LENGTH],
      width: [LENGTH],
      height: [LENGTH],
      'aspect-ratio': [/^[\d./ ]+$/],
      'list-style-type': [/^[a-z-]+$/],
      'border-color': [SAFE_VALUE],
      'border-style': [/^[a-z]+$/],
      'border-width': [LENGTH],
      'vertical-align': [/^[a-z]+$/],
      float: [/^(left|right|none)$/],
    },
  },
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  allowedSchemesByTag: { img: ['http', 'https'] },
  allowProtocolRelative: false,
  transformTags: {
    a: (tagName, attribs) => {
      const external = /^https?:\/\//i.test(attribs.href || '')
      return {
        tagName,
        attribs: {
          ...attribs,
          ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
        },
      }
    },
    img: (tagName, attribs) => ({ tagName, attribs: { ...attribs, loading: 'lazy' } }),
  },
}

export function sanitizeBlogHtml(html) {
  return sanitizeHtml(html || '', options)
}
