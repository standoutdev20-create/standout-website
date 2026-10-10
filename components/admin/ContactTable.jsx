'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useConfirm } from './ConfirmProvider'

export default function ContactTable({ messages }) {
  const router = useRouter()
  const confirm = useConfirm()
  const [openId, setOpenId] = useState(null)
  const [busyId, setBusyId] = useState(null)

  async function request(url, init, fallback) {
    const res = await fetch(url, init)
    const data = await res.json().catch(() => ({}))
    if (res.status === 401) throw new Error('Your session expired — sign in again.')
    if (!res.ok) throw new Error(data.error || fallback)
  }

  async function setRead(msg, read) {
    setBusyId(msg.id)
    try {
      await request(
        `/api/admin/contacts/${msg.id}`,
        { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ read }) },
        'Failed to update message.',
      )
      router.refresh()
    } catch (err) {
      toast.error(err.message)
    } finally {
      setBusyId(null)
    }
  }

  function toggleOpen(msg) {
    const nextOpen = openId === msg.id ? null : msg.id
    setOpenId(nextOpen)
    if (nextOpen && !msg.read) setRead(msg, true)
  }

  async function handleDelete(id) {
    const ok = await confirm({
      title: 'Delete this message?',
      description: 'This contact request will be permanently removed. This cannot be undone.',
      confirmLabel: 'Delete',
      destructive: true,
    })
    if (!ok) return
    setBusyId(id)
    try {
      await request(`/api/admin/contacts/${id}`, { method: 'DELETE' }, 'Failed to delete message.')
      toast.success('Message deleted.')
      router.refresh()
    } catch (err) {
      toast.error(err.message)
    } finally {
      setBusyId(null)
    }
  }

  if (!messages.length) {
    return (
      <div className="mt-16 rounded-xl border border-dashed border-slate-200 py-16 text-center text-slate-500">
        No contact requests yet.
      </div>
    )
  }

  return (
    <div className="mt-8 space-y-3">
      {messages.map((msg) => {
        const isOpen = openId === msg.id
        return (
          <div key={msg.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => toggleOpen(msg)}
              className="flex w-full flex-wrap items-center justify-between gap-3 px-5 py-4 text-left hover:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                {!msg.read && <span className="h-2 w-2 rounded-full bg-cyan-500" />}
                <div>
                  <p className="text-sm font-medium text-slate-800">{msg.name}{msg.service ? ` — ${msg.service}` : ''}</p>
                  <p className="text-xs text-slate-500">{[msg.email, msg.phone].filter(Boolean).join(' · ')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={msg.read ? 'secondary' : 'default'}>{msg.read ? 'Read' : 'New'}</Badge>
                <span className="text-xs text-slate-400">
                  {msg.createdAt ? new Date(msg.createdAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }) : ''}
                </span>
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-slate-200 px-5 py-4">
                <p className="whitespace-pre-wrap text-sm text-slate-600">{msg.description}</p>
                <div className="mt-4 flex flex-wrap justify-end gap-2">
                  <a href={`mailto:${msg.email}?subject=${encodeURIComponent(`Re: your ${msg.service || 'project'} inquiry — StandoutDev`)}`}>
                    <Button size="sm" variant="outline">Reply by email</Button>
                  </a>
                  {msg.phone && (
                    <a href={`tel:${msg.phone}`}>
                      <Button size="sm" variant="outline">Call</Button>
                    </a>
                  )}
                  <Button size="sm" variant="ghost" disabled={busyId === msg.id} onClick={() => setRead(msg, false)}>
                    Mark unread
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={busyId === msg.id}
                    onClick={() => handleDelete(msg.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
