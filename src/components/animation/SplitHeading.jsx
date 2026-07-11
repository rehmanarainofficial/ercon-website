import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { SplitText, gsap } from '../../utils/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function SplitHeading({ as: Heading = 'h2', text, children, className }) {
  const headingRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const content = text || children

  useGSAP(
    () => {
      if (reducedMotion || !headingRef.current) return undefined

      const split = SplitText.create(headingRef.current, {
        type: 'lines',
        linesClass: 'split-line',
        mask: 'lines',
      })

      gsap.from(split.lines, {
        yPercent: 104,
        autoAlpha: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.075,
      })

      return () => split.revert()
    },
    { dependencies: [content, reducedMotion] },
  )

  return (
    <Heading className={className} ref={headingRef}>
      {content}
    </Heading>
  )
}
