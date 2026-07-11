import { useState, useRef } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const formRef = useRef(null)
  useScrollReveal(formRef, { stagger: 0.05 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div ref={formRef}>
      <form
        onSubmit={handleSubmit}
        className="rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-8 shadow-sm flex flex-col gap-6"
        data-reveal
      >
        <h3 className="text-xl font-bold text-ink">Send an Inquiry</h3>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
              Full Name <span className="text-brand">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full rounded-xl border border-line bg-surface-soft px-4 py-3 text-sm text-ink placeholder-muted/60 transition focus:border-brand focus:bg-white focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
              Email Address <span className="text-brand">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full rounded-xl border border-line bg-surface-soft px-4 py-3 text-sm text-ink placeholder-muted/60 transition focus:border-brand focus:bg-white focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
              Phone Number <span className="text-brand">*</span>
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full rounded-xl border border-line bg-surface-soft px-4 py-3 text-sm text-ink placeholder-muted/60 transition focus:border-brand focus:bg-white focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="contact-company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full rounded-xl border border-line bg-surface-soft px-4 py-3 text-sm text-ink placeholder-muted/60 transition focus:border-brand focus:bg-white focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Inquiry Type */}
          <div className="sm:col-span-2">
            <label htmlFor="contact-inquiryType" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
              Inquiry Type <span className="text-brand">*</span>
            </label>
            <select
              id="contact-inquiryType"
              name="inquiryType"
              required
              value={formData.inquiryType}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full rounded-xl border border-line bg-surface-soft px-4 py-3 text-sm text-ink transition focus:border-brand focus:bg-white focus:outline-none disabled:opacity-50"
            >
              <option value="">Select inquiry purpose...</option>
              <option value="Request a Quote">Request a Quote / RFP</option>
              <option value="Product Details">Product Information</option>
              <option value="Custom Sheet Metal Fabrication">Custom Sheet Metal Fabrication</option>
              <option value="Solar Solutions">Solar Energy System Integration</option>
              <option value="Careers Inquiry">Careers & Hiring</option>
              <option value="General Support">General Support & Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
              Your Message <span className="text-brand">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full rounded-xl border border-line bg-surface-soft px-4 py-3 text-sm text-ink placeholder-muted/60 transition focus:border-brand focus:bg-white focus:outline-none disabled:opacity-50 resize-y"
            />
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="button-base button-primary min-w-[160px] cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>

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
            
            <h3 className="text-2xl font-black text-ink">Message Sent!</h3>
            
            <p className="mt-4 text-sm leading-6 text-muted">
              Thank you for contacting ERCON Industries. Your message has been sent successfully. 
              Our sales and technical support representatives will review your inquiry and get back to you shortly.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="button-base button-secondary w-full"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
