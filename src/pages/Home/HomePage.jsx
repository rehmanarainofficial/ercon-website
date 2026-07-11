import { CompanyIntroduction } from './sections/CompanyIntroduction'
import { EngineeringCapabilities } from './sections/EngineeringCapabilities'
import { EngineeringProcess } from './sections/EngineeringProcess'
import { FeaturedProducts } from './sections/FeaturedProducts'
import { HomeContactCTA } from './sections/HomeContactCTA'
import { HomeHero } from './sections/HomeHero'
import { HomeStatistics } from './sections/HomeStatistics'
import { WhyErcon } from './sections/WhyErcon'
import { seo } from '../../data/home'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function HomePage() {
  useRouteMeta({
    canonical: seo.canonical,
    description: seo.description,
    ogDescription: seo.description,
    ogImage: seo.ogImage,
    ogTitle: seo.title,
    schema: seo.schema,
    title: seo.title,
  })

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <HomeHero />
      <CompanyIntroduction />
      <FeaturedProducts />
      <EngineeringCapabilities />
      <WhyErcon />
      <EngineeringProcess />
      <HomeStatistics />
      <HomeContactCTA />
    </article>
  )
}
