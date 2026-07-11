import { useRef } from 'react'
import { Award, ShieldCheck, CircuitBoard, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeIntroduction } from '../../../data/home'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function CompanyIntroduction() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  const trustMetrics = [
    {
      icon: Clock,
      label: 'Local Establishment',
      val: 'Since 2012 in Pakistan'
    },
    {
      icon: Award,
      label: 'Group Heritage',
      val: 'UAE & KSA since 2002'
    },
    {
      icon: ShieldCheck,
      label: 'Compliance',
      val: 'IEC 61439 Certified'
    },
    {
      icon: CircuitBoard,
      label: 'Core Expertise',
      val: 'LV/MV Switchgear Engineering'
    }
  ]

  return (
    <section className="bg-white section-space relative overflow-hidden" ref={sectionRef}>
      {/* Background Decorative Gradient */}
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
      
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading, Narrative, Trust Grid */}
          <div className="lg:col-span-6" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              {homeIntroduction.label}
            </p>
            <h2 className="text-[clamp(1.75rem,2.8vw,2.5rem)] font-extrabold text-ink leading-tight tracking-tight">
              Bringing Global Switchgear Engineering to Pakistan's Market
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Established in 2012 as an associated company of the ERCON Group, ERCON Industries focuses on custom switchgear manufacturing, solar energy support, and precision sheet metal fabrication. We combine our group's extensive Middle East heritage with local production facilities to deliver reliable power distribution solutions.
            </p>

            {/* Trust Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustMetrics.map((metric) => {
                const Icon = metric.icon
                return (
                  <div key={metric.label} className="flex items-start gap-3 rounded-2xl border border-line bg-surface-soft p-4 transition-colors duration-200 hover:bg-surface-blue/20">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted uppercase tracking-wider">{metric.label}</p>
                      <p className="text-xs font-extrabold text-brand-dark mt-0.5">{metric.val}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8">
              <Link to="/about-us" className="button-base button-primary inline-flex items-center gap-2">
                <span>Discover Our Journey</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: Image with Overlay Info Badge */}
          <div className="lg:col-span-6 relative" data-reveal>
            <div className="rounded-[var(--radius-card)] overflow-hidden border border-line shadow-card bg-surface-soft">
              <img
                alt={homeIntroduction.imageAlt}
                className="aspect-[4/3] h-full w-full object-cover opacity-95 transition-transform duration-500 hover:scale-103"
                loading="lazy"
                src={homeIntroduction.image}
              />
            </div>

            {/* Glass Badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block max-w-xs rounded-2xl border border-white/20 bg-white/76 p-5 shadow-floating backdrop-blur-md">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="h-2 w-2 rounded-full bg-brand animate-ping" />
                <p className="text-xs font-black text-brand-dark uppercase tracking-wider">Quality Operations</p>
              </div>
              <p className="text-xs leading-relaxed text-muted">
                Routine tests are conducted in-house using calibrated current injection kits to certify every panel before dispatch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


