import { useState, useRef } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { jobs } from '../../../data/jobs'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function ApplicationForm({ selectedPosition, onResetPosition }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: selectedPosition || '',
    resumeLink: '',
    coverLetter: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  // Update position if user clicked a position in the job list
  if (selectedPosition && formData.position !== selectedPosition) {
    setFormData((prev) => ({ ...prev, position: selectedPosition }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        resumeLink: '',
        coverLetter: '',
      })
      if (onResetPosition) onResetPosition()
    }, 1500)
  }

  return (
    <section className="bg-white section-space border-t border-line" ref={sectionRef} id="career-application-form">
      <div className="container-main max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Application"
          title="Submit Your Application"
          align="center"
          className="mb-12"
        >
          <p className="mx-auto">
            Fill out the form below to apply. If your profile matches our requirements, 
            our HR team will contact you for a technical assessment and interview.
          </p>
        </SectionHeading>

        <form
          onSubmit={handleSubmit}
          className="rounded-[var(--radius-card)] border border-line bg-surface-soft p-6 sm:p-10 shadow-sm"
          data-reveal
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                Full Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 transition focus:border-brand focus:outline-none disabled:opacity-50"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                Email Address <span className="text-brand">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 transition focus:border-brand focus:outline-none disabled:opacity-50"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                Phone Number <span className="text-brand">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 transition focus:border-brand focus:outline-none disabled:opacity-50"
              />
            </div>

            {/* Position Select */}
            <div>
              <label htmlFor="position" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                Applying For <span className="text-brand">*</span>
              </label>
              <select
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink transition focus:border-brand focus:outline-none disabled:opacity-50"
              >
                <option value="">Select a position...</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
                <option value="General Engineering Application">General Application (Engineering)</option>
                <option value="General Workshop/Operator Application">General Application (Factory/Workshop)</option>
              </select>
            </div>

            {/* Resume Link */}
            <div className="sm:col-span-2">
              <label htmlFor="resumeLink" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                Resume Link <span className="text-brand">*</span>
              </label>
              <input
                type="url"
                id="resumeLink"
                name="resumeLink"
                required
                value={formData.resumeLink}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 transition focus:border-brand focus:outline-none disabled:opacity-50"
              />
            </div>

            {/* Cover Letter / Message */}
            <div className="sm:col-span-2">
              <label htmlFor="coverLetter" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                Cover Letter / Cover Message
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={5}
                value={formData.coverLetter}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 transition focus:border-brand focus:outline-none disabled:opacity-50 resize-y"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-base button-primary min-w-[160px] cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Application</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-dark/80 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl p-8 shadow-floating text-center border border-line animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 mb-6">
              <CheckCircle2 size={36} />
            </div>
            
            <h3 className="text-2xl font-black text-ink">Application Submitted!</h3>
            
            <p className="mt-4 text-sm leading-6 text-muted">
              Thank you for applying to ERCON Industries. We have received your details and resume. 
              Our recruitment team will review your application and reach out if your experience aligns with our requirements.
            </p>

            <div className="mt-8 flex gap-3 justify-center">
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="button-base button-secondary w-full"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
