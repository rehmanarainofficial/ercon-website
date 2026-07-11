import { CircuitBoard } from 'lucide-react'
import { Button } from './Button'
import { GlassCard } from './GlassCard'
import { SplitHeading } from '../animation/SplitHeading'

export function PageHero({ eyebrow, title, description, ctaLabel = 'Contact ERCON', ctaTo = '/contact-us' }) {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-surface-dark pt-36 text-white sm:pt-40">
      <div className="absolute inset-0 -z-10 technical-grid opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgb(45_139_208_/_0.34),transparent_34rem),radial-gradient(circle_at_86%_20%,rgb(100_108_255_/_0.24),transparent_28rem),linear-gradient(150deg,#061b2d_0%,#0a2438_52%,#102d43_100%)]" />
      <div className="container-main grid gap-12 pb-20 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
            {eyebrow}
          </p>
          <SplitHeading
            as="h1"
            className="text-page max-w-5xl font-bold text-white"
            text={title}
          />
          <p className="mt-7 max-w-2xl text-body-fluid leading-8 text-white/72">{description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/products">Explore Products</Button>
            <Button to={ctaTo} variant="dark">
              {ctaLabel}
            </Button>
          </div>
        </div>
        <GlassCard className="p-6 text-white/82">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-brand-light">
            <CircuitBoard aria-hidden="true" size={24} />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Phase 1 Ready</p>
          <p className="mt-4 text-sm leading-7 text-white/68">
            Routing, layout, motion setup, responsive navigation, and design tokens are prepared for verified ERCON content.
          </p>
        </GlassCard>
      </div>
    </section>
  )
}
