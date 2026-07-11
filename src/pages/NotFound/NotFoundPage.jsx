import { Button } from '../../components/ui/Button'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function NotFoundPage() {
  useRouteMeta({
    title: 'Page Not Found | ERCON Industries',
    description: 'The requested ERCON Industries page could not be found.',
  })

  return (
    <article className="grid min-h-screen place-items-center bg-surface-dark px-5 text-center text-white" data-page-reveal>
      <div className="max-w-2xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-light">404</p>
        <h1 className="mt-5 text-page font-black">This page is not connected yet.</h1>
        <p className="mx-auto mt-6 max-w-xl text-body-fluid leading-8 text-white/68">
          The requested route does not exist in the Phase 1 ERCON foundation.
        </p>
        <div className="mt-9">
          <Button to="/">Return Home</Button>
        </div>
      </div>
    </article>
  )
}
