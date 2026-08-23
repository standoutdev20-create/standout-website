import LoginForm from '@/components/admin/LoginForm'

export const metadata = { title: 'Sign in', robots: { index: false, follow: false } }

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-900">Admin Access</h1>
        <p className="mt-1 text-sm text-slate-500">Sign in to manage blog content.</p>
        <LoginForm />
      </div>
    </div>
  )
}
