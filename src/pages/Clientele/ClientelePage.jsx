import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ClientDiscovery } from './sections/ClientDiscovery'
import { ClientRelationshipStatement } from './sections/ClientRelationshipStatement'
import { ClientTrustStatement } from './sections/ClientTrustStatement'
import { ClienteleCTA } from './sections/ClienteleCTA'
import { ClienteleHero } from './sections/ClienteleHero'
import { SectorHighlights } from './sections/SectorHighlights'
import { clientSectors } from '../../data/clientSectors'
import { clienteleSeo } from '../../data/clientele'
import { clients } from '../../data/clients'
import { useRouteMeta } from '../../hooks/useRouteMeta'
import { filterClients } from '../../utils/clientFilters'

const validSectorIds = new Set(['all', ...clientSectors.map((sector) => sector.id)])

export default function ClientelePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedSector = searchParams.get('sector') || 'all'
  const activeSector = validSectorIds.has(requestedSector) ? requestedSector : 'all'
  const search = searchParams.get('search') || ''

  useRouteMeta({
    canonical: clienteleSeo.canonical,
    description: clienteleSeo.description,
    ogDescription: clienteleSeo.description,
    ogImage: clienteleSeo.ogImage,
    ogTitle: clienteleSeo.title,
    title: clienteleSeo.title,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'ERCON Industries Clientele',
      url: clienteleSeo.canonical,
    },
  })

  const filteredClients = useMemo(
    () => filterClients(clients, { search, sector: activeSector }),
    [activeSector, search],
  )

  const updateParams = (next) => {
    setSearchParams((current) => {
      const params = new URLSearchParams(current)

      Object.entries(next).forEach(([key, value]) => {
        if (!value || value === 'all') {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      })

      return params
    })
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <ClienteleHero />
      <ClientTrustStatement />
      <ClientDiscovery
        activeSector={activeSector}
        filteredClients={filteredClients}
        onClear={clearFilters}
        onSearchChange={(value) => updateParams({ search: value.trim() })}
        onSectorChange={(sector) => updateParams({ sector })}
        search={search}
      />
      <SectorHighlights />
      <ClientRelationshipStatement />
      <ClienteleCTA />
    </article>
  )
}
