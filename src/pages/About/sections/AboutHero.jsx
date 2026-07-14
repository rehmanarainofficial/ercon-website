import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { Button } from '../../../components/ui/Button'
import { SafeImage } from '../../../components/ui/SafeImage'
import { aboutHero } from '../../../data/about'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { ScrollTrigger, gsap } from '../../../utils/gsap'

export function AboutHero() {
  const sectionRef = useRef(null)
  const mediaRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return undefined

      const items = section.querySelectorAll('[data-about-hero]')

      if (reducedMotion) {
        gsap.set([mediaRef.current, items], { autoAlpha: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' })
        ScrollTrigger.refresh()
        return undefined
      }

      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })

      timeline
        .fromTo(items, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.075 })
        .fromTo(
          mediaRef.current,
          { autoAlpha: 0, scale: 1.05, clipPath: 'inset(10% 0% 10% 0%)' },
          { autoAlpha: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.05 },
          '-=0.65',
        )

      const parallax = gsap.to(mediaRef.current, {
        yPercent: 6,
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
    <section className="relative isolate overflow-hidden bg-surface-dark pt-32 text-white sm:pt-36" ref={sectionRef}>
      <div className="absolute inset-0 -z-20 bg-surface-dark" />
      <div ref={mediaRef} className="absolute inset-0 -z-10">
        <SafeImage
          alt={aboutHero.imageAlt}
          className="h-full w-full object-cover opacity-52"
          fetchPriority="high"
          height="1200"
          loading="eager"
          src={aboutHero.image}
          width="1800"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(6_27_45/0.62),rgb(6_27_45/0.96)),linear-gradient(90deg,rgb(6_27_45/0.92),rgb(6_27_45/0.42))]" />
      <div className="absolute inset-0 -z-10 technical-grid opacity-30" />

      <div className="container-main grid min-h-[78svh] gap-10 pb-14 lg:grid-cols-1 lg:items-end">
        <div className="max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/62" data-about-hero>
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link className="transition hover:text-white" to="/">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                About Us
              </li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white" data-about-hero>
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
