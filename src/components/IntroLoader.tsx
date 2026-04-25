'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function IntroLoader() {
  const curtainRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGPathElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Only show on first visit per session
    const seen = sessionStorage.getItem('hook-loader-seen')
    if (seen) return
    sessionStorage.setItem('hook-loader-seen', '1')
    setShow(true)
  }, [])

  useEffect(() => {
    if (!show) return
    if (!svgRef.current || !curtainRef.current || !wrapRef.current) return

    const path = svgRef.current
    const length = path.getTotalLength()

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        setShow(false)
      },
    })

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    })
      .to(
        wrapRef.current,
        { opacity: 0, duration: 0.3, ease: 'power1.in' },
        '+=0.2'
      )
      .to(
        curtainRef.current,
        { yPercent: -100, duration: 0.7, ease: 'power3.inOut' },
        '-=0.1'
      )
  }, [show])

  if (!show) return null

  return (
    <div ref={curtainRef} className="loader-curtain flex items-center justify-center">
      <div ref={wrapRef} className="flex flex-col items-center gap-4">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* "H" letterform path */}
          <path
            ref={svgRef}
            d="M16 12 L16 68 M16 40 L64 40 M64 12 L64 68"
            stroke="#FF4D1F"
            strokeWidth="8"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
          />
        </svg>
        <div className="flex items-baseline gap-1.5">
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 20, fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.05em' }}>
            HOOK
          </span>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, fontWeight: 700, color: '#FF4D1F', letterSpacing: '0.04em' }}>
            Marketing
          </span>
        </div>
      </div>
    </div>
  )
}
