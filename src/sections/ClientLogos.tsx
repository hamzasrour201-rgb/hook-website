'use client'

import { useTranslations } from 'next-intl'
import { clients } from '@/content/site'

// TODO: replace with real SVG logos from /public/images/clients/*.svg
const LOGO_FONTS = [
  { font: 'JetBrains Mono', weight: 700, transform: 'none' },
  { font: 'Space Grotesk', weight: 700, transform: 'uppercase' },
  { font: 'JetBrains Mono', weight: 400, transform: 'none' },
  { font: 'Space Grotesk', weight: 600, transform: 'uppercase' },
  { font: 'JetBrains Mono', weight: 700, transform: 'none' },
  { font: 'Space Grotesk', weight: 700, transform: 'uppercase' },
  { font: 'JetBrains Mono', weight: 400, transform: 'none' },
  { font: 'Space Grotesk', weight: 600, transform: 'uppercase' },
  { font: 'JetBrains Mono', weight: 700, transform: 'none' },
]

export default function ClientLogos() {
  const t = useTranslations('clients')
  const repeated = [...clients, ...clients, ...clients, ...clients]

  return (
    <section className="py-16 border-b border-white/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <p
          className="text-muted text-center text-xs tracking-widest"
          style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
        >
          {t('label')}
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-outer relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }} />

        <div className="marquee-track flex items-center gap-16 animate-marquee">
          {repeated.map((name, i) => {
            const style = LOGO_FONTS[i % LOGO_FONTS.length]
            return (
              <span
                key={i}
                className="flex-shrink-0 text-muted hover:text-orange transition-colors duration-200 cursor-default"
                style={{
                  fontFamily: `${style.font}, monospace`,
                  fontWeight: style.weight,
                  fontSize: 14,
                  letterSpacing: '0.05em',
                  opacity: 0.7,
                  textTransform: style.transform as React.CSSProperties['textTransform'],
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
              >
                {name}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
