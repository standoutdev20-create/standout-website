'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ADMIN_BLOGS } from '@/lib/constants/admin'
import { useConfirm } from './ConfirmProvider'

export default function BlogTable({ posts }) {
  const router = useRouter()
  const confirm = useConfirm()
  const [deletingId, setDeletingId] = useState(null)
  const [error, setError] = useState('')

  async function handleDelete(id, title) {
    const ok = await confirm({
      title: `Delete “${title}”?`,
      description: 'This post will be permanently removed. This cannot be undone.',
      confirmLabel: 'Delete post',
      destructive: true,
    })
    if (!ok) return
    setError('')
    setDeletingId(id)
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Failed to delete post.')
      router.refresh()
    } catch (err) {
      setError(err.message)
    } finally {
      setDeletingId(null)
    }
  }

  if (!posts.length) {
    return (
      <div className="mt-16 rounded-xl border border-dashed border-slate-200 bg-slate-50 py-16 text-center">
        <p className="text-slate-700 font-medium">No posts yet</p>
        <p className="mt-1 text-sm text-slate-500">Write a title, add content, then publish.</p>
        <Link href={`${ADMIN_BLOGS}/new`} className="mt-5 inline-block">
          <Button>+ New Post</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-8">
      {error && (
        <p className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </p>
      )}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Updated</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-slate-50/80">
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-800">{post.title}</p>
                  <p className="mt-0.5 text-xs text-slate-400">/blog/{post.slug}</p>
                </td>
                <td className="px-4 py-3">
                  <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                    {post.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-slate-500">
                  {post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : '—'}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    {post.status === 'published' && (
                      <Link href={`/blog/${post.slug}`} target="_blank">
                        <Button size="sm" variant="ghost">View</Button>
                      </Link>
                    )}
                    <Link href={`${ADMIN_BLOGS}/${post.id}`}>
                      <Button size="sm" variant="outline">Edit</Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="destructive"
                      disabled={deletingId === post.id}
                      onClick={() => handleDelete(post.id, post.title)}
                    >
                      {deletingId === post.id ? 'Deleting…' : 'Delete'}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
