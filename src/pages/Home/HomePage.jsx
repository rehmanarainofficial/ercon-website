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
      'ERCON Industries Pakistan', 'LV Switchgear Manufacturer Pakistan', 'MV Switchgear Manufacturer Pakistan',
      'Power Distribution Board Pakistan', 'Type-Tested Enclosures Pakistan', 'Busway Trunking System Pakistan',
      'Cable Management System Pakistan', 'Cable Tray Manufacturer Karachi', 'Solar Solutions Pakistan',
      'Sheet Metal Fabrication Pakistan', 'Stainless Steel Fabrication Hospital Pakistan',
      'Electrical Panel Manufacturer Kasur', 'Switchgear Factory Pakistan', 'ERCON Group UAE KSA',
      'Industrial Electrical Contractor Pakistan', 'Meter Security Box Pakistan', 'ISO Certified Switchgear Pakistan',
      'IEC Standard Switchgear Pakistan', 'MV Switchgear 11kV Pakistan', 'LV Distribution Board 415V Pakistan',
    ],
    ogDescription: seo.description,
    ogImage: seo.ogImage,
    ogTitle: seo.title,
    ogType: 'website',
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
