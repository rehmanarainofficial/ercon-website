import { useRef } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function ProductFeaturesApplications({ product }) {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main grid gap-10 lg:grid-cols-2">
        {product.features?.length ? (
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>Key features</h2>
            <div className="mt-8 grid gap-4">
              {product.features.map((feature, index) => (
                <article className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card" data-reveal key={feature.id}>
                  <p className="text-sm font-semibold tracking-[0.18em] text-brand">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-lg sm:text-xl font-bold leading-tight text-ink">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {product.applications?.length ? (
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>Applications</h2>
            <div className="mt-8 grid gap-4">
              {product.applications.map((application) => (
                <article className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card" data-reveal key={application.id}>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight text-ink">{application.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{application.description}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
