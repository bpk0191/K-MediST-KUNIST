'use client'

import { useEffect, useRef, useState } from 'react'

type ProgressBarProps = {
  label: string
  value: number
  target?: number
  unit?: string
}

export function ProgressBar({ label, value, target = 100, unit = '%' }: ProgressBarProps) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  const pct = Math.min(Math.round((value / target) * 100), 100)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          requestAnimationFrame(() => setWidth(pct))
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-semibold text-primary">{label}</span>
        <span className="text-sm font-bold text-teal">
          {value}
          {unit === '%' ? '%' : ` ${unit}`}
          {target !== 100 && unit !== '%' && (
            <span className="text-xs font-normal text-muted-foreground"> / {target}{unit}</span>
          )}
        </span>
      </div>
      <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-brand transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
