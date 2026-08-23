'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { ADMIN_BLOGS } from '@/lib/constants/admin'
import { slugify } from '@/lib/slug'
import { TITLE_MAX, isEmptyHtml } from '@/lib/blogFields'

const CKEditorField = dynamic(() => import('./CKEditorField'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[480px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-500">
      Loading editor…
    </div>
  ),
})

export default function BlogForm({ initialPost }) {
  const router = useRouter()
  const isEdit = Boolean(initialPost)

  const [title, setTitle] = useState(initialPost?.title || '')
  const [content, setContent] = useState(initialPost?.content || '')
  const [saving, setSaving] = useState('')
  const [error, setError] = useState('')

  const initialSnapshot = useMemo(
    () => JSON.stringify({ title: initialPost?.title || '', content: initialPost?.content || '' }),
    [initialPost],
  )
  const dirty = JSON.stringify({ title, content }) !== initialSnapshot

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
    if (title.trim().length < 3) {
      setError('Add a title (at least 3 characters).')
      return
    }
    if (title.trim().length > TITLE_MAX) {
      setError(`Title must be ${TITLE_MAX} characters or less.`)
      return
    }
    if (isEmptyHtml(content)) {
      setError('Add some content before saving.')
      return
    }

    setError('')
    setSaving(nextStatus)
    try {
      const res = await fetch(isEdit ? `/api/admin/blogs/${initialPost.id}` : '/api/admin/blogs', {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug: slugify(title),
          content,
          status: nextStatus,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to save post.')
      router.push(ADMIN_BLOGS)
      router.refresh()
    } catch (err) {
      setError(err.message)
      setSaving('')
    }
  }

  const busy = Boolean(saving)

  return (
    <div className="space-y-5">
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        maxLength={TITLE_MAX + 10}
        className="w-full border-0 bg-transparent px-1 text-3xl font-semibold tracking-tight text-slate-900 outline-none placeholder:text-slate-300"
      />

      <CKEditorField
        key={initialPost?.id || 'new'}
        initialValue={content}
        onChange={setContent}
      />

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="sticky bottom-0 z-20 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
        <p className="text-xs text-slate-400">
          {dirty ? 'Unsaved changes' : isEdit ? 'Saved' : 'Write your post, then publish'}
        </p>
        <div className="flex gap-2">
          <Button type="button" variant="outline" disabled={busy} onClick={() => save('draft')}>
            {saving === 'draft' ? 'Saving…' : 'Save draft'}
          </Button>
          <Button type="button" disabled={busy} onClick={() => save('published')}>
            {saving === 'published'
              ? 'Publishing…'
              : isEdit && initialPost?.status === 'published'
                ? 'Update'
                : 'Publish'}
          </Button>
        </div>
      </div>
    </div>
  )
}
