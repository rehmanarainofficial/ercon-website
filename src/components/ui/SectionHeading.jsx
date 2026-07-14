import { cn } from '../../utils/cn'

export function SectionLabel({ children, className }) {
  return (
    <h2 className={cn('mb-3 text-3xl sm:text-4xl font-extrabold text-brand tracking-wide', className)}>
      {children}
    </h2>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
  headingClassName,
  eyebrowClassName,
  bodyClassName,
  align = 'left',
  as: Heading = 'h3',
}) {
  return (
    <div className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? <SectionLabel className={eyebrowClassName}>{eyebrow}</SectionLabel> : null}
      <Heading className={cn('text-lg sm:text-xl font-bold text-ink leading-snug tracking-tight', headingClassName)}>{title}</Heading>
      {children ? (
        <div className={cn('mt-6 max-w-2xl text-body-fluid leading-8 text-muted', bodyClassName)}>{children}</div>
      ) : null}
    </div>
  )
}
