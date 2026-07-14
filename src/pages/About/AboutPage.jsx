import { AboutHero } from './sections/AboutHero'
import { CompanyOverview } from './sections/CompanyOverview'
import { CoreValues } from './sections/CoreValues'
import { QualitySafety } from './sections/QualitySafety'
import { VisionMission } from './sections/VisionMission'
import { aboutSeo } from '../../data/about'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function AboutPage() {
  useRouteMeta({
    canonical: aboutSeo.canonical,
    description: aboutSeo.description,
    keywords: [
      'ERCON History', 'ERCON Industries Profile', 'Switchgear Manufacturing Pakistan',
      'Electrical Engineering Team Karachi', 'ERCON Group Heritage', 'Karachi Switchgear Workshop'
    ],
    ogDescription: aboutSeo.description,
    ogImage: aboutSeo.ogImage,
    ogTitle: aboutSeo.title,
    title: aboutSeo.title,
  })

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <AboutHero />
      <CompanyOverview />
      <VisionMission />
      <CoreValues />
      <QualitySafety />
    </article>
  )
}
