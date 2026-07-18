import { SplitHeading } from '../animation/SplitHeading'

export function PageHero({
  eyebrow,
  title,
  description,
  bgImage,
}) {
  return (
    <section className="relative isolate min-h-[50vh] overflow-hidden bg-surface-dark pt-28 text-white sm:min-h-[60vh] sm:pt-36 lg:min-h-[70vh]">
      {bgImage && (
        <div className="absolute inset-0 -z-10">
          <img
            alt="Page Hero Background"
            className="h-full w-full object-cover opacity-60 saturate-110"
            src={bgImage}
          />
        </div>
      )}
      <div className="absolute inset-0 -z-10 technical-grid opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgb(76_175_80/0.24),transparent_34rem),radial-gradient(circle_at_86%_20%,rgb(22_58_95/0.34),transparent_28rem),linear-gradient(150deg,rgb(22_58_95/0.95)_0%,rgb(22_58_95/0.78)_42%,rgb(15_107_74/0.25)_100%)]" />
      <div className="container-main grid gap-8 pb-14 sm:gap-12 sm:pb-20 lg:grid-cols-1">
        <div>
          {eyebrow && (
            <p className="mb-4 text-sm font-bold tracking-[0.08em] text-white sm:mb-5 sm:text-xl sm:tracking-[0.16em]">
              {eyebrow}
            </p>
          )}
          <SplitHeading
            as="h1"
            className="max-w-5xl text-[clamp(1.75rem,7.2vw,2.35rem)] font-bold leading-[1.13] text-white sm:text-[clamp(2rem,4.2vw,3.65rem)] sm:leading-tight"
            text={title}
          />
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/72 sm:mt-6 sm:text-body-fluid sm:leading-8">{description}</p>
        
        </div>
      </div>
    </section>
  )
}
