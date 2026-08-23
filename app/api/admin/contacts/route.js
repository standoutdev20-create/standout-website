import { NextResponse } from 'next/server'
import { getDb } from '@/lib/mongodb'

export async function GET() {
  try {
    const db = await getDb()
    const messages = await db.collection('contact_messages').find({}).sort({ createdAt: -1 }).toArray()
    return NextResponse.json({ messages: messages.map(({ _id, ...rest }) => rest) })
  } catch (error) {
    console.error('Failed to list contact messages:', error)
    return NextResponse.json({ error: 'Failed to load messages.' }, { status: 500 })
  }
}
