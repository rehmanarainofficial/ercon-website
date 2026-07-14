import { useRef } from 'react'
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>
            {companyOverview.label}
          </h2>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug tracking-tight" data-reveal>
              {companyOverview.title}
            </h3>
            <div className="mt-10 max-w-4xl">
              <div className="grid gap-5" data-reveal>
                {companyOverview.paragraphs.map((paragraph) => (
                  <p className="text-md leading-relaxed text-muted" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                <div className="mt-3 border-l-2 border-brand pl-5 text-xl font-semibold leading-8 text-ink">
                  {companyOverview.highlight}
                </div>
                <TextLink to="/products">Explore ERCON Divisions</TextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
