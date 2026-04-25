import { getRequestConfig } from 'next-intl/server'
import type { AbstractIntlMessages } from 'next-intl'

export const locales = ['en'] as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async () => {
  return {
    locale: 'en',
    messages: (await import('../messages/en.json')).default as unknown as AbstractIntlMessages,
  }
})
