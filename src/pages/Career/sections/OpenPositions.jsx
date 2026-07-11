import { useState, useRef } from 'react'
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { jobs } from '../../../data/jobs'

export function OpenPositions({ onSelectPosition }) {
  const [expandedJobId, setExpandedJobId] = useState(null)
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  const toggleJob = (id) => {
    setExpandedJobId((prev) => (prev === id ? null : id))
  }

  const handleApplyClick = (jobTitle) => {
    onSelectPosition(jobTitle)
    // Scroll to the application form
    const formElement = document.getElementById('career-application-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-surface-soft section-space border-t border-line" ref={sectionRef} id="open-positions">
      <div className="container-main">
        <SectionHeading
          eyebrow="Open Roles"
          title="Current Opportunities"
          className="mb-12"
        >
          <p>
            Explore our open vacancies and join our Karachi factory or office team. 
            Select a position to view responsibilities and submit your application.
          </p>
        </SectionHeading>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {jobs.map((job) => {
            const isExpanded = expandedJobId === job.id
            return (
              <article
                key={job.id}
                className={`rounded-[var(--radius-card)] border bg-white overflow-hidden transition-all duration-350 ${
                  isExpanded ? 'border-brand shadow-card' : 'border-line hover:border-brand/40 shadow-sm'
                }`}
                data-reveal
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div>
                    <h3 className="text-xl font-bold leading-snug text-ink hover:text-brand transition-colors duration-200">
                      {job.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold text-muted">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} className="text-brand/70" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-brand/70" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} className="text-brand/70" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-end md:self-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand md:block hidden">
                      {isExpanded ? 'Collapse Details' : 'View Details'}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft border border-line text-ink">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-350 ease-in-out ${
                    isExpanded ? 'max-h-[1000px] opacity-100 border-t border-line p-6 bg-surface-soft/30' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-base text-ink leading-relaxed mb-6 font-medium">
                    {job.description}
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-extrabold uppercase tracking-wider text-ink mb-3">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted leading-relaxed pl-1">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="text-muted list-item">{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold uppercase tracking-wider text-ink mb-3">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted leading-relaxed pl-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="text-muted list-item">{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end border-t border-line pt-5">
                    <button
                      onClick={() => handleApplyClick(job.title)}
                      className="button-base button-primary"
                    >
                      <span>Apply for this Role</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
