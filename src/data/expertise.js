import { CircuitBoard, ClipboardCheck, Cog, Gauge } from 'lucide-react'
import { aboutMedia } from './about'

export const engineeringExpertise = {
  label: 'Engineering expertise',
  title: 'Technical work that connects products, projects, and reliable power distribution.',
  image: aboutMedia.testing,
  imageAlt: 'Engineer testing a blue electrical control panel',
  items: [
    {
      id: 'system-planning',
      title: 'System Planning',
      description:
        'Requirement analysis, product selection, and practical planning for electrical distribution needs.',
      icon: ClipboardCheck,
      highlights: ['Project requirements', 'Product fit', 'Technical coordination'],
    },
    {
      id: 'panel-engineering',
      title: 'Panel and Switchgear Engineering',
      description:
        'Engineering support around LV/MV switchgear, panels, and power distribution equipment.',
      icon: CircuitBoard,
      highlights: ['LV/MV focus', 'Electrical panels', 'Distribution control'],
    },
    {
      id: 'manufacturing-support',
      title: 'Manufacturing Support',
      description:
        'Technical coordination between fabrication, assembly, inspection, and project delivery.',
      icon: Cog,
      highlights: ['Fabrication', 'Assembly', 'Delivery support'],
    },
    {
      id: 'testing-readiness',
      title: 'Testing Readiness',
      description:
        'Quality and safety checks support dependable electrical equipment before handover.',
      icon: Gauge,
      highlights: ['Inspection', 'Testing', 'Performance focus'],
    },
  ],
}
