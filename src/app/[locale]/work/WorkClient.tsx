'use client'

import { useState } from 'react'
import Link from 'next/link'

const FILTERS = ['ALL', 'ADS', 'WEB', 'SEO', 'AI', 'BOT'] as const
type Filter = typeof FILTERS[number]

interface Project {
  id: number
  industry: string
  location: string
  service: string
  filter: Filter
  metric: string
  metricSub: string
  challenge: string
  resultLines: string[]
  quote: string
  bg: string
  accent: string
}

const projects: Project[] = [
  {
    id: 1,
    industry: 'Medical Clinic',
    location: 'Amman',
    service: 'META ADS',
    filter: 'ADS',
    metric: '3.2× ROAS',
    metricSub: '+240% monthly bookings',
    challenge: 'Low patient bookings, no digital presence. The clinic relied entirely on word-of-mouth with no measurable acquisition channel.',
    resultLines: ['3.2× ROAS', '+240% monthly bookings', '6-week ramp to full capacity'],
    quote: 'Hook turned our social media from a promo tool into a real growth engine.',
    bg: '#2E0A4F',
    accent: '#A855F7',
  },
  {
    id: 2,
    industry: 'Car Dealership',
    location: 'Riyadh',
    service: 'GOOGLE ADS',
    filter: 'ADS',
    metric: '4.8× ROAS',
    metricSub: 'Cost-per-lead cut 60%',
    challenge: 'High ad spend with low-quality leads from generic campaigns. Budget was burning on impressions with no intent.',
    resultLines: ['4.8× ROAS', 'Cost-per-lead cut by 60%', 'Achieved in first month'],
    quote: 'Their Google Ads strategy brought us high-intent leads, not just clicks.',
    bg: '#0C1A35',
    accent: '#3B82F6',
  },
  {
    id: 3,
    industry: 'Aesthetic Clinic',
    location: 'Dubai',
    service: 'WHATSAPP BOT',
    filter: 'BOT',
    metric: '70% LESS ADMIN',
    metricSub: 'Replies in under 3 seconds',
    challenge: 'Staff overwhelmed with booking inquiries around the clock. Manual responses were slow, inconsistent, and losing leads overnight.',
    resultLines: ['70% less admin time', 'Replies in under 3 seconds', '24/7 autonomous operation'],
    quote: 'The WhatsApp chatbot cut our booking admin by 70%. Clients get replies in seconds.',
    bg: '#022C22',
    accent: '#10B981',
  },
  {
    id: 4,
    industry: 'E-Commerce Store',
    location: 'Istanbul',
    service: 'WEB DESIGN',
    filter: 'WEB',
    metric: '2.4× CONVERSIONS',
    metricSub: 'PageSpeed score: 94',
    challenge: 'Old site had a 1.2% conversion rate and painfully slow load times. Every second of delay was costing sales.',
    resultLines: ['2.4× conversion rate', 'PageSpeed score: 94', 'Launched in 3 weeks'],
    quote: 'The site they built is beautiful, fast, and actually converts.',
    bg: '#1E1B4B',
    accent: '#818CF8',
  },
  {
    id: 5,
    industry: 'Auto Dealership',
    location: 'Jeddah',
    service: 'AI AUTOMATION',
    filter: 'AI',
    metric: 'RESPONSE: SECONDS',
    metricSub: '0 leads lost to follow-up',
    challenge: 'Leads from multiple sources were getting lost in manual follow-up. The team was responding hours later — or not at all.',
    resultLines: ['Response time: hours → seconds', '0 leads lost to follow-up', 'Fully automated pipeline'],
    quote: 'Their AI automation rewired our lead flow. Game-changer.',
    bg: '#0D2B3E',
    accent: '#22D3EE',
  },
  {
    id: 6,
    industry: 'Law Firm',
    location: 'Amman',
    service: 'SEO',
    filter: 'SEO',
    metric: '+180% ORGANIC',
    metricSub: 'Page 1 for 14 keywords',
    challenge: 'Zero organic visibility — all traffic depended on paid ads. No content strategy, no backlinks, no local SEO.',
    resultLines: ['+180% organic traffic', 'Page 1 for 14 keywords', 'Achieved in 5 months'],
    quote: 'We went from invisible to the first result on Google for our key terms.',
    bg: '#1C1400',
    accent: '#F59E0B',
  },
  {
    id: 7,
    industry: 'Restaurant',
    location: 'Amman',
    service: 'MAPS REVIEWS',
    filter: 'BOT',
    metric: '4.7★ RATING',
    metricSub: '+89 genuine reviews in 8 weeks',
    challenge: 'A 3.1-star Google average was actively killing walk-in traffic. Negative reviews dominated the first page of results.',
    resultLines: ['4.7★ average (was 3.1)', '+89 genuine reviews', '8-week turnaround'],
    quote: 'Our Google rating went from 3.1 to 4.7. The difference in foot traffic was immediate.',
    bg: '#4C0519',
    accent: '#FB7185',
  },
  {
    id: 8,
    industry: 'Wedding Hall',
    location: 'Jordan',
    service: 'SNAPCHAT ADS',
    filter: 'ADS',
    metric: '12 BOOKINGS / MONTH',
    metricSub: 'Cost per booking: 18 JOD',
    challenge: 'Needed to fill peak season bookings fast with a limited budget and tight deadline. Zero prior Snapchat presence.',
    resultLines: ['12 bookings in 30 days', 'Cost per booking: 18 JOD', 'Fully sold out for the season'],
    quote: 'We were fully booked for the season. Snapchat ads were a revelation.',
    bg: '#1A1000',
    accent: '#FDE047',
  },
]

export default function WorkClient() {
  const [active, setActive] = useState<Filter>('ALL')
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = active === 'ALL' ? projects : projects.filter((p) => p.filter === active)

  const toggle = (id: number) => setExpanded((prev) => (prev === id ? null : id))

  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="border-b border-white/10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <span
            className="text-muted text-xs tracking-widest mb-6 block"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            [ OUR WORK ]
          </span>
          <h1
            className="font-bold leading-none"
            style={{
              fontSize: 'clamp(40px, 7vw, 104px)',
              letterSpacing: '-0.05em',
              lineHeight: 0.93,
            }}
          >
            <span className="text-white block">Real campaigns.</span>
            <span className="text-white block">Real numbers.</span>
            <span className="text-orange block mt-2" style={{ fontSize: 'clamp(22px, 3.5vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              A selection of work across MENA, USA, and Turkey.
            </span>
          </h1>
        </div>
      </section>

      {/* ── Filter tabs ── */}
      <div className="border-b border-white/10 sticky top-16 md:top-20 z-30 bg-bg/95 backdrop-blur-sm">
        <div
          className="max-w-[1400px] mx-auto px-6 py-4 flex gap-2 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => { setActive(f); setExpanded(null) }}
              className={`flex-shrink-0 px-4 py-2 text-xs font-bold tracking-wider transition-all duration-150 ${
                active === f
                  ? 'bg-orange text-black'
                  : 'border border-white/20 text-muted hover:border-orange hover:text-orange'
              }`}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {f}
            </button>
          ))}
          <span
            className="flex-shrink-0 self-center text-muted text-xs ml-2"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {filtered.length} CASE {filtered.length === 1 ? 'STUDY' : 'STUDIES'}
          </span>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const isOpen = expanded === p.id
            return (
              <div
                key={p.id}
                className={`group flex flex-col border transition-all duration-200 cursor-pointer ${
                  isOpen
                    ? 'border-orange shadow-[6px_6px_0_#FF4D1F]'
                    : 'border-white/10 hover:border-orange hover:-translate-y-1 hover:shadow-[6px_6px_0_#FF4D1F]'
                }`}
                onClick={() => toggle(p.id)}
              >
                {/* ── Card header (always visible) ── */}
                <div
                  className="relative overflow-hidden p-6 flex flex-col justify-between"
                  style={{ backgroundColor: p.bg, minHeight: 160 }}
                >
                  {/* Ghost number */}
                  <span
                    className="absolute -right-1 -bottom-3 font-bold select-none pointer-events-none"
                    style={{
                      fontSize: 88,
                      lineHeight: 1,
                      color: 'transparent',
                      WebkitTextStroke: `1px ${p.accent}`,
                      opacity: 0.2,
                      fontFamily: 'Space Grotesk',
                    }}
                  >
                    {String(p.id).padStart(2, '0')}
                  </span>

                  {/* Top row: badge + expand indicator */}
                  <div className="flex items-start justify-between gap-3 z-10">
                    <span
                      className="px-2.5 py-1 text-xs font-bold tracking-wider"
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        backgroundColor: p.accent,
                        color: p.bg,
                      }}
                    >
                      {p.service}
                    </span>
                    <span
                      className="text-white/40 text-xs font-bold transition-transform duration-200"
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </span>
                  </div>

                  {/* Metric */}
                  <div className="z-10 mt-4">
                    <div
                      className="font-bold leading-none mb-1"
                      style={{
                        fontFamily: 'Space Grotesk',
                        fontSize: 'clamp(20px, 2.5vw, 28px)',
                        color: p.accent,
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {p.metric}
                    </div>
                    <div
                      className="text-white/50 text-xs"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {p.metricSub}
                    </div>
                  </div>
                </div>

                {/* ── Card body (always visible) ── */}
                <div className="px-6 py-5 bg-surface flex items-center justify-between gap-4">
                  <div>
                    <div
                      className="text-white font-bold text-sm tracking-tight"
                    >
                      {p.industry}
                    </div>
                    <div
                      className="text-muted text-xs mt-0.5"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {p.location}
                    </div>
                  </div>
                  <span
                    className="text-orange text-xs font-bold tracking-wider whitespace-nowrap flex-shrink-0 transition-all duration-200"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {isOpen ? 'COLLAPSE ↑' : 'VIEW RESULTS →'}
                  </span>
                </div>

                {/* ── Expanded case study ── */}
                {isOpen && (
                  <div
                    className="border-t border-orange/30 bg-surface px-6 py-8 flex flex-col gap-8"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* The Challenge */}
                    <div>
                      <p
                        className="text-orange text-xs font-bold tracking-widest mb-3"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        [ THE CHALLENGE ]
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {p.challenge}
                      </p>
                    </div>

                    {/* The Result */}
                    <div>
                      <p
                        className="text-orange text-xs font-bold tracking-widest mb-4"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        [ THE RESULT ]
                      </p>
                      <div className="flex flex-col gap-2">
                        {p.resultLines.map((line, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span
                              className="font-bold text-white leading-none"
                              style={{
                                fontFamily: 'Space Grotesk',
                                fontSize: i === 0 ? 28 : 20,
                                letterSpacing: '-0.03em',
                                color: i === 0 ? p.accent : '#fff',
                              }}
                            >
                              {line}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="border-l-4 pl-5" style={{ borderColor: p.accent }}>
                      <p
                        className="text-white text-sm leading-relaxed italic mb-2"
                      >
                        &ldquo;{p.quote}&rdquo;
                      </p>
                      <p
                        className="text-muted text-xs tracking-wider"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        — {p.industry}, {p.location}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block bg-orange text-black font-bold text-xs px-6 py-4 tracking-wider text-center transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_rgba(0,0,0,0.4)] w-full"
                      style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
                    >
                      START YOUR PROJECT →
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-20 border border-white/10 p-10 md:p-16 text-center">
          <p
            className="text-muted text-xs tracking-widest mb-6"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            [ READY TO JOIN THEM? ]
          </p>
          <h2
            className="font-bold text-white mb-8"
            style={{
              fontSize: 'clamp(32px, 5vw, 72px)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
            }}
          >
            YOUR BRAND<br />
            <span className="text-orange">COULD BE NEXT →</span>
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-orange text-black font-bold px-10 py-5 text-sm tracking-wider transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_rgba(0,0,0,0.5)]"
            style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
          >
            START YOUR PROJECT
          </Link>
        </div>
      </div>
    </main>
  )
}
