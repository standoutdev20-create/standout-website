'use client'

import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import CustomEditor from './ckeditor/CustomEditor'
import 'ckeditor5/ckeditor5.css'

class BlogImageUploadAdapter {
  constructor(loader) {
    this.loader = loader
  }
  async upload() {
    const file = await this.loader.file
    const formData = new FormData()
    formData.append('upload', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || 'Upload failed.')
    return { default: data.url, url: data.url }
  }
  abort() {}
}

function uploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) =>
    new BlogImageUploadAdapter(loader)
}

export default function CKEditorField({ initialValue, onChange, placeholder }) {
  const [loadError, setLoadError] = useState('')

  if (loadError) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
        {loadError}
      </div>
    )
  }

  return (
    <div className="ck-field-wrapper rounded-2xl border border-slate-200 bg-white">
      <CKEditor
        editor={CustomEditor}
        data={initialValue || ''}
        config={{
          extraPlugins: [uploadAdapterPlugin],
          placeholder: placeholder || 'Write your post…',
        }}
        onReady={(editor) => {
          const editable = editor.ui?.view?.editable?.element
          if (editable) editable.style.minHeight = '520px'
        }}
        onChange={(_event, editor) => onChange(editor.getData())}
        onError={(error, { willEditorRestart }) => {
          if (!willEditorRestart) {
            console.error('CKEditor failed to load:', error)
            setLoadError(error?.message || 'The editor failed to load.')
          }
        }}
      />
    </div>
  )
}
