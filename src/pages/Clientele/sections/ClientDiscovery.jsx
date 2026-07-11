import { useRef } from 'react'
import { ClientEmptyState } from '../../../components/clientele/ClientEmptyState'
import { ClientLogoCard } from '../../../components/clientele/ClientLogoCard'
import { ClientSearch } from '../../../components/clientele/ClientSearch'
import { ClientSectorFilter } from '../../../components/clientele/ClientSectorFilter'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { clientSectors } from '../../../data/clientSectors'
import { clients } from '../../../data/clients'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function ClientDiscovery({
  activeSector,
  filteredClients,
  onClear,
  onSearchChange,
  onSectorChange,
  search,
}) {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.045 })

  const hasClientRecords = clients.length > 0

  return (
    <section className="bg-surface-soft section-space" ref={sectionRef}>
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_auto] lg:items-end">
          <SectionHeading
            eyebrow="Client directory"
            title="A structured logo directory for verified client records."
            headingClassName="max-w-4xl"
          >
            <p>
              Browse by sector or search verified client records. The grid only displays records with approved client names; missing logo artwork falls back to readable text.
            </p>
          </SectionHeading>
          <div className="text-sm leading-7 text-muted" data-reveal>
            <strong className="font-semibold text-ink">{filteredClients.length}</strong> visible of{' '}
            <strong className="font-semibold text-ink">{clients.length}</strong> verified records
          </div>
        </div>

        <div className="mt-10 grid gap-5" data-reveal>
          <ClientSectorFilter activeSector={activeSector} onChange={onSectorChange} sectors={clientSectors} />
          <ClientSearch count={filteredClients.length} onChange={onSearchChange} onClear={() => onSearchChange('')} search={search} />
        </div>

        <div className="mt-10" id="client-results">
          {filteredClients.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredClients.map((client, index) => (
                <ClientLogoCard client={client} index={index} key={client.id} />
              ))}
            </div>
          ) : (
            <div data-reveal>
              <ClientEmptyState hasClientRecords={hasClientRecords} onClear={onClear} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

