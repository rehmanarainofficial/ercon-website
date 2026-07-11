import { Search, X } from 'lucide-react'

export function ClientSearch({ count, onChange, onClear, search }) {
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-white p-4 shadow-card">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="relative block">
          <span className="sr-only">Search clients</span>
          <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input
            className="min-h-12 w-full rounded-full border border-line bg-surface-soft py-3 pl-12 pr-12 text-sm text-ink outline-none transition focus:border-brand"
            onChange={(event) => onChange(event.target.value)}
            placeholder="Search verified client records..."
            type="search"
            value={search}
          />
          {search ? (
            <button
              aria-label="Clear client search"
              className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-muted transition hover:bg-surface-blue hover:text-brand"
              onClick={onClear}
              type="button"
            >
              <X aria-hidden="true" size={16} />
            </button>
          ) : null}
        </label>
        <p aria-live="polite" className="text-sm font-semibold text-muted">
          {count} {count === 1 ? 'client' : 'clients'} shown
        </p>
      </div>
    </div>
  )
}

