import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Button } from '../../../components/ui/Button'
import { aboutHero } from '../../../data/about'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { ScrollTrigger, gsap } from '../../../utils/gsap'

export function AboutHero() {
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return undefined

      const items = section.querySelectorAll('[data-about-hero]')

      if (reducedMotion) {
        gsap.set(items, { autoAlpha: 1, y: 0 })
        ScrollTrigger.refresh()
        return undefined
      }

      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })

      timeline.fromTo(items, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.075 })

      return () => {
        timeline.kill()
      }
    },
    { dependencies: [reducedMotion], scope: sectionRef },
  )

  return (
    <section className="relative isolate overflow-hidden bg-surface-dark pt-32 text-white sm:pt-10" ref={sectionRef}>
      <div className="absolute inset-0 -z-10 technical-grid opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgb(45_163_119/0.34),transparent_34rem),radial-gradient(circle_at_86%_20%,rgb(16_185_129/0.24),transparent_28rem),linear-gradient(150deg,#051610_0%,#092218_52%,#102f22_100%)]" />

      <div className="container-main grid min-h-[78svh] gap-10 pb-14 lg:grid-cols-1 lg:items-end">
        <div className="max-w-5xl">
          <p className="text-xl font-bold tracking-[0.16em] text-white" data-about-hero>
            {aboutHero.eyebrow}
          </p>
          <h1 className="mt-6 text-[clamp(2rem,4.2vw,3.65rem)] max-w-5xl font-bold text-white leading-tight" data-about-hero>
            {aboutHero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-body-fluid leading-8 text-white/74" data-about-hero>
            {aboutHero.description}
          </p>
          <div className="mt-9" data-about-hero>
            <Button icon={<ArrowRight aria-hidden="true" size={18} />} to={aboutHero.primaryCta.href}>
              {aboutHero.primaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
