import { useGSAP } from '@gsap/react'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'
import { ScrollTrigger, gsap } from '../../utils/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function PageTransition({ children }) {
  const location = useLocation()
  const scope = useRef(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

      if (reducedMotion) {
        ScrollTrigger.refresh()
        return undefined
      }

      const content = scope.current
      const overlay = content.querySelector('[data-page-mask]')

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => ScrollTrigger.refresh(),
      })

      timeline
        .fromTo(overlay, { scaleX: 1, transformOrigin: 'left center' }, { scaleX: 0, duration: 0.55 })
        .fromTo(
          content.querySelectorAll('[data-page-reveal]'),
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.08 },
          '-=0.25',
        )

      return () => timeline.kill()
    },
    { dependencies: [location.pathname, reducedMotion], scope },
  )

  return (
    <div className="relative" ref={scope}>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] origin-left bg-surface-dark"
        data-page-mask
      />
      {children}
    </div>
  )
}
