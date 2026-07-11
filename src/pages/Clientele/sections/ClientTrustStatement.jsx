import { useRef } from 'react'
import { ImageReveal } from '../../../components/animation/ImageReveal'
import { SafeImage } from '../../../components/ui/SafeImage'
import { clientTrustStatement } from '../../../data/clientele'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function ClientTrustStatement() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.06 })

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main grid gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand" data-reveal>
            {clientTrustStatement.label}
          </p>
          <h2 className="mt-5 max-w-5xl text-section font-bold text-ink" data-reveal>
            {clientTrustStatement.title}
          </h2>
          <div className="mt-8 grid gap-5 text-body-fluid leading-8 text-muted">
            {clientTrustStatement.paragraphs.map((paragraph) => (
              <p data-reveal key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {clientTrustStatement.principles.map((principle) => (
              <article className="border-t border-line pt-5" data-reveal key={principle.id}>
                <h3 className="text-lg font-bold leading-tight text-ink">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="lg:sticky lg:top-28" data-reveal>
          <ImageReveal className="bg-surface-blue">
            <SafeImage
              alt={clientTrustStatement.imageAlt}
              className="aspect-[4/5] h-full w-full object-cover"
              height="900"
              src={clientTrustStatement.image}
              width="720"
            />
          </ImageReveal>
        </div>
      </div>
    </section>
  )
}

