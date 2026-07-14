import { useGSAP } from '@gsap/react'
import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'
import { Button } from '../../../components/ui/Button'
import { SafeImage } from '../../../components/ui/SafeImage'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { ScrollTrigger, gsap } from '../../../utils/gsap'
import { homeHero } from '../../../data/home'

export function HomeHero() {
  const sectionRef = useRef(null)
  const mediaRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return undefined

      const revealItems = section.querySelectorAll('[data-hero-reveal]')

      if (reducedMotion) {
        gsap.set([mediaRef.current, revealItems], { autoAlpha: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' })
        ScrollTrigger.refresh()
        return undefined
      }

      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      timeline
        .fromTo(mediaRef.current, { autoAlpha: 0, scale: 1.06, clipPath: 'inset(8% 0% 12% 0%)' }, {
          autoAlpha: 1,
          scale: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
        })
        .fromTo(revealItems, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, '-=0.55')

      const parallax = gsap.to(mediaRef.current, {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      return () => {
        timeline.kill()
        parallax.kill()
      }
    },
    { dependencies: [reducedMotion], scope: sectionRef },
  )

  return (
    <section
      aria-label="ERCON Industries home hero"
      className="relative isolate overflow-hidden bg-surface-dark text-white"
      ref={sectionRef}
    >
      <div className="absolute inset-0 -z-20 bg-surface-dark" />
      <div ref={mediaRef} className="absolute inset-0 -z-10">
        <SafeImage
          alt={homeHero.imageAlt}
          className="h-full w-full object-cover opacity-60 saturate-110"
          fetchPriority="high"
          height="1200"
          loading="eager"
          src={homeHero.image}
          width="1800"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(5_22_16/0.95)_0%,rgb(5_22_16/0.72)_42%,rgb(5_22_16/0.2)_100%)]" />
      <div className="absolute inset-0 -z-10 technical-grid opacity-35" />
      <div className="absolute left-[8%] top-[18%] -z-10 h-72 w-72 rounded-full bg-brand/28 blur-3xl" />
      <div className="absolute bottom-[8%] right-[10%] -z-10 h-80 w-80 rounded-full bg-accent/18 blur-3xl" />

      <div className="container-main grid gap-12 pb-12 pt-34 sm:pt-38 lg:min-h-[100svh] lg:grid-cols-1 lg:items-end lg:pb-16">
        <div className="max-w-6xl lg:pb-10">
          <p data-hero-reveal className="text-sm font-bold tracking-[0.16em] text-white">
            {homeHero.eyebrow}
          </p>
          <h1 data-hero-reveal className="mt-6 text-[clamp(2.1rem,4.8vw,4.8rem)] font-bold text-white leading-[1.08] max-w-4xl">
            Engineering Reliable<br className="hidden sm:inline" />
            Power Distribution<br className="hidden sm:inline" />
            Solutions
          </h1>
          <p data-hero-reveal className="mt-7 max-w-3xl text-body-fluid leading-8 text-white/76">
            {homeHero.description}
          </p>
          

          <div data-hero-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to={homeHero.primaryCta.href}>{homeHero.primaryCta.label}</Button>
          </div>
        </div>

        <div data-hero-reveal className="hidden items-center gap-3 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/52 lg:flex">
          <span className="h-px w-14 bg-white/28" />
          Scroll
          <ArrowDown aria-hidden="true" className="animate-bounce text-brand-light" size={16} />
        </div>
      </div>
    </section>
  )
}
