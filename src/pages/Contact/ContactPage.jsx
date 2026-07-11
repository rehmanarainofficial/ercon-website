import { PhoneCall } from 'lucide-react'
import { routes } from '../../data/routes'
import { PageHero } from '../../components/ui/PageHero'
import { ContactDetails } from './sections/ContactDetails'
import { InquiryForm } from './sections/InquiryForm'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function ContactPage() {
  const route = routes.find((r) => r.path === '/contact-us')

  useRouteMeta({
    title: route.title,
    description: route.metaDescription,
    ogTitle: route.title,
    ogDescription: route.metaDescription,
    canonical: 'https://erconind.com/contact-us',
  })

  const heroCard = (
    <>
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-brand-light">
        <PhoneCall aria-hidden="true" size={24} />
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Direct Connect</p>
      <p className="mt-4 text-sm leading-7 text-white/68">
        Have urgent switchgear tenders or sheet metal fabrication plans? Send us an inquiry or call directly for technical support.
      </p>
    </>
  )

  return (
    <article className="overflow-hidden bg-surface-soft" data-page-reveal>
      <PageHero
        eyebrow="Connect with ERCON"
        title="Contact Our Sales & Engineering Offices"
        description="We are ready to discuss your power distribution requirements, custom sheet metal fabrication designs, or solar projects in Pakistan and the Gulf region."
        infoCard={heroCard}
        hideCta={true}
      />
      
      <section className="container-main section-space">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Contact details: 5 cols */}
          <div className="lg:col-span-5">
            <ContactDetails />
          </div>

          {/* Contact form: 7 cols */}
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>
    </article>
  )
}

