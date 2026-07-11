import { ShieldCheck } from 'lucide-react'
import { routes } from '../../data/routes'
import { PageHero } from '../../components/ui/PageHero'
import { CertificateList } from './sections/CertificateList'
import { QualitySafety } from '../About/sections/QualitySafety'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function AccreditationsPage() {
  const route = routes.find((r) => r.path === '/accreditations')
  
  useRouteMeta({
    title: route.title,
    description: route.metaDescription,
    ogTitle: route.title,
    ogDescription: route.metaDescription,
    canonical: 'https://erconind.com/accreditations',
  })

  const heroCard = (
    <>
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-brand-light">
        <ShieldCheck aria-hidden="true" size={24} />
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">ISO & IEC Standards</p>
      <p className="mt-4 text-sm leading-7 text-white/68">
        Our design, manufacturing, and testing processes align with ISO 9001 quality systems and international IEC standards for low and medium voltage switchgear.
      </p>
    </>
  )

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <PageHero
        eyebrow="Accreditation & Compliance"
        title="Validating Quality & Technical Precision"
        description="ERCON Industries maintains certified workflows, strict testing standards, and compliance frameworks to deliver high-performance electrical distribution and sheet metal fabrication systems."
        infoCard={heroCard}
        ctaLabel="Talk to an Engineer"
      />
      <CertificateList />
      <QualitySafety />
    </article>
  )
}

