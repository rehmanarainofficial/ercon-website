import { useGSAP } from '@gsap/react'
import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'
import { ProductBreadcrumbs } from '../../../components/products/ProductBreadcrumbs'
import { SafeImage } from '../../../components/ui/SafeImage'
import { clientSectors } from '../../../data/clientSectors'
import { clienteleHero } from '../../../data/clientele'
import { clients } from '../../../data/clients'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { ScrollTrigger, gsap } from '../../../utils/gsap'

export function ClienteleHero() {
  const sectionRef = useRef(null)
  const mediaRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (!sectionRef.current) return undefined
      const items = sectionRef.current.querySelectorAll('[data-clientele-hero]')

      if (reducedMotion) {
        gsap.set([items, mediaRef.current], { autoAlpha: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' })
        ScrollTrigger.refresh()
        return undefined
      }

      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })
      timeline
        .fromTo(items, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.07 })
        .fromTo(
          mediaRef.current,
          { autoAlpha: 0, scale: 1.04, clipPath: 'inset(8% 0% 8% 0%)' },
          { autoAlpha: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1 },
          '-=0.55',
        )

      return () => timeline.kill()
    },
    { dependencies: [reducedMotion], scope: sectionRef },
  )

  return (
    <section className="relative isolate overflow-hidden bg-surface-dark pt-32 text-white sm:pt-36" ref={sectionRef}>
      <div className="absolute inset-0 -z-20 bg-surface-dark" />
      <div className="absolute inset-0 -z-10 technical-grid opacity-25" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand/18 blur-3xl" />
      <div className="container-main grid min-h-[76svh] gap-10 pb-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(340px,0.58fr)] lg:items-end">
        <div>
          <div data-clientele-hero>
            <ProductBreadcrumbs current="Clientele" />
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light" data-clientele-hero>
            {clienteleHero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl text-compact-display font-bold text-white" data-clientele-hero>
            {clienteleHero.title}
          </h1>
          <p className="mt-7 max-w-3xl text-body-fluid leading-8 text-white/72" data-clientele-hero>
            {clienteleHero.description}
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:max-w-xl" data-clientele-hero>
            <div className="rounded-2xl border border-white/12 bg-white/7 p-4">
              <p className="text-3xl font-bold">{clients.length}</p>
              <p className="mt-1 text-sm text-white/62">Verified logo records</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/7 p-4">
              <p className="text-3xl font-bold">{clientSectors.length}</p>
              <p className="mt-1 text-sm text-white/62">Public sector labels</p>
            </div>
          </div>
          <div className="mt-10 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 lg:flex" data-clientele-hero>
            <span className="h-px w-14 bg-white/24" />
            Explore directory
            <ArrowDown aria-hidden="true" size={16} />
          </div>
        </div>
        <div className="rounded-[var(--radius-large)] border border-white/12 bg-white/8 p-4 shadow-floating" data-clientele-hero ref={mediaRef}>
          <SafeImage
            alt={clienteleHero.imageAlt}
            className="aspect-[4/4.1] w-full rounded-[1.8rem] bg-surface-dark-2 object-cover"
            fetchPriority="high"
            height="820"
            loading="eager"
            src={clienteleHero.image}
            width="760"
          />
        </div>
      </div>
    </section>
  )
}

