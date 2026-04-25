'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

function OrangeSweep() {
  const pathname = usePathname()
  const prevPath = useRef(pathname)
  const [phase, setPhase] = useState<'idle' | 'in' | 'out'>('idle')

  useEffect(() => {
    if (prevPath.current === pathname) return
    prevPath.current = pathname
    setPhase('in')
    const t1 = setTimeout(() => setPhase('out'), 340)
    const t2 = setTimeout(() => setPhase('idle'), 700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [pathname])

  if (phase === 'idle') return null

  return (
    <motion.div
      key={phase}
      className="fixed inset-0 z-[9997] bg-orange pointer-events-none"
      initial={{ scaleX: phase === 'in' ? 0 : 1 }}
      animate={{ scaleX: phase === 'in' ? 1 : 0 }}
      transition={{ duration: 0.34, ease: [0.76, 0, 0.24, 1] }}
      style={{ transformOrigin: phase === 'in' ? 'left' : 'right' }}
    />
  )
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <OrangeSweep />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
