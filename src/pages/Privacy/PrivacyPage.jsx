import { useRef } from 'react'
import { PageHero } from '../../components/ui/PageHero'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function PrivacyPage() {
  const containerRef = useRef(null)
  useScrollReveal(containerRef, { stagger: 0.05 })

  return (
    <article className="bg-surface-soft min-h-screen pb-20" ref={containerRef}>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="We respect your privacy and are committed to protecting your personal data."
      />
      
      <div className="container-main mt-12 max-w-4xl bg-white p-8 md:p-12 rounded-[var(--radius-card)] border border-line shadow-sm" data-reveal>
        <div className="prose prose-slate max-w-none text-sm leading-relaxed text-muted space-y-6">
          <p className="text-xs text-brand font-bold uppercase tracking-wider">Last updated: July 11, 2026</p>
          
          <h2 className="text-xl font-bold text-ink pt-4">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when submitting inquiries through our Contact Form or applying for jobs through our Careers Application Form. This information may include your name, email address, phone number, company name, and files (such as drawings, resumes, or product briefs).
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">2. How We Use Your Information</h2>
          <p>
            We use the collected data exclusively to process your inquiries, provide accurate pricing quotes for custom switchgears, coordinate project logistics, and evaluate your candidacy for career opportunities within ERCON Industries (Pvt.) Limited.
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">3. Data Sharing and Protection</h2>
          <p>
            Your information is kept secure and confidential. We do not sell, rent, or trade your personal data to third parties. We may share information with our associated ERCON Group entities in the UAE and KSA solely for technical consulting and project verification purposes.
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">4. Cookies and Analytical Tools</h2>
          <p>
            Our website may use basic cookies or tracking tools to improve your browsing experience, analyze traffic patterns, and optimize load speeds. You can choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">5. Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at <a href="mailto:info@erconind.com" className="text-brand hover:underline font-semibold">info@erconind.com</a>.
          </p>
        </div>
      </div>
    </article>
  )
}
