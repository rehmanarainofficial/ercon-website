import { Cable, Factory, PanelTop, SunMedium, Zap } from 'lucide-react'
import { products } from './products'

export const productCategories = [
  {
    id: 'medium-voltage',
    slug: 'medium-voltage',
    label: 'Medium Voltage',
    description: 'MV switchgear product families for power distribution and protection roles.',
    icon: Zap,
  },
  {
    id: 'low-voltage',
    slug: 'low-voltage',
    label: 'Low Voltage',
    description: 'LV switchgear and panel-focused distribution solutions.',
    icon: PanelTop,
  },
  {
    id: 'cable-management',
    slug: 'cable-management',
    label: 'Cable Management',
    description: 'Cable tray and cable-management systems for organized electrical routing.',
    icon: Cable,
  },
  {
    id: 'energy-solutions',
    slug: 'energy-solutions',
    label: 'Energy Solutions',
    description: 'Solar energy systems included in ERCON’s public product range.',
    icon: SunMedium,
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    label: 'Manufacturing',
    description: 'Sheet metal fabrication capability supporting cabinets and switchgear.',
    icon: Factory,
  },
].map((category) => ({
  ...category,
  productCount: products.filter((product) => product.categoryId === category.id).length,
}))

export const allProductsCategory = {
  id: 'all',
  slug: 'all',
  label: 'All Products',
  description: 'Browse the full ERCON product range prepared for this phase.',
  productCount: products.length,
}
