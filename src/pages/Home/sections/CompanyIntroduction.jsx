import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeIntroduction } from '../../../data/home'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function CompanyIntroduction() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-white section-space relative overflow-hidden" ref={sectionRef}>
      {/* Background Decorative Gradient */}
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
      
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading, Narrative */}
          <div className="lg:col-span-6" data-reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide">
              {homeIntroduction.label}
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug tracking-tight">
              {homeIntroduction.title}
            </h3>
            <p className="mt-5 text-md leading-relaxed text-muted text-justify">
              {homeIntroduction.description1}
            </p>
            <p className="mt-4 text-md leading-relaxed text-muted text-justify">
              {homeIntroduction.description2}
            </p>

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
                <p className="text-xs font-black text-brand-dark tracking-wider">Quality Operations</p>
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
