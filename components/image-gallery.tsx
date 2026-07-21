'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export type GalleryImage = {
  src: string
  alt: string
  caption?: string
}

export function ImageGallery({
  images,
  columns = 3,
}: {
  images: GalleryImage[]
  columns?: 2 | 3
}) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  )
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, close, next, prev])

  return (
    <>
      <div
        className={`grid gap-4 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}
      >
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-border shadow-sm transition-all hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {image.caption && (
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-4 text-left text-sm font-semibold text-primary-foreground">
                {image.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/85 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-background/10 p-2 text-background transition-colors hover:bg-background/20"
            aria-label="닫기"
          >
            <X className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 rounded-full bg-background/10 p-2 text-background transition-colors hover:bg-background/20"
            aria-label="이전"
          >
            <ChevronLeft className="size-7" />
          </button>
          <figure
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl">
              <Image
                src={images[active].src || '/placeholder.svg'}
                alt={images[active].alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            {images[active].caption && (
              <figcaption className="mt-4 text-center text-sm font-medium text-background">
                {images[active].caption}
              </figcaption>
            )}
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 rounded-full bg-background/10 p-2 text-background transition-colors hover:bg-background/20"
            aria-label="다음"
          >
            <ChevronRight className="size-7" />
          </button>
        </div>
      )}
    </>
  )
}
