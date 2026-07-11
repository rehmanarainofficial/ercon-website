import { Home } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { ProductGallery } from '../../components/products/ProductGallery'
import { ProductSpecificationTable } from '../../components/products/ProductSpecificationTable'
import { Button } from '../../components/ui/Button'
import { getProductBySlug, getRelatedProducts } from '../../data/products'
import { useRouteMeta } from '../../hooks/useRouteMeta'
import { ProductDetailHero } from './sections/ProductDetailHero'
import { ProductFeaturesApplications } from './sections/ProductFeaturesApplications'
import { ProductInquiryCTA } from './sections/ProductInquiryCTA'
import { ProductOverview } from './sections/ProductOverview'
import { RelatedProducts } from './sections/RelatedProducts'

function ProductNotFound() {
  useRouteMeta({
    description: 'The requested ERCON Industries product could not be found.',
    title: 'Product Not Found | ERCON Industries',
  })

  return (
    <article className="grid min-h-screen place-items-center bg-surface-dark px-5 text-center text-white" data-page-reveal>
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">Product not found</p>
        <h1 className="mt-5 text-compact-display font-bold">The requested product is not available.</h1>
        <p className="mt-6 text-white/68">
          Browse the product range or return home to continue exploring ERCON Industries.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/products">Back to Products</Button>
          <Button icon={<Home aria-hidden="true" size={18} />} to="/" variant="dark">
            Home
          </Button>
        </div>
      </div>
    </article>
  )
}

export default function ProductDetailsPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  useRouteMeta({
    canonical: product ? `https://erconind.com/products/${product.slug}` : undefined,
    description: product?.shortDescription,
    ogDescription: product?.shortDescription,
    ogImage: product?.heroImage,
    ogTitle: product ? `${product.name} | ERCON Industries` : undefined,
    title: product ? `${product.name} | ERCON Industries` : undefined,
    schema: product
      ? {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.shortDescription,
          category: product.categoryLabel,
          image: product.heroImage,
        }
      : undefined,
  })

  if (!product) {
    return <ProductNotFound />
  }

  const relatedProducts = getRelatedProducts(product, 3)

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <ProductDetailHero product={product} />
      <ProductOverview product={product} />
      <ProductGallery gallery={product.gallery} productName={product.name} />
      <ProductFeaturesApplications product={product} />
      <ProductSpecificationTable specifications={product.specifications} />
      <RelatedProducts products={relatedProducts} />
      <ProductInquiryCTA product={product} />
    </article>
  )
}
