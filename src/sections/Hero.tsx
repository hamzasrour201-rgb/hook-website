'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import MagneticButton from '@/components/MagneticButton'

// ── Dot matrix canvas ──────────────────────────────────────────
function DotMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const SPACING = 44

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.004
      const cols = Math.ceil(canvas.width / SPACING) + 1
      const rows = Math.ceil(canvas.height / SPACING) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const wave = (Math.sin(t + c * 0.45 + r * 0.6) + 1) / 2
          ctx.beginPath()
          ctx.arc(c * SPACING, r * SPACING, wave * 1.8 + 0.3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255,77,31,${(wave * 0.22 + 0.03).toFixed(3)})`
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { ro.disconnect(); cancelAnimationFrame(raf) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.45 }}
    />
  )
}

// ── Letter animation ───────────────────────────────────────────
const charVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: (d: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: d },
  }),
}

function AnimatedWord({
  text,
  charOffset,
  className = '',
}: {
  text: string
  charOffset: number
  className?: string
}) {
  return (
    <span className={`overflow-hidden inline-block ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          custom={0.3 + (charOffset + i) * 0.022}
          variants={charVariant}
          initial="hidden"
          animate="visible"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

// ── KPI Card ───────────────────────────────────────────────────
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
    <div className="relative bg-surface border border-white/20 p-4 w-52" style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.6)' }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-muted" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.08em' }}>CAMPAIGN 001</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-live animate-pulse-dot" />
          <span className="text-green-live" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9 }}>LIVE</span>
        </div>
      </div>
      <div className="flex items-end gap-2 mb-3">
        <span className="text-white font-bold text-3xl leading-none" style={{ fontFamily: 'Space Grotesk' }}>4.8×</span>
        <span className="text-green-live text-xs mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>↑ 32%</span>
      </div>
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
      <span className="text-muted" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.08em' }}>ROAS · LAST 30 DAYS</span>
    </div>
  )
}

// ── Stickers ───────────────────────────────────────────────────
const stickers = [
  { text: '+150 CLIENTS', rot: '-8deg',  top: '8%',  right: '5%',  left: undefined, parallax: 14, orange: true },
  { text: '5 COUNTRIES',  rot: '10deg',  top: '55%', right: '-2%', left: undefined, parallax: 20, orange: false },
  { text: '★ 4.9 RATED',  rot: '-5deg',  top: '72%', right: undefined, left: '5%',  parallax: 10, orange: false },
  { text: '24/7 AI',      rot: '14deg',  top: '20%', right: undefined, left: '2%',  parallax: 16, orange: true },
]

// ── Main component ─────────────────────────────────────────────
export default function Hero() {
  const t = useTranslations('hero')
  const sectionRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    })
  }, [])

  const wordDefs = [
    { text: t('headline1'), color: 'white' as const },
    { text: t('headline2'), color: 'orange' as const },
    { text: t('headline3'), color: 'white' as const },
    { text: t('headline4'), color: 'orange' as const },
    { text: t('headline5'), color: 'highlight' as const },
    { text: t('headline6'), color: 'white' as const },
    { text: t('headline7'), color: 'white' as const },
  ]
  const lineBreaksAfter = new Set([1, 3, 4])

  let charOffset = 0

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-16 overflow-hidden"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      onMouseMove={handleMouseMove}
    >
      <DotMatrix />

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <motion.div
              className="pill w-fit"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-live animate-pulse-dot flex-shrink-0" />
              <span>{t('badge')}</span>
            </motion.div>

            <div
              className="font-bold leading-none tracking-tighter"
              style={{ fontSize: 'clamp(52px, 7vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.04em' }}
            >
              {wordDefs.map((wd, wi) => {
                const offset = charOffset
                charOffset += wd.text.length
                return (
                  <span key={wi} className="me-[0.2em]">
                    <AnimatedWord
                      text={wd.text}
                      charOffset={offset}
                      className={
                        wd.color === 'highlight' ? 'skew-highlight text-white' :
                        wd.color === 'orange' ? 'text-orange' : 'text-white'
                      }
                    />
                    {lineBreaksAfter.has(wi) && <br />}
                  </span>
                )
              })}
            </div>

            <motion.p
              className="text-muted text-base md:text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              {t('subhead')}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
            >
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
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:flex items-center justify-center h-[560px]">
            {/* Rotating "26" */}
            <motion.div
              className="absolute select-none pointer-events-none font-bold"
              style={{
                fontSize: 'clamp(160px, 16vw, 260px)',
                color: 'transparent',
                WebkitTextStroke: '2px #FF4D1F',
                lineHeight: 1,
                opacity: 0.35,
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
              }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
            >
              26
            </motion.div>

            {/* KPI card */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <KpiCard />
            </motion.div>

            {/* Stickers with mouse parallax */}
            {stickers.map((s, i) => (
              <motion.div
                key={i}
                className="absolute select-none"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5, type: 'spring', stiffness: 200 }}
                style={{
                  top: s.top,
                  right: s.right,
                  left: s.left,
                  transform: `rotate(${s.rot}) translate(${mouse.x * s.parallax}px,${mouse.y * s.parallax}px)`,
                  transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  zIndex: 20,
                }}
              >
                <div
                  className={`px-3 py-2 font-bold text-xs border whitespace-nowrap ${
                    s.orange ? 'bg-orange text-black border-orange' : 'bg-white text-black border-white'
                  }`}
                  style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', boxShadow: '3px 3px 0 rgba(0,0,0,0.3)', fontSize: 11 }}
                >
                  {s.text}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
