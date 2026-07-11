import { useGSAP } from '@gsap/react'
import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'
import { ProductBreadcrumbs } from '../../../components/products/ProductBreadcrumbs'
import { SafeImage } from '../../../components/ui/SafeImage'
import { allProductsCategory, productCategories } from '../../../data/productCategories'
import { products } from '../../../data/products'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { ScrollTrigger, gsap } from '../../../utils/gsap'

export function ProductsHero() {
  const sectionRef = useRef(null)
  const mediaRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const heroProduct = products[0]

  useGSAP(
    () => {
      if (!sectionRef.current) return undefined
      const items = sectionRef.current.querySelectorAll('[data-products-hero]')

      if (reducedMotion) {
        gsap.set([items, mediaRef.current], { autoAlpha: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' })
        ScrollTrigger.refresh()
        return undefined
      }

      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })
      timeline
        .fromTo(items, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.075 })
        .fromTo(
          mediaRef.current,
          { autoAlpha: 0, scale: 1.04, clipPath: 'inset(9% 0% 9% 0%)' },
          { autoAlpha: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1 },
          '-=0.6',
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
      <div className="container-main grid min-h-[76svh] gap-10 pb-14 lg:grid-cols-[minmax(0,0.74fr)_minmax(340px,0.55fr)] lg:items-end">
        <div>
          <div data-products-hero>
            <ProductBreadcrumbs current="Products" />
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light" data-products-hero>
            Products and solutions
          </p>
          <h1 className="mt-6 max-w-5xl text-compact-display font-bold text-white" data-products-hero>
            Engineered Products for Reliable Power Distribution
          </h1>
          <p className="mt-7 max-w-3xl text-body-fluid leading-8 text-white/72" data-products-hero>
            Browse ERCON’s public product range across switchgear, power distribution, solar energy, cable management,
            and sheet metal fabrication.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:max-w-xl" data-products-hero>
            <div className="rounded-2xl border border-white/12 bg-white/7 p-4">
              <p className="text-3xl font-bold">{allProductsCategory.productCount}</p>
              <p className="mt-1 text-sm text-white/62">Product families</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/7 p-4">
              <p className="text-3xl font-bold">{productCategories.length}</p>
              <p className="mt-1 text-sm text-white/62">Categories</p>
            </div>
          </div>
          <div className="mt-10 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 lg:flex" data-products-hero>
            <span className="h-px w-14 bg-white/24" />
            Browse range
            <ArrowDown aria-hidden="true" size={16} />
          </div>
        </div>
        <div className="rounded-[var(--radius-large)] border border-white/12 bg-white/8 p-4 shadow-floating" data-products-hero ref={mediaRef}>
          <SafeImage
            alt={`${heroProduct.name} product visual`}
            className="aspect-[4/4.2] w-full rounded-[1.8rem] bg-surface-dark-2 object-cover"
            fetchPriority="high"
            height="820"
            loading="eager"
            src={heroProduct.heroImage}
            width="760"
          />
        </div>
      </div>
    </section>
  )
}
