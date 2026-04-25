import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import { services } from '@/content/site'

interface Props {
  params: { slug: string; locale: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.name} — Hook Marketing`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  setRequestLocale(params.locale)
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const { details } = service

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/services"
              className="text-muted text-xs tracking-wider hover:text-white transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              ← SERVICES
            </Link>
            <span className="text-white/20">|</span>
            <span
              className="text-muted text-xs tracking-wider"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              [ {service.number} / 09 ]
            </span>
          </div>

          <div className="text-4xl mb-6 text-orange" aria-hidden>{service.icon}</div>

          <h1
            className="font-bold text-white mb-6"
            style={{
              fontSize: 'clamp(48px, 7vw, 104px)',
              lineHeight: 0.92,
              letterSpacing: '-0.05em',
            }}
          >
            {service.name}
          </h1>

          <p
            className="text-muted text-xl md:text-2xl max-w-2xl leading-relaxed mb-10"
            style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
          >
            {details.hero}
          </p>

          <Link
            href="/contact"
            className="inline-block bg-orange text-black font-bold text-sm px-8 py-4 tracking-wider transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_rgba(0,0,0,0.4)]"
            style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em' }}
          >
            GET STARTED →
          </Link>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="border border-white/10 p-8">
              <div
                className="text-orange text-xs font-bold tracking-widest mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                THE PROBLEM
              </div>
              <p className="text-white text-lg leading-relaxed">{details.problem}</p>
            </div>
            <div className="border border-orange p-8">
              <div
                className="text-orange text-xs font-bold tracking-widest mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                OUR SOLUTION
              </div>
              <p className="text-white text-lg leading-relaxed">{details.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2
            className="font-bold text-white mb-10"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)', letterSpacing: '-0.04em' }}
          >
            WHAT YOU GET.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {details.deliverables.map((item, i) => (
              <div
                key={i}
                className="border border-white/10 p-5 flex items-start gap-4 hover:border-orange transition-colors group"
              >
                <span
                  className="text-orange font-bold text-xs flex-shrink-0 mt-0.5 group-hover:text-orange"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-white text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2
            className="font-bold text-white mb-10"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)', letterSpacing: '-0.04em' }}
          >
            COMMON QUESTIONS.
          </h2>
          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {details.faq.map((item, i) => (
              <div key={i} className="py-8">
                <div
                  className="text-white font-bold text-lg mb-3"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {item.q}
                </div>
                <div className="text-muted leading-relaxed">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2
            className="font-bold text-white mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-0.04em', lineHeight: 0.95 }}
          >
            READY TO GROW<br />
            <span className="text-orange">WITH {service.name}?</span>
          </h2>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            Book a free 30-minute strategy call. No pitch — just an honest conversation about your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange text-black font-bold text-sm px-10 py-5 tracking-wider transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_rgba(0,0,0,0.4)]"
            style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
          >
            BOOK YOUR CALL →
          </Link>
        </div>
      </section>
    </main>
  )
}
