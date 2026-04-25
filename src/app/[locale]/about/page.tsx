import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'About — Hook Marketing',
  description:
    'Hook Marketing was founded in 2020 by Hamza. A Jordan-based digital growth studio serving brands across MENA, USA, and Turkey.',
}

export default async function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = await getTranslations('about')

  const values = [
    {
      title: 'EVIDENCE FIRST',
      desc: "Every decision is backed by data. We don't guess — we test, measure, and iterate.",
    },
    {
      title: 'SPEED MATTERS',
      desc: "The market doesn't wait. Neither do we. Fast execution with zero compromise on quality.",
    },
    {
      title: 'NO BS',
      desc: "Clear communication, honest reporting, and no vanity metrics. You know exactly where you stand.",
    },
    {
      title: 'YOUR GROWTH IS OURS',
      desc: "We succeed when you succeed. That's why 98% of our clients stay after year one.",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <span
            className="text-muted text-xs tracking-widest mb-6 block"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            [ ABOUT ]
          </span>
          <h1
            className="font-bold text-white mb-8"
            style={{
              fontSize: 'clamp(52px, 8vw, 112px)',
              lineHeight: 0.92,
              letterSpacing: '-0.05em',
            }}
          >
            {t('heading1')}
            <br />
            <span className="text-orange">{t('heading2')}</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-3xl leading-relaxed">
            {t('story')}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-white/10 py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="text-muted text-xs tracking-widest mb-4 block"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                [ MISSION ]
              </span>
              <h2
                className="font-bold text-white mb-6"
                style={{
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                }}
              >
                WHAT DRIVES US.
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                {t('mission')}
              </p>
            </div>

            {/* Founder card */}
            {/* TODO: replace avatar with real founder photo from /public/images/team/hamza.webp */}
            <div className="border border-white/10 p-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange to-yellow flex items-center justify-center text-black font-bold text-xl mb-6">
                H
              </div>
              <div className="text-white font-bold text-xl mb-1">Hamza</div>
              <div
                className="text-muted text-xs tracking-wider mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                FOUNDER · HOOK MARKETING
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Started Hook Marketing in 2020 with a laptop, a vision, and a refusal to accept
                mediocre marketing results. Today we manage millions in ad spend and serve clients
                across 5 countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <span
            className="text-muted text-xs tracking-widest mb-6 block"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            [ VALUES ]
          </span>
          <h2
            className="font-bold text-white mb-12"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
            }}
          >
            {t('values.heading')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/10">
            {values.map((v, i) => (
              <div
                key={i}
                className="border-b border-r border-white/10 p-8 md:p-10 group hover:bg-orange hover:border-orange transition-all duration-200 cursor-default"
              >
                <div
                  className="text-orange group-hover:text-black text-xs font-bold tracking-widest mb-4 transition-colors"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  [ 0{i + 1} ]
                </div>
                <h3 className="text-white group-hover:text-black font-bold text-xl mb-3 transition-colors tracking-tight">
                  {v.title}
                </h3>
                <p className="text-muted group-hover:text-black/70 text-sm leading-relaxed transition-colors">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <span
            className="text-muted text-xs tracking-widest mb-6 block"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            [ MARKETS ]
          </span>
          <h2
            className="font-bold text-white mb-10"
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            WHERE WE OPERATE.
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              'JORDAN',
              'SAUDI ARABIA',
              'UAE',
              'KUWAIT',
              'BAHRAIN',
              'QATAR',
              'OMAN',
              'USA',
              'TURKEY',
            ].map((market) => (
              <div
                key={market}
                className="border border-white/20 px-5 py-3 text-xs font-bold tracking-widest text-muted hover:border-orange hover:text-orange transition-colors"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {market}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
