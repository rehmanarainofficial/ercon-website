import { useRef } from 'react'
import { CircuitBoard, Factory, Cable, Cpu, CheckCircle } from 'lucide-react'
import { GlassCard } from '../../../components/ui/GlassCard'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const coreCapabilities = [
  {
    id: 'switchgear',
    title: 'LV/MV Switchgear Assemblies',
    description: 'Engineering and fabrication of reliable power distribution boards.',
    icon: CircuitBoard,
    specs: [
      'Main Distribution Boards (MDBs)',
      'Motor Control Centers (MCCs / AMF)',
      'Sub-Distribution Boards (SDBs)',
      'Power Factor Improvement (PFI) Panels'
    ]
  },
  {
    id: 'fabrication',
    title: 'Sheet Metal Fabrication',
    description: 'Precision engineering for custom enclosures and cabinets.',
    icon: Factory,
    specs: [
      'CNC Laser Cutting & Bending',
      'Powder Coating & Powder Sprays',
      'Outdoor Weatherproof Kiosks',
      'Electronic Rack & Server Cabinets'
    ]
  },
  {
    id: 'cable-mgmt',
    title: 'Cable Management Systems',
    description: 'Heavy-duty tray and ladder designs for organized routing.',
    icon: Cable,
    specs: [
      'Perforated Cable Trays',
      'Ladder Type Cable Trays',
      'Cable Trunkings & Fittings',
      'Hot-Dip Galvanized Coating'
    ]
  },
  {
    id: 'engineering-dev',
    title: 'Engineering & QA Testing',
    description: 'Standards-compliant routine inspection and verification.',
    icon: Cpu,
    specs: [
      'AutoCAD & SolidWorks Design',
      'Routine Dielectric Testing',
      'Primary & Secondary Current Injection',
      'IEC 61439 Compliance Verification'
    ]
  }
]

export function EngineeringCapabilities() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="relative overflow-hidden bg-surface-dark text-white section-space" ref={sectionRef}>
      {/* Aesthetic grid overlay */}
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-brand/12 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/8 blur-3xl pointer-events-none" />
      
      <div className="container-main relative">
        <SectionHeading
          bodyClassName="text-white/70"
          eyebrowClassName="text-brand-light"
          headingClassName="text-white"
          eyebrow="Engineering & Manufacturing"
          title="Industrial Capability Built for Reliability"
          className="mb-12"
        >
          <p>
            ERCON Industries combines modern production setups, skilled engineers, and group-wide design expertise 
            to manufacture certified power solutions for Pakistan's infrastructure.
          </p>
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreCapabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <GlassCard
                className="p-6 flex flex-col justify-between hover:border-brand-light/40 transition-all duration-300 hover:shadow-floating"
                data-reveal
                key={cap.id}
              >
                <div>
                  {/* Icon Container */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-brand-light border border-white/10 group-hover:scale-105 transition-transform">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold leading-tight text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="border-t border-white/10 pt-5 mt-auto">
                  <ul className="space-y-3">
                    {cap.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/70 leading-relaxed">
                        <CheckCircle size={12} className="text-brand-light shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

