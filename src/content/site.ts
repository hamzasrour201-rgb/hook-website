// Central content config — edit ALL copy here. Never touch component files for text changes.

export const siteConfig = {
  name: 'HOOK MARKETING',
  wordmark: 'HOOK/MKT',
  tagline: 'We build results. Not just websites.',
  established: 2020,
  location: 'Amman, Jordan',
  email: 'info@hookmarketingjo.com',
  phones: ['+962 78 243 6291', '+962 79 159 0272'],
  whatsapp: 'https://wa.me/9620782436291',
  markets: ['Jordan', 'Saudi Arabia', 'Gulf (GCC)', 'USA', 'Turkey'],
}

export const hero = {
  badge: 'BOOKING Q2 · 2026',
  headline: ['WE', '/', 'BUILD', '/', 'RESULTS.', 'NOT JUST', 'WEBSITES.'],
  subhead:
    'A Jordan-based growth studio for brands that want more than pretty pixels. Ads. SEO. AI. Conversion. The whole stack — shipped faster.',
  cta1: 'START A PROJECT →',
  cta2: 'SEE CASE STUDIES',
  stickers: ['+150 CLIENTS', '5 COUNTRIES', '★ 4.9 RATED', '24/7 AI'],
  kpiCard: {
    label: 'CAMPAIGN 001',
    status: 'LIVE',
    value: '4.8×',
    change: '↑ 32%',
    footer: 'ROAS · LAST 30 DAYS',
  },
}

export const marqueeText =
  'ADS THAT CONVERT ★ AI THAT WORKS ★ SITES THAT SELL ★ GROWTH THAT LASTS ★ '

export const stats = [
  { value: 150, suffix: '+', label: 'Active Clients' },
  { value: 12, suffix: 'M', label: 'JOD Managed' },
  { value: 98, suffix: '%', label: 'Retention Rate' },
  { value: 5, suffix: '', label: 'Countries Served' },
]

export const services = [
  {
    slug: 'meta-ads',
    number: '01',
    name: 'META ADS',
    description: 'Facebook & Instagram campaigns from awareness to sales.',
    icon: '◈',
    details: {
      hero: 'Turn social media into your highest-ROI channel.',
      problem:
        'Most businesses waste budget on broad targeting, generic creatives, and no conversion tracking.',
      solution:
        'We build laser-targeted Meta funnels — from awareness reels to retargeted conversion ads — with pixel-perfect tracking and weekly optimisation.',
      deliverables: [
        'Full pixel & Conversions API setup',
        'Audience research & segmentation',
        'Creative strategy + ad production',
        'A/B testing framework',
        'Weekly performance reports',
        'Monthly strategy review',
      ],
      faq: [
        {
          q: 'What budget do I need to get started?',
          a: 'We recommend a minimum ad spend of $500/month to gather enough data for optimisation. Our management fee is separate.',
        },
        {
          q: 'How long before I see results?',
          a: 'Most clients see meaningful data within 2 weeks and clear ROI within 60 days.',
        },
      ],
    },
  },
  {
    slug: 'google-ads',
    number: '02',
    name: 'GOOGLE ADS',
    description: 'Search, Shopping, YouTube, Maps, Display — all of it.',
    icon: '◉',
    details: {
      hero: 'Own every touchpoint in the Google ecosystem.',
      problem:
        'Google Ads without strategy bleeds budget on irrelevant clicks and wrong match types.',
      solution:
        'We architect full-funnel Google campaigns across Search, Shopping, Display, YouTube, and Maps — with tight negative lists, Quality Score focus, and conversion-based bidding.',
      deliverables: [
        'Account audit & restructure',
        'Keyword strategy & match-type architecture',
        'Shopping feed optimisation',
        'YouTube video ad scripts + setup',
        'Conversion tracking with Google Tag Manager',
        'Monthly PMax & Smart campaigns review',
      ],
      faq: [
        {
          q: 'Can you manage both Meta and Google?',
          a: 'Yes — we often run them together for full-funnel coverage, with shared reporting.',
        },
        {
          q: 'Do you work with e-commerce stores?',
          a: 'Absolutely. Shopping campaigns and Performance Max are a core specialty.',
        },
      ],
    },
  },
  {
    slug: 'snapchat-ads',
    number: '03',
    name: 'SNAPCHAT',
    description: 'AR lenses, geo filters, Gen Z–native creative.',
    icon: '◌',
    details: {
      hero: "Reach the Gulf's most valuable young audience where they live.",
      problem:
        'Snapchat ads fail when brands apply Facebook-style creative to a platform that demands authenticity.',
      solution:
        "We produce native Snap content — AR lenses, vertical story ads, geo-filters — designed for the GCC market where Snapchat penetration is among the world's highest.",
      deliverables: [
        'Snap Pixel setup',
        'AR lens concept & development',
        'Story ad creative production',
        'Geo-filter design',
        'Audience targeting & optimisation',
        'GCC-specific campaign strategy',
      ],
      faq: [
        {
          q: 'Is Snapchat right for my brand?',
          a: 'If you target 18–34 year olds in Saudi Arabia, UAE, or Kuwait — yes, absolutely.',
        },
      ],
    },
  },
  {
    slug: 'tiktok-ads',
    number: '04',
    name: 'TIKTOK ADS',
    description: 'Short-form storytelling that stops the scroll.',
    icon: '◍',
    details: {
      hero: 'The algorithm is your media budget. We know how to use it.',
      problem: 'TikTok punishes ads that look like ads. Most brands fail because they repurpose existing content.',
      solution:
        'We script, shoot, and edit native TikTok-first creatives that blend into the For You Page — then amplify with Spark Ads and TopView for maximum reach.',
      deliverables: [
        'TikTok Pixel + Events API setup',
        'UGC-style creative production',
        'Spark Ads amplification',
        'Hashtag challenge strategy',
        'Creator partnership management',
        'Weekly creative iteration',
      ],
      faq: [
        {
          q: 'Do you create the video content?',
          a: 'Yes. We handle scripting, production direction, and editing. You provide brand assets.',
        },
      ],
    },
  },
  {
    slug: 'ai-automation',
    number: '05',
    name: 'AI AUTOMATION',
    description: 'Agents & workflows that run your business at night.',
    icon: '⬡',
    details: {
      hero: 'Your business should work while you sleep.',
      problem:
        'Repetitive tasks, slow responses, and manual processes cost you hours and clients every single week.',
      solution:
        'We build custom AI agents and no-code/low-code automation workflows using n8n, Make.com, and custom LLM integrations — automating lead handling, follow-ups, reporting, and more.',
      deliverables: [
        'Process audit & automation mapping',
        'n8n / Make.com workflow builds',
        'AI chatbot & agent development',
        'CRM integrations (HubSpot, Zoho, Pipedrive)',
        'WhatsApp & email automation sequences',
        'Maintenance & iteration support',
      ],
      faq: [
        {
          q: 'What can AI automation actually replace?',
          a: 'Lead qualification, appointment booking, follow-up sequences, social media posting, reporting, customer support triage — and more.',
        },
        {
          q: 'Do I need technical knowledge to use the automations?',
          a: 'No. We build and document everything so your team can manage it without coding skills.',
        },
      ],
    },
  },
  {
    slug: 'web-design',
    number: '06',
    name: 'WEB DESIGN',
    description: 'Custom-coded sites that look premium and convert.',
    icon: '◪',
    details: {
      hero: 'Your website is your best salesperson. Make it earn its keep.',
      problem:
        "Template sites look cheap, load slow, and don't convert. Your brand deserves better.",
      solution:
        'We design and develop custom websites using Next.js, with performance-first code, conversion-optimised UX, and animations that impress without sacrificing speed.',
      deliverables: [
        'UX research & wireframes',
        'Custom UI design (Figma)',
        'Next.js / React development',
        'CMS integration (if needed)',
        'Performance optimisation (Core Web Vitals)',
        'Launch + 3-month support',
      ],
      faq: [
        {
          q: 'How long does a website take?',
          a: 'Typically 4–8 weeks from brief to launch, depending on complexity.',
        },
        {
          q: 'Do you build e-commerce?',
          a: 'Yes — Shopify, WooCommerce, and custom checkout solutions.',
        },
      ],
    },
  },
  {
    slug: 'seo',
    number: '07',
    name: 'SEO',
    description: 'Content, backlinks, schema, technical depth.',
    icon: '◈',
    details: {
      hero: 'Rank for terms that matter. Stay there.',
      problem:
        'SEO done wrong is just blogging. Without technical foundation and authority building, content goes nowhere.',
      solution:
        'We execute full-stack SEO: technical audits and fixes, content strategy aligned to search intent, white-hat link building, and schema markup — with monthly reporting you can actually understand.',
      deliverables: [
        'Technical SEO audit & remediation',
        'Keyword research & content calendar',
        'On-page optimisation',
        'Schema markup implementation',
        'Backlink acquisition (white-hat)',
        'Monthly ranking & traffic report',
      ],
      faq: [
        {
          q: 'How long does SEO take?',
          a: 'Meaningful movement in 3 months; strong ROI typically evident at 6 months.',
        },
        {
          q: 'Do you write the content?',
          a: 'Yes — our content team writes SEO-optimised articles, service pages, and landing pages.',
        },
      ],
    },
  },
  {
    slug: 'whatsapp-bot',
    number: '08',
    name: 'WHATSAPP BOT',
    description: 'Smart 24/7 auto-reply that captures & qualifies leads.',
    icon: '◎',
    details: {
      hero: 'Never miss a lead because you were busy.',
      problem:
        "WhatsApp is MENA's #1 business channel, yet most companies still reply manually — hours later.",
      solution:
        'We build intelligent WhatsApp chatbots using the official Business API + AI — answering questions, capturing lead data, booking appointments, and escalating hot leads to your team.',
      deliverables: [
        'WhatsApp Business API setup',
        'Conversation flow design',
        'AI-powered intent recognition',
        'Lead capture & CRM integration',
        'Appointment booking integration',
        'Analytics dashboard',
      ],
      faq: [
        {
          q: 'Is it the official WhatsApp API?',
          a: 'Yes, always. We never use unofficial tools that risk your number getting banned.',
        },
        {
          q: 'Can it handle Arabic conversations?',
          a: 'Yes — our bots are fully bilingual (Arabic + English) with RTL formatting.',
        },
      ],
    },
  },
  {
    slug: 'google-maps-reviews',
    number: '09',
    name: 'MAPS REVIEWS',
    description: '100% genuine reviews with a lifetime guarantee.',
    icon: '◯',
    details: {
      hero: 'Your Google rating is your first impression. Own it.',
      problem:
        "Businesses lose customers daily to competitors with more reviews — even when the service is inferior.",
      solution:
        'We ethically grow your Google Maps review count using our verified network of real reviewers. All reviews are genuine, geo-diverse, and come with a lifetime guarantee.',
      deliverables: [
        'Google Business Profile audit & optimisation',
        'Review strategy & phasing plan',
        'Genuine review acquisition',
        'Lifetime replacement guarantee',
        'Competitor review analysis',
        'Ongoing reputation monitoring',
      ],
      faq: [
        {
          q: 'Are these real reviews?',
          a: 'Yes. We use a network of real accounts with genuine profiles. No bots, no fake accounts.',
        },
        {
          q: 'What is the lifetime guarantee?',
          a: "If any review we deliver is removed by Google, we replace it at no cost — forever.",
        },
      ],
    },
  },
]

export const process = [
  {
    step: '01',
    title: 'DISCOVER',
    description:
      'We audit your brand, market, and metrics. No assumptions — only evidence.',
  },
  {
    step: '02',
    title: 'STRATEGIZE',
    description:
      'A custom growth plan aligned with your budget, audience, and goals.',
  },
  {
    step: '03',
    title: 'EXECUTE',
    description:
      'Ads live. Site shipped. Bots deployed. Fast, clean, measurable.',
  },
  {
    step: '04',
    title: 'OPTIMIZE',
    description:
      'Weekly reports, monthly reviews, continuous improvement. Forever.',
  },
]

export const testimonials = [
  {
    quote:
      'Hook turned our social media from a promo tool into a real growth engine. Our ROAS jumped 4.8× in the first quarter.',
    name: 'Mohammad A.',
    role: 'BOUTIQUE OWNER',
    location: 'AMMAN',
    initials: 'MA',
  },
  {
    quote:
      'Their Google Ads strategy brought us high-intent leads, not just clicks. Sales pipeline quality is finally where it should be.',
    name: 'Sarah K.',
    role: 'B2B CONSULTANCY',
    location: 'RIYADH',
    initials: 'SK',
  },
  {
    quote:
      'The WhatsApp chatbot cut our booking admin by 70%. Clients get replies in seconds, even at 2 AM.',
    name: 'Dr. Hala',
    role: 'AESTHETIC CLINIC',
    location: 'DUBAI',
    initials: 'DH',
  },
  {
    quote:
      'The site they built is beautiful, fast, and actually converts. Our conversion rate doubled post-launch.',
    name: 'Yusuf T.',
    role: 'E-COMMERCE',
    location: 'ISTANBUL',
    initials: 'YT',
  },
  {
    quote:
      'Their AI automation rewired our lead flow. Response times went from hours to seconds. Game-changer.',
    name: 'Noor A.',
    role: 'AUTO DEALERSHIP',
    location: 'JEDDAH',
    initials: 'NA',
  },
]

export const clients = [
  'northwind',
  'Atlas/Co',
  'LUMEN*',
  'Vertex',
  'orbital',
  'HELIX',
  'Meridian',
  'Parallax',
  'Kepler&Co',
]

export const cta = {
  headline: ['LET\'S BUILD', 'SOMETHING LOUD.'],
  subtext:
    'Free 30-minute strategy call. No pitch, just ideas. If we\'re a fit, we\'ll talk about what\'s next.',
  button: 'BOOK YOUR CALL →',
}

export const footer = {
  brand:
    'A Jordan-based growth studio serving brands across MENA, the US, and Turkey. Est. 2020.',
  services: services.map((s) => ({ name: s.name, slug: s.slug })),
  agency: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Process', href: '/#process' },
  ],
  contact: {
    email: 'info@hookmarketingjo.com',
    phones: ['+962 78 243 6291', '+962 79 159 0272'],
    whatsapp: 'https://wa.me/9620782436291',
    address: 'Amman, Jordan',
  },
}
