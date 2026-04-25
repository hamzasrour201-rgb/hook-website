interface MarqueeProps {
  text: string
  reverse?: boolean
  className?: string
  trackClassName?: string
}

export default function Marquee({
  text,
  reverse = false,
  className = '',
  trackClassName = '',
}: MarqueeProps) {
  // Repeat text enough times to fill double-width
  const repeated = Array(8).fill(text).join('')

  return (
    <div className={`marquee-outer overflow-hidden ${className}`}>
      <div
        className={`marquee-track flex whitespace-nowrap ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } ${trackClassName}`}
        aria-hidden="true"
      >
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </div>
  )
}
