import { useState } from 'react'
import { Users } from 'lucide-react'
import { PageHero } from '../../components/ui/PageHero'
import { OpenPositions } from './sections/OpenPositions'
import { ApplicationForm } from './sections/ApplicationForm'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function CareerPage() {
  const [selectedPosition, setSelectedPosition] = useState('')

  useRouteMeta({
    title: 'Careers at ERCON Industries | Engineering Jobs Pakistan',
    description:
      'Join ERCON Industries — a leading electrical manufacturer in Pakistan. We offer engineering careers in LV/MV switchgear, panel assembly, sheet metal fabrication, and precision manufacturing in Kasur, Punjab.',
    keywords: [
      'ERCON Industries Jobs', 'Engineering Jobs Pakistan', 'Electrical Engineer Jobs Karachi',
      'Switchgear Manufacturing Jobs Pakistan', 'Sheet Metal Fabrication Jobs Pakistan',
      'Panel Wiring Technician Jobs', 'ERCON Careers Kasur', 'Manufacturing Jobs Punjab Pakistan',
      'Electrical Technician Jobs Pakistan', 'ERCON Industries Hiring',
    ],
    ogTitle: 'Careers at ERCON Industries | Engineering Jobs Pakistan',
    ogDescription:
      'Explore engineering and technical careers at ERCON Industries. Join our team in LV/MV switchgear manufacturing, sheet metal fabrication, and precision engineering in Pakistan.',
    ogType: 'website',
    canonical: 'https://erconind.com/career',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://erconind.com/career#webpage',
      name: 'Careers at ERCON Industries',
      url: 'https://erconind.com/career',
      description: 'Engineering and technical career opportunities at ERCON Industries (Pvt.) Limited, Pakistan.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://erconind.com/' },
          { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://erconind.com/career' },
        ],
      },
    },
  })

  const heroCard = (
    <>
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-brand-light">
        <Users aria-hidden="true" size={24} />
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Join Our Team</p>
      <p className="mt-4 text-sm leading-7 text-white/68">
        Build a rewarding career with a leading, quality-focused engineering team fabricating electrical distribution switchgear panels.
      </p>
    </>
  )

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <PageHero
        eyebrow="Join ERCON"
        title="Engineering Careers & Opportunities"
        description="Become part of ERCON Industries' growth. We offer training, engineering challenges, and opportunities in LV/MV panel assemblies and sheet metal fabrication."
        infoCard={heroCard}
        ctaTo="#open-positions"
        ctaLabel="View Open Roles"
      />
      <OpenPositions onSelectPosition={(title) => setSelectedPosition(title)} />
      <ApplicationForm
        selectedPosition={selectedPosition}
        onResetPosition={() => setSelectedPosition('')}
      />
    </article>
  )
}

