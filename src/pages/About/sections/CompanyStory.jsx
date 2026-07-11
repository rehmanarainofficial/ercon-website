import { useRef } from 'react'
import { companyTimeline } from '../../../data/timeline'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function CompanyStory() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.07 })

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main grid gap-12 lg:grid-cols-[minmax(300px,0.38fr)_1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand" data-reveal>
            Company story
          </p>
          <h2 className="mt-5 text-section font-bold text-ink" data-reveal>
            A concise timeline built only from verified public dates.
          </h2>
        </div>
        <div className="relative">
          <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-line sm:block" />
          <div className="grid gap-5">
            {companyTimeline.map((item) => (
              <article className="relative rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card sm:ml-16" data-reveal key={item.id}>
                <span className="absolute -left-[4.55rem] top-7 hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white sm:block">
                  {item.year}
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand sm:hidden">{item.year}</p>
                <h3 className="mt-2 text-2xl font-bold leading-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
