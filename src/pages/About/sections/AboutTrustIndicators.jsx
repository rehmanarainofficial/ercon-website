import { homeStatistics } from '../../../data/statistics'

export function AboutTrustIndicators() {
  return (
    <section className="bg-surface-blue py-16">
      <div className="container-main">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeStatistics.map((stat) => (
            <article className="rounded-[var(--radius-card)] bg-white p-6 shadow-card" key={stat.id}>
              <p className="text-[clamp(2rem,4vw,4.8rem)] font-bold leading-none text-brand">{stat.value}{stat.suffix}</p>
              <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">{stat.label}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
