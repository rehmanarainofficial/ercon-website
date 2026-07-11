import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { SafeImage } from '../../../components/ui/SafeImage'
import { TextLink } from '../../../components/ui/TextLink'
import { productFamilies } from '../../../data/products'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { useRef } from 'react'

export function FeaturedProducts() {
  const sectionRef = useRef(null)
  const featured = productFamilies.filter((product) => product.featured).slice(0, 6)
  useScrollReveal(sectionRef, { stagger: 0.06 })

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_auto] lg:items-end">
          <SectionHeading eyebrow="Featured products" title="Switchgear, power systems, and manufacturing capability in one ERCON platform.">
            <p>
              Product previews are based on ERCON’s public product categories and company material. Detailed specifications remain
              reserved for the Products phase.
            </p>
          </SectionHeading>
          <div data-reveal>
            <TextLink to="/products">View All Products</TextLink>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {featured.map((product, index) => (
            <Link
              className={`group rounded-[var(--radius-card)] border border-line bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand/28 ${
                index === 0 ? 'lg:col-span-6 lg:row-span-2' : 'lg:col-span-3'
              }`}
              data-reveal
              key={product.id}
              to={`/products/${product.slug}`}
            >
              <div className="overflow-hidden rounded-[1.25rem] bg-surface-blue">
                <SafeImage
                  alt={`${product.name} product visual`}
                  className={`w-full object-contain p-6 transition duration-500 group-hover:scale-[1.03] ${
                    index === 0 ? 'aspect-[5/3]' : 'aspect-[4/3]'
                  }`}
                  height={index === 0 ? '720' : '420'}
                  src={product.image}
                  width={index === 0 ? '960' : '560'}
                />
              </div>
              <div className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{product.category}</p>
                    <h3 className="mt-3 text-card-title font-bold leading-tight text-ink">{product.name}</h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-brand transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">{product.shortDescription}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.highlights.map((highlight) => (
                    <span className="rounded-full bg-surface-blue px-3 py-1 text-xs font-bold text-brand-dark" key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
