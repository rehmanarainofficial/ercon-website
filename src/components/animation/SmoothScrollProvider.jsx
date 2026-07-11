import Lenis from 'lenis'
import { useEffect } from 'react'
import { ScrollTrigger, gsap } from '../../utils/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function SmoothScrollProvider({ children }) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      ScrollTrigger.refresh()
      return undefined
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      syncTouch: false,
    })

    const updateScrollTrigger = () => ScrollTrigger.update()
    lenis.on('scroll', updateScrollTrigger)

    const tick = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)

    return () => {
      window.removeEventListener('load', refresh)
      lenis.off('scroll', updateScrollTrigger)
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [reducedMotion])

  return children
}
