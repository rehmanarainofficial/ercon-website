import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { SafeImage } from '../ui/SafeImage'

export function ProductGallery({ gallery = [], productName }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!gallery.length) return null

  const active = gallery[activeIndex]
  const hasMultiple = gallery.length > 1

  const goTo = (direction) => {
    setActiveIndex((current) => (current + direction + gallery.length) % gallery.length)
  }

  return (
    <section className="bg-white section-space">
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Product gallery</p>
            <h2 className="mt-5 text-compact-display font-bold text-ink">{productName} visuals</h2>
          </div>
          <div className="rounded-[var(--radius-large)] border border-line bg-surface-soft p-4 shadow-card">
            <div className="overflow-hidden rounded-[var(--radius-card)] bg-white">
              <SafeImage
                alt={active.alt}
                className="aspect-[16/10] w-full object-contain p-6"
                height="900"
                loading="lazy"
                src={active.src}
                width="1440"
              />
            </div>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-muted">{active.caption}</p>
              {hasMultiple ? (
                <div className="flex gap-2">
                  <button
                    aria-label="Previous product image"
                    className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-brand transition hover:border-brand"
                    onClick={() => goTo(-1)}
                    type="button"
                  >
                    <ChevronLeft aria-hidden="true" size={18} />
                  </button>
                  <button
                    aria-label="Next product image"
                    className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-brand transition hover:border-brand"
                    onClick={() => goTo(1)}
                    type="button"
                  >
                    <ChevronRight aria-hidden="true" size={18} />
                  </button>
                </div>
              ) : null}
            </div>
            {hasMultiple ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {gallery.map((item, index) => (
                  <button
                    aria-label={`Show ${item.caption}`}
                    aria-pressed={index === activeIndex}
                    className={`overflow-hidden rounded-2xl border p-2 transition ${
                      index === activeIndex ? 'border-brand bg-surface-blue' : 'border-line bg-white'
                    }`}
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  >
                    <SafeImage alt="" className="aspect-[4/3] w-full object-contain" src={item.src} />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
