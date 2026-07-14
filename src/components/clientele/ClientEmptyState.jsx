import { Button } from '../ui/Button'

export function ClientEmptyState({ hasClientRecords, onClear }) {
  return (
    <div className="rounded-[var(--radius-large)] border border-line bg-white p-8 text-center shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {hasClientRecords ? 'No matching clients' : 'Client logos pending'}
      </p>
      <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-ink">
        {hasClientRecords ? 'No clients match the selected filters.' : 'Verified client logo assets are not available in this workspace yet.'}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
        {hasClientRecords
          ? 'Clear the filters or contact ERCON for a project requirement that is not visible in the directory.'
          : 'The page is ready for the assets folder. Once approved client logo files and names are added to the central data file, this directory will render the real logos without layout changes.'}
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Button onClick={onClear} variant="secondary">
          Clear Filters
        </Button>
        <Button to="/contact-us">Contact Us</Button>
        <Button to="/products" variant="secondary">
          Explore Division
        </Button>
      </div>
    </div>
  )
}

