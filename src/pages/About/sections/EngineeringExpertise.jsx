import { useRef } from 'react'
import { ImageReveal } from '../../../components/animation/ImageReveal'
import { SafeImage } from '../../../components/ui/SafeImage'
import { engineeringExpertise } from '../../../data/expertise'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function EngineeringExpertise() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main grid gap-12 lg:grid-cols-[minmax(0,0.48fr)_1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>
            {engineeringExpertise.label}
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug tracking-tight" data-reveal>
            {engineeringExpertise.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-muted" data-reveal>
            {engineeringExpertise.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2" data-reveal>
            {engineeringExpertise.tools.map((tool) => (
              <span className="rounded-full border border-line bg-surface-soft px-3 py-1 text-xs font-semibold text-brand-dark" key={tool}>
                {tool}
              </span>
            ))}
          </div>
          <div className="mt-8" data-reveal>
            <ImageReveal className="bg-surface-blue">
              <SafeImage
                alt={engineeringExpertise.imageAlt}
                className="aspect-[4/3] h-full w-full object-cover"
                height="720"
                src={engineeringExpertise.image}
                width="960"
              />
            </ImageReveal>
          </div>
        </div>

        <div className="grid gap-4">
          {engineeringExpertise.items.map(({ description, highlights, icon: Icon, id, title }, index) => (
            <article className="rounded-[var(--radius-card)] border border-line bg-surface-soft p-6" data-reveal key={id}>
              <div className="grid gap-5 sm:grid-cols-[72px_1fr]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">
                  <Icon aria-hidden="true" size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold leading-tight text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {highlights.map((highlight) => (
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-dark" key={highlight}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
