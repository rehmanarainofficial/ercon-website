import { useState } from 'react'
import { Users } from 'lucide-react'
import { routes } from '../../data/routes'
import { PageHero } from '../../components/ui/PageHero'
import { CompanyCulture } from './sections/CompanyCulture'
import { OpenPositions } from './sections/OpenPositions'
import { ApplicationForm } from './sections/ApplicationForm'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function CareerPage() {
  const [selectedPosition, setSelectedPosition] = useState('')
  const route = routes.find((r) => r.path === '/career')

  useRouteMeta({
    title: route.title,
    description: route.metaDescription,
    ogTitle: route.title,
    ogDescription: route.metaDescription,
    canonical: 'https://erconind.com/career',
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
      <CompanyCulture />
      <OpenPositions onSelectPosition={(title) => setSelectedPosition(title)} />
      <ApplicationForm
        selectedPosition={selectedPosition}
        onResetPosition={() => setSelectedPosition('')}
      />
    </article>
  )
}

