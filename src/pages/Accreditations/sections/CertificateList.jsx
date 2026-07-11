import { useState, useEffect, useRef } from 'react'
import { X, ZoomIn, Award, ShieldCheck, CheckCircle } from 'lucide-react'
import { certificates } from '../../../data/certificates'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { SafeImage } from '../../../components/ui/SafeImage'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function CertificateList() {
  const [activeCert, setActiveCert] = useState(null)
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCert(null)
      }
    }
    if (activeCert) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden' // lock scroll
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = '' // restore scroll
    }
  }, [activeCert])

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main">
        <SectionHeading
          eyebrow="Verification"
          title="International Standard Compliance and Certifications"
          className="mb-12"
        >
          <p>
            ERCON Industries is committed to delivering world-class electrical engineering equipment.
            Our products undergo rigorous testing and inspection to comply with leading global regulatory frameworks.
          </p>
        </SectionHeading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface-soft p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-card cursor-pointer"
              onClick={() => setActiveCert(cert)}
              data-reveal
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-dark/5">
                <SafeImage
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  width="400"
                  height="530"
                />
                <div className="absolute inset-0 bg-surface-dark/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand shadow-floating transform scale-75 transition-transform duration-300 group-hover:scale-100">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <div className="mt-5 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                    <Award size={14} />
                    <span>{cert.category}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-ink group-hover:text-brand transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle size={14} className="fill-emerald-50" />
                  <span>Verified Compliance</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-dark/90 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveCert(null)}
        >
          <button
            className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setActiveCert(null)}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          
          <div
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl bg-white p-3 shadow-floating animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[75vh] overflow-y-auto rounded-lg">
              <SafeImage
                src={activeCert.image}
                alt={activeCert.title}
                className="max-h-[72vh] w-auto object-contain mx-auto"
                width="800"
                height="1100"
              />
            </div>
            <div className="mt-4 border-t border-line pt-3 px-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h4 className="text-base font-bold text-ink">{activeCert.title}</h4>
                <p className="text-xs text-muted">{activeCert.issuer} — {activeCert.category}</p>
              </div>
              <div className="flex items-center gap-1.5 self-start sm:self-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
                <ShieldCheck size={14} />
                <span>Regulatory Compliant</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
