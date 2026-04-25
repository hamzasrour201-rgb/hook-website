# Hook Marketing Website

A world-class, brutalist-design marketing agency website built with Next.js 14, TypeScript, Tailwind CSS, GSAP, Framer Motion, and Lenis.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the full site.

---

## Project Structure

```
src/
  app/
    [locale]/       # All pages (locale-aware routing)
      layout.tsx    # Root layout with Nav, Footer, Lenis, IntroLoader
      page.tsx      # Home page
      about/        # About page
      services/     # Services listing + [slug] detail pages
      work/         # Portfolio
      contact/      # Contact form
  components/       # Reusable UI components
  sections/         # Full-width page sections (Hero, Stats, etc.)
  content/
    site.ts         # ← EDIT ALL COPY HERE
  hooks/            # useCountUp, etc.
  lib/              # Utilities
  middleware.ts     # next-intl locale routing
  i18n.ts           # next-intl config
messages/
  en.json           # English translations
  ar.json           # Arabic translations
public/
  images/           # Asset placeholders — swap here
```

---

## How to Edit Content

**All copy, services, stats, and testimonials live in one file:**

```
src/content/site.ts
```

Open that file and change:
- `siteConfig` — company name, email, phones, WhatsApp link
- `hero` — hero badge, headline, subhead, CTA labels
- `stats` — the 4 stat numbers and labels
- `services` — all 9 service cards + detail page content (deliverables, FAQ)
- `process` — the 4 process step descriptions
- `testimonials` — quotes, names, roles, locations
- `clients` — placeholder client names (replace with real names when logos arrive)
- `cta` — CTA banner copy
- `footer` — footer brand text and links

For translated text (EN/AR), edit `messages/en.json` and `messages/ar.json`.

---

## How to Swap Placeholder Assets

| Asset | Location | Notes |
|-------|----------|-------|
| Agency logo | `/public/images/logo.svg` | Replace the CSS "H" square in Nav.tsx |
| Client logos | `/public/images/clients/*.svg` | Update `ClientLogos.tsx` to use `<Image>` |
| Portfolio images | `/public/images/work/*.webp` | Replace Unsplash URLs in `work/page.tsx` |
| Team photos | `/public/images/team/*.webp` | Swap the gradient initials in `about/page.tsx` |
| Hero showreel | `/public/videos/showreel.mp4` | Add `<video>` element to `Hero.tsx` right column |

Search the codebase for `// TODO: replace` to find all placeholder locations.

---

## How to Change the Primary Accent Color

The orange `#FF4D1F` is defined in **two places** — update both:

1. **`tailwind.config.ts`** → `theme.extend.colors.orange`
2. **`src/app/globals.css`** → `:root { --orange: #FF4D1F; }`

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → Import your repo
3. Framework: **Next.js** (auto-detected)
4. Click Deploy — no environment variables needed for the base site

For the contact form, add your email API key (e.g., `RESEND_API_KEY`) as an environment variable in Vercel settings and wire it up in `src/app/api/contact/route.ts`.

---

## Adding More Languages

1. Create `messages/[locale].json` (copy `en.json` as template)
2. Add the locale to `src/i18n.ts` → `locales` array
3. The nav language toggle will pick it up automatically

---

## Performance Notes

- Fonts are loaded from Google Fonts CDN with `display=swap`
- All below-fold animations are scroll-triggered (lazy)
- Images should use `next/image` with `loading="lazy"` for below-fold assets
- The intro loader only runs once per browser session (sessionStorage flag)
- `prefers-reduced-motion` is respected — all animations are disabled for users who prefer it

---

## Tech Stack

| Library | Purpose |
|---------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| GSAP + ScrollTrigger | Scroll-driven animations |
| Framer Motion | Page transitions |
| Lenis | Smooth scrolling |
| next-intl | EN/AR i18n + RTL |
| React Hook Form + Zod | Contact form validation |
| lucide-react | Icons |
