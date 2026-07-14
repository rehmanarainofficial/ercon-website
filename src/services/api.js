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
    const res = await axios.get(`${BASE_URL}/gallery_api.php`)
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
    const res = await axios.get(`${BASE_URL}/category_api.php`)
    if (res.data && res.data.status === 'success' && Array.isArray(res.data.data)) {
      return res.data.data.map((item) => {
        const slug = item.category_name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        return {
          id: slug,
          slug: slug,
          label: item.category_name,
          description: `${item.category_name} product families for power distribution and protection roles.`,
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
    const res = await axios.get(`${BASE_URL}/product_api.php`)
    if (res.data && res.data.status === 'success' && Array.isArray(res.data.data)) {
      return res.data.data.map((item) => {
        const categorySlug = item.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        const productSlug = item.id
        return {
          id: item.id,
          slug: productSlug,
          name: item.title,
          categoryId: categorySlug,
          categoryLabel: item.category,
          category: item.category,
          shortDescription: item.description || 'Verified product information from ERCON Industries database.',
          overview: item.description || 'Verified product overview from ERCON Industries database.',
          heroImage: item.image1 || 'https://erconind.com/ercon/product_img/default.jpg',
          cardImage: item.image1 || 'https://erconind.com/ercon/product_img/default.jpg',
          image: item.image1 || 'https://erconind.com/ercon/product_img/default.jpg',
          gallery: [
            item.image1 && { id: `${item.id}-img1`, src: item.image1, alt: item.title, caption: 'Primary product image' },
            item.image2 && { id: `${item.id}-img2`, src: item.image2, alt: item.title, caption: 'Secondary product image' },
          ].filter(Boolean),
          highlights: [item.category, 'Type Tested'],
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
                { label: 'Category', value: item.category },
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
