import axios from 'axios'
import { Zap, CircuitBoard, Cable, SunMedium, Factory } from 'lucide-react'

const BASE_URL = 'https://erconind.com/ercon'

const getCategoryIcon = (slug) => {
  switch (slug) {
    case 'medium-voltage':
      return Zap
    case 'low-voltage':
      return CircuitBoard
    case 'cable-management':
      return Cable
    case 'energy-solutions':
      return SunMedium
    default:
      return Factory
  }
}

export const fetchGallery = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/gallery_api.php?t=${Date.now()}`)
    if (res.data && res.data.status === 'success' && Array.isArray(res.data.data)) {
      return res.data.data.map((item) => ({
        id: `gallery-${item.id}`,
        image: item.image,
        alt: 'ERCON gallery image showing industrial project or manufacturing work',
        category: 'Factory',
      })).reverse()
    }
    return []
  } catch (err) {
    console.error('Error fetching gallery from API:', err)
    return null
  }
}

export const fetchCategories = async (products = []) => {
  try {
    const res = await axios.get(`${BASE_URL}/category_live_api.php?t=${Date.now()}`)
    if (res.data && res.data.status === 'success' && Array.isArray(res.data.data)) {
      return res.data.data.map((item) => {
        const rawName = item.category_name || 'General'
        const slug = rawName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        return {
          id: slug,
          slug: slug,
          label: rawName,
          description: item.description || item.category_description || item.short_description || '',
          icon: getCategoryIcon(slug),
          productCount: products.filter(p => p.categoryId === slug).length,
        }
      }).reverse()
    }
    return []
  } catch (err) {
    console.error('Error fetching categories from API:', err)
    return null
  }
}

export const fetchProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/product_api.php?t=${Date.now()}`)
    if (res.data && res.data.status === 'success' && Array.isArray(res.data.data)) {
      return res.data.data.map((item) => {
        const rawCategory = item.category || 'General'
        const categorySlug = rawCategory.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        const productSlug = item.id
        return {
          id: item.id,
          slug: productSlug,
          name: item.title,
          categoryId: categorySlug,
          categoryLabel: rawCategory,
          category: rawCategory,
          shortDescription: item.description || 'Verified product information from ERCON Industries database.',
          overview: item.description || 'Verified product overview from ERCON Industries database.',
          heroImage: item.image1 || '',
          cardImage: item.image1 || '',
          image: item.image1 || '',
          gallery: [
            item.image1 && { id: `${item.id}-img1`, src: item.image1, alt: item.title, caption: 'Primary product image' },
            item.image2 && { id: `${item.id}-img2`, src: item.image2, alt: item.title, caption: 'Secondary product image' },
          ].filter(Boolean),
          highlights: [rawCategory, 'Type Tested'].filter(Boolean),
          features: [
            {
              id: `feat-${item.id}-1`,
              title: 'Industrial Standard Quality',
              description: 'Certified to meet rigorous quality standards for safety and reliability.',
            }
          ],
          applications: [
            {
              id: `app-${item.id}-1`,
              title: 'Industrial and infrastructure projects',
              description: 'Designed for project environments requiring organized electrical distribution.',
            }
          ],
          specifications: [
            {
              group: 'Technical details',
              rows: [
                { label: 'Product Model', value: item.title },
                { label: 'Category', value: rawCategory },
              ]
            }
          ],
          relatedProductSlugs: [],
          featured: true,
          status: 'active',
        }
      }).reverse()
    }
    return []
  } catch (err) {
    console.error('Error fetching products from API:', err)
    return null
  }
}
