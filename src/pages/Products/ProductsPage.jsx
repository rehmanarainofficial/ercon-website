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
      'Explore ERCON Industries\' complete product range: LV/MV Switchgear, Type-Tested Enclosures, Busway Trunking Systems, Cable Management, Meter Security Boxes, Solar Solutions, Stainless Steel (SS) products, and Custom Sheet Metal Fabrication.',
    keywords: [
      'ERCON Products Catalog', 'LV Switchgear Pakistan Buy', 'MV Switchgear Type-Tested Pakistan',
      'Busway Trunking System Pakistan', 'Cable Tray Cable Management Pakistan', 'Solar Panel System Pakistan',
      'Sheet Metal Fabrication Products Pakistan', 'Stainless Steel SS Products Hospital Pakistan',
      'Meter Security Box Pakistan', 'Electrical Enclosures Type-Tested Pakistan',
      'Power Distribution Switchgear Pakistan', 'Medium Voltage Switchgear 11kV Pakistan',
      'LV Distribution Board 415V Pakistan', 'Industrial Cable Tray Karachi',
      'Solar PV Panel Supplier Pakistan', 'Custom Fabrication Pakistan',
    ],
    ogDescription:
      'Explore ERCON Industries\' complete product range: LV/MV Switchgear, Busway Trunking, Cable Management, Solar Solutions, SS products, and Sheet Metal Fabrication.',
    ogTitle: 'Products & Divisions | ERCON Industries',
    ogType: 'website',
    title: 'Products & Divisions | ERCON Industries',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://erconind.com/products#webpage',
      name: 'ERCON Industries Products & Divisions',
      url: 'https://erconind.com/products',
      description:
        'Complete product catalog of ERCON Industries including LV/MV Switchgear, Busway Trunking, Cable Management, Solar Solutions, SS Fabrication, and Sheet Metal products.',
      isPartOf: { '@id': 'https://erconind.com/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://erconind.com/' },
          { '@type': 'ListItem', position: 2, name: 'Divisions', item: 'https://erconind.com/products' },
        ],
      },
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
