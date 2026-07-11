import { useRef } from 'react'
import { Button } from '../../../components/ui/Button'
import { finalCta } from '../../../data/home'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function HomeContactCTA() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section className="relative overflow-hidden bg-brand py-18 text-white sm:py-24" ref={sectionRef}>
      <div className="absolute inset-0 technical-grid opacity-24" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-surface-dark/24 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent-purple/18 blur-3xl" />
      <div className="container-main relative">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.8fr)_auto] lg:items-end">
          <div>
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-white/66">
              {finalCta.eyebrow}
            </p>
            <h2 data-reveal className="mt-5 max-w-5xl text-section font-bold text-white">
              {finalCta.title}
            </h2>
            <p data-reveal className="mt-6 max-w-2xl text-body-fluid leading-8 text-white/74">
              {finalCta.description}
            </p>
          </div>
          <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button to={finalCta.primaryCta.href} variant="dark">
              {finalCta.primaryCta.label}
            </Button>
            <Button to={finalCta.secondaryCta.href} variant="dark">
              {finalCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
