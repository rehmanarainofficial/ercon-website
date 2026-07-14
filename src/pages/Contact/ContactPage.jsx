import { PhoneCall } from 'lucide-react'
import { PageHero } from '../../components/ui/PageHero'
import { ContactDetails } from './sections/ContactDetails'
import { InquiryForm } from './sections/InquiryForm'
import { useRouteMeta } from '../../hooks/useRouteMeta'

export default function ContactPage() {

  useRouteMeta({
    title: 'Contact ERCON Industries | Sales & Engineering Inquiries Pakistan',
    description:
      'Contact ERCON Industries for LV/MV Switchgear, Busway Trunking, Cable Management, Solar Solutions, SS Fabrication, and Sheet Metal products. UAN: +92 3111 444 590. Email: info@erconind.com. Located in Kasur, Punjab, Pakistan.',
    keywords: [
      'Contact ERCON Industries', 'ERCON Industries Phone Number', 'ERCON Industries Email',
      'ERCON Industries Address Kasur', 'Switchgear Quote Pakistan', 'LV MV Panel Inquiry Pakistan',
      'Electrical Products Inquiry Pakistan', 'Sheet Metal Fabrication Quote Pakistan',
      'Solar Solutions Inquiry Pakistan', 'ERCON Sales Contact', 'UAN +92 3111 444 590',
    ],
    ogTitle: 'Contact ERCON Industries | Sales & Engineering Inquiries',
    ogDescription:
      'Reach ERCON Industries for switchgear, power distribution, solar, and fabrication inquiries. UAN: +92 3111 444 590 | Email: info@erconind.com | Kasur, Punjab, Pakistan.',
    ogType: 'website',
    canonical: 'https://erconind.com/contact-us',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': 'https://erconind.com/contact-us#webpage',
      name: 'Contact ERCON Industries',
      url: 'https://erconind.com/contact-us',
      description: 'Contact page for ERCON Industries (Pvt.) Limited — sales, engineering, and product inquiries.',
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'ERCON Industries (Pvt.) Limited',
        telephone: '+92-3111-444-590',
        email: 'info@erconind.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '6.2 KM from Lillyani Toll Plaza, Near Pakki Haveli, Mustafabad Bayron',
          addressLocality: 'Kasur',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+92-3111-444-590',
          email: 'info@erconind.com',
          contactType: 'sales',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://erconind.com/' },
          { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://erconind.com/contact-us' },
        ],
      },
    },
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
    <article className="overflow-hidden bg-white" data-page-reveal>
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

