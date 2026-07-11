import { Menu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { contactLinks } from '../../data/navigation'
import { Button } from '../ui/Button'
import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${
          scrolled ? 'bg-surface-dark/84 shadow-floating backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="container-main flex h-(--header-height) items-center justify-between gap-4">
          <Link aria-label="ERCON Industries home" className="group flex items-center gap-3 text-white" to="/">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-brand shadow-card transition group-hover:-translate-y-0.5">
              <span className="text-base font-bold">E</span>
            </span>
            <span className="leading-none">
              <span className="block text-lg font-bold tracking-tight">ERCON</span>
              <span className="mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/55 sm:block">
                Industries
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <DesktopNavigation />
            <Button className="hidden xl:inline-flex" to={contactLinks.quotePath} variant="dark">
              Request a Quote
            </Button>
            <button
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              aria-label="Open menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur lg:hidden"
              onClick={() => setMenuOpen(true)}
              ref={menuButtonRef}
              type="button"
            >
              <Menu aria-hidden="true" size={22} />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation
        id="mobile-navigation"
        onClose={() => setMenuOpen(false)}
        open={menuOpen}
        triggerRef={menuButtonRef}
      />
    </>
  )
}
