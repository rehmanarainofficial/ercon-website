import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
import { homeStatistics } from '../../../data/statistics'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { gsap } from '../../../utils/gsap'

function StatValue({ stat }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(stat.animated ? 0 : stat.value)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (!stat.animated || reducedMotion) {
        setDisplay(stat.value)
        return undefined
      }

      const counter = { value: 0 }
      const tween = gsap.to(counter, {
        value: stat.value,
        duration: 1.4,
        ease: 'power3.out',
        onUpdate: () => setDisplay(Math.round(counter.value)),
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 82%',
          once: true,
        },
      })

      return () => tween.kill()
    },
    { dependencies: [reducedMotion, stat], scope: ref },
  )

  return (
    <span ref={ref}>
      {stat.prefix}
      {display}
      {stat.suffix}
    </span>
  )
}

export function HomeStatistics() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-surface-dark-2 py-16 text-white" ref={sectionRef}>
      <div className="container-main">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeStatistics.map((stat) => (
            <article className="border-l border-white/14 pl-5" data-reveal key={stat.id}>
              <p className="text-[clamp(2.4rem,4.8vw,5.5rem)] font-bold leading-none text-white">
                <StatValue stat={stat} />
              </p>
              <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-light">{stat.label}</h2>
              <p className="mt-3 text-sm leading-7 text-white/62">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
