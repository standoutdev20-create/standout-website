import { NextResponse } from 'next/server'
import { getDb } from '@/lib/mongodb'

export async function PATCH(request, { params }) {
  const { id } = await params
  try {
    const body = await request.json()
    const db = await getDb()
    await db.collection('contact_messages').updateOne(
      { id },
      { $set: { read: Boolean(body.read) } }
    )
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to update contact message:', error)
    return NextResponse.json({ error: 'Failed to update message.' }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params
  try {
    const db = await getDb()
    const result = await db.collection('contact_messages').deleteOne({ id })
    if (!result.deletedCount) return NextResponse.json({ error: 'Not found.' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete contact message:', error)
    return NextResponse.json({ error: 'Failed to delete message.' }, { status: 500 })
  }
}
