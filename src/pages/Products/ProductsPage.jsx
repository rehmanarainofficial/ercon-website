import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductDiscovery } from './sections/ProductDiscovery'
import { ProductsEngineeringCTA } from './sections/ProductsEngineeringCTA'
import { ProductsHero } from './sections/ProductsHero'
import { fetchProducts, fetchCategories } from '../../services/api'
import { useRouteMeta } from '../../hooks/useRouteMeta'
import { filterProducts } from '../../utils/productFilters'

import { LayoutGrid } from 'lucide-react'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category') || 'all'
  const search = searchParams.get('search') || ''

  const [productsList, setProductsList] = useState([])
  const [categoriesList, setCategoriesList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    const loadData = async () => {
      try {
        setLoading(true)
        const apiProds = await fetchProducts()
        if (apiProds && active) {
          setProductsList(apiProds)
          const apiCats = await fetchCategories(apiProds)
          if (apiCats && active) {
            setProductsList(apiProds)
            setCategoriesList(apiCats)
          }
        }
      } catch (err) {
        console.error('Error loading products api:', err)
      } finally {
        if (active) setLoading(false)
      }
    }
    loadData()
    return () => {
      active = false
    }
  }, [])

  const categoriesWithAll = useMemo(() => {
    if (categoriesList.length === 0) return []
    const allCategory = {
      id: 'all',
      slug: 'all',
      label: 'All Divisions',
      description: 'Browse the full ERCON divisions and product range.',
      productCount: productsList.length,
      icon: LayoutGrid,
    }
    return [allCategory, ...categoriesList]
  }, [categoriesList, productsList])

  const activeCategory = useMemo(() => {
    if (requestedCategory === 'all') return 'all'
    const exists = categoriesList.some((cat) => cat.id === requestedCategory)
    return exists ? requestedCategory : 'all'
  }, [requestedCategory, categoriesList])

  useRouteMeta({
    canonical: 'https://erconind.com/products',
    description:
      'Browse ERCON Industries product families including MV switchgear, LV switchgear, cable management, solar energy systems, and sheet metal fabrication.',
    keywords: [
      'ERCON products', 'switchgear catalog Pakistan', 'LV panels Karachi', 'MV type tested switchgear',
      'cable trays Karachi', 'industrial enclosures', 'solar panels Pakistan', 'sheet metal fabrication'
    ],
    ogDescription:
      'Browse ERCON Industries product families including MV switchgear, LV switchgear, cable management, solar energy systems, and sheet metal fabrication.',
    ogTitle: 'Products | ERCON Industries',
    ogImage: productsList[0]?.heroImage,
    title: 'Products | ERCON Industries',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'ERCON Industries Products',
      url: 'https://erconind.com/products',
    },
  })

  const filteredProducts = useMemo(
    () => filterProducts(productsList, { category: activeCategory, search }),
    [productsList, activeCategory, search],
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
        categories={categoriesWithAll}
        loading={loading}
      />
      <ProductsEngineeringCTA />
    </article>
  )
}
