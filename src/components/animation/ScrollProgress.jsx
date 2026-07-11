import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger, gsap } from '../../utils/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function ScrollProgress() {
  const progressRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !progressRef.current) return undefined

      gsap.set(progressRef.current, { scaleX: 0, transformOrigin: 'left center' })
      const setProgress = gsap.quickSetter(progressRef.current, 'scaleX')

      const trigger = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          setProgress(self.progress)
        },
      })

      return () => trigger.kill()
    },
    { dependencies: [reducedMotion] },
  )

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-80 h-1 w-full origin-left bg-linear-to-r from-brand via-accent to-accent-purple"
      ref={progressRef}
    />
  )
}
