import { Image as ImageIcon } from 'lucide-react'
import { routes } from '../../data/routes'
import { PageHero } from '../../components/ui/PageHero'
import { GalleryGrid } from './sections/GalleryGrid'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function GalleryPage() {
  const route = routes.find((r) => r.path === '/gallery')

  useRouteMeta({
    title: route.title,
    description: route.metaDescription,
    ogTitle: route.title,
    ogDescription: route.metaDescription,
    canonical: 'https://erconind.com/gallery',
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

