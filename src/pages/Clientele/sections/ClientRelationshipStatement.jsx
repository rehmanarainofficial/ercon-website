import { useRef } from 'react'
import { Button } from '../../../components/ui/Button'
import { clientRelationshipSteps } from '../../../data/clientele'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function ClientRelationshipStatement() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.055 })

  return (
    <section className="bg-surface-dark section-space text-white" ref={sectionRef}>
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.44fr)_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light" data-reveal>
              Working with ERCON
            </p>
            <h2 className="mt-5 text-section font-bold text-white" data-reveal>
              From Technical Requirements to Reliable Delivery
            </h2>
            <p className="mt-6 text-body-fluid leading-8 text-white/70" data-reveal>
              A client inquiry can move from requirement review into product selection, technical coordination, and delivery planning without turning the page into unsupported case studies.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal>
              <Button to="/contact-us?inquiry=project" variant="dark">
                Contact Us
              </Button>
              <Button to="/products" variant="dark">
                Explore Products
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {clientRelationshipSteps.map((step) => (
              <article className="rounded-[var(--radius-card)] border border-white/12 bg-white/7 p-6" data-reveal key={step.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">{step.number}</p>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/66">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

