import { useRef } from 'react'
import { Button } from '../../../components/ui/Button'
import { aboutFinalCta } from '../../../data/about'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function AboutContactCTA() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section className="relative overflow-hidden bg-brand py-18 text-white sm:py-24" ref={sectionRef}>
      <div className="absolute inset-0 technical-grid opacity-24" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/18 blur-3xl" />
      <div className="container-main relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>
          {aboutFinalCta.eyebrow}
        </h2>
        <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_auto] lg:items-end">
          <div>
            <h3 className="max-w-5xl text-lg sm:text-xl font-bold text-white leading-snug tracking-tight" data-reveal>
              {aboutFinalCta.title}
            </h3>
            <p className="mt-6 max-w-2xl text-body-fluid leading-8 text-white/76" data-reveal>
              {aboutFinalCta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row" data-reveal>
            <Button to={aboutFinalCta.primaryCta.href} variant="dark">
              {aboutFinalCta.primaryCta.label}
            </Button>
            <Button to={aboutFinalCta.secondaryCta.href} variant="dark">
              {aboutFinalCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
