export function SectorHighlightCard({ sector }) {
  const Icon = sector.icon

  return (
    <article className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card" data-reveal>
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
        <Icon aria-hidden="true" size={22} />
      </div>
      <h3 className="mt-6 text-xl font-bold leading-tight text-ink">{sector.label}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{sector.description}</p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
        {sector.clientCount} verified {sector.clientCount === 1 ? 'record' : 'records'}
      </p>
    </article>
  )
}
