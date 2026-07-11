import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { engineeringProcess } from '../../../data/process'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { gsap } from '../../../utils/gsap'

export function EngineeringProcess() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useScrollReveal(sectionRef, { stagger: 0.05 })

  useGSAP(
    () => {
      if (!lineRef.current || reducedMotion) return undefined

      const tween = gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'bottom 70%',
            scrub: true,
          },
        },
      )

      return () => tween.kill()
    },
    { dependencies: [reducedMotion], scope: sectionRef },
  )

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main grid gap-12 lg:grid-cols-[minmax(320px,0.45fr)_1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="Engineering process" title="A clear route from requirement to supported delivery.">
            <p>
              These steps reflect ERCON’s public engineering and manufacturing positioning. Exact internal workflow can be
              swapped into the data file when verified.
            </p>
          </SectionHeading>
        </div>

        <div className="relative">
          <div className="absolute bottom-6 left-[1.35rem] top-6 hidden w-px bg-line sm:block" />
          <div ref={lineRef} className="absolute bottom-6 left-[1.35rem] top-6 hidden w-px origin-top bg-brand sm:block" />
          <div className="grid gap-5">
            {engineeringProcess.map(({ description, icon: Icon, id, step, title }) => (
              <article
                className="relative grid gap-5 rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-card sm:grid-cols-[64px_1fr]"
                data-reveal
                key={id}
              >
                <div className="relative z-10 grid h-11 w-11 place-items-center rounded-2xl bg-brand text-white">
                  <Icon aria-hidden="true" size={21} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{step}</p>
                  <h3 className="mt-2 text-2xl font-bold leading-tight text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
