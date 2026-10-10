import Link from 'next/link'
import { getDb } from '@/lib/mongodb'
import { serializeBlogForClient } from '@/lib/blog'
import { ADMIN_BLOGS } from '@/lib/constants/admin'
import { Button } from '@/components/ui/button'
import BlogTable from '@/components/admin/BlogTable'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Blogs — StandoutDev', robots: { index: false, follow: false } }

export default async function BlogsListPage() {
  const db = await getDb()
  const posts = await db.collection('blogs')
    .find({}, { projection: { content: 0 } })
    .sort({ updatedAt: -1 })
    .toArray()
  const serialized = posts.map(serializeBlogForClient)

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Blog Posts</h1>
          <p className="mt-1 text-sm text-slate-500">{serialized.length} total</p>
        </div>
        <Link href={`${ADMIN_BLOGS}/new`}>
          <Button>+ New Post</Button>
        </Link>
      </div>

      <BlogTable posts={serialized} />
    </div>
  )
}
