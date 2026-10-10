'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { toast } from 'sonner'
import { ExternalLink, Eye, ImagePlus, Loader2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ADMIN_BLOGS } from '@/lib/constants/admin'
import { slugify } from '@/lib/slug'
import { uploadBlogImage } from '@/lib/adminUpload'
import {
  EXCERPT_MAX,
  SLUG_MAX,
  TAGS_MAX,
  TITLE_MAX,
  normalizeTags,
  validateBlogInput,
} from '@/lib/blogFields'

const CKEditorField = dynamic(() => import('./CKEditorField'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[480px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-500">
      Loading editor…
    </div>
  ),
})

function snapshotOf(fields) {
  return JSON.stringify({
    title: fields.title.trim(),
    slug: fields.slug,
    excerpt: fields.excerpt.trim(),
    tags: normalizeTags(fields.tags),
    coverImage: fields.coverImage,
    content: fields.content,
  })
}

function fieldsFromPost(post) {
  return {
    title: post?.title || '',
    slug: post?.slug || '',
    excerpt: post?.customExcerpt ? post.excerpt || '' : '',
    tags: (post?.tags || []).join(', '),
    coverImage: post?.coverImage || '',
    content: post?.content || '',
  }
}

export default function BlogForm({ initialPost }) {
  const router = useRouter()
  const isEdit = Boolean(initialPost)

  const [post, setPost] = useState(initialPost || null)
  const [fields, setFields] = useState(() => fieldsFromPost(initialPost))
  // New posts: the slug follows the title until the admin edits it by hand.
  // Existing posts: never auto-change the URL.
  const [slugTouched, setSlugTouched] = useState(isEdit)
  const [baseline, setBaseline] = useState(() => snapshotOf(fieldsFromPost(initialPost)))
  const [saving, setSaving] = useState('')
  const [uploadingCover, setUploadingCover] = useState(false)
  const [error, setError] = useState('')
  const coverInputRef = useRef(null)

  const dirty = snapshotOf(fields) !== baseline
  const status = post?.status || 'draft'
  const isPublished = status === 'published'

  function set(key, value) {
    setFields((prev) => {
      const next = { ...prev, [key]: value }
      if (key === 'title' && !slugTouched) next.slug = slugify(value).slice(0, SLUG_MAX)
      return next
    })
  }

  useEffect(() => {
    if (!dirty) return undefined
    const warn = (event) => {
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty])

  async function save(nextStatus) {
    const payload = {
      title: fields.title,
      slug: slugify(fields.slug || fields.title),
      excerpt: fields.excerpt,
      tags: normalizeTags(fields.tags),
      coverImage: fields.coverImage,
      content: fields.content,
      status: nextStatus,
    }
    const validationError = validateBlogInput(payload)
    if (validationError) {
      setError(validationError)
      return
    }

    setError('')
    setSaving(nextStatus)
    try {
      const res = await fetch(isEdit ? `/api/admin/blogs/${post.id}` : '/api/admin/blogs', {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (res.status === 401) throw new Error('Your session expired — sign in again in a new tab, then save.')
      if (!res.ok) throw new Error(data.error || 'Failed to save post.')

      const saved = data.post
      const message =
        nextStatus === 'published'
          ? isPublished ? 'Post updated.' : 'Post published.'
          : isPublished ? 'Post unpublished and saved as draft.' : 'Draft saved.'
      toast.success(message, saved.slug !== payload.slug ? { description: `URL set to /blog/${saved.slug}` } : undefined)

      if (!isEdit) {
        // Mark clean first so the unsaved-changes guard doesn't fire.
        setBaseline(snapshotOf(fields))
        router.replace(`${ADMIN_BLOGS}/${saved.id}`)
        router.refresh()
        return
      }

      const nextFields = { ...fields, slug: saved.slug, tags: (saved.tags || []).join(', ') }
      setPost(saved)
      setFields(nextFields)
      setBaseline(snapshotOf(nextFields))
      router.refresh()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving('')
    }
  }

  async function handleCoverFile(event) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    setUploadingCover(true)
    try {
      set('coverImage', await uploadBlogImage(file))
    } catch (err) {
      toast.error(err.message)
    } finally {
      setUploadingCover(false)
    }
  }

  const busy = Boolean(saving)
  const tagList = normalizeTags(fields.tags)

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="min-w-0 space-y-5">
        <input
          id="title"
          value={fields.title}
          onChange={(e) => set('title', e.target.value)}
          placeholder="Post title"
          maxLength={TITLE_MAX + 10}
          className="w-full border-0 bg-transparent px-1 text-3xl font-semibold tracking-tight text-slate-900 outline-none placeholder:text-slate-300"
        />

        <CKEditorField
          key={initialPost?.id || 'new'}
          initialValue={initialPost?.content || ''}
          onChange={(content) => set('content', content)}
          onReady={(normalized) => {
            // Re-baseline on the editor's normalised HTML so an untouched
            // post doesn't show as modified.
            setFields((prev) => ({ ...prev, content: normalized }))
            setBaseline((prev) => JSON.stringify({ ...JSON.parse(prev), content: normalized }))
          }}
        />
      </div>

      <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
        <section className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-800">Publish</h2>
            <Badge variant={isPublished ? 'default' : 'secondary'}>{isEdit ? status : 'new'}</Badge>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            {dirty ? 'Unsaved changes' : isEdit ? 'All changes saved' : 'Write your post, then publish'}
          </p>

          {error && (
            <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
          )}

          <div className="mt-4 grid gap-2">
            <Button type="button" disabled={busy || uploadingCover} onClick={() => save('published')}>
              {saving === 'published' && <Loader2 className="animate-spin" />}
              {isPublished ? 'Update' : 'Publish'}
            </Button>
            <Button type="button" variant="outline" disabled={busy || uploadingCover} onClick={() => save('draft')}>
              {saving === 'draft' && <Loader2 className="animate-spin" />}
              {isPublished ? 'Unpublish (save as draft)' : 'Save draft'}
            </Button>
          </div>

          {isEdit && (
            <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-100 pt-4 text-sm">
              <Link
                href={`${ADMIN_BLOGS}/${post.id}/preview`}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900"
              >
                <Eye size={15} /> Preview{dirty ? ' (last save)' : ''}
              </Link>
              {isPublished && (
                <Link
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900"
                >
                  <ExternalLink size={15} /> View live
                </Link>
              )}
            </div>
          )}
        </section>

        <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-800">Post settings</h2>

          <div className="space-y-1.5">
            <Label htmlFor="slug" className="text-xs text-slate-600">URL slug</Label>
            <div className="flex items-center rounded-md border border-input focus-within:ring-1 focus-within:ring-ring">
              <span className="pl-3 text-xs text-slate-400">/blog/</span>
              <input
                id="slug"
                value={fields.slug}
                maxLength={SLUG_MAX}
                onChange={(e) => {
                  setSlugTouched(true)
                  set('slug', e.target.value.toLowerCase().replace(/\s+/g, '-'))
                }}
                onBlur={() => set('slug', slugify(fields.slug))}
                className="h-9 min-w-0 flex-1 bg-transparent pr-3 text-sm outline-none"
                placeholder="auto-from-title"
              />
            </div>
            {isPublished && fields.slug !== post.slug && (
              <p className="text-xs text-amber-600">Changing the URL of a published post breaks existing links to it.</p>
            )}
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="excerpt" className="text-xs text-slate-600">Excerpt / SEO description</Label>
              <span className="text-[11px] text-slate-400">{fields.excerpt.length}/{EXCERPT_MAX}</span>
            </div>
            <Textarea
              id="excerpt"
              rows={4}
              maxLength={EXCERPT_MAX}
              value={fields.excerpt}
              onChange={(e) => set('excerpt', e.target.value)}
              placeholder="Leave empty to use the first lines of the post."
              className="text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="tags" className="text-xs text-slate-600">Tags</Label>
            <Input
              id="tags"
              value={fields.tags}
              onChange={(e) => set('tags', e.target.value)}
              placeholder="e.g. Web Design, SEO"
              className="text-sm"
            />
            <p className="text-[11px] text-slate-400">
              Comma-separated, up to {TAGS_MAX}. The first tag is shown as the category.
            </p>
            {tagList.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {tagList.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">{tag}</span>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs text-slate-600">Cover image</Label>
            {fields.coverImage ? (
              <div className="relative overflow-hidden rounded-lg border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={fields.coverImage} alt="" className="aspect-[16/9] w-full object-cover" />
                <button
                  type="button"
                  onClick={() => set('coverImage', '')}
                  className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow hover:text-red-600"
                  aria-label="Remove cover image"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                disabled={uploadingCover}
                onClick={() => coverInputRef.current?.click()}
                className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-500 hover:border-slate-400 hover:bg-slate-100"
              >
                {uploadingCover ? <Loader2 size={18} className="animate-spin" /> : <ImagePlus size={18} />}
                {uploadingCover ? 'Uploading…' : 'Upload cover (PNG, JPG, WebP · max 5MB)'}
              </button>
            )}
            <input
              ref={coverInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              className="hidden"
              onChange={handleCoverFile}
            />
          </div>
        </section>
      </aside>
    </div>
  )
}
