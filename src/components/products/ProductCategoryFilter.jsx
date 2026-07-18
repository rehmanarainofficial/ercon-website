import { allProductsCategory as localAll, productCategories as localCats } from '../../data/productCategories'

export function ProductCategoryFilter({ activeCategory, categories: propCategories, onChange }) {
  const categories = propCategories || [localAll, ...localCats]

  return (
    <div className="flex gap-3 overflow-x-auto pb-3 sm:grid sm:overflow-visible sm:pb-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" role="list" aria-label="Product categories">
      {categories.map((category) => {
        const active = activeCategory === category.id
        const Icon = category.icon

        return (
          <button
            aria-pressed={active}
            className={`group min-h-28 min-w-[184px] rounded-[20px] border p-4 text-left transition duration-200 sm:min-h-32 sm:min-w-0 sm:rounded-card ${
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
            </div>
            <span className="mt-5 block text-base font-bold leading-tight">{category.label}</span>
            {category.description ? (
              <span className={`mt-2 hidden text-xs leading-5 sm:block ${active ? 'text-white/68' : 'text-muted'}`}>
                {category.description}
              </span>
            ) : null}
          </button>
        )
      })}
    </div>
  )
}
