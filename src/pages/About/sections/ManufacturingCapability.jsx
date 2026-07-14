import { CheckCircle2, Shield } from 'lucide-react'
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
      {/* Decorative gradients */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/12 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-accent/8 blur-3xl pointer-events-none" />

      <div className="container-main relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Title, Description, and Features Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full" data-reveal>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide">
                {manufacturingCapability.label}
              </h2>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight">
                {manufacturingCapability.title}
              </h3>
              <p className="mt-6 text-base leading-8 text-white/70">
                {manufacturingCapability.description}
              </p>
            </div>

            {/* Features 3x2 Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {manufacturingCapability.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-brand-light/35 hover:bg-white/8"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-light/10 text-brand-light">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-medium text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Factory Image with Glass Overlay Card */}
          <div className="lg:col-span-5 relative" data-reveal>
            <ImageReveal className="bg-surface-dark-2 rounded-[var(--radius-card)] overflow-hidden">
              <SafeImage
                alt={manufacturingCapability.imageAlt}
                className="aspect-[4/5] h-full w-full object-cover opacity-88"
                height="900"
                src={manufacturingCapability.image}
                width="720"
              />
            </ImageReveal>
            
            {/* Glass Overlay Card */}
            <div className="absolute bottom-5 left-5 right-5">
              <GlassCard className="p-5 text-white/82 backdrop-blur-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-brand-light">
                    <Shield size={18} />
                  </div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-white">ISO 9001 Factory</p>
                </div>
                <p className="text-xs leading-relaxed text-white/68">
                  Our Karachi workshop is equipped with CNC shearing, bending, and specialized assembly bays to build electrical components that conform to IEC standards.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

