import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { gsap } from '../../utils/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function MagneticButton({ children, strength = 0.24 }) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      const element = ref.current
      const finePointer = window.matchMedia('(pointer: fine)').matches

      if (!element || reducedMotion || !finePointer) return undefined

      const xTo = gsap.quickTo(element, 'x', { duration: 0.35, ease: 'power3.out' })
      const yTo = gsap.quickTo(element, 'y', { duration: 0.35, ease: 'power3.out' })

      const handlePointerMove = (event) => {
        const rect = element.getBoundingClientRect()
        xTo((event.clientX - rect.left - rect.width / 2) * strength)
        yTo((event.clientY - rect.top - rect.height / 2) * strength)
      }

      const reset = () => {
        xTo(0)
        yTo(0)
      }

      element.addEventListener('pointermove', handlePointerMove)
      element.addEventListener('pointerleave', reset)

      return () => {
        element.removeEventListener('pointermove', handlePointerMove)
        element.removeEventListener('pointerleave', reset)
      }
    },
    { dependencies: [reducedMotion, strength] },
  )

  return <span ref={ref}>{children}</span>
}
