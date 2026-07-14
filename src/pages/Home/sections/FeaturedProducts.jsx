import { useState, useEffect, useRef } from 'react'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { TextLink } from '../../../components/ui/TextLink'
import { fetchProducts } from '../../../services/api'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { ProductCard } from '../../../components/products/ProductCard'

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
            {featured.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
