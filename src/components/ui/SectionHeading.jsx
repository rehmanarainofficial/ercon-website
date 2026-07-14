import { cn } from '../../utils/cn'

export function SectionLabel({ children, className }) {
  return (
    <p className={cn('mb-4 text-xs font-semibold tracking-[0.18em] text-brand', className)}>
      {children}
    </p>
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
  as: Heading = 'h2',
}) {
  return (
    <div className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? <SectionLabel className={eyebrowClassName}>{eyebrow}</SectionLabel> : null}
      <Heading className={cn('text-section font-bold text-ink', headingClassName)}>{title}</Heading>
      {children ? (
        <div className={cn('mt-6 max-w-2xl text-body-fluid leading-8 text-muted', bodyClassName)}>{children}</div>
      ) : null}
    </div>
  )
}
