import { Button } from '../../../components/ui/Button'

export function ProductInquiryCTA({ product }) {
  return (
    <section className="relative overflow-hidden bg-brand py-18 text-white sm:py-24">
      <div className="absolute inset-0 technical-grid opacity-24" />
      <div className="container-main relative grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_auto] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/68">Product inquiry</p>
          <h2 className="mt-5 max-w-4xl text-section font-bold text-white">
            Discuss {product.name} for Your Project
          </h2>
          <p className="mt-6 max-w-2xl text-body-fluid leading-8 text-white/74">
            Share your project requirements with ERCON for product guidance, technical coordination, or quotation follow-up.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to={`/contact-us?product=${encodeURIComponent(product.slug)}`} variant="dark">Contact Us</Button>
          <Button to="/products" variant="dark">Browse Products</Button>
        </div>
      </div>
    </section>
  )
}
