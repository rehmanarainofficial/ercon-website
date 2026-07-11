import { useRef } from 'react'
import { ImageReveal } from '../../../components/animation/ImageReveal'
import { SafeImage } from '../../../components/ui/SafeImage'
import { TextLink } from '../../../components/ui/TextLink'
import { homeIntroduction } from '../../../data/home'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function CompanyIntroduction() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:items-start">
          <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {homeIntroduction.label}
          </p>
          <div>
            <h2 data-reveal className="text-section max-w-6xl font-bold text-ink">
              {homeIntroduction.title}
            </h2>
            <div className="mt-10 grid gap-9 lg:grid-cols-[minmax(0,0.78fr)_minmax(320px,0.55fr)] lg:items-end">
              <div data-reveal className="max-w-3xl">
                <p className="text-body-fluid leading-8 text-muted">{homeIntroduction.description}</p>
                <div className="mt-7">
                  <TextLink to={homeIntroduction.link.href}>{homeIntroduction.link.label}</TextLink>
                </div>
              </div>
              <ImageReveal className="bg-surface-blue">
                <SafeImage
                  alt={homeIntroduction.imageAlt}
                  className="aspect-[4/5] h-full w-full object-cover"
                  height="900"
                  src={homeIntroduction.image}
                  width="720"
                />
              </ImageReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
