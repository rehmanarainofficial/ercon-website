import { useRef } from 'react'
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const contactItems = [
  {
    id: 'address',
    label: 'Karachi Office & Factory',
    value: 'Plot # SF-15, Sector 15, Korangi Industrial Area, Karachi, Pakistan',
    icon: MapPin,
    actionLabel: 'View on Map',
    actionHref: 'https://maps.google.com',
  },
  {
    id: 'phone',
    label: 'Phone Inquiries',
    value: '+92 21 3511 6001 / +92 21 3511 6002',
    icon: Phone,
    actionLabel: 'Call Now',
    actionHref: 'tel:+922135116001',
  },
  {
    id: 'email',
    label: 'Email Inquiries',
    value: 'info@erconind.com / sales@erconind.com',
    icon: Mail,
    actionLabel: 'Send Email',
    actionHref: 'mailto:info@erconind.com',
  },
  {
    id: 'hours',
    label: 'Operating Hours',
    value: 'Monday – Saturday: 9:00 AM – 6:00 PM (Sunday Closed)',
    icon: Clock,
  },
]

const internationalPresence = [
  { country: 'United Arab Emirates', detail: 'ERCON Group UAE (Est. 2002) — Dubai Office' },
  { country: 'Saudi Arabia', detail: 'ERCON Group KSA — Riyadh Operations' },
]

export function ContactDetails() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <div className="flex flex-col gap-10" ref={sectionRef}>
      {/* Contact Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {contactItems.map((item) => {
          const Icon = item.icon
          return (
            <article
              key={item.id}
              className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-sm flex flex-col justify-between"
              data-reveal
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-ink">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed font-medium">
                  {item.value}
                </p>
              </div>

              {item.actionHref ? (
                <div className="mt-5 pt-4 border-t border-line">
                  <a
                    href={item.actionHref}
                    target={item.id === 'address' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
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

      {/* Global Heritage Card */}
      <article
        className="rounded-[var(--radius-card)] border border-line bg-surface-blue p-6 shadow-sm"
        data-reveal
      >
        <div className="flex items-center gap-3 text-brand mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-brand/20">
            <Globe size={20} />
          </div>
          <h3 className="text-base font-bold text-ink">ERCON Group Presence</h3>
        </div>
        <p className="text-sm text-muted leading-relaxed">
          ERCON Industries is the localized Pakistan division of the international ERCON Group. 
          Through our group partnerships, we coordinate regional logistics and global component sourcing.
        </p>
        <div className="mt-4 grid gap-2">
          {internationalPresence.map((pres) => (
            <div key={pres.country} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-t border-brand/10 text-xs">
              <span className="font-bold text-ink">{pres.country}</span>
              <span className="text-muted">{pres.detail}</span>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
