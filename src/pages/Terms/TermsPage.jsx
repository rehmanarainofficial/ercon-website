import { useRef } from 'react'
import { PageHero } from '../../components/ui/PageHero'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function TermsPage() {
  const containerRef = useRef(null)
  useScrollReveal(containerRef, { stagger: 0.05 })

  return (
    <article className="bg-surface-soft min-h-screen pb-20" ref={containerRef}>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms and conditions carefully before using our services."
      />
      
      <div className="container-main mt-12 max-w-4xl bg-white p-8 md:p-12 rounded-[var(--radius-card)] border border-line shadow-sm" data-reveal>
        <div className="prose prose-slate max-w-none text-sm leading-relaxed text-muted space-y-6">
          <p className="text-xs text-brand font-bold uppercase tracking-wider">Last updated: July 11, 2026</p>
          
          <h2 className="text-xl font-bold text-ink pt-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using the website of ERCON Industries (Pvt.) Limited, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the website or use our services.
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">2. Intellectual Property Rights</h2>
          <p>
            All content, brand logos, product designs, technical specifications, and imagery displayed on this website are the intellectual property of ERCON Industries (Pvt.) Limited and the ERCON Group. You may not reproduce, distribute, or modify any content without explicit written permission.
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">3. Product Specifications and Technical Data</h2>
          <p>
            While we strive to ensure that all information regarding our LV/MV switchgear, cable management systems, and other electrical solutions is accurate, all specifications, drawings, and technical parameters are for general informational purposes and subject to refinement during custom consulting and brief approvals.
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">4. Limitation of Liability</h2>
          <p>
            In no event shall ERCON Industries (Pvt.) Limited or its associated group companies be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use this website, including but not limited to reliance on product catalogs or drawings.
          </p>

          <h2 className="text-xl font-bold text-ink pt-4">5. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of Pakistan. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the competent courts in Karachi.
          </p>
        </div>
      </div>
    </article>
  )
}
