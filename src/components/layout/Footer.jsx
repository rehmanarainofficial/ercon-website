import { Link } from 'react-router-dom'
import { contactLinks, mainNavigation } from '../../data/navigation'
import { Button } from '../ui/Button'
import { BrandHomeLink } from './BrandHomeLink'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgb(0_95_174/0.24),transparent_30rem),radial-gradient(circle_at_92%_18%,rgb(0_95_174/0.1),transparent_24rem)]" />
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
            <div className="mt-6 flex items-center gap-4 text-white/45">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-light" aria-label="Facebook">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-light" aria-label="LinkedIn">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-light" aria-label="Twitter">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-light" aria-label="Instagram">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
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
              +92 311 1444590
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
