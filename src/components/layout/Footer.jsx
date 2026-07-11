import { Link } from 'react-router-dom'
import { BrandHomeLink } from './BrandHomeLink'

export function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Products', path: '/products' },
    { label: 'Clientele', path: '/clientele' },
    { label: 'Accreditations', path: '/accreditations' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Career', path: '/career' },
    { label: 'Contact Us', path: '/contact-us' }
  ]

  const productsList = [
    { label: 'MV Type Tested switchgear', path: '/products' },
    { label: 'Medium voltage switchgear', path: '/products' },
    { label: 'Automation', path: '/products' },
    { label: 'Solar System', path: '/products' },
    { label: 'Cable Management Systems', path: '/products' },
    { label: 'Busway', path: '/products' },
    { label: 'Electrical cabinets', path: '/products' },
    { label: 'Sheet Metal Fabrication', path: '/products' }
  ]

  return (
    <footer className="relative overflow-hidden bg-surface-dark text-white border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgb(0_95_174/0.2),transparent_35rem),radial-gradient(circle_at_92%_18%,rgb(0_95_174/0.08),transparent_25rem)] pointer-events-none" />
      
      <div className="container-main relative pt-16 pb-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-white/10 pb-12">
          {/* Column 1: Brand Info */}
          <div>
            <BrandHomeLink logoClassName="h-14 w-[176px]" />
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-white/60 text-justify">
              Established in 2012, ERCON Industries (Pvt.) Limited is an associated company of the ERCON Group located in UAE and KSA, an industry leader in power distribution and switchgear solutions since 2002. As part of the Group's strategic expansion in Pakistan, ERCON Industries specializes in the manufacturing of LV/MV switchgear, power distribution systems, and sheet metal fabrication.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-brand-light uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-white/60 hover:text-white transition-colors duration-200 block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-sm font-bold text-brand-light uppercase tracking-wider mb-5">Products</h3>
            <ul className="space-y-2 text-sm">
              {productsList.map((prod, i) => (
                <li key={i}>
                  <Link to={prod.path} className="text-white/60 hover:text-white transition-colors duration-200 block py-0.5">
                    {prod.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-sm font-bold text-brand-light uppercase tracking-wider mb-5">Follow us</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-all duration-200 group">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:bg-[#1877F2] group-hover:text-white group-hover:border-transparent transition-all">
                    <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </span>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-all duration-200 group">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:bg-[#E1306C] group-hover:text-white group-hover:border-transparent transition-all">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  </span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-all duration-200 group">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:bg-[#000000] group-hover:text-white group-hover:border-transparent transition-all">
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </span>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-all duration-200 group">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-transparent transition-all">
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col gap-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between pt-6">
          <p>© {new Date().getFullYear()} ERCON. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms-conditions" className="hover:text-white transition-colors duration-200">
              Terms & Conditions
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
