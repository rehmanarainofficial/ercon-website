import { useRef } from 'react'
import { SectorHighlightCard } from '../../../components/clientele/SectorHighlightCard'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { clientSectors } from '../../../data/clientSectors'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function SectorHighlights() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main">
        <SectionHeading
          eyebrow="Industries served"
          title="Sector context without unsupported project claims."
          className="max-w-5xl"
        >
          <p>
            These sector labels reflect the current public client-category structure. Specific client names, project details, or endorsements should be added only after verification.
          </p>
        </SectionHeading>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {clientSectors.map((sector) => (
            <SectorHighlightCard key={sector.id} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  )
}

