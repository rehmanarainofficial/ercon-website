import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

export function DesktopNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const mainLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Divisions', path: '/products' },
  ]

  const exploreLinks = [
    { label: 'Accreditations', path: '/accreditations' },
    { label: 'Clientele', path: '/clientele' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Career', path: '/career' }
  ]

  const explorePaths = ['/accreditations', '/clientele', '/gallery', '/career']
  const isExploreActive = explorePaths.some(path => location.pathname.startsWith(path))

  const dots = (
    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 flex gap-1 items-center justify-center pointer-events-none">
      <span className="h-1.5 w-1.5 rounded-full bg-[#E52421]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#F9A01B]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#005FAE]" />
    </span>
  )

  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex h-full">
      {mainLinks.map((item) => {
        const isActive = item.path === '/' 
          ? location.pathname === '/' 
          : location.pathname.startsWith(item.path)

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={`relative py-2 text-base font-bold transition duration-200 ${
              isActive ? 'text-white font-extrabold' : 'text-white/70 hover:text-white'
            }`}
          >
            {item.label}
            {isActive && dots}
          </NavLink>
        )
      })}

      {/* Explore Dropdown */}
      <div
        className="relative py-2"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          type="button"
          className={`relative text-base font-bold transition duration-200 flex items-center gap-1.5 focus:outline-none cursor-pointer ${
            isExploreActive ? 'text-white font-extrabold' : 'text-white/70 hover:text-white'
          }`}
        >
          <span>Explore</span>
          <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          {isExploreActive && dots}
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 rounded-2xl bg-surface-dark-2/95 border border-white/10 shadow-floating py-2.5 z-50 backdrop-blur-xl transition-all duration-200 origin-top before:absolute before:content-[''] before:left-0 before:right-0 before:top-[-16px] before:h-[16px] before:bg-transparent ${
            isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {exploreLinks.map((sub) => {
            const isSubActive = location.pathname.startsWith(sub.path)
            return (
              <NavLink
                key={sub.path}
                to={sub.path}
                className={`block px-5 py-2 text-[15px] font-semibold transition duration-150 relative ${
                  isSubActive ? 'text-white bg-white/10' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>{sub.label}</span>
                  {isSubActive && (
                    <span className="flex gap-0.5 items-center">
                      <span className="h-1 w-1 rounded-full bg-[#E52421]" />
                      <span className="h-1 w-1 rounded-full bg-[#F9A01B]" />
                      <span className="h-1 w-1 rounded-full bg-[#005FAE]" />
                    </span>
                  )}
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>

      {/* Contact Us Link */}
      <NavLink
        to="/contact-us"
        className={`relative py-2 text-base font-bold transition duration-200 ${
          location.pathname.startsWith('/contact-us') ? 'text-white font-extrabold' : 'text-white/70 hover:text-white'
        }`}
      >
        Contact Us
        {location.pathname.startsWith('/contact-us') && dots}
      </NavLink>
    </nav>
  )
}
