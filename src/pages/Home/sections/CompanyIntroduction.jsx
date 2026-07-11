import { useRef } from 'react'
import { Award, ShieldCheck, CircuitBoard, Sun, Layers, Hammer, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeIntroduction } from '../../../data/home'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const coreDivisions = [
  {
    id: 'switchgears',
    title: 'LV/MV Switchgears',
    description: 'Custom-designed electrical control boards, motor control centers (MCCs), and main distribution panels conforming to IEC standards.',
    icon: CircuitBoard,
    badge: 'Core Division'
  },
  {
    id: 'fabrication',
    title: 'Sheet Metal Fabrication',
    description: 'Precision CNC punching, laser cutting, bending, and powder coating for premium quality industrial enclosures and cabinets.',
    icon: Hammer,
    badge: 'Precision'
  },
  {
    id: 'solar',
    title: 'Solar Energy Systems',
    description: 'On-grid, off-grid, and hybrid solar power solutions engineered for industrial setups and commercial facilities.',
    icon: Sun,
    badge: 'Sustainable'
  },
  {
    id: 'cable',
    title: 'Cable Management',
    description: 'High-durability perforated, ladder, and wire-mesh cable trays designed for heavy-duty industrial wiring layouts.',
    icon: Layers,
    badge: 'Infrastructure'
  }
]

export function CompanyIntroduction() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-white section-space relative overflow-hidden" ref={sectionRef}>
      {/* Background Decorative Gradient */}
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
      
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Bold headings & trust indicators */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full" data-reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                {homeIntroduction.label}
              </p>
              <h2 className="text-section font-bold text-ink leading-tight">
                {homeIntroduction.title}
              </h2>
              <p className="mt-6 text-base leading-8 text-muted">
                {homeIntroduction.description}
              </p>
            </div>

            {/* Modern Trust Badges */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface-soft p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink uppercase tracking-wider">Established</p>
                  <p className="text-sm font-extrabold text-brand-dark mt-0.5">2012 in Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface-soft p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink uppercase tracking-wider">Heritage</p>
                  <p className="text-sm font-extrabold text-brand-dark mt-0.5">ERCON Group UAE/KSA</p>
                </div>
              </div>
            </div>

            <div className="mt-8 self-start">
              <Link to="/about-us" className="button-base button-primary">
                <span>Discover Our Journey</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: Division Cards */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {coreDivisions.map((div) => {
              const Icon = div.icon
              return (
                <article
                  key={div.id}
                  className="group relative rounded-[var(--radius-card)] border border-line bg-surface-soft p-6 transition-all duration-300 hover:border-brand/30 hover:bg-white hover:shadow-card"
                  data-reveal
                >
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-line text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                      {div.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold leading-tight text-ink transition-colors duration-300 group-hover:text-brand">
                    {div.title}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {div.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

