import { allProductsCategory as localAll, productCategories as localCats } from '../../data/productCategories'

export function ProductCategoryFilter({ activeCategory, categories: propCategories, onChange }) {
  const categories = propCategories || [localAll, ...localCats]

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" role="list" aria-label="Product categories">
      {categories.map((category) => {
        const active = activeCategory === category.id
        const Icon = category.icon

        return (
          <button
            aria-pressed={active}
            className={`group min-h-32 rounded-[var(--radius-card)] border p-4 text-left transition duration-200 ${
              active
                ? 'border-brand bg-brand text-white shadow-card'
                : 'border-line bg-white text-ink hover:border-brand/35'
            }`}
            key={category.id}
            onClick={() => onChange(category.id)}
            type="button"
          >
            <div className="flex items-start justify-between gap-3">
              <span className={`grid h-11 w-11 place-items-center rounded-2xl ${active ? 'bg-white/14 text-white' : 'bg-surface-blue text-brand'}`}>
                {Icon ? <Icon aria-hidden="true" size={21} /> : null}
              </span>
              <span className={`text-xs font-semibold uppercase tracking-[0.16em] ${active ? 'text-white/66' : 'text-muted'}`}>
                {category.productCount}
              </span>
            </div>
            <span className="mt-5 block text-base font-bold leading-tight">{category.label}</span>
            <span className={`mt-2 block text-xs leading-5 ${active ? 'text-white/68' : 'text-muted'}`}>
              {category.description}
            </span>
          </button>
        )
      })}
    </div>
  )
}
