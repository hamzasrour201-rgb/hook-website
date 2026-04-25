'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'
import { useCountUp } from '@/hooks/useCountUp'
import { stats } from '@/content/site'

gsap.registerPlugin(ScrollTrigger)

function StatBox({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000)

  return (
    <div
      ref={ref}
      className="p-8 md:p-12 flex flex-col gap-2 cursor-default"
      style={{ transition: 'all 0.15s ease' }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.backgroundColor = '#FF4D1F'
        el.style.transform = 'translate(-3px, -3px)'
        el.style.boxShadow = '6px 6px 0 rgba(0,0,0,0.4)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.backgroundColor = ''
        el.style.transform = ''
        el.style.boxShadow = ''
      }}
    >
      <span
        className="font-bold text-white count-up"
        style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(48px, 5vw, 80px)', lineHeight: 1, letterSpacing: '-0.04em', color: 'inherit' }}
      >
        {count}{suffix}
      </span>
      <span
        className="text-muted text-sm tracking-wider uppercase"
        style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', color: 'inherit', opacity: 0.7 }}
      >
        {label}
      </span>
    </div>
  )
}

export default function Stats() {
  const t = useTranslations('stats')
  const containerRef = useRef<HTMLDivElement>(null)
  const statLabels = [t('clients'), t('managed'), t('retention'), t('countries')]

  useGSAP(() => {
    gsap.fromTo(
      '.stat-box-wrapper',
      { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
      {
        clipPath: 'inset(0 0 0% 0)',
        opacity: 1,
        duration: 0.7,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="border-b border-white/10">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-white/10 border-b border-white/10">
        {stats.map((stat, i) => (
          <div key={i} className="stat-box-wrapper">
            <StatBox value={stat.value} suffix={stat.suffix} label={statLabels[i]} />
          </div>
        ))}
      </div>
    </section>
  )
}
