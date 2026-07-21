'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FaqItem } from '@/lib/data'

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-primary">{item.q}</span>
              <ChevronDown
                className={cn(
                  'size-5 shrink-0 text-teal transition-transform duration-300',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
