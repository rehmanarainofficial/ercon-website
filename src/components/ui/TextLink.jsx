import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

export function TextLink({ children, className, to, href, ...props }) {
  const classes = cn(
    'group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark',
    className,
  )
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        size={17}
      />
    </>
  )

  return to ? (
    <Link className={classes} to={to} {...props}>
      {content}
    </Link>
  ) : (
    <a className={classes} href={href} {...props}>
      {content}
    </a>
  )
}
