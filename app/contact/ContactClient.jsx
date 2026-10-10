'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight, Check, Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'

const services = ['Website', 'Mobile App', 'Custom Software', 'E-Commerce', 'SaaS / Dashboard', 'IT Support', 'Not sure yet']

const emptyForm = { name: '', email: '', phone: '', service: '', description: '', website: '' }

const contactItems = [
  { icon: Mail, label: 'Email', value: 'contact@standoutdev.com', href: 'mailto:contact@standoutdev.com' },
  { icon: Phone, label: 'Phone', value: '+91 88780 25649', href: 'tel:+918878025649' },
  { icon: MapPin, label: 'Studio', value: 'Pune, Maharashtra 411052 · Working worldwide' },
  { icon: Clock, label: 'Response time', value: 'Within one business day' },
]

const nextSteps = [
  'We read your brief and reply within one business day.',
  'A short call to understand goals, timeline, and budget.',
  'You get a clear scope and estimate. No obligation.',
]

const inputClass =
  'mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10'

function Field({ id, label, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-slate-400">(optional)</span>
        ) : (
          <span className="ml-0.5 text-cyan-600" aria-hidden="true">*</span>
        )}
      </label>
      {children}
    </div>
  )
}

function Contact() {
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

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-80" />
        <div className="absolute inset-0 grid-lines opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xs uppercase tracking-[0.3em] text-cyan-600 mb-6 md:mb-8">Get in touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.95]">
            Tell us about<br /><span className="grad-text">your project.</span>
          </motion.h1>
          <p className="mt-6 md:mt-8 max-w-2xl text-lg text-slate-500">Whether it&apos;s a new website, a mobile app, or software for your team, share a few details and we&apos;ll come back with next steps and a rough scope.</p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 lg:gap-12">
          <aside className="lg:col-span-4 lg:order-none order-last">
            <div className="lg:sticky lg:top-28 space-y-6">
              <ul className="rounded-3xl border border-slate-200 bg-white divide-y divide-slate-100">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-widest text-slate-400">{label}</div>
                      {href ? (
                        <a href={href} className="mt-1 block break-words font-medium text-slate-900 hover:text-cyan-600 transition">{value}</a>
                      ) : (
                        <div className="mt-1 text-slate-700">{value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-4">What happens next</div>
                <ol className="space-y-4">
                  {nextSteps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-slate-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">{i + 1}</span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                className="rounded-3xl border border-cyan-400/30 bg-cyan-400/5 p-8 md:p-12 text-center"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 glow">
                  <Send className="h-7 w-7 text-slate-900" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold">Message received.</h2>
                <p className="mt-4 text-slate-500">Thanks for reaching out. A real person on our team will reply within one business day.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-medium text-cyan-600 hover:text-slate-900 transition"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} aria-busy={loading} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.15)]">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="contact-name" label="Name">
                    <input
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={update('name')}
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </Field>
                  <Field id="contact-email" label="Email">
                    <input
                      id="contact-email"
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
                  <Field id="contact-phone" label="Phone" optional>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      className={inputClass}
                      placeholder="+91 98765 43210"
                    />
                  </Field>
                </div>

                <fieldset className="mt-6">
                  <legend className="text-sm font-medium text-slate-700">
                    What do you need?<span className="ml-0.5 text-cyan-600" aria-hidden="true">*</span>
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {services.map((s) => {
                      const active = form.service === s
                      return (
                        <label
                          key={s}
                          className={`relative inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-cyan-500/20 ${
                            active
                              ? 'border-slate-900 bg-slate-900 text-white'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={s}
                            required
                            checked={active}
                            onChange={update('service')}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                          {active && <Check className="h-3.5 w-3.5" />}
                          {s}
                        </label>
                      )
                    })}
                  </div>
                </fieldset>

                <div className="mt-6">
                  <Field id="contact-description" label="Project details">
                    <textarea
                      id="contact-description"
                      name="description"
                      required
                      rows={6}
                      value={form.description}
                      onChange={update('description')}
                      className={`${inputClass} resize-y min-h-[140px]`}
                      placeholder="What are you building, who is it for, and when do you need it? Links to references help too."
                    />
                  </Field>
                </div>

                {/* Honeypot: hidden from people, bots tend to fill it in. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={update('website')}
                  />
                </div>

                {error && (
                  <p role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                )}

                <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-400">We&apos;ll only use your details to reply to this message.</p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-8 py-4 font-semibold hover:scale-[1.03] transition disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
