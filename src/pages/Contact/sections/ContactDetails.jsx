import { useRef } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const locations = [
  {
    id: 'lahore-office',
    label: 'Lahore Corporate Office',
    value: '208 D1, NESPAK Society Block D 1 Nespak Housing Scheme, Lahore (Near Ever Care Hospital)',
    icon: MapPin,
    actionLabel: 'View on Map',
    actionHref: 'https://maps.google.com/maps?q=208+D1,+NESPAK+Society+Block+D+1+Nespak+Housing+Scheme,+Lahore',
  },
  {
    id: 'facility',
    label: 'Manufacturing Facility',
    value: '6.2 KM from Lillyani Toll Plaza, Near Pakki Haveli, Mustafabad Bayron, Kasur, Pakistan',
    icon: MapPin,
    actionLabel: 'View on Map',
    actionHref: 'https://maps.google.com/maps?q=6.2+KM+from+Lillyani+Toll+Plaza,+Mustafabad+Kasur',
  },
  {
    id: 'karachi-office',
    label: 'Karachi Office',
    value: 'Office No: G-06 EOBI Building Awami Markaz Shahrah-e-Faisal, Karachi',
    icon: MapPin,
    actionLabel: 'View on Map',
    actionHref: 'https://maps.google.com/maps?q=EOBI+Building+Awami+Markaz+Shahrah-e-Faisal,+Karachi',
  }
]

const contactItems = [
  {
    id: 'phone',
    label: 'Phone Inquiries',
    value: '+92 3111 444 590',
    icon: Phone,
    actionLabel: 'Call Now',
    actionHref: 'tel:+923111444590',
  },
  {
    id: 'email',
    label: 'Email Inquiries',
    value: 'info@erconind.com',
    icon: Mail,
    actionLabel: 'Send Email',
    actionHref: 'mailto:info@erconind.com',
  }
]

export function ContactDetails() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <div className="flex flex-col gap-8" ref={sectionRef}>
      {/* Locations Header */}
      <div data-reveal>
        <h3 className="text-xl font-bold text-ink mb-1">Our Offices & Facilities</h3>
        <p className="text-sm text-muted">Visit us or coordinate logistics at our official branches.</p>
      </div>

      {/* Locations Cards */}
      <div className="grid gap-6">
        {locations.map((loc) => {
          const Icon = loc.icon
          return (
            <article
              key={loc.id}
              className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-sm hover:border-brand/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              data-reveal
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-bold text-ink">
                    {loc.label}
                  </h4>
                </div>
                <p className="text-sm text-muted leading-relaxed text-justify font-medium pl-1">
                  {loc.value}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-line pl-1">
                <a
                  href={loc.actionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-brand hover:text-brand-dark transition-colors duration-200"
                >
                  {loc.actionLabel} &rarr;
                </a>
              </div>
            </article>
          )
        })}
      </div>

      {/* Quick Contact Header */}
      <div data-reveal className="mt-2">
        <h3 className="text-xl font-bold text-ink mb-1">Direct Contact</h3>
        <p className="text-sm text-muted">Get in touch directly for business inquiries.</p>
      </div>

      {/* Contact Items Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {contactItems.map((item) => {
          const Icon = item.icon
          return (
            <article
              key={item.id}
              className={`rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-sm flex flex-col justify-between hover:border-brand/30 transition-all duration-300 ${
                item.id === 'hours' ? 'sm:col-span-2' : ''
              }`}
              data-reveal
            >
              <div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand mb-3">
                  <Icon size={18} />
                </div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-ink">
                  {item.label}
                </h4>
                <p className="mt-2 text-sm text-muted leading-relaxed font-medium">
                  {item.value}
                </p>
              </div>

              {item.actionHref ? (
                <div className="mt-4 pt-3 border-t border-line">
                  <a
                    href={item.actionHref}
                    className="inline-flex items-center text-xs font-bold text-brand hover:text-brand-dark transition-colors duration-200"
                  >
                    {item.actionLabel} &rarr;
                  </a>
                </div>
              ) : null}
            </article>
          )
        })}
      </div>
    </div>
  )
}
