'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('work'),     href: '/work' },
    { label: t('services'), href: '/services' },
    { label: t('process'),  href: '/#process' },
    { label: t('contact'),  href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-bg/95 backdrop-blur-sm border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            ref={logoRef}
            className="w-10 h-10 bg-orange flex items-center justify-center transition-transform duration-300 group-hover:rotate-0 flex-shrink-0"
            style={{ transform: 'rotate(-8deg)' }}
          >
            <span className="text-black font-bold text-lg leading-none select-none">H</span>
          </div>
          <span className="font-bold leading-none" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
            <span className="text-white text-base tracking-wide">HOOK</span>
            <span className="text-orange text-sm tracking-wide ml-1">Marketing</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '0.12em' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="bg-orange text-black text-xs font-bold px-5 py-2.5 tracking-wider transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
            style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
          >
            {t('cta')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-bg/98 backdrop-blur-sm">
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-xl font-bold tracking-wider hover:text-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-orange text-black text-sm font-bold px-6 py-3 tracking-wider text-center mt-2"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {t('cta')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
