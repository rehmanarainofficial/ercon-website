import { ArrowUpRight } from 'lucide-react'
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
        <div className="flex h-[calc(100%-1px)] flex-col pt-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{product.categoryLabel}</p>
              <h2 className={`${compact ? 'text-xl' : 'text-card-title'} mt-3 font-bold leading-tight text-ink`}>
                {product.name}
              </h2>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-brand transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight aria-hidden="true" size={18} />
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">{product.shortDescription}</p>
          {!compact && product.highlights?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {product.highlights.slice(0, 3).map((highlight) => (
                <span className="rounded-full bg-surface-blue px-3 py-1 text-xs font-semibold text-brand-dark" key={highlight}>
                  {highlight}
                </span>
              ))}
            </div>
          ) : null}
          <span className="mt-6 inline-flex min-h-10 items-center text-sm font-semibold text-brand">
            View Product
          </span>
        </div>
      </Link>
    </article>
  )
}
