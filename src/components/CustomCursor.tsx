'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [mounted, setMounted] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  const pos = useRef({ x: -200, y: -200 })
  const ring = useRef({ x: -200, y: -200 })
  const hoverType = useRef<'button' | 'card' | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    setMounted(true)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }
    setIsTouch(false)
    document.documentElement.classList.add('custom-cursor')

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('.service-card, .testimonial-card')) {
        hoverType.current = 'card'
      } else if (t.closest('a, button')) {
        hoverType.current = 'button'
      } else {
        hoverType.current = null
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1

      const type = hoverType.current
      const isHov = type !== null
      const size = isHov ? 80 : 40

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px,${pos.current.y - 3}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - size / 2}px,${ring.current.y - size / 2}px)`
        ringRef.current.style.width = size + 'px'
        ringRef.current.style.height = size + 'px'
        ringRef.current.style.borderColor = isHov ? '#FF4D1F' : 'rgba(255,255,255,0.35)'
        ringRef.current.style.backgroundColor = isHov ? 'rgba(255,77,31,0.12)' : 'transparent'
      }
      if (labelRef.current) {
        labelRef.current.textContent =
          type === 'card' ? 'VIEW →' : type === 'button' ? 'CLICK' : ''
      }

      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      document.documentElement.classList.remove('custom-cursor')
    }
  }, [])

  if (!mounted || isTouch) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-orange"
        style={{ width: 6, height: 6, willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          transition: 'width 0.18s ease, height 0.18s ease, background-color 0.18s ease, border-color 0.18s ease',
          willChange: 'transform',
        }}
      >
        <span
          ref={labelRef}
          className="text-white select-none"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 8, letterSpacing: '0.1em', fontWeight: 700 }}
        />
      </div>
    </>
  )
}
