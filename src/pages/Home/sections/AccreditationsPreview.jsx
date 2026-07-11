import { Award } from 'lucide-react'
import { useRef } from 'react'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { SafeImage } from '../../../components/ui/SafeImage'
import { TextLink } from '../../../components/ui/TextLink'
import { certificates } from '../../../data/certificates'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function AccreditationsPreview() {
  const sectionRef = useRef(null)
  const featured = certificates.filter((certificate) => certificate.featured).slice(0, 3)
  useScrollReveal(sectionRef, { stagger: 0.06 })

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_auto] lg:items-end">
          <SectionHeading eyebrow="Accreditations" title="Public certificate assets prepared for detailed verification.">
            <p>
              Certificate images are sourced from ERCON’s current public accreditations page. Issuers and certificate numbers should
              be transcribed from source documents in the Accreditations phase.
            </p>
          </SectionHeading>
          <div data-reveal>
            <TextLink to="/accreditations">View All Accreditations</TextLink>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featured.map((certificate, index) => (
            <article
              className={`rounded-[var(--radius-card)] border border-line bg-surface-soft p-4 transition duration-300 hover:-translate-y-1 hover:border-brand/30 ${
                index === 0 ? 'lg:col-span-1' : ''
              }`}
              data-reveal
              key={certificate.id}
            >
              <div className="overflow-hidden rounded-[1.25rem] bg-white">
                <SafeImage
                  alt={`${certificate.title} preview`}
                  className="aspect-[3/4] w-full object-contain p-4"
                  height="720"
                  src={certificate.image}
                  width="540"
                />
              </div>
              <div className="pt-5">
                <div className="flex items-center gap-2 text-brand">
                  <Award aria-hidden="true" size={18} />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">{certificate.category}</p>
                </div>
                <h3 className="mt-3 text-xl font-bold leading-tight text-ink">{certificate.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{certificate.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
