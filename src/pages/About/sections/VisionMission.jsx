import { useRef } from 'react'
import { visionMission } from '../../../data/about'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function VisionMission() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand" data-reveal>
          Vision and mission
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {[visionMission.vision, visionMission.mission].map((item, index) => (
            <article
              className={`rounded-[var(--radius-large)] p-7 sm:p-10 ${
                index === 0 ? 'bg-surface-dark text-white' : 'border border-line bg-surface-blue text-ink'
              }`}
              data-reveal
              key={item.title}
            >
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${index === 0 ? 'text-brand-light' : 'text-brand'}`}>
                {item.title}
              </p>
              <h2 className="mt-7 text-[clamp(2rem,3.8vw,4.6rem)] font-bold leading-[1.03]">
                {item.statement}
              </h2>
              <p className={`mt-7 max-w-2xl text-sm leading-7 ${index === 0 ? 'text-white/64' : 'text-muted'}`}>
                {item.supportingText}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
