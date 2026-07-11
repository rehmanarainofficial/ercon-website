import { Button } from '../ui/Button'

export function ProductEmptyState({ onClear }) {
  return (
    <div className="rounded-[var(--radius-large)] border border-line bg-white p-8 text-center shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">No matching products</p>
      <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-ink">
        No products match the selected filters.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
        Clear the filters or contact ERCON for a product requirement that is not visible in this phase.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Button onClick={onClear} variant="secondary">
          Clear Filters
        </Button>
        <Button to="/contact-us">Contact Us</Button>
      </div>
    </div>
  )
}
