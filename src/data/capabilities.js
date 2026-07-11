import { BadgeCheck, Cable, CircuitBoard, Factory, Gauge, Headphones, ShieldCheck, Zap } from 'lucide-react'

export const capabilities = [
  {
    id: 'electrical-engineering',
    title: 'Electrical Engineering',
    description:
      'Engineering-led power distribution solutions for industrial and infrastructure requirements.',
    icon: Zap,
    verified: true,
  },
  {
    id: 'switchgear-manufacturing',
    title: 'LV/MV Switchgear Manufacturing',
    description:
      'Manufacturing focus across low-voltage and medium-voltage switchgear and electrical panels.',
    icon: CircuitBoard,
    verified: true,
  },
  {
    id: 'power-distribution',
    title: 'Power Distribution Systems',
    description:
      'Integrated systems that support safe, reliable control and protection of electrical equipment.',
    icon: Gauge,
    verified: true,
  },
  {
    id: 'sheet-metal-fabrication',
    title: 'Sheet Metal Fabrication',
    description:
      'Precision fabrication capability for cabinets, enclosures, and related electrical manufacturing needs.',
    icon: Factory,
    verified: true,
  },
  {
    id: 'cable-management',
    title: 'Cable Management',
    description:
      'Cable tray and cable management solutions for organized project execution and maintainable installations.',
    icon: Cable,
    verified: true,
  },
  {
    id: 'quality-safety',
    title: 'Quality and Safety Focus',
    description:
      'Public company messaging emphasizes quality, safety, performance, and standards-compliant solutions.',
    icon: ShieldCheck,
    verified: true,
  },
  {
    id: 'technical-team',
    title: 'Skilled Technical Team',
    description:
      'A technical team and advanced production setup support localized manufacturing in Pakistan.',
    icon: BadgeCheck,
    verified: true,
  },
  {
    id: 'support',
    title: 'Project and Technical Support',
    description:
      'Support-oriented delivery for product inquiries, project requirements, and engineered solutions.',
    icon: Headphones,
    verified: true,
  },
]
