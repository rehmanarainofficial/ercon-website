import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Button } from '../../../components/ui/Button'
import { aboutHero } from '../../../data/about'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { ScrollTrigger, gsap } from '../../../utils/gsap'
import aboutBg from '../../../assets/images/generated/about.jpg'

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
    <section className="relative isolate overflow-hidden bg-surface-dark pt-28 text-white sm:pt-32 lg:pt-10" ref={sectionRef}>
      <div className="absolute inset-0 -z-10">
        <img
          alt="ERCON About Hero Background"
          className="h-full w-full object-cover opacity-60 saturate-110"
          src={aboutBg}
        />
      </div>
      <div className="absolute inset-0 -z-10 technical-grid opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgb(76_175_80/0.24),transparent_34rem),radial-gradient(circle_at_86%_20%,rgb(22_58_95/0.34),transparent_28rem),linear-gradient(150deg,rgb(22_58_95/0.95)_0%,rgb(22_58_95/0.78)_42%,rgb(15_107_74/0.25)_100%)]" />

      <div className="container-main grid min-h-[64svh] gap-8 pb-12 sm:min-h-[78svh] sm:gap-10 sm:pb-14 lg:grid-cols-1 lg:items-end">
        <div className="max-w-5xl">
          <p className="text-sm font-bold tracking-[0.08em] text-white sm:text-xl sm:tracking-[0.16em]" data-about-hero>
            {aboutHero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl text-[clamp(1.75rem,7.6vw,2.35rem)] font-bold leading-[1.13] text-white sm:mt-6 sm:text-[clamp(2rem,4.2vw,3.65rem)] sm:leading-tight" data-about-hero>
            {aboutHero.title}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-white/74 sm:mt-6 sm:text-body-fluid sm:leading-8" data-about-hero>
            {aboutHero.description}
          </p>
          <div className="mt-7 sm:mt-9" data-about-hero>
            <Button icon={<ArrowRight aria-hidden="true" size={18} />} to={aboutHero.primaryCta.href}>
              {aboutHero.primaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
