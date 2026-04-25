'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import MagneticButton from '@/components/MagneticButton'

gsap.registerPlugin()

const stickers = [
  { text: '+150 CLIENTS', rot: '-8deg', top: '8%', right: '5%', delay: '0s', dur: '7s' },
  { text: '5 COUNTRIES', rot: '10deg', top: '55%', right: '-2%', delay: '1.5s', dur: '9s' },
  { text: '★ 4.9 RATED', rot: '-5deg', top: '72%', left: '5%', delay: '0.8s', dur: '8s' },
  { text: '24/7 AI', rot: '14deg', top: '20%', left: '2%', delay: '2s', dur: '6s' },
]

// Animated bar heights cycling through different heights
const BAR_HEIGHTS = [
  ['40%', '70%', '50%', '85%', '60%'],
  ['65%', '45%', '80%', '35%', '75%'],
]

function KpiCard() {
  const barsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    let frame = 0
    let raf: number

    const animate = () => {
      frame++
      barsRef.current.forEach((bar, i) => {
        if (!bar) return
        const idx = Math.floor((frame / 40 + i) % BAR_HEIGHTS.length)
        bar.style.height = BAR_HEIGHTS[idx][i]
      })
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className="relative bg-surface border border-white/20 p-4 w-52"
      style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.6)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-muted" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.08em' }}>
          CAMPAIGN 001
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-live animate-pulse-dot" />
          <span className="text-green-live" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.1em' }}>
            LIVE
          </span>
        </div>
      </div>

      {/* Value */}
      <div className="flex items-end gap-2 mb-3">
        <span className="text-white font-bold text-3xl leading-none" style={{ fontFamily: 'Space Grotesk' }}>
          4.8×
        </span>
        <span className="text-green-live text-xs mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          ↑ 32%
        </span>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-1 h-12 mb-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            ref={(el) => { if (el) barsRef.current[i] = el }}
            className="flex-1 bg-orange transition-all duration-700"
            style={{ height: '50%', opacity: 0.7 + i * 0.06 }}
          />
        ))}
      </div>

      {/* Footer */}
      <span className="text-muted" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.08em' }}>
        ROAS · LAST 30 DAYS
      </span>
    </div>
  )
}

export default function Hero() {
  const t = useTranslations('hero')
  const containerRef = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])

  useGSAP(() => {
    const words = wordsRef.current.filter(Boolean)
    if (!words.length) return

    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.3,
      }
    )
  }, { scope: containerRef })

  const headlineWords = [
    t('headline1'),
    t('headline2'),
    t('headline3'),
    t('headline4'),
    t('headline5'),
    t('headline6'),
    t('headline7'),
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-16 overflow-hidden"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT — copy */}
          <div className="flex flex-col gap-8 z-10">
            {/* Badge */}
            <div className="pill w-fit">
              <span className="w-2 h-2 rounded-full bg-green-live animate-pulse-dot flex-shrink-0" />
              <span>{t('badge')}</span>
            </div>

            {/* Headline */}
            <div
              className="font-bold leading-none tracking-tighter"
              style={{
                fontSize: 'clamp(52px, 7vw, 96px)',
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
              }}
            >
              {headlineWords.map((word, i) => {
                const isSlash = word === '/'
                const isResults = word.startsWith('RESULT') || word.startsWith('نتائج')

                return (
                  <span key={i} className="overflow-hidden inline-block me-[0.2em]">
                    <span
                      ref={(el) => { if (el) wordsRef.current[i] = el }}
                      className={`inline-block ${
                        isSlash ? 'text-orange' : isResults ? 'skew-highlight' : 'text-white'
                      }`}
                    >
                      {word}
                    </span>
                    {/* Line breaks after certain words */}
                    {(i === 1 || i === 3 || i === 4) && <br />}
                  </span>
                )
              })}
            </div>

            {/* Subhead */}
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg">
              {t('subhead')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="bg-orange text-black font-bold text-sm px-8 py-4 tracking-wider transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_rgba(0,0,0,0.5)] inline-block"
                  style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em' }}
                >
                  {t('cta1')}
                </Link>
              </MagneticButton>

              <Link
                href="/work"
                className="border border-white/20 text-white font-bold text-sm px-8 py-4 tracking-wider transition-all duration-200 hover:border-white/60 hover:-translate-x-[2px] hover:-translate-y-[2px] inline-block"
                style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em' }}
              >
                {t('cta2')}
              </Link>
            </div>
          </div>

          {/* RIGHT — visual */}
          <div className="relative hidden lg:flex items-center justify-center h-[560px]">
            {/* Big outlined "26" */}
            <div
              className="absolute select-none pointer-events-none font-bold animate-float"
              style={{
                fontSize: 'clamp(160px, 16vw, 260px)',
                color: 'transparent',
                WebkitTextStroke: '2px #FF4D1F',
                lineHeight: 1,
                opacity: 0.35,
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                animationDuration: '8s',
              }}
            >
              26
            </div>

            {/* KPI card — centered over the "26" */}
            <div className="relative z-10">
              <KpiCard />
            </div>

            {/* Floating stickers */}
            {stickers.map((s, i) => (
              <div
                key={i}
                className="absolute sticker-float select-none"
                style={{
                  top: s.top,
                  right: (s as { right?: string }).right,
                  left: (s as { left?: string }).left,
                  '--rot': s.rot,
                  '--delay': s.delay,
                  '--dur': s.dur,
                } as React.CSSProperties}
              >
                <div
                  className={`px-3 py-2 font-bold text-xs border whitespace-nowrap ${
                    i % 2 === 0
                      ? 'bg-orange text-black border-orange'
                      : 'bg-white text-black border-white'
                  }`}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '0.08em',
                    transform: `rotate(${s.rot})`,
                    boxShadow: '3px 3px 0 rgba(0,0,0,0.3)',
                    fontSize: 11,
                  }}
                >
                  {s.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
