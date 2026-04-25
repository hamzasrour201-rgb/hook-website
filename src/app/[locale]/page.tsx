import { setRequestLocale } from 'next-intl/server'
import Hero from '@/sections/Hero'
import Marquee from '@/components/Marquee'
import Stats from '@/sections/Stats'
import Services from '@/sections/Services'
import Process from '@/sections/Process'
import Testimonials from '@/sections/Testimonials'
import ClientLogos from '@/sections/ClientLogos'
import CTABanner from '@/sections/CTABanner'
import { marqueeText } from '@/content/site'

interface Props {
  params: { locale: string }
}

export default function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale)

  return (
    <main>
      <Hero />
      {/* Marquee strip — orange bg */}
      <Marquee
        text={marqueeText}
        className="bg-orange py-4 border-y border-orange"
        trackClassName="text-black font-bold font-mono tracking-widest text-sm"
      />
      <Stats />
      <Services />
      <Process />
      <Testimonials />
      <ClientLogos />
      <CTABanner />
    </main>
  )
}
