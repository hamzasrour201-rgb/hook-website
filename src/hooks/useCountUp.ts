'use client'

import { useState, useEffect, useRef } from 'react'
import type { RefObject } from 'react'

export function useCountUp(
  target: number,
  duration = 2000
): { count: number; ref: RefObject<HTMLDivElement> } {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          runCountUp()
        }
      },
      { threshold: 0.3 }
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration])

  function runCountUp() {
    const start = performance.now()
    const step = (timestamp: number) => {
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }

  return { count, ref }
}
