import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { gsap } from '../../utils/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../utils/cn'

export function ImageReveal({ children, className }) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !ref.current) return undefined

      gsap.fromTo(
        ref.current,
        { clipPath: 'inset(16% 0 16% 0)', autoAlpha: 0, scale: 1.04 },
        {
          clipPath: 'inset(0% 0 0% 0)',
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 82%',
            once: true,
          },
        },
      )

      return undefined
    },
    { dependencies: [reducedMotion] },
  )

  return (
    <div className={cn('overflow-hidden rounded-[var(--radius-large)]', className)} ref={ref}>
      {children}
    </div>
  )
}
