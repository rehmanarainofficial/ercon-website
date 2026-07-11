import { useRef } from 'react'
import { ImageReveal } from '../../../components/animation/ImageReveal'
import { SafeImage } from '../../../components/ui/SafeImage'
import { TextLink } from '../../../components/ui/TextLink'
import { qualitySafety } from '../../../data/quality'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function QualitySafety() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(340px,0.52fr)] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand" data-reveal>
            {qualitySafety.label}
          </p>
          <h2 className="mt-5 text-section font-bold text-ink" data-reveal>
            {qualitySafety.title}
          </h2>
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
        <ImageReveal className="bg-surface-blue">
          <SafeImage
            alt={qualitySafety.imageAlt}
            className="aspect-[4/5] h-full w-full object-cover"
            height="900"
            src={qualitySafety.image}
            width="720"
          />
        </ImageReveal>
      </div>
    </section>
  )
}
