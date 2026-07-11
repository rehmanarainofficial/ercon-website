import { ClipboardCheck, FileCheck2, Gauge, ShieldCheck } from 'lucide-react'
import { aboutMedia } from './about'

export const qualitySafety = {
  label: 'Quality and safety',
  title: 'Reliability starts before delivery.',
  description:
    'ERCON’s public positioning emphasizes quality, safety, performance, and standards-compliant solutions. Specific certificate titles and numbers should remain on the Accreditations page once verified.',
  image: aboutMedia.testing,
  imageAlt: 'Switchgear panel testing and inspection scene',
  pillars: [
    {
      id: 'inspection',
      title: 'Inspection Discipline',
      description: 'Manufacturing and assembly are supported by inspection-focused workflows.',
      icon: ClipboardCheck,
    },
    {
      id: 'testing',
      title: 'Testing Focus',
      description: 'Testing and technical checks help support reliable product operation.',
      icon: Gauge,
    },
    {
      id: 'safety',
      title: 'Safety Priority',
      description: 'Power distribution work is positioned around safe and durable electrical systems.',
      icon: ShieldCheck,
    },
    {
      id: 'documentation',
      title: 'Documented Evidence',
      description: 'Certificate previews link users toward formal accreditation review.',
      icon: FileCheck2,
    },
  ],
}
