import { ClipboardCheck, FileCheck2, Gauge, ShieldCheck } from 'lucide-react'
import { aboutMedia } from './about'

export const qualitySafety = {
  label: 'Quality, Safety & Performance',
  title: 'Quality, safety, and performance are integral to every product we manufacture.',
  description:
    'At ERCON Industries (Pvt.) Limited, quality, safety, and performance are integral to every product we manufacture. Our advanced manufacturing processes, comprehensive testing, and strict quality controls ensure reliable, durable, and standards-compliant solutions.',
  certificationIntro:
    'Our commitment is supported by management systems certified by a PNAC-accredited certification body:',
  certifications: [
    'ISO 9001:2015 - Quality Management System',
    'ISO 14001:2015 - Environmental Management System',
    'ISO 45001:2018 - Occupational Health & Safety Management System',
  ],
  certificationSummary:
    'These certifications demonstrate our commitment to consistent quality, environmental responsibility, workplace safety, and continuous improvement.',
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
