import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { SafeImage } from '../../../components/ui/SafeImage'
import { TextLink } from '../../../components/ui/TextLink'
import { fetchProducts } from '../../../services/api'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { getCategoryColor } from '../../../utils/colors'

export function FeaturedProducts() {
  const sectionRef = useRef(null)
  const [productsList, setProductsList] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    let active = true
    const loadProducts = async () => {
      try {
        setLoading(true)
        const apiProds = await fetchProducts()
        if (apiProds && active) {
          setProductsList(apiProds)
        }
      } catch (err) {
        console.error('Error loading featured products:', err)
      } finally {
        if (active) setLoading(false)
      }
    }
    loadProducts()
    return () => {
      active = false
    }
  }, [])

  const featured = productsList.filter((product) => product.featured).slice(0, 6)
  useScrollReveal(sectionRef, { stagger: 0.06 })

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_auto] lg:items-end">
          <SectionHeading eyebrow="Featured products" title="Switchgear, power systems, and manufacturing capability in one ERCON platform.">
            <p>
              Product previews are based on ERCON’s public product categories and company material, with detailed product pages now
              available for browsing.
            </p>
          </SectionHeading>
          <div data-reveal>
            <TextLink to="/products">View All Divisions</TextLink>
          </div>
        </div>

        {loading ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="animate-pulse bg-white border border-line rounded-[var(--radius-card)] p-4 min-h-[350px]">
                <div className="bg-surface-blue rounded-[1.25rem] aspect-[4/3] w-full" />
                <div className="h-4 bg-surface-blue rounded w-1/3 mt-6" />
                <div className="h-6 bg-surface-blue rounded w-2/3 mt-3" />
                <div className="h-4 bg-surface-blue rounded w-full mt-4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featured.map((product) => {
              const catColor = getCategoryColor(product.category)
              return (
                <Link
                  className="group flex flex-col justify-between rounded-[var(--radius-card)] border border-line bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand/28"
                  data-reveal
                  key={product.id}
                  to={`/products/${product.slug}`}
                >
                  <div>
                    <div className="overflow-hidden rounded-[1.25rem] bg-surface-blue aspect-[4/3] flex items-center justify-center">
                      <SafeImage
                        alt={`${product.name} product visual`}
                        className="w-full h-full object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
                        height="420"
                        src={product.image}
                        width="560"
                      />
                    </div>
                    <div className="pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold tracking-[0.18em]" style={{ color: catColor }}>
                            {product.category}
                          </p>
                          <h3 className="mt-3 text-card-title font-bold leading-tight text-ink group-hover:text-brand transition-colors duration-200">{product.name}</h3>
                        </div>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-brand transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                          <ArrowUpRight aria-hidden="true" size={18} />
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-muted">{product.shortDescription}</p>
                    </div>
                  </div>
                  
                  <div className="pt-5 mt-5 border-t border-line flex flex-wrap gap-2">
                    {product.highlights.map((highlight) => (
                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold"
                        style={{ backgroundColor: catColor + '15', color: catColor }}
                        key={highlight}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
