import { useRef } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function ProductOverview({ product }) {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main grid gap-10 lg:grid-cols-[0.34fr_1fr]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand" data-reveal>
          Product overview
        </p>
        <div>
          <h2 className="text-compact-display max-w-5xl font-bold text-ink" data-reveal>
            {product.name} in the ERCON product range.
          </h2>
          <p className="mt-7 max-w-4xl text-body-fluid leading-8 text-muted" data-reveal>
            {product.overview}
          </p>
        </div>
      </div>
    </section>
  )
}
