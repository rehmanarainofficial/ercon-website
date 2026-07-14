import { useRef } from 'react'
import { TextLink } from '../../../components/ui/TextLink'
import { qualitySafety } from '../../../data/quality'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function QualitySafety() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main max-w-5xl">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>
            {qualitySafety.label}
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug tracking-tight" data-reveal>
            {qualitySafety.title}
          </h3>
          <p className="mt-7 max-w-3xl text-body-fluid leading-8 text-muted" data-reveal>
            {qualitySafety.description}
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {qualitySafety.pillars.map(({ description, icon: Icon, id, title }) => (
              <article className="rounded-[var(--radius-card)] border border-line bg-surface-soft p-5" data-reveal key={id}>
                <Icon aria-hidden="true" className="text-brand" size={24} />
                <h3 className="mt-5 text-xl font-bold leading-tight text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8" data-reveal>
            <TextLink to="/accreditations">View Accreditations</TextLink>
          </div>
        </div>
      </div>
    </section>
  )
}
