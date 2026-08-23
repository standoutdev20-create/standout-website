'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useConfirm } from './ConfirmProvider'

export default function ContactTable({ messages }) {
  const router = useRouter()
  const confirm = useConfirm()
  const [openId, setOpenId] = useState(null)
  const [busyId, setBusyId] = useState(null)

  async function toggleOpen(msg) {
    const nextOpen = openId === msg.id ? null : msg.id
    setOpenId(nextOpen)
    if (nextOpen && !msg.read) {
      setBusyId(msg.id)
      try {
        await fetch(`/api/admin/contacts/${msg.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ read: true }),
        })
        router.refresh()
      } finally {
        setBusyId(null)
      }
    }
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
      await fetch(`/api/admin/contacts/${id}`, { method: 'DELETE' })
      router.refresh()
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
                  <p className="text-sm font-medium text-slate-800">{msg.name} — {msg.service}</p>
                  <p className="text-xs text-slate-500">{msg.email} · {msg.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={msg.read ? 'secondary' : 'default'}>{msg.read ? 'Read' : 'New'}</Badge>
                <span className="text-xs text-slate-400">
                  {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : ''}
                </span>
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-slate-200 px-5 py-4">
                <p className="whitespace-pre-wrap text-sm text-slate-600">{msg.description}</p>
                <div className="mt-4 flex justify-end">
                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={busyId === msg.id}
                    onClick={() => handleDelete(msg.id)}
                  >
                    {busyId === msg.id ? 'Deleting…' : 'Delete'}
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
