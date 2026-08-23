import Link from 'next/link'
import { ADMIN_BLOGS } from '@/lib/constants/admin'
import BlogForm from '@/components/admin/BlogForm'

export const metadata = { title: 'New Post', robots: { index: false, follow: false } }

export default function NewBlogPostPage() {
  return (
    <div>
      <Link href={ADMIN_BLOGS} className="text-sm text-slate-500 hover:text-slate-800">
        ← Back to Blogs
      </Link>
      <h1 className="mt-4 text-2xl font-semibold text-slate-900">New Post</h1>
      <div className="mt-8">
        <BlogForm />
      </div>
    </div>
  )
}
