import { useState, useEffect, useRef } from 'react'
import { X, ZoomIn } from 'lucide-react'
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
      document.body.style.overflow = 'hidden' 
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = '' 
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
            Our certifications and approvals reflect our commitment to engineering excellence, international quality standards, and reliable manufacturing for every project.
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
            <div className="max-h-[80vh] overflow-y-auto rounded-lg">
              <SafeImage
                src={activeCert.image}
                alt={activeCert.title}
                className="max-h-[77vh] w-auto object-contain mx-auto"
                width="800"
                height="1100"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
