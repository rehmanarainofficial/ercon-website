import { useRef } from 'react'
import { Button } from '../../../components/ui/Button'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function ClienteleCTA() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section className="relative overflow-hidden bg-brand py-18 text-white sm:py-24" ref={sectionRef}>
      <div className="absolute inset-0 technical-grid opacity-24" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/18 blur-3xl" />
      <div className="container-main relative grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_auto] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/68" data-reveal>
            Project inquiries
          </p>
          <h2 className="mt-5 max-w-4xl text-section font-bold text-white" data-reveal>
            Discuss Your Project Requirements With ERCON
          </h2>
          <p className="mt-6 max-w-2xl text-body-fluid leading-8 text-white/74" data-reveal>
            Connect with ERCON for switchgear, power distribution, cable management, solar energy, or fabrication requirements.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row" data-reveal>
          <Button to="/contact-us?inquiry=project" variant="dark">
            Contact Us
          </Button>
          <Button to="/products" variant="dark">
            Explore Divisions
          </Button>
        </div>
      </div>
    </section>
  )
}

