// lib/blurPlaceholders.js
//
// Tiny (16px-wide) base64 previews for the portfolio screenshots, used as
// next/image `blurDataURL` so a soft preview of the real image shows while
// it loads — instead of the dark browser-mockup background showing through
// as a flat dark box.
//
// Regenerate with: node -e "require('./lib/blurPlaceholders.gen.js')" after
// swapping any of the source images in /public.
export const BLUR_PLACEHOLDERS = {
  '/uma1.webp': 'data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAABQAgCdASoQAAkAA4BaJZQCdAEf3aOJoAM60AAA/vbjr5ezafKbijKXEkigEOUgs9hoZ0QnRTo6o+m0+dibXzqIVLmmaWOE2sAZeAAA',
  '/uma2.webp': 'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoQAAkAA4BaJZwAAudN1Rt/AAD+56/5RtcZQ/8cymN5/YCVX/A0b1JPNI6nrjrBqPYtP/frIU6J1Kon19QgAA==',
  '/uma3.webp': 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoQAAkAA4BaJZwAAuQzqVi1AAD+9e9H3YUFPTTbhOAb2BYxppSdGXgdeyaPhjQHlxrs2nNREAAAAA==',
  '/phy1.webp': 'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoQAAkAA4BaJQBOgCKq4ZwB3QAA/u+OOWsH0vzQTIEonZ2/41ejI9HYYdSGsMcp9ySPkc+Bt6zYQwEUy+1DqqfpeoXTk+LgAAA=',
  '/phy2.webp': 'data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoQAAkAA4BaJZwAAugxEUg9CAAA/vZGskwxT+cssPMnAHB6XLl7xeTbNH84ypYYma6/L8/1Qw3KD2/BhdsdFwVOgAAAAA==',
  '/phy3.webp': 'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoQAAkAA4BaJYwCdAEUqf+ZnAAA/vQx7ec0PuwEoivealhyEFccr8BH0wvfNPazZjbbibmrqZcJBAAA',
  '/dg.webp': 'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAQCdASoQAAkAA4BaJZQC7AEPS5O7kyAA/vWYDsgWDPFA1wdjax69ea4oGwQ9qIAAAA==',
  '/dgg.webp': 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAAAQAgCdASoQAAkAA4BaJZQCdAEUqoVSUOgAAP73fY3r6YIpHo+CfKl5PpB2//gA',
  '/gdd.webp': 'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADwAQCdASoQAAkAA4BaJZQCdAEDo3kZ0AAA/vWDfa8C5KZAJrtmmamOOgcCrA4gAAA=',
  '/logo1.webp': 'data:image/webp;base64,UklGRg4BAABXRUJQVlA4WAoAAAAQAAAADwAACgAAQUxQSHMAAAABcBvbtqpchjbcM3d3CN0rIaICd821FzKGzHtwTvTe/zVExAQQq5kulw0SqbkCD6MIzRW46UlYdgXOGhKZBnBUrNbrOo+aAE6VJ74FHvUB+DIfvFw8icXmN+n2+EZ4RLIDgE+VBO0PAO8iCUpbk8lknCAWAFZQOCB0AAAA8AEAnQEqEAALAAOAWiWwAnQGK0vbCLIQAP7jxNRKbkurqPNUOC/ozsE8x/NVpCzYuYyCz0YMaN7wpvkB8MWNAypz+xZ88F9pLCAX4ao7H7AQUMQCDtOyqC/rIZDTSKnyy0dF2h6Fce9Zs1ilT88gz5AAAAA=',
};

// Looks up the blur placeholder for a given /public image path (e.g. '/uma1.webp').
// Returns undefined for images that don't have a pre-generated placeholder.
export function blurFor(src) {
  return BLUR_PLACEHOLDERS[src];
}
