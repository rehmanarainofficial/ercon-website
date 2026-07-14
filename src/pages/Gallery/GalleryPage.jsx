import { Image as ImageIcon } from 'lucide-react'
import { routes } from '../../data/routes'
import { PageHero } from '../../components/ui/PageHero'
import { GalleryGrid } from './sections/GalleryGrid'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function GalleryPage() {
  const route = routes.find((r) => r.path === '/gallery')

  useRouteMeta({
    title: 'Gallery | ERCON Industries — Manufacturing & Project Photos Pakistan',
    description:
      'Browse ERCON Industries\' manufacturing gallery featuring switchgear assembly, sheet metal fabrication, LV/MV panel production, and completed industrial project photos from Pakistan.',
    keywords: [
      'ERCON Industries Gallery', 'Switchgear Manufacturing Photos Pakistan', 'LV MV Panel Assembly Photos',
      'Sheet Metal Fabrication Factory Pakistan', 'ERCON Factory Images', 'Electrical Panel Manufacturing Pakistan',
      'ERCON Project Photos', 'Industrial Manufacturing Gallery Pakistan', 'Switchgear Testing Photos',
    ],
    ogTitle: 'Gallery | ERCON Industries — Manufacturing & Project Photos',
    ogDescription:
      'Explore ERCON Industries manufacturing gallery — switchgear assembly, sheet metal fabrication, and industrial project photography from Pakistan.',
    ogType: 'website',
    canonical: 'https://erconind.com/gallery',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      '@id': 'https://erconind.com/gallery#webpage',
      name: 'ERCON Industries Manufacturing Gallery',
      url: 'https://erconind.com/gallery',
      description: 'Manufacturing and project photography from ERCON Industries facilities in Pakistan.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://erconind.com/' },
          { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://erconind.com/gallery' },
        ],
      },
    },
  })

  const heroCard = (
    <>
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-brand-light">
        <ImageIcon aria-hidden="true" size={24} />
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Visual Showcase</p>
      <p className="mt-4 text-sm leading-7 text-white/68">
        A curated look at our active manufacturing floor, switchgear assemblies, and finished industrial client projects across the region.
      </p>
    </>
  )

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <PageHero
        eyebrow="Media Center"
        title="Industrial Project & Assembly Gallery"
        description="Explore detailed images from our sheet metal fabrication facilities, testing bays, and completed high-voltage distribution projects."
        infoCard={heroCard}
        ctaLabel="Contact Sales"
      />
      <GalleryGrid />
    </article>
  )
}

