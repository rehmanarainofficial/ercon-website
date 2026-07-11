import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../utils/cn'
import { BrandLogo } from './BrandLogo'

export function BrandHomeLink({ className, logoClassName, onNavigate }) {
  const location = useLocation()
  const navigate = useNavigate()
  const reducedMotion = useReducedMotion()

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    })

    if (!reducedMotion) {
      window.setTimeout(() => {
        if (window.scrollY < 120) {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }
      }, 1200)
    }
  }

  const handleClick = (event) => {
    event.preventDefault()
    onNavigate?.()

    if (location.pathname !== '/') {
      navigate('/')
      window.requestAnimationFrame(scrollTop)
      return
    }

    scrollTop()
  }

  return (
    <Link aria-label="ERCON Industries home" className={cn('group inline-flex items-center', className)} onClick={handleClick} to="/">
      <BrandLogo className={logoClassName} />
    </Link>
  )
}
