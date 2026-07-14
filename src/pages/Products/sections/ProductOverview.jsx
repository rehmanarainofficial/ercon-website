import { useRef } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function ProductOverview({ product }) {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main grid gap-10 lg:grid-cols-[0.34fr_1fr]">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>
          Product overview
        </h2>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug tracking-tight" data-reveal>
            {product.name} in the ERCON product range.
          </h3>
          <p className="mt-7 max-w-4xl text-body-fluid leading-8 text-muted" data-reveal>
            {product.overview}
          </p>
        </div>
      </div>
    </section>
  )
}
