import { CompanyIntroduction } from './sections/CompanyIntroduction'
import { FeaturedProducts } from './sections/FeaturedProducts'
import { HomeHero } from './sections/HomeHero'
import { WhyErcon } from './sections/WhyErcon'
import { seo } from '../../data/home'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function HomePage() {
  useRouteMeta({
    canonical: seo.canonical,
    description: seo.description,
    keywords: [
      'ERCON Industries', 'LV Switchgear Pakistan', 'MV Switchgear Karachi', 
      'Electrical Enclosures Karachi', 'Power Distribution Boards Pakistan', 
      'Cable Tray Manufacturers Karachi', 'Sheet Metal Fabrication Karachi', 
      'ERCON Group KSA UAE', 'Certified Switchgear Pakistan'
    ],
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
      <WhyErcon />
    </article>
  )
}
