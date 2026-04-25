'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { services } from '@/content/site'
import { SERVICE_ICONS } from '@/components/ServiceIcons'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const t = useTranslations('services')
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.service-card',
      { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
      {
        clipPath: 'inset(0 0 0% 0)',
        opacity: 1,
        duration: 0.65,
        stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      }
    )
  }, { scope: containerRef })

  const handleTilt = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(8px)`
  }

  const resetTilt = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <section ref={containerRef} id="services" className="py-20 md:py-28 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <span className="text-muted text-xs tracking-widest mb-4 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            [ SERVICES ]
          </span>
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 0.92, letterSpacing: '-0.04em' }}>
            {t('heading1')}{' '}
            <span className="text-orange">{t('heading2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {services.map((service) => {
            const Icon = SERVICE_ICONS[service.slug]
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card group block border-b border-r border-white/10 p-8 md:p-10 transition-colors duration-200 hover:bg-orange hover:border-orange"
                style={{ minHeight: 220, transformStyle: 'preserve-3d', transition: 'background-color 0.2s, border-color 0.2s, transform 0.15s ease-out' }}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                {Icon && (
                  <div className="mb-6 w-24 h-24">
                    <Icon className="w-full h-full" />
                  </div>
                )}

                <div className="service-number mb-4 group-hover:text-black/60 transition-colors">
                  [ {service.number} / 09 ]
                </div>

                <h3
                  className="text-white font-bold text-xl mb-3 group-hover:text-black transition-colors tracking-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {service.name}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-6 group-hover:text-black/70 transition-colors">
                  {service.description}
                </p>

                <span
                  className="text-white group-hover:text-black transition-colors text-xs font-bold tracking-wider flex items-center gap-2"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {t('readMore')}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
