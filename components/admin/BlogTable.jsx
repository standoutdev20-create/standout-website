'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { toast } from 'sonner'
import { Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ADMIN_BLOGS } from '@/lib/constants/admin'
import { useConfirm } from './ConfirmProvider'

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'published', label: 'Published' },
  { value: 'draft', label: 'Drafts' },
]

export default function BlogTable({ posts }) {
  const router = useRouter()
  const confirm = useConfirm()
  const [busyId, setBusyId] = useState(null)
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const counts = useMemo(() => ({
    all: posts.length,
    published: posts.filter((p) => p.status === 'published').length,
    draft: posts.filter((p) => p.status !== 'published').length,
  }), [posts])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((post) => {
      if (filter === 'published' && post.status !== 'published') return false
      if (filter === 'draft' && post.status === 'published') return false
      if (!q) return true
      return [post.title, post.slug, ...(post.tags || [])].some((v) => v?.toLowerCase().includes(q))
    })
  }, [posts, filter, query])

  async function request(url, init, fallback) {
    const res = await fetch(url, init)
    const data = await res.json().catch(() => ({}))
    if (res.status === 401) throw new Error('Your session expired — sign in again.')
    if (!res.ok) throw new Error(data.error || fallback)
    return data
  }

  async function handleDelete(post) {
    const ok = await confirm({
      title: `Delete “${post.title}”?`,
      description: 'This post will be permanently removed. This cannot be undone.',
      confirmLabel: 'Delete post',
      destructive: true,
    })
    if (!ok) return
    setBusyId(post.id)
    try {
      await request(`/api/admin/blogs/${post.id}`, { method: 'DELETE' }, 'Failed to delete post.')
      toast.success('Post deleted.')
      router.refresh()
    } catch (err) {
      toast.error(err.message)
    } finally {
      setBusyId(null)
    }
  }

  async function toggleStatus(post) {
    const next = post.status === 'published' ? 'draft' : 'published'
    if (next === 'draft') {
      const ok = await confirm({
        title: `Unpublish “${post.title}”?`,
        description: 'It will disappear from the public blog until you publish it again.',
        confirmLabel: 'Unpublish',
      })
      if (!ok) return
    }
    setBusyId(post.id)
    try {
      await request(
        `/api/admin/blogs/${post.id}`,
        { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: next }) },
        'Failed to update post.',
      )
      toast.success(next === 'published' ? 'Post published.' : 'Post moved to drafts.')
      router.refresh()
    } catch (err) {
      toast.error(err.message)
    } finally {
      setBusyId(null)
    }
  }

  if (!posts.length) {
    return (
      <div className="mt-16 rounded-xl border border-dashed border-slate-200 bg-slate-50 py-16 text-center">
        <p className="font-medium text-slate-700">No posts yet</p>
        <p className="mt-1 text-sm text-slate-500">Write a title, add content, then publish.</p>
        <Link href={`${ADMIN_BLOGS}/new`} className="mt-5 inline-block">
          <Button>+ New Post</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                filter === value ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {label} <span className="text-slate-400">{counts[value]}</span>
            </button>
          ))}
        </div>
        <label className="relative w-full sm:w-64">
          <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, URL or tag"
            className="h-9 w-full rounded-md border border-slate-200 pl-9 pr-3 text-sm outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300"
          />
        </label>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Updated</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visible.map((post) => {
              const busy = busyId === post.id
              const published = post.status === 'published'
              return (
                <tr key={post.id} className="hover:bg-slate-50/80">
                  <td className="max-w-[320px] px-4 py-3">
                    <Link href={`${ADMIN_BLOGS}/${post.id}`} className="font-medium text-slate-800 hover:text-blue-700">
                      {post.title}
                    </Link>
                    <p className="mt-0.5 truncate text-xs text-slate-400">
                      /blog/{post.slug}
                      {post.tags?.length > 0 && ` · ${post.tags.join(', ')}`}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={published ? 'default' : 'secondary'}>{post.status}</Badge>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-500">
                    {post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={published ? `/blog/${post.slug}` : `${ADMIN_BLOGS}/${post.id}/preview`}
                        target="_blank"
                      >
                        <Button size="sm" variant="ghost">{published ? 'View' : 'Preview'}</Button>
                      </Link>
                      <Link href={`${ADMIN_BLOGS}/${post.id}`}>
                        <Button size="sm" variant="outline">Edit</Button>
                      </Link>
                      <Button size="sm" variant="outline" disabled={busy} onClick={() => toggleStatus(post)}>
                        {published ? 'Unpublish' : 'Publish'}
                      </Button>
                      <Button size="sm" variant="destructive" disabled={busy} onClick={() => handleDelete(post)}>
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              )
            })}
            {!visible.length && (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-slate-400">No posts match.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
