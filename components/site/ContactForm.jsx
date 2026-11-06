'use client'

// The one contact form used across the site. Posts to /api/contact.
import { useState } from 'react'
import { ArrowUpRight, Check, CheckCircle2, Loader2 } from 'lucide-react'

const serviceOptions = ['Website', 'Web App / SaaS', 'Mobile App', 'E-Commerce', 'UI/UX Design', 'Ongoing Support', 'Not sure yet']

const emptyForm = { name: '', email: '', phone: '', service: '', description: '', website: '' }

const inputClass =
  'mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/10'

function Field({ id, label, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
        {optional ? <span className="ml-1 font-normal text-slate-400">(optional)</span> : <span className="ml-0.5 text-blue-600" aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function ContactForm({ idPrefix = 'contact', className = '' }) {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (error) setError('')
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
      setForm(emptyForm)
    } catch {
      setError('Could not send your message. Check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const id = (name) => `${idPrefix}-${name}`

  if (submitted) {
    return (
      <div className={`rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-900/5 sm:p-12 ${className}`}>
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-slate-900">Message received.</h3>
        <p className="mx-auto mt-2 max-w-sm text-slate-600">Thanks for reaching out. A real person on our team will reply within one business day.</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={submit}
      aria-busy={loading}
      className={`relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 md:p-10 ${className}`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={id('name')} label="Name">
          <input id={id('name')} name="name" required autoComplete="name" value={form.name} onChange={update('name')} className={inputClass} placeholder="Jane Doe" />
        </Field>
        <Field id={id('email')} label="Email">
          <input
            id={id('email')}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
            className={inputClass}
            placeholder="jane@company.com"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field id={id('phone')} label="Phone" optional>
            <input id={id('phone')} name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update('phone')} className={inputClass} placeholder="+91 98765 43210" />
          </Field>
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-slate-700">
          What do you need?<span className="ml-0.5 text-blue-600" aria-hidden="true">*</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {serviceOptions.map((s) => {
            const active = form.service === s
            return (
              <label
                key={s}
                className={`relative inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-blue-600/20 ${
                  active ? 'border-[#0B0F19] bg-[#0B0F19] text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'
                }`}
              >
                <input type="radio" name={`${idPrefix}-service`} value={s} required checked={active} onChange={update('service')} className="absolute inset-0 cursor-pointer opacity-0" />
                {active && <Check className="h-3.5 w-3.5" />}
                {s}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-6">
        <Field id={id('description')} label="Project details">
          <textarea
            id={id('description')}
            name="description"
            required
            rows={5}
            value={form.description}
            onChange={update('description')}
            className={`${inputClass} min-h-[130px] resize-y`}
            placeholder="What are you building, who is it for, and when do you need it? Links to references help too."
          />
        </Field>
      </div>

      {/* Honeypot: hidden from people, bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id('website')}>Website</label>
        <input id={id('website')} name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update('website')} />
      </div>

      {error && (
        <p role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">We&apos;ll only use your details to reply to you.</p>
        <button
          type="submit"
          disabled={loading}
          className="btn-shine group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#0B0F19] py-2 pl-6 pr-2 font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {loading ? (
            <span className="flex items-center gap-2 py-1.5 pr-4">
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </span>
          ) : (
            <>
              Send message
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  )
}
