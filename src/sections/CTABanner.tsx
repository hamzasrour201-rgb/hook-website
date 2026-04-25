'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import MagneticButton from '@/components/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

const STARS = [
  { top: '10%', left: '5%', rot: '20deg', size: 90 },
  { top: '60%', left: '2%', rot: '-15deg', size: 70 },
  { top: '20%', right: '4%', rot: '35deg', size: 110 },
  { top: '65%', right: '8%', rot: '-25deg', size: 80 },
  { top: '40%', left: '40%', rot: '10deg', size: 60 },
]

export default function CTABanner() {
  const t = useTranslations('cta')
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.cta-heading span',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
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
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: '#FF4D1F' }}
    >
      {/* Decorative stars */}
      {STARS.map((star, i) => (
        <div
          key={i}
          className="deco-star"
          style={{
            top: star.top,
            left: (star as { left?: string }).left,
            right: (star as { right?: string }).right,
            fontSize: star.size,
            transform: `rotate(${star.rot})`,
          }}
          aria-hidden
        >
          ✦
        </div>
      ))}

      <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <h2
          className="cta-heading font-bold text-black leading-none mb-8"
          style={{
            fontSize: 'clamp(52px, 9vw, 128px)',
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
          }}
        >
          <span className="block overflow-hidden">
            <span className="block">{t('heading1')}</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block">{t('heading2')}</span>
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-black/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {t('subtext')}
        </p>

        {/* CTA button */}
        <MagneticButton>
          <Link
            href="/contact"
            className="inline-block bg-black text-white font-bold text-sm px-10 py-5 tracking-wider transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_rgba(0,0,0,0.5)]"
            style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
          >
            {t('button')}
          </Link>
        </MagneticButton>
      </div>
    </section>
  )
}
