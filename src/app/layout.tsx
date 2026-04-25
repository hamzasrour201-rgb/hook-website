// Root layout required by Next.js App Router.
// Actual layout (html/body/providers) is in [locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement
}
