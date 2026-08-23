import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { v4 as uuidv4 } from 'uuid'
import { getDb } from '@/lib/mongodb'

function createTransporter() {
  const user = String(process.env.SMTP_USER || '').trim()
  const pass = String(process.env.SMTP_PASS || '').replace(/\s/g, '')
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = Number(process.env.SMTP_PORT || 587)

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
  try {
    const body = await request.json()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').trim()
    const service = String(body.service || '').trim()
    const description = String(body.description || body.details || '').trim()

    if (!name || !email || !phone || !service || !description) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

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
    } catch (dbError) {
      console.error('Failed to save contact message to DB:', dbError)
    }

    const { transporter, user, to } = createTransporter()

    if (!transporter) {
      console.error('SMTP credentials missing. Set SMTP_USER and SMTP_PASS in .env')
      return NextResponse.json({ error: 'Email is not configured. Please try again later.' }, { status: 500 })
    }

    await transporter.sendMail({
      from: `"StandoutDev Contact" <${user}>`,
      to,
      replyTo: email,
      subject: `New inquiry from ${name} — ${service}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
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
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Description:</strong></p>
          <p style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:8px">${escapeHtml(description)}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form email failed:', error)
    const authFailed = error?.code === 'EAUTH'
    return NextResponse.json({
      error: authFailed
        ? 'Email login failed. Check SMTP_USER and the Gmail App Password in .env, then restart the server.'
        : 'Failed to send message. Please try again.',
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
