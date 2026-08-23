'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ADMIN_BASE } from '@/lib/constants/admin'

export default function LogoutButton({ className }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleLogout() {
    setLoading(true)
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
    } finally {
      router.push(ADMIN_BASE)
      router.refresh()
    }
  }

  return (
    <Button variant="outline" onClick={handleLogout} disabled={loading} className={className}>
      {loading ? 'Signing out…' : 'Logout'}
    </Button>
  )
}
