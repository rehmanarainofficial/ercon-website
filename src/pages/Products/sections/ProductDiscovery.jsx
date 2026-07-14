import { ProductCategoryFilter } from '../../../components/products/ProductCategoryFilter'
import { ProductEmptyState } from '../../../components/products/ProductEmptyState'
import { ProductSearch } from '../../../components/products/ProductSearch'
import { ProductCard } from '../../../components/products/ProductCard'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { useRef } from 'react'

export function ProductDiscovery({
  activeCategory,
  filteredProducts,
  onCategoryChange,
  onClear,
  onSearchChange,
  search,
  categories,
  loading,
}) {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>
            Product discovery
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug tracking-tight" data-reveal>
            Filter by category, then open the product detail view for technical context.
          </h3>
        </div>

        <div className="mt-10" data-reveal>
          <ProductCategoryFilter activeCategory={activeCategory} categories={categories} onChange={onCategoryChange} />
        </div>

        <div className="mt-6" data-reveal>
          <ProductSearch count={filteredProducts.length} onChange={onSearchChange} onClear={() => onSearchChange('')} search={search} />
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3].map((idx) => (
                <div key={idx} className="animate-pulse bg-white border border-line rounded-[var(--radius-card)] p-4 min-h-[350px]">
                  <div className="bg-surface-blue rounded-[1.25rem] aspect-[4/3] w-full" />
                  <div className="h-4 bg-surface-blue rounded w-1/3 mt-6" />
                  <div className="h-6 bg-surface-blue rounded w-2/3 mt-3" />
                  <div className="h-4 bg-surface-blue rounded w-full mt-4" />
                </div>
              ))}
            </div>
          ) : filteredProducts.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <ProductCard index={index} key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <ProductEmptyState onClear={onClear} />
          )}
        </div>
      </div>
    </section>
  )
}
