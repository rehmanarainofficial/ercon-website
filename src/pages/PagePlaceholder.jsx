import { Zap } from 'lucide-react'
import { ImageReveal } from '../components/animation/ImageReveal'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TextLink } from '../components/ui/TextLink'
import { useRouteMeta } from '../hooks/useRouteMeta'

export function PagePlaceholder({ route }) {
  useRouteMeta({ title: route.title, description: route.metaDescription })

  return (
    <article className="page-shell" data-page-reveal>
      <PageHero eyebrow={route.eyebrow} title={route.pageName} description={route.description} />

      <section className="container-main section-space">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.55fr)] lg:items-center">
          <SectionHeading eyebrow="Phase 1 placeholder" title={`${route.pageName} content comes in a later phase.`}>
            <p>
              This route is live, lazy-loaded, metadata-ready, and connected to the global ERCON layout. Verified copy, imagery,
              products, client logos, and certificates will be added from central data files in the relevant phase.
            </p>
            <div className="mt-7">
              <TextLink to="/contact-us">View contact placeholder</TextLink>
            </div>
          </SectionHeading>

          <ImageReveal className="min-h-[320px] bg-surface-dark p-7 text-white">
            <div className="flex h-full min-h-[320px] flex-col justify-between rounded-[2rem] border border-white/12 bg-white/6 p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white">
                <Zap aria-hidden="true" size={26} />
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-light">Prepared foundation</p>
                <p className="mt-4 text-2xl font-black leading-tight">
                  Route, layout, animation cleanup, and responsive behavior are ready for production content.
                </p>
              </div>
            </div>
          </ImageReveal>
        </div>
      </section>
    </article>
  )
}
