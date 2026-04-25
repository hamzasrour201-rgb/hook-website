'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig, footer } from '@/content/site'

function GiantCTA() {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href="/contact"
      className="block border-t border-white/10 py-10 md:py-16 overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'default' }}
    >
      <svg
        viewBox="0 0 1400 160"
        width="100%"
        height="auto"
        className="block overflow-visible"
        aria-hidden
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Stroke layer — always visible */}
        <text
          x="700"
          y="140"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
          fontSize="172"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          style={{ letterSpacing: '-0.04em' }}
        >
          {"LET'S TALK"}
        </text>
        {/* Fill layer — clip-path reveal on hover */}
        <text
          x="700"
          y="140"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
          fontSize="172"
          fill="#FF4D1F"
          style={{
            letterSpacing: '-0.04em',
            clipPath: hovered ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
            transition: 'clip-path 0.55s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        >
          {"LET'S TALK"}
        </text>
      </svg>
      <div className="text-center mt-3">
        <span
          className="text-muted group-hover:text-orange text-xs tracking-widest transition-colors duration-300"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          GET IN TOUCH →
        </span>
      </div>
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange flex items-center justify-center flex-shrink-0" style={{ transform: 'rotate(-8deg)' }}>
                <span className="text-black font-bold text-lg">H</span>
              </div>
              <span className="font-bold leading-none" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                <span className="text-white text-base tracking-wide">HOOK</span>
                <span className="text-orange text-sm tracking-wide ml-1">Marketing</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">{footer.brand}</p>
            <div className="flex flex-col gap-2">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-orange text-xs font-mono tracking-wider hover:underline">
                WhatsApp →
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-muted text-xs font-mono hover:text-white transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest mb-6 uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Services</h3>
            <ul className="flex flex-col gap-3">
              {footer.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-muted text-sm hover:text-white transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest mb-6 uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Agency</h3>
            <ul className="flex flex-col gap-3">
              {footer.agency.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted text-sm hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest mb-6 uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`mailto:${footer.contact.email}`} className="text-muted text-sm hover:text-white transition-colors break-all">
                  {footer.contact.email}
                </a>
              </li>
              {footer.contact.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-muted text-sm hover:text-white transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={footer.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-orange text-sm hover:underline">
                  WhatsApp
                </a>
              </li>
              <li className="text-muted text-sm">{footer.contact.address}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant LET'S TALK */}
      <div className="max-w-[1400px] mx-auto px-6">
        <GiantCTA />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-muted text-xs tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            © {new Date().getFullYear()} HOOK MARKETING · ALL RIGHTS RESERVED
          </span>
          <span className="text-muted text-xs tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            AMMAN · JORDAN
          </span>
        </div>
      </div>
    </footer>
  )
}
