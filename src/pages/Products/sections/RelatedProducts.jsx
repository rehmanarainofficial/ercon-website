import { ProductCard } from '../../../components/products/ProductCard'
import { TextLink } from '../../../components/ui/TextLink'

export function RelatedProducts({ products }) {
  if (!products.length) return null

  return (
    <section className="bg-white section-space">
      <div className="container-main">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide">Related products</h2>
            <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug tracking-tight">Continue exploring the ERCON range.</h3>
          </div>
          <TextLink to="/products">View All Divisions</TextLink>
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
