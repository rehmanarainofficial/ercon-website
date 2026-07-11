import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductDiscovery } from './sections/ProductDiscovery'
import { ProductsEngineeringCTA } from './sections/ProductsEngineeringCTA'
import { ProductsHero } from './sections/ProductsHero'
import { productCategories } from '../../data/productCategories'
import { products } from '../../data/products'
import { useRouteMeta } from '../../hooks/useRouteMeta'
import { filterProducts } from '../../utils/productFilters'

const validCategoryIds = new Set(['all', ...productCategories.map((category) => category.id)])

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category') || 'all'
  const activeCategory = validCategoryIds.has(requestedCategory) ? requestedCategory : 'all'
  const search = searchParams.get('search') || ''

  useRouteMeta({
    canonical: 'https://erconind.com/products',
    description:
      'Browse ERCON Industries product families including MV switchgear, LV switchgear, cable management, solar energy systems, and sheet metal fabrication.',
    ogDescription:
      'Browse ERCON Industries product families including MV switchgear, LV switchgear, cable management, solar energy systems, and sheet metal fabrication.',
    ogTitle: 'Products | ERCON Industries',
    ogImage: products[0]?.heroImage,
    title: 'Products | ERCON Industries',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'ERCON Industries Products',
      url: 'https://erconind.com/products',
    },
  })

  const filteredProducts = useMemo(
    () => filterProducts(products, { category: activeCategory, search }),
    [activeCategory, search],
  )

  const updateParams = (next) => {
    setSearchParams((current) => {
      const params = new URLSearchParams(current)

      Object.entries(next).forEach(([key, value]) => {
        if (!value || value === 'all') {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      })

      return params
    })
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <ProductsHero />
      <ProductDiscovery
        activeCategory={activeCategory}
        filteredProducts={filteredProducts}
        onCategoryChange={(category) => updateParams({ category })}
        onClear={clearFilters}
        onSearchChange={(value) => updateParams({ search: value.trim() })}
        search={search}
      />
      <ProductsEngineeringCTA />
    </article>
  )
}
