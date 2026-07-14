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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>
            {clientTrustStatement.label}
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug tracking-tight" data-reveal>
            {clientTrustStatement.title}
          </h3>
          <div className="mt-8 grid gap-5 text-body-fluid leading-8 text-muted">
            {clientTrustStatement.paragraphs.map((paragraph) => (
              <p data-reveal key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:sticky lg:top-28" data-reveal>
          <ImageReveal className="bg-surface-blue">
            <SafeImage
              alt={clientTrustStatement.imageAlt}
              className="aspect-[1/1] h-full w-full object-cover"
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

