import { Award } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SafeImage } from '../../../components/ui/SafeImage'
import { certificates } from '../../../data/certificates'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function AboutAccreditationsCTA() {
  const sectionRef = useRef(null)
  const featured = certificates.slice(0, 2)
  useScrollReveal(sectionRef)

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main rounded-[var(--radius-large)] border border-line bg-surface-dark p-6 text-white sm:p-10">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.72fr)_minmax(300px,0.46fr)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light" data-reveal>
              Accreditations
            </p>
            <h2 className="mt-5 text-section font-bold text-white" data-reveal>
              Quality claims should connect to documented evidence.
            </h2>
            <p className="mt-6 max-w-2xl text-body-fluid leading-8 text-white/66" data-reveal>
              ERCON’s certificate previews are linked through the Accreditations route for detailed verification in its own phase.
            </p>
            <Link className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand transition hover:-translate-y-0.5" data-reveal to="/accreditations">
              <Award aria-hidden="true" size={18} />
              Explore Accreditations
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4" data-reveal>
            {featured.map((certificate) => (
              <div className="overflow-hidden rounded-2xl bg-white p-3" key={certificate.id}>
                <SafeImage
                  alt={`${certificate.title} preview`}
                  className="aspect-[3/4] w-full object-contain"
                  height="520"
                  src={certificate.image}
                  width="390"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
