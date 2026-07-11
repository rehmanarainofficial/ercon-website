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
}) {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand" data-reveal>
            Product discovery
          </p>
          <h2 className="mt-5 text-compact-display font-bold text-ink" data-reveal>
            Filter by category, then open the product detail view for technical context.
          </h2>
        </div>

        <div className="mt-10" data-reveal>
          <ProductCategoryFilter activeCategory={activeCategory} onChange={onCategoryChange} />
        </div>

        <div className="mt-6" data-reveal>
          <ProductSearch count={filteredProducts.length} onChange={onSearchChange} onClear={() => onSearchChange('')} search={search} />
        </div>

        <div className="mt-10">
          {filteredProducts.length ? (
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
