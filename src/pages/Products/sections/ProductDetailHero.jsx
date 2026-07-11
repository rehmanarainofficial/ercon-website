import { ArrowLeft, MessageSquare } from 'lucide-react'
import { ProductBreadcrumbs } from '../../../components/products/ProductBreadcrumbs'
import { Button } from '../../../components/ui/Button'
import { SafeImage } from '../../../components/ui/SafeImage'

export function ProductDetailHero({ product }) {
  return (
    <section className="relative isolate overflow-hidden bg-surface-dark pt-32 text-white sm:pt-36">
      <div className="absolute inset-0 -z-10 technical-grid opacity-24" />
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-brand/18 blur-3xl" />
      <div className="container-main grid min-h-[76svh] gap-10 pb-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(340px,0.58fr)] lg:items-end">
        <div>
          <ProductBreadcrumbs current={product.name} items={[{ label: 'Products', to: '/products' }]} />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
            {product.categoryLabel}
          </p>
          <h1 className="mt-6 max-w-5xl text-page font-bold text-white">{product.name}</h1>
          <p className="mt-7 max-w-3xl text-body-fluid leading-8 text-white/72">{product.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {product.highlights.map((highlight) => (
              <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-xs font-semibold text-white/74" key={highlight}>
                {highlight}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button icon={<MessageSquare aria-hidden="true" size={18} />} to={`/contact-us?product=${encodeURIComponent(product.slug)}`}>
              Discuss This Product
            </Button>
            <Button icon={<ArrowLeft aria-hidden="true" size={18} />} to="/products" variant="dark">
              Back to Products
            </Button>
          </div>
        </div>
        <div className="rounded-[var(--radius-large)] border border-white/12 bg-white/8 p-4 shadow-floating">
          <SafeImage
            alt={`${product.name} product visual`}
            className="aspect-[4/4.1] w-full rounded-[1.8rem] bg-white object-contain p-8"
            fetchPriority="high"
            height="820"
            loading="eager"
            src={product.heroImage}
            width="760"
          />
        </div>
      </div>
    </section>
  )
}
