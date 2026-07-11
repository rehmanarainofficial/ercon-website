import { useState } from 'react'

function ClientLogoFallback({ name }) {
  return (
    <div
      aria-label={`${name} logo unavailable`}
      className="grid min-h-24 w-full place-items-center rounded-2xl bg-surface-blue px-4 text-center text-sm font-bold text-brand-dark"
      role="img"
    >
      {name}
    </div>
  )
}

export function ClientLogoCard({ client, index = 0 }) {
  const [logoFailed, setLogoFailed] = useState(false)
  const hasLogo = Boolean(client.logo) && !logoFailed

  return (
    <article
      className="group flex min-h-56 flex-col justify-between rounded-[var(--radius-card)] border border-line bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card"
      data-reveal
    >
      <div className="grid min-h-28 place-items-center rounded-2xl bg-surface-soft p-5">
        {hasLogo ? (
          <img
            alt={client.logoAlt || `${client.name} logo`}
            className="max-h-20 w-full object-contain"
            height="120"
            loading={index < 8 ? 'eager' : 'lazy'}
            onError={() => setLogoFailed(true)}
            src={client.logo}
            width="220"
          />
        ) : (
          <ClientLogoFallback name={client.name} />
        )}
      </div>
      <div className="mt-5">
        <h3 className="text-base font-bold leading-tight text-ink">{client.name}</h3>
        {client.sectorLabel ? (
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand">{client.sectorLabel}</p>
        ) : null}
        {client.relationshipType ? (
          <p className="mt-3 text-sm leading-6 text-muted">{client.relationshipType}</p>
        ) : null}
      </div>
    </article>
  )
}
