import { useGSAP } from '@gsap/react'
import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'
import { clienteleHero } from '../../../data/clientele'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { ScrollTrigger, gsap } from '../../../utils/gsap'

export function ClienteleHero() {
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (!sectionRef.current) return undefined
      const items = sectionRef.current.querySelectorAll('[data-clientele-hero]')

      if (reducedMotion) {
        gsap.set(items, { autoAlpha: 1, y: 0 })
        ScrollTrigger.refresh()
        return undefined
      }

      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })
      timeline
        .fromTo(items, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.07 })

      return () => timeline.kill()
    },
    { dependencies: [reducedMotion], scope: sectionRef },
  )

  return (
    <section className="relative isolate overflow-hidden bg-surface-dark pt-32 text-white lg:pt-10" ref={sectionRef}>
      <div className="absolute inset-0 -z-10 technical-grid opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgb(76_175_80/0.24),transparent_34rem),radial-gradient(circle_at_86%_20%,rgb(22_58_95/0.34),transparent_28rem),linear-gradient(150deg,#163A5F_0%,#112C48_52%,#0F6B4A_100%)]" />
      <div className="container-main grid min-h-[76svh] gap-10 pb-14 lg:grid-cols-1 lg:items-end">
        <div>
          <p className="mt-8 text-xl font-bold tracking-[0.16em] text-white" data-clientele-hero>
            {clienteleHero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(1.8rem,3.8vw,3.5rem)] font-bold text-white leading-tight" data-clientele-hero>
            {clienteleHero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-body-fluid leading-8 text-white/72" data-clientele-hero>
            {clienteleHero.description}
          </p>
       
          <div className="mt-10 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 lg:flex" data-clientele-hero>
            <span className="h-px w-14 bg-white/24" />
            Explore directory
            <ArrowDown aria-hidden="true" size={16} />
          </div>
        </div>
      </div>
    </section>
  )
}
