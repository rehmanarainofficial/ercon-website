import { MapPin } from 'lucide-react'
import { useRef } from 'react'
import { operationalPresence } from '../../../data/about'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function OperationalPresence() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_1fr] lg:items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>
            {operationalPresence.label}
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug tracking-tight" data-reveal>
            {operationalPresence.title}
          </h3>
          <p className="mt-7 max-w-2xl text-body-fluid leading-8 text-muted" data-reveal>
            {operationalPresence.description}
          </p>
        </div>
        <div className="grid gap-4">
          {operationalPresence.items.map((item) => (
            <article className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card" data-reveal key={item.id}>
              <MapPin aria-hidden="true" className="text-brand" size={24} />
              <h3 className="mt-5 text-2xl font-bold leading-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
