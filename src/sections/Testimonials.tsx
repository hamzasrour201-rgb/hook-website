'use client'

import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { testimonials } from '@/content/site'

gsap.registerPlugin(ScrollTrigger)

const AVATAR_GRADIENTS = [
  'from-orange to-yellow',
  'from-purple-600 to-blue-500',
  'from-green-live to-teal-500',
  'from-pink-500 to-orange',
  'from-blue-500 to-indigo-600',
]

export default function Testimonials() {
  const t = useTranslations('testimonials')
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useGSAP(() => {
    gsap.fromTo(
      '.testimonial-card',
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    )
  }, { scope: containerRef })

  // Drag-to-scroll
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0)
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - (trackRef.current.offsetLeft ?? 0)
    const walk = (x - startX.current) * 1.2
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }
  const stopDrag = () => { isDragging.current = false }

  return (
    <section ref={containerRef} id="testimonials" className="py-20 md:py-28 border-b border-white/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-muted text-xs tracking-widest"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              [ TESTIMONIALS ]
            </span>
          </div>
          <h2
            className="font-bold text-white"
            style={{
              fontSize: 'clamp(44px, 6vw, 88px)',
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
            }}
          >
            {t('heading1')}{' '}
            <span className="text-orange">{t('heading2')}</span>
          </h2>
        </div>
      </div>

      {/* Horizontal scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: 'max(24px, calc((100vw - 1400px) / 2 + 24px))',
          paddingRight: 'max(24px, calc((100vw - 1400px) / 2 + 24px))',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="testimonial-card flex-shrink-0 border border-white/10 p-6 md:p-8 flex flex-col gap-6"
            style={{ width: 'clamp(280px, 80vw, 480px)' }}
          >
            {/* Quote mark */}
            <div
              className="text-orange font-bold leading-none select-none"
              style={{ fontSize: 64, lineHeight: 0.8, fontFamily: 'Space Grotesk' }}
              aria-hidden
            >
              &ldquo;
            </div>

            {/* Quote */}
            <p className="text-white text-base leading-relaxed flex-1">
              {item.quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 border-t border-white/10 pt-5">
              {/* Avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold bg-gradient-to-br ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]} text-white flex-shrink-0`}
              >
                {item.initials}
              </div>
              <div>
                <div className="text-white font-medium text-sm">{item.name}</div>
                <div
                  className="text-muted text-xs tracking-wider"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {item.role} · {item.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
