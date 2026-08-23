// Shared SEO constants.
//
// Next.js metadata does NOT deep-merge `openGraph`/`twitter` objects between
// a layout and a page — if a page defines its own `openGraph`, that object
// entirely replaces the parent's (including things like `images`), it isn't
// merged key-by-key. So every page that sets a custom `openGraph`/`twitter`
// must re-include the shared image/card fields from here, or social previews
// silently lose the image and fall back to a plain "summary" card.
export const SITE_URL = 'https://standoutdev.co'
export const SITE_NAME = 'StandoutDev'

export const defaultOgImages = [
  { url: '/logo.png', width: 464, height: 386, alt: SITE_NAME },
]

export const defaultTwitterImages = ['/logo.png']
