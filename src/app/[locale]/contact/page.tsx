'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { siteConfig, services } from '@/content/site'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Please tell us a bit more'),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const t = useTranslations('contact')
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitError(false)
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone ?? '',
        service: data.service ?? '',
        message: data.message,
        timestamp: new Date().toISOString(),
      }

      // TODO: replace GOOGLE_SCRIPT_URL with your actual Apps Script deployment URL
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
      if (scriptUrl && scriptUrl !== 'YOUR_URL_HERE') {
        // mode: 'no-cors' required — Google Apps Script doesn't send CORS headers
        // Response will be opaque; assume success if no exception is thrown
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } else {
        // Dev fallback: simulate network latency
        await new Promise((r) => setTimeout(r, 800))
      }

      setSubmitted(true)
    } catch {
      setSubmitError(true)
    }
  }

  return (
    <main className="pt-24">
      <section className="border-b border-white/10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — copy */}
            <div>
              <span
                className="text-muted text-xs tracking-widest mb-6 block"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                [ CONTACT ]
              </span>
              <h1
                className="font-bold text-white mb-6"
                style={{
                  fontSize: 'clamp(44px, 7vw, 96px)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.05em',
                }}
              >
                {t('heading')}<br />
                <span className="text-orange">FOR REAL.</span>
              </h1>
              <p className="text-muted text-base md:text-lg mb-10 leading-relaxed">
                {t('subheading')}
              </p>

              {/* Quick actions */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-muted text-xs tracking-wider uppercase"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {t('orText')}
                </p>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-white hover:border-orange hover:text-orange transition-all duration-200 text-sm font-bold tracking-wider w-fit"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  <span>💬</span>
                  {t('whatsapp')}
                </a>

                <div className="flex flex-col gap-2 mt-2">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-muted hover:text-white transition-colors text-sm"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      📞 {phone}
                    </a>
                  ))}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-muted hover:text-white transition-colors text-sm"
                  >
                    ✉️ {siteConfig.email}
                  </a>
                  <span className="text-muted text-sm">📍 Amman, Jordan</span>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="border-2 border-orange p-10 md:p-14">
                  <div
                    className="text-orange font-bold mb-4"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 11,
                      letterSpacing: '0.15em',
                    }}
                  >
                    [ STATUS: RECEIVED ]
                  </div>
                  <h2
                    className="text-white font-bold mb-4 leading-tight"
                    style={{
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    MESSAGE RECEIVED.
                    <br />
                    <span className="text-orange">WE&apos;LL BE IN TOUCH WITHIN 24 HOURS.</span>
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">
                    Our team will review your message and reach out via email or WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <input
                      {...register('name')}
                      placeholder={t('name')}
                      className="w-full bg-surface border border-white/10 px-5 py-4 text-white placeholder-muted text-sm focus:outline-none focus:border-orange transition-colors"
                    />
                    {errors.name && (
                      <p className="text-orange text-xs mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder={t('email')}
                      className="w-full bg-surface border border-white/10 px-5 py-4 text-white placeholder-muted text-sm focus:outline-none focus:border-orange transition-colors"
                    />
                    {errors.email && (
                      <p className="text-orange text-xs mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <input
                    {...register('phone')}
                    placeholder={t('phone')}
                    className="w-full bg-surface border border-white/10 px-5 py-4 text-white placeholder-muted text-sm focus:outline-none focus:border-orange transition-colors"
                  />

                  {/* Service select */}
                  <select
                    {...register('service')}
                    className="w-full bg-surface border border-white/10 px-5 py-4 text-muted text-sm focus:outline-none focus:border-orange transition-colors appearance-none"
                  >
                    <option value="">{t('service')}</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                  </select>

                  {/* Message */}
                  <div>
                    <textarea
                      {...register('message')}
                      placeholder={t('message')}
                      rows={5}
                      className="w-full bg-surface border border-white/10 px-5 py-4 text-white placeholder-muted text-sm focus:outline-none focus:border-orange transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-orange text-xs mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit error */}
                  {submitError && (
                    <div
                      className="border border-red-500 px-5 py-4 text-red-400 text-xs font-bold tracking-wider"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      SOMETHING WENT WRONG. CALL US DIRECTLY: +962 78 243 6291
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-orange text-black font-bold text-sm px-8 py-5 tracking-wider text-left transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_rgba(0,0,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
                  >
                    {isSubmitting ? 'SENDING...' : t('submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
