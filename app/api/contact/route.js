import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { v4 as uuidv4 } from 'uuid'
import { getDb } from '@/lib/mongodb'
import { checkRateLimit, clientIp, recordHit } from '@/lib/rateLimit'

// 5 submissions per IP per 10 minutes.
const CONTACT_LIMIT = { limit: 5, windowMs: 10 * 60 * 1000 }

// Sends through the Hostinger mailbox on standoutdev.com (SSL on 465).
function createTransporter() {
  const user = String(process.env.SMTP_USER || '').trim()
  const pass = String(process.env.SMTP_PASS || '')
  const host = process.env.SMTP_HOST || 'smtp.hostinger.com'
  const port = Number(process.env.SMTP_PORT || 465)

  if (!user || !pass) return { transporter: null, user, to: '' }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass },
  })

  return {
    transporter,
    user,
    to: String(process.env.CONTACT_TO || user).trim(),
  }
}

export async function POST(request) {
  const rateKey = `contact:${clientIp(request)}`
  const { allowed, retryAfter } = checkRateLimit(rateKey, CONTACT_LIMIT)
  if (!allowed) {
    return NextResponse.json(
      { error: `Too many messages. Try again in ${Math.ceil(retryAfter / 60)} min.` },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } },
    )
  }

  try {
    const body = await request.json()

    // Honeypot field is hidden from people; pretend success so bots move on.
    if (String(body.website || '').trim()) {
      return NextResponse.json({ success: true })
    }
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').trim()
    const service = String(body.service || '').trim() || 'General inquiry'
    const description = String(body.description || body.details || '').trim()

    if (!name || !email || !description) {
      return NextResponse.json({ error: 'Name, email, and project details are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    recordHit(rateKey, CONTACT_LIMIT)

    let saved = false
    try {
      const db = await getDb()
      await db.collection('contact_messages').insertOne({
        id: uuidv4(),
        name,
        email,
        phone,
        service,
        description,
        read: false,
        createdAt: new Date(),
      })
      saved = true
    } catch (dbError) {
      console.error('Failed to save contact message to DB:', dbError)
    }

    const { transporter, user, to } = createTransporter()
    let emailed = false

    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"StandoutDev Contact" <${user}>`,
          to,
          replyTo: email,
          subject: `New inquiry from ${name} — ${service}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone || "—"}`,
            `Service: ${service}`,
            '',
            'Description:',
            description,
          ].join('\n'),
          html: `
            <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#111">
              <h2 style="margin:0 0 16px">New contact form message</h2>
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
              <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
              <p><strong>Service:</strong> ${escapeHtml(service)}</p>
              <p><strong>Description:</strong></p>
              <p style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:8px">${escapeHtml(description)}</p>
            </div>
          `,
        })
        emailed = true
      } catch (mailError) {
        console.error('Contact form email failed:', mailError)
      }
    } else {
      console.error('SMTP credentials missing. Set SMTP_USER and SMTP_PASS in .env')
    }

    if (saved || emailed) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({
      error: 'Failed to send message. Please try again.',
    }, { status: 500 })
  } catch (error) {
    console.error('Contact form failed:', error)
    return NextResponse.json({
      error: 'Failed to send message. Please try again.',
    }, { status: 500 })
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
