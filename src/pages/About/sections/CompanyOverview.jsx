import { useRef } from 'react'
import { ImageReveal } from '../../../components/animation/ImageReveal'
import { SafeImage } from '../../../components/ui/SafeImage'
import { TextLink } from '../../../components/ui/TextLink'
import { companyOverview } from '../../../data/about'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function CompanyOverview() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand" data-reveal>
            {companyOverview.label}
          </p>
          <div>
            <h2 className="text-section max-w-6xl font-bold text-ink" data-reveal>
              {companyOverview.title}
            </h2>
            <div className="mt-10 grid gap-9 lg:grid-cols-[minmax(0,0.75fr)_minmax(320px,0.55fr)] lg:items-end">
              <div className="grid gap-5" data-reveal>
                {companyOverview.paragraphs.map((paragraph) => (
                  <p className="text-body-fluid leading-8 text-muted" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                <div className="mt-3 border-l-2 border-brand pl-5 text-xl font-semibold leading-8 text-ink">
                  {companyOverview.highlight}
                </div>
                <TextLink to="/products">Explore ERCON Products</TextLink>
              </div>
              <ImageReveal className="bg-surface-blue">
                <SafeImage
                  alt={companyOverview.imageAlt}
                  className="aspect-[4/5] h-full w-full object-cover"
                  height="900"
                  src={companyOverview.image}
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
