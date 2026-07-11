import { useRef } from 'react'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { whyErcon } from '../../../data/whyErcon'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function WhyErcon() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.07 })

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(360px,0.62fr)] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading eyebrow="Why ERCON" title="Practical reasons to choose a focused electrical manufacturing partner.">
            <p>
              The Home page avoids unsupported superlatives and uses only public company positioning around group heritage,
              localized production, technical focus, quality, safety, and performance.
            </p>
          </SectionHeading>
        </div>

        <div className="grid gap-4">
          {whyErcon.map((item, index) => (
            <article
              className="group border-t border-line py-7 transition duration-300 hover:border-brand"
              data-reveal
              key={item.id}
            >
              <div className="grid gap-4 sm:grid-cols-[88px_1fr]">
                <p className="text-4xl font-bold text-brand/24 transition group-hover:text-brand">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="text-2xl font-bold leading-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
