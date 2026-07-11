import { Building2 } from 'lucide-react'
import { useRef } from 'react'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { TextLink } from '../../../components/ui/TextLink'
import { clientSectorLabels } from '../../../data/clientSectors'
import { featuredClients } from '../../../data/clients'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function ClientelePreview() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.06 })

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_auto] lg:items-end">
          <SectionHeading eyebrow="Clientele" title="A verified client-logo directory is prepared for approved assets.">
            <p>
              ERCON’s public client-sector structure is ready for verified names and logo files. The preview avoids fabricated client
              claims and will show real logos as soon as approved records are added.
            </p>
          </SectionHeading>
          <div data-reveal>
            <TextLink to="/clientele">View Our Clientele</TextLink>
          </div>
        </div>

        {featuredClients.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {featuredClients.map((client) => (
              <article className="grid min-h-32 place-items-center rounded-[var(--radius-card)] border border-line bg-white p-6" data-reveal key={client.id}>
                <img alt={`${client.name} logo`} className="max-h-16 w-full object-contain" src={client.logo} />
              </article>
            ))}
          </div>
        ) : (
          <div data-reveal className="mt-12 rounded-[var(--radius-large)] border border-line bg-white p-6 shadow-card">
            <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
              <div className="rounded-[var(--radius-card)] bg-surface-dark p-6 text-white">
                <div className="mb-10 grid h-12 w-12 place-items-center rounded-2xl bg-white/12 text-brand-light">
                  <Building2 aria-hidden="true" size={24} />
                </div>
                <h3 className="text-2xl font-bold leading-tight">Verified client logos pending</h3>
                <p className="mt-4 text-sm leading-7 text-white/66">
                  The section structure is complete without displaying unverified client claims.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {clientSectorLabels.map((sector) => (
                  <div className="rounded-2xl border border-line bg-surface-blue px-4 py-5 text-center text-sm font-semibold text-brand-dark" key={sector}>
                    {sector}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
