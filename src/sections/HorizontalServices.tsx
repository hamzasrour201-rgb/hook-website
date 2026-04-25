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

export default function HorizontalServices() {
  const t = useTranslations('services')
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (window.innerWidth < 768) return
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const totalScroll = window.innerWidth * (services.length - 1)

    const tween = gsap.to(track, {
      x: -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${totalScroll}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1.2,
        invalidateOnRefresh: true,
        onUpdate(self) {
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`
          }
          if (counterRef.current) {
            const idx = Math.min(
              Math.round(self.progress * (services.length - 1)) + 1,
              services.length
            )
            counterRef.current.textContent =
              String(idx).padStart(2, '0') + ' / ' + String(services.length).padStart(2, '0')
          }
        },
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, { scope: containerRef })

  return (
    <>
      {/* ── Mobile: vertical stack ── */}
      <section className="md:hidden py-20 border-b border-white/10" id="services">
        <div className="max-w-[1400px] mx-auto px-6">
          <span className="text-muted text-xs tracking-widest mb-4 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            [ SERVICES ]
          </span>
          <h2 className="font-bold text-white mb-12" style={{ fontSize: 'clamp(40px, 10vw, 72px)', letterSpacing: '-0.04em', lineHeight: 0.92 }}>
            {t('heading1')} <span className="text-orange">{t('heading2')}</span>
          </h2>
          <div className="flex flex-col gap-4">
            {services.map((service) => {
              const Icon = SERVICE_ICONS[service.slug]
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="service-card border border-white/10 p-6 flex items-center gap-5 hover:border-orange hover:bg-orange group transition-all duration-200"
                >
                  {Icon && <div className="w-14 h-14 flex-shrink-0"><Icon className="w-full h-full" /></div>}
                  <div>
                    <div className="text-muted text-xs mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>[ {service.number} ]</div>
                    <div className="text-white font-bold text-lg group-hover:text-black tracking-tight">{service.name}</div>
                    <div className="text-muted text-sm group-hover:text-black/70 mt-0.5">{service.description}</div>
                  </div>
                  <span className="ml-auto text-orange group-hover:text-black font-bold text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>→</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Desktop: horizontal pinned scroll ── */}
      <section
        ref={containerRef}
        id="services-desktop"
        className="hidden md:block relative overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-20">
          <div
            ref={progressRef}
            className="h-full bg-orange"
            style={{ width: '0%', transition: 'none' }}
          />
        </div>

        {/* Section label + counter */}
        <div className="absolute top-6 left-0 right-0 z-20 max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          <span className="text-muted text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            [ SERVICES ]
          </span>
          <span
            ref={counterRef}
            className="text-orange text-xs font-bold"
            style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em' }}
          >
            01 / {String(services.length).padStart(2, '0')}
          </span>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: `${services.length * 100}vw` }}
        >
          {services.map((service) => {
            const Icon = SERVICE_ICONS[service.slug]
            return (
              <div
                key={service.slug}
                className="service-panel flex-shrink-0 w-screen h-full flex items-center border-r border-white/10"
                style={{ paddingTop: '5rem' }}
              >
                <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full grid grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Left */}
                  <div>
                    <div
                      className="font-bold leading-none mb-2 select-none"
                      style={{
                        fontFamily: 'Space Grotesk',
                        fontSize: 'clamp(80px, 13vw, 180px)',
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(255,77,31,0.18)',
                        letterSpacing: '-0.04em',
                        lineHeight: 0.85,
                      }}
                    >
                      {service.number}
                    </div>
                    <h2
                      className="text-white font-bold mb-5"
                      style={{
                        fontFamily: 'Space Grotesk',
                        fontSize: 'clamp(32px, 5vw, 72px)',
                        letterSpacing: '-0.04em',
                        lineHeight: 0.92,
                      }}
                    >
                      {service.name}
                    </h2>
                    <p className="text-muted text-base lg:text-lg leading-relaxed mb-8 max-w-md">
                      {service.details.hero}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-block bg-orange text-black font-bold text-xs px-8 py-4 tracking-wider transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_rgba(0,0,0,0.5)]"
                      style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
                    >
                      EXPLORE SERVICE →
                    </Link>
                  </div>

                  {/* Right: illustration */}
                  <div className="flex items-center justify-center">
                    {Icon ? (
                      <div className="w-56 h-56 lg:w-72 lg:h-72">
                        <Icon className="w-full h-full" />
                      </div>
                    ) : (
                      <div
                        className="font-bold select-none"
                        style={{
                          fontFamily: 'Space Grotesk',
                          fontSize: 120,
                          color: 'transparent',
                          WebkitTextStroke: '1px rgba(255,77,31,0.2)',
                        }}
                      >
                        {service.number}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 right-8 text-muted text-xs tracking-widest flex items-center gap-2"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          <span className="animate-bounce inline-block">→</span>
          SCROLL TO EXPLORE
        </div>
      </section>
    </>
  )
}
