import { ProductCard } from '../../../components/products/ProductCard'
import { TextLink } from '../../../components/ui/TextLink'

export function RelatedProducts({ products }) {
  if (!products.length) return null

  return (
    <section className="bg-white section-space">
      <div className="container-main">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Related products</p>
            <h2 className="mt-5 text-compact-display font-bold text-ink">Continue exploring the ERCON range.</h2>
          </div>
          <TextLink to="/products">View All Products</TextLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard compact index={index} key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
