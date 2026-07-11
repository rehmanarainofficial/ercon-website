import { useRef } from 'react'
import { coreValues } from '../../../data/values'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function CoreValues() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand" data-reveal>
            Core values
          </p>
          <h2 className="mt-5 text-section font-bold text-ink" data-reveal>
            Values that keep the work practical, technical, and accountable.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {coreValues.map(({ description, icon: Icon, id, number, title }) => (
            <article className="group rounded-[var(--radius-card)] border border-line bg-white p-6 transition hover:border-brand/35" data-reveal key={id}>
              <div className="flex items-start justify-between gap-4">
                <span className="text-4xl font-bold text-brand/22 transition group-hover:text-brand">{number}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-surface-blue text-brand">
                  <Icon aria-hidden="true" size={22} />
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-bold leading-tight text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
