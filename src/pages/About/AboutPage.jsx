import { AboutHero } from './sections/AboutHero'
import { CompanyOverview } from './sections/CompanyOverview'
import { CoreValues } from './sections/CoreValues'
import { EngineeringExpertise } from './sections/EngineeringExpertise'
import { ManufacturingCapability } from './sections/ManufacturingCapability'
import { QualitySafety } from './sections/QualitySafety'
import { VisionMission } from './sections/VisionMission'
import { aboutSeo } from '../../data/about'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function AboutPage() {
  useRouteMeta({
    canonical: aboutSeo.canonical,
    description: aboutSeo.description,
    keywords: [
      'About ERCON Industries', 'ERCON Industries History', 'ERCON Pakistan Founded 2012',
      'Switchgear Manufacturer Pakistan Profile', 'Electrical Engineering Company Pakistan',
      'ERCON Group Heritage UAE KSA', 'ISO 9001 Switchgear Manufacturer Pakistan',
      'LV MV Panel Manufacturer Karachi', 'Power Distribution Company Pakistan',
      'Sheet Metal Fabrication Company Pakistan', 'Stainless Steel SS Products Hospital Pakistan',
      'ERCON Manufacturing Kasur Punjab', 'Engineering Excellence Pakistan',
      'Industrial Electrical Manufacturer Pakistan', 'Busway Trunking Manufacturer Pakistan',
    ],
    ogDescription: aboutSeo.description,
    ogImage: aboutSeo.ogImage,
    ogTitle: aboutSeo.title,
    ogType: 'website',
    schema: aboutSeo.schema,
    title: aboutSeo.title,
  })

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <AboutHero />
      <CompanyOverview />
      <ManufacturingCapability />
      <EngineeringExpertise />
      <QualitySafety />
      <VisionMission />
      <CoreValues />
    </article>
  )
}
