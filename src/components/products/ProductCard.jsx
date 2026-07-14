import { Link } from 'react-router-dom'
import { SafeImage } from '../ui/SafeImage'

export function ProductCard({ product, index = 0, compact = false }) {
  return (
    <article
      className="group h-full rounded-[var(--radius-card)] border border-line bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand/32"
      data-reveal
    >
      <Link className="block h-full" to={`/products/${product.slug}`}>
        <div className="overflow-hidden rounded-[1.2rem] bg-surface-blue">
          <SafeImage
            alt={`${product.name} product visual`}
            className="aspect-[4/3] w-full object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
            height="520"
            loading={index < 2 ? 'eager' : 'lazy'}
            src={product.cardImage || product.image}
            width="700"
          />
        </div>
        <div className="flex flex-col pt-6">
          <h2 className={`${compact ? 'text-xl' : 'text-card-title'} font-bold leading-tight text-ink group-hover:text-brand transition-colors duration-200`}>
            {product.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{product.shortDescription}</p>
        </div>
      </Link>
    </article>
  )
}
