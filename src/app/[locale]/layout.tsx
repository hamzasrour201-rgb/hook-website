import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { locales, type Locale } from '@/i18n'
import '../globals.css'
import LenisProvider from '@/components/LenisProvider'
import IntroLoader from '@/components/IntroLoader'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import CustomCursor from '@/components/CustomCursor'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hookmarketingjo.com'),
  title: {
    default: 'Hook Marketing — We Build Results. Not Just Websites.',
    template: '%s | Hook Marketing',
  },
  description:
    'A Jordan-based digital marketing & AI automation agency. Meta Ads, Google Ads, SEO, WhatsApp Bots, AI Automation. Serving MENA, USA, and Turkey.',
  keywords: [
    'digital marketing agency Jordan',
    'Meta Ads Amman',
    'Google Ads Jordan',
    'AI automation agency',
    'SEO Jordan',
    'WhatsApp chatbot',
    'Hook Marketing',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hookmarketingjo.com',
    siteName: 'Hook Marketing',
    title: 'Hook Marketing — We Build Results. Not Just Websites.',
    description: 'A Jordan-based growth studio. Ads, SEO, AI, Conversion — the whole stack, shipped faster.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Hook Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hook Marketing — We Build Results. Not Just Websites.',
    description: 'A Jordan-based growth studio. Ads, SEO, AI, Conversion — the whole stack, shipped faster.',
  },
  robots: { index: true, follow: true },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  if (!locales.includes(locale as Locale)) notFound()

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Hook Marketing',
              image: 'https://www.hookmarketingjo.com/og-image.png',
              '@id': 'https://www.hookmarketingjo.com',
              url: 'https://www.hookmarketingjo.com',
              telephone: '+962782436291',
              address: { '@type': 'PostalAddress', addressLocality: 'Amman', addressCountry: 'JO' },
              sameAs: ['https://wa.me/9620782436291'],
              openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Sunday'], opens: '09:00', closes: '18:00' },
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>
            <CustomCursor />
            <WhatsAppButton />
            <IntroLoader />
            <Nav />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
