import { useGSAP } from '@gsap/react'
import { ScrollTrigger, gsap } from '../utils/gsap'
import { useReducedMotion } from './useReducedMotion'

export function useScrollReveal(scope, { selector = '[data-reveal]', stagger = 0.08, y = 36 } = {}) {
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (!scope.current) return undefined

      const elements = gsap.utils.toArray(selector, scope.current)

      if (reducedMotion) {
        gsap.set(elements, { autoAlpha: 1, y: 0, clearProps: 'transform' })
        ScrollTrigger.refresh()
        return undefined
      }

      gsap.set(elements, { autoAlpha: 0, y })

      const tween = gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.95,
        ease: 'power4.out',
        stagger,
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 78%',
          once: true,
        },
      })

      return () => tween.kill()
    },
    { dependencies: [reducedMotion, selector, stagger, y], scope },
  )
}
