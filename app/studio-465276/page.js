import Image from 'next/image'
import LoginForm from '@/components/admin/LoginForm'

export const metadata = { title: 'Sign in — StandoutDev', robots: { index: false, follow: false } }

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-5 flex items-center gap-2.5">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[10px] ring-1 ring-slate-200">
            <Image
              src="/logo.png"
              alt="StandoutDev"
              fill
              sizes="40px"
              priority
              className="object-cover"
            />
          </span>
          <div>
            <p className="text-sm font-semibold leading-tight text-slate-900">StandoutDev</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">Admin Panel</p>
          </div>
        </div>
        <h1 className="text-xl font-semibold text-slate-900">Admin Access</h1>
        <p className="mt-1 text-sm text-slate-500">Sign in to manage blog content.</p>
        <LoginForm />
      </div>
    </div>
  )
}
