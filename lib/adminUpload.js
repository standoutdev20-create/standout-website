// Client-side helper: upload one image through the admin upload API.
export async function uploadBlogImage(file) {
  const formData = new FormData()
  formData.append('upload', file)
  const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
  const data = await res.json().catch(() => ({}))
  if (res.status === 401) throw new Error('Your session expired — sign in again.')
  if (!res.ok) throw new Error(data.error?.message || data.error || 'Upload failed.')
  return data.url
}
