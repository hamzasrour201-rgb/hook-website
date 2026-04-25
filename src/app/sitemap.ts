import { MetadataRoute } from 'next'
import { services } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.hookmarketingjo.com'

  const servicePages = services.map((s) => ({
    url: `${base}/en/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: `${base}/en`,        lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/en/work`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/en/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/en/about`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/en/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    ...servicePages,
  ]
}
