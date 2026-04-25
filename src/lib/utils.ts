export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export function padNum(n: number, width = 2) {
  return String(n).padStart(width, '0')
}
