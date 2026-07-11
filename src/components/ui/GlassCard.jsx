import { cn } from '../../utils/cn'

export function GlassCard({ as: Component = 'div', className, children, ...props }) {
  return (
    <Component className={cn('glass-card rounded-[var(--radius-card)]', className)} {...props}>
      {children}
    </Component>
  )
}
