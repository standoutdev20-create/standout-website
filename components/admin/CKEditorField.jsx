'use client'

import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import CustomEditor from './ckeditor/CustomEditor'
import { uploadBlogImage } from '@/lib/adminUpload'
import 'ckeditor5/ckeditor5.css'

class BlogImageUploadAdapter {
  constructor(loader) {
    this.loader = loader
  }
  async upload() {
    const file = await this.loader.file
    try {
      const url = await uploadBlogImage(file)
      return { default: url }
    } catch (error) {
      // CKEditor shows a rejected string to the user.
      throw error.message
    }
  }
  abort() {}
}

function uploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) =>
    new BlogImageUploadAdapter(loader)
}

export default function CKEditorField({ initialValue, onChange, onReady, placeholder }) {
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
          // CKEditor normalises the HTML it is given; report that baseline so
          // the form doesn't flag an untouched post as having unsaved changes.
          onReady?.(editor.getData())
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
