import { useGSAP } from '@gsap/react'
import { Mail, Phone, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { contactLinks, mainNavigation } from '../../data/navigation'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useScrollLock } from '../../hooks/useScrollLock'
import { gsap } from '../../utils/gsap'
import { BrandHomeLink } from './BrandHomeLink'

export function MobileNavigation({ id, open, onClose, triggerRef }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useScrollLock(open)

  useGSAP(
    () => {
      if (!open || !panelRef.current || reducedMotion) return undefined

      const timeline = gsap.timeline()
      timeline
        .fromTo(panelRef.current, { xPercent: 100 }, { xPercent: 0, duration: 0.44, ease: 'power3.out' })
        .fromTo(
          panelRef.current.querySelectorAll('[data-mobile-item]'),
          { y: 22, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.055, ease: 'power3.out' },
          '-=0.18',
        )

      return () => timeline.kill()
    },
    { dependencies: [open, reducedMotion], scope: panelRef },
  )

  useEffect(() => {
    if (!open) return undefined

    const previouslyFocused = document.activeElement
    const triggerElement = triggerRef.current
    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus()
    }, reducedMotion ? 0 : 520)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', handleKeyDown)
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      } else {
        triggerElement?.focus()
      }
    }
  }, [onClose, open, reducedMotion, triggerRef])

  if (!open) return null

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[90] bg-surface-dark text-white lg:hidden"
      id={id}
      ref={panelRef}
      role="dialog"
    >
      <div className="container-main flex min-h-dvh flex-col py-5">
        <div className="flex items-center justify-between" data-mobile-item>
          <BrandHomeLink logoClassName="h-12 w-[142px] sm:h-15 sm:w-[176px]" onNavigate={onClose} />
          <button
            aria-label="Close menu"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white"
            onClick={onClose}
            ref={closeRef}
            type="button"
          >
            <X aria-hidden="true" size={22} />
          </button>
        </div>

        <nav aria-label="Mobile primary navigation" className="mt-8 grid gap-1.5 sm:mt-12 sm:gap-2">
          {mainNavigation.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-3xl py-2.5 text-[clamp(1.35rem,6.5vw,2rem)] font-extrabold leading-tight transition sm:py-3 sm:text-[clamp(1.75rem,8vw,2.5rem)] ${
                  isActive
                    ? 'bg-white px-4 text-brand shadow-[0_18px_48px_rgb(0_0_0/0.16)]'
                    : 'px-1 text-white/88 hover:text-white'
                }`
              }
              data-mobile-item
              end={item.path === '/'}
              key={item.path}
              onClick={onClose}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto grid gap-3 border-t border-white/12 pt-6 text-sm text-white/72 sm:grid-cols-2" data-mobile-item>
          <a className="flex min-h-11 items-center gap-3" href={contactLinks.email}>
            <Mail aria-hidden="true" size={17} />
            info@erconind.com
          </a>
          <a className="flex min-h-11 items-center gap-3" href={contactLinks.phone}>
            <Phone aria-hidden="true" size={17} />
            +92 311 1444590
          </a>
        </div>
      </div>
    </div>
  )
}
