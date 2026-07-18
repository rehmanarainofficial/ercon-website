import { CircuitBoard, ClipboardCheck, Cog, Gauge } from 'lucide-react'
import { aboutMedia } from './about'

export const engineeringExpertise = {
  label: 'Engineering & Technical Excellence',
  title: 'Engineering excellence is at the core of ERCON Industries (Pvt.) Limited.',
  description:
    'Our experienced engineers utilize advanced design tools including AutoCAD, ETAP, E-Design, Rhapsody, Sirius, SolidWorks, and integrated resource planning systems to develop safe, reliable, and standards-compliant power distribution solutions. From design and engineering to manufacturing, testing, and commissioning, we deliver products that ensure superior performance, quality, and long-term reliability.',
  tools: ['AutoCAD', 'ETAP', 'E-Design', 'Rhapsody', 'Sirius', 'SolidWorks', 'Integrated resource planning systems'],
  image: aboutMedia.testing,
  imageAlt: 'Engineer testing a blue electrical control panel',
  items: [
    {
      id: 'system-planning',
      title: 'Design & Engineering',
      description:
        'Advanced design and engineering workflows for safe, reliable, and standards-compliant power distribution solutions.',
      icon: ClipboardCheck,
      highlights: ['Design tools', 'System analysis', 'Standards compliance'],
    },
    {
      id: 'panel-engineering',
      title: 'Manufacturing Coordination',
      description:
        'Technical coordination between engineering, fabrication, assembly, and production teams.',
      icon: CircuitBoard,
      highlights: ['LV/MV switchgear', 'Busway systems', 'Fabrication'],
    },
    {
      id: 'manufacturing-support',
      title: 'Testing & Commissioning',
      description:
        'Testing and commissioning support to verify performance, quality, and long-term reliability.',
      icon: Cog,
      highlights: ['Inspection', 'Testing', 'Commissioning'],
    },
    {
      id: 'testing-readiness',
      title: 'Performance Assurance',
      description:
        'Engineering-led quality checks that support dependable operation in demanding project environments.',
      icon: Gauge,
      highlights: ['Reliability', 'Safety', 'Long-term performance'],
    },
  ],
}
