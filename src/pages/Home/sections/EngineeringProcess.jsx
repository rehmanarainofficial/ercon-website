import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { engineeringProcess } from '../../../data/process'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function EngineeringProcess() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-surface-soft section-space border-t border-line" ref={sectionRef}>
      <div className="container-main">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Engineering Process"
          title="From Brief to Handover"
          className="mb-12"
        >
          <p>
            We maintain a disciplined workflow to translate technical specifications into 
            standards-compliant power panels and structural metal fabrications.
          </p>
        </SectionHeading>

        {/* Process Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringProcess.map(({ description, icon: Icon, id, step, title }) => (
            <article
              key={id}
              className="group relative flex flex-col justify-between rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-card"
              data-reveal
            >
              <div>
                {/* Step Number Badge */}
                <div className="absolute top-4 right-6 text-6xl font-black text-ink/5 select-none transition-colors duration-300 group-hover:text-brand/8">
                  {step}
                </div>

                {/* Step Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand mb-5 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-bold leading-tight text-ink group-hover:text-brand transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>

              {/* Progress Connector Indicator (Only on desktop group hovers) */}
              <div className="mt-5 pt-3 border-t border-line/50 text-[10px] font-bold uppercase tracking-wider text-brand/60">
                Phase {step}
              </div>
            </article>
          ))}

          {/* Card 8: CTA Card to complete the 4-column grid balance */}
          <article
            className="group flex flex-col justify-between rounded-[var(--radius-card)] border border-dashed border-brand/40 bg-surface-blue/40 p-6 shadow-sm transition-all duration-300 hover:bg-surface-blue"
            data-reveal
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white mb-5">
                <HelpCircle size={22} />
              </div>
              
              <h3 className="text-xl font-bold leading-tight text-brand-dark">
                Have a Project Brief?
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Submit your drawing specifications or electrical single-line diagrams (SLDs) directly to our engineers.
              </p>
            </div>

            <div className="mt-6">
              <Link to="/contact-us" className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:text-brand-dark transition-all duration-200">
                <span>Start Project Consulting</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

