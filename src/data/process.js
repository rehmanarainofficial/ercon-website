import { ClipboardCheck, Cog, Factory, Headphones, PackageCheck, PenTool, ShieldCheck } from 'lucide-react'

// TODO: Replace these public-positioning process steps with ERCON's exact documented workflow when available.
export const engineeringProcess = [
  {
    id: 'requirement-analysis',
    step: '01',
    title: 'Requirement Analysis',
    description:
      'Project requirements, electrical loads, site context, and product needs are clarified before solution planning.',
    icon: ClipboardCheck,
  },
  {
    id: 'engineering-design',
    step: '02',
    title: 'Engineering and Design',
    description:
      'Electrical distribution and panel requirements are translated into practical switchgear or system designs.',
    icon: PenTool,
  },
  {
    id: 'manufacturing',
    step: '03',
    title: 'Manufacturing and Fabrication',
    description:
      'LV/MV switchgear, electrical cabinets, cable management, and sheet metal elements move into production.',
    icon: Factory,
  },
  {
    id: 'assembly',
    step: '04',
    title: 'Assembly and Integration',
    description:
      'Electrical components and fabricated assemblies are brought together for project-ready systems.',
    icon: Cog,
  },
  {
    id: 'quality-testing',
    step: '05',
    title: 'Quality Testing',
    description:
      'Quality and safety checks support reliable operation before delivery or project deployment.',
    icon: ShieldCheck,
  },
  {
    id: 'delivery-support',
    step: '06',
    title: 'Delivery and Support',
    description:
      'Project handover and technical support help clients move from product inquiry to operational use.',
    icon: PackageCheck,
  },
  {
    id: 'after-sales',
    step: '07',
    title: 'After-Sales Technical Support',
    description:
      'Support remains available for follow-up product questions and ongoing technical coordination.',
    icon: Headphones,
  },
]
