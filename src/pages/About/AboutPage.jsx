import { AboutAccreditationsCTA } from './sections/AboutAccreditationsCTA'
import { AboutContactCTA } from './sections/AboutContactCTA'
import { AboutHero } from './sections/AboutHero'
import { AboutTrustIndicators } from './sections/AboutTrustIndicators'
import { CompanyOverview } from './sections/CompanyOverview'
import { CompanyStory } from './sections/CompanyStory'
import { CoreValues } from './sections/CoreValues'
import { EngineeringExpertise } from './sections/EngineeringExpertise'
import { ManufacturingCapability } from './sections/ManufacturingCapability'
import { OperationalPresence } from './sections/OperationalPresence'
import { QualitySafety } from './sections/QualitySafety'
import { VisionMission } from './sections/VisionMission'
import { aboutSeo } from '../../data/about'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function AboutPage() {
  useRouteMeta({
    canonical: aboutSeo.canonical,
    description: aboutSeo.description,
    ogDescription: aboutSeo.description,
    ogImage: aboutSeo.ogImage,
    ogTitle: aboutSeo.title,
    title: aboutSeo.title,
  })

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <AboutHero />
      <CompanyOverview />
      <CompanyStory />
      <VisionMission />
      <CoreValues />
      <EngineeringExpertise />
      <ManufacturingCapability />
      <QualitySafety />
      <OperationalPresence />
      <AboutTrustIndicators />
      <AboutAccreditationsCTA />
      <AboutContactCTA />
    </article>
  )
}
