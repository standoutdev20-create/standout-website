// components/site/CustomCursor.jsx
'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only show on desktop
    if (typeof window === 'undefined' || window.innerWidth < 1024) return

    const cursor = cursorRef.current
    if (!cursor) return

    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const handleEnterInteractive = () => cursor.classList.add('expanded')
    const handleLeaveInteractive = () => cursor.classList.remove('expanded')

    let raf
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15
      pos.current.y += (target.current.y - pos.current.y) * 0.15
      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMove, { passive: true })
    animate()

    // One delegated listener instead of re-binding every element on each DOM change
    const SELECTOR = 'a, button, [role="button"], input, textarea, select, .cursor-pointer'
    const handleOver = (e) => {
      if (e.target.closest?.(SELECTOR)) handleEnterInteractive()
      else handleLeaveInteractive()
    }
    document.addEventListener('mouseover', handleOver, { passive: true })

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden lg:block"
      style={{ left: 0, top: 0, transform: 'translate3d(-100px, -100px, 0)' }}
    />
  )
}