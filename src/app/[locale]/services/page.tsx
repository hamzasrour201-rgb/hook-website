import type { Metadata } from 'next'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import { services } from '@/content/site'

export const metadata: Metadata = {
  title: 'Services — Hook Marketing',
  description:
    'Nine digital marketing & AI automation services: Meta Ads, Google Ads, TikTok, SEO, WhatsApp Bot, AI Automation, and more.',
}

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return (
    <main className="pt-24">
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <span
            className="text-muted text-xs tracking-widest mb-6 block"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            [ SERVICES ]
          </span>
          <h1
            className="font-bold text-white mb-6"
            style={{
              fontSize: 'clamp(52px, 8vw, 112px)',
              lineHeight: 0.92,
              letterSpacing: '-0.05em',
            }}
          >
            NINE WAYS{' '}
            <span className="text-orange">/ TO GROW.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Every service is built around one goal: measurable business growth. Pick one or let us build the full stack.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block border-b border-r border-white/10 p-8 md:p-10 transition-all duration-200 hover:bg-orange hover:border-orange"
              style={{ minHeight: 240 }}
            >
              <div className="service-number mb-6 group-hover:text-black/60 transition-colors">
                [ {service.number} / 09 ]
              </div>
              <div className="text-2xl mb-4 text-orange group-hover:text-black transition-colors" aria-hidden>
                {service.icon}
              </div>
              <h2 className="text-white font-bold text-xl mb-3 group-hover:text-black transition-colors tracking-tight">
                {service.name}
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6 group-hover:text-black/70 transition-colors">
                {service.description}
              </p>
              <span
                className="text-white group-hover:text-black transition-colors text-xs font-bold tracking-wider"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                READ MORE →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
