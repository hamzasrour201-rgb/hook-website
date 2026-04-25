'use client'

import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { process as processSteps } from '@/content/site'

gsap.registerPlugin(ScrollTrigger)

export default function Process() {
  const t = useTranslations('process')
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.process-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      }
    )
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="process"
      className="py-20 md:py-28 border-b border-white/10"
      style={{ backgroundColor: '#161616' }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-muted text-xs tracking-widest"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              [ PROCESS ]
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

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {processSteps.map((step, i) => (
            <div
              key={step.step}
              className="process-card group border-b border-r border-white/10 p-8 md:p-10 relative transition-all duration-200 cursor-default"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translate(-4px, -4px)'
                el.style.boxShadow = '8px 8px 0 #FF4D1F'
                el.style.zIndex = '10'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = ''
                el.style.boxShadow = ''
                el.style.zIndex = ''
              }}
            >
              {/* Step number */}
              <div
                className="text-muted mb-6 text-xs tracking-widest"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                STEP {step.step}
              </div>

              {/* Title */}
              <h3
                className="text-white font-bold text-2xl mb-4 tracking-tight"
                style={{ letterSpacing: '-0.03em' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Arrow right — desktop only */}
              {i < processSteps.length - 1 && (
                <div
                  className="process-arrow absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-bg border border-white/20 flex items-center justify-center z-20 hidden lg:flex"
                  style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}
                >
                  →
                </div>
              )}
              {/* Arrow down — mobile only (1-col stack) */}
              {i < processSteps.length - 1 && (
                <div
                  className="flex md:hidden justify-center mt-6 text-orange text-xl"
                  aria-hidden
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
