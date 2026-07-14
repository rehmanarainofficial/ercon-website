import { SplitHeading } from '../animation/SplitHeading'

export function PageHero({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="relative isolate min-h-[60vh] lg:min-h-[70vh] overflow-hidden bg-surface-dark pt-32 text-white sm:pt-36">
      <div className="absolute inset-0 -z-10 technical-grid opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgb(45_163_119/0.34),transparent_34rem),radial-gradient(circle_at_86%_20%,rgb(16_185_129/0.24),transparent_28rem),linear-gradient(150deg,#051610_0%,#092218_52%,#102f22_100%)]" />
      <div className="container-main grid gap-12 pb-20 lg:grid-cols-1">
        <div>
          {eyebrow && (
            <p className="mb-5 text-xl font-bold tracking-[0.16em] text-white">
              {eyebrow}
            </p>
          )}
          <SplitHeading
            as="h1"
            className="text-[clamp(2rem,4.2vw,3.65rem)] max-w-5xl font-bold text-white leading-tight"
            text={title}
          />
          <p className="mt-6 max-w-2xl text-body-fluid leading-8 text-white/72">{description}</p>
        
        </div>
      </div>
    </section>
  )
}

