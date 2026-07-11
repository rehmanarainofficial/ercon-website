import { Building2, Factory, HeartPulse, Landmark, RadioTower } from 'lucide-react'
import { clients } from './clients'

const sectorDefinitions = [
  {
    id: 'industries',
    slug: 'industries',
    label: 'Industries',
    description: 'Industrial facilities and manufacturing environments represented in ERCON public client-sector material.',
    icon: Factory,
  },
  {
    id: 'infrastructure',
    slug: 'infrastructure',
    label: 'Infrastructure',
    description: 'Infrastructure and project environments requiring electrical distribution and coordination.',
    icon: Building2,
  },
  {
    id: 'telecom-sector',
    slug: 'telecom-sector',
    label: 'Telecom Sector',
    description: 'Telecom-sector requirements where reliable electrical systems and enclosures may be relevant.',
    icon: RadioTower,
  },
  {
    id: 'health-sector',
    slug: 'health-sector',
    label: 'Health Sector',
    description: 'Healthcare-sector facilities that require careful electrical reliability and technical coordination.',
    icon: HeartPulse,
  },
  {
    id: 'government-sector',
    slug: 'government-sector',
    label: 'Government Sector',
    description: 'Public-sector and government-related requirements represented in ERCON public sector labels.',
    icon: Landmark,
  },
]

const countClients = (sectorId) => clients.filter((client) => client.sectorId === sectorId).length

export const clientSectors = sectorDefinitions.map((sector) => ({
  ...sector,
  clientCount: countClients(sector.id),
}))

export const allClientsSector = {
  id: 'all',
  slug: 'all',
  label: 'All Clients',
  description: 'Browse every verified client record currently available for display.',
  clientCount: clients.length,
}

export const clientSectorLabels = clientSectors.map((sector) => sector.label)

