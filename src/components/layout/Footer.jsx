import { Link } from 'react-router-dom'
import { contactLinks, mainNavigation } from '../../data/navigation'
import { Button } from '../ui/Button'
import { BrandHomeLink } from './BrandHomeLink'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgb(0_95_174/0.26),transparent_30rem),radial-gradient(circle_at_92%_18%,rgb(189_52_254/0.14),transparent_24rem)]" />
      <div className="container-main relative section-space">
        <div className="grid gap-10 border-b border-white/12 pb-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">Power distribution</p>
            <h2 className="mt-5 max-w-4xl text-section font-bold text-white">
              Ready for a reliable electrical engineering partner?
            </h2>
          </div>
          <Button to="/contact-us">Start a Conversation</Button>
        </div>

        <div className="grid gap-10 pt-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <BrandHomeLink logoClassName="h-14 w-[176px]" />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
              A modern website foundation prepared for verified ERCON content, products, accreditations, and contact workflows.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 text-sm text-white/68">
            {mainNavigation.map((item) => (
              <Link className="min-h-10 transition hover:text-white" key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="text-sm text-white/68">
            <p className="font-semibold text-white">Contact</p>
            <a className="mt-4 block min-h-10 transition hover:text-white" href={contactLinks.email}>
              info@erconind.com
            </a>
            <a className="block min-h-10 transition hover:text-white" href={contactLinks.phone}>
              +92 21 34522902
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/12 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} ERCON Industries. All rights reserved.</p>
          <p>Phase 1 foundation. Real legal pages can be linked when available.</p>
        </div>
      </div>
    </footer>
  )
}
