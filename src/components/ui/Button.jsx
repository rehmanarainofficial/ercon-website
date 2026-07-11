import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const variants = {
  primary: 'button-primary',
  secondary: 'button-secondary',
  dark: 'button-on-dark',
}

export function Button({
  children,
  className,
  icon = <ArrowRight aria-hidden="true" size={18} strokeWidth={2.2} />,
  to,
  href,
  variant = 'primary',
  ...props
}) {
  const classes = cn('button-base group', variants[variant], className)
  const content = (
    <>
      <span>{children}</span>
      {icon ? (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  )
}

export function PrimaryButton(props) {
  return <Button variant="primary" {...props} />
}

export function SecondaryButton(props) {
  return <Button variant="secondary" {...props} />
}
