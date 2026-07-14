import { ShieldCheck } from 'lucide-react'
import { routes } from '../../data/routes'
import { PageHero } from '../../components/ui/PageHero'
import { CertificateList } from './sections/CertificateList'
import { QualitySafety } from '../About/sections/QualitySafety'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function AccreditationsPage() {
  const route = routes.find((r) => r.path === '/accreditations')
  
  useRouteMeta({
    title: 'Accreditations & Certifications | ERCON Industries — ISO 9001 Compliant Pakistan',
    description:
      'ERCON Industries holds ISO 9001 quality management certification and aligns all LV/MV switchgear, sheet metal fabrication, and cable management manufacturing processes with IEC international standards in Pakistan.',
    keywords: [
      'ERCON Industries ISO 9001', 'ISO Certified Switchgear Pakistan', 'IEC Standard Switchgear Pakistan',
      'LV Switchgear Certified Pakistan', 'MV Switchgear Type-Tested Pakistan',
      'Accreditation Electrical Manufacturer Pakistan', 'Quality Certified Panel Board Pakistan',
      'ERCON IEC Compliant', 'ISO 9001 Electrical Factory Pakistan', 'Certified Manufacturing Pakistan',
    ],
    ogTitle: 'Accreditations | ERCON Industries — ISO 9001 & IEC Compliant Pakistan',
    ogDescription:
      'ERCON Industries maintains ISO 9001 certification and IEC compliance for LV/MV switchgear, fabrication, and cable management manufacturing in Pakistan.',
    ogType: 'website',
    canonical: 'https://erconind.com/accreditations',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://erconind.com/accreditations#webpage',
      name: 'Accreditations & Certifications | ERCON Industries',
      url: 'https://erconind.com/accreditations',
      description: 'Quality certifications and accreditation details for ERCON Industries manufacturing operations in Pakistan.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://erconind.com/' },
          { '@type': 'ListItem', position: 2, name: 'Accreditations', item: 'https://erconind.com/accreditations' },
        ],
      },
    },
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

