import { CheckCircle2 } from 'lucide-react'
import { useRef } from 'react'
import { ImageReveal } from '../../../components/animation/ImageReveal'
import { GlassCard } from '../../../components/ui/GlassCard'
import { SafeImage } from '../../../components/ui/SafeImage'
import { manufacturingCapability } from '../../../data/manufacturing'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function ManufacturingCapability() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="relative overflow-hidden bg-surface-dark text-white section-space" ref={sectionRef}>
      <div className="absolute inset-0 technical-grid opacity-20" />
      <div className="container-main relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(340px,0.55fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light" data-reveal>
              {manufacturingCapability.label}
            </p>
            <h2 className="mt-5 text-section font-bold text-white" data-reveal>
              {manufacturingCapability.title}
            </h2>
            <p className="mt-7 max-w-3xl text-body-fluid leading-8 text-white/68" data-reveal>
              {manufacturingCapability.description}
            </p>
          </div>
          <GlassCard className="p-5" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-light">Manufacturing focus</p>
            <div className="mt-5 grid gap-3">
              {manufacturingCapability.features.slice(0, 4).map((feature) => (
                <div className="flex items-center gap-3 text-sm text-white/76" key={feature}>
                  <CheckCircle2 aria-hidden="true" className="text-brand-light" size={18} />
                  {feature}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.42fr]">
          <ImageReveal className="bg-surface-dark-2">
            <SafeImage
              alt={manufacturingCapability.imageAlt}
              className="aspect-[16/9] h-full w-full object-cover"
              height="900"
              src={manufacturingCapability.image}
              width="1600"
            />
          </ImageReveal>
          <div className="grid gap-3">
            {manufacturingCapability.features.slice(4).map((feature) => (
              <div className="rounded-2xl border border-white/12 bg-white/7 p-5 text-sm font-medium text-white/72" data-reveal key={feature}>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
