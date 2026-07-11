import { Button } from '../../../components/ui/Button'

export function ProductsEngineeringCTA() {
  return (
    <section className="relative overflow-hidden bg-brand py-18 text-white sm:py-24">
      <div className="absolute inset-0 technical-grid opacity-24" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/18 blur-3xl" />
      <div className="container-main relative grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_auto] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/68">Product requirements</p>
          <h2 className="mt-5 max-w-4xl text-section font-bold text-white">
            Discuss Your Product Requirements With Our Team
          </h2>
          <p className="mt-6 max-w-2xl text-body-fluid leading-8 text-white/74">
            Contact ERCON for switchgear, cable management, solar energy, power distribution, or fabrication requirements that need technical coordination.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/contact-us" variant="dark">Contact Us</Button>
          <Button to="/about-us" variant="dark">Explore Company</Button>
        </div>
      </div>
    </section>
  )
}
