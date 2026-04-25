import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import WorkClient from './WorkClient'

export const metadata: Metadata = {
  title: 'Our Work — Hook Marketing',
  description: 'Case studies and portfolio work from Hook Marketing — Jordan-based digital marketing agency.',
}

export default function WorkPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <WorkClient />
}
