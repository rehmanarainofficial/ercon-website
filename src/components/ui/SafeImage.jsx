import { useState } from 'react'
import { cn } from '../../utils/cn'

export function SafeImage({
  alt,
  className,
  fallbackClassName,
  height,
  loading = 'lazy',
  src,
  width,
  ...props
}) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        aria-label={alt || undefined}
        className={cn(
          'grid min-h-48 place-items-center rounded-[inherit] border border-line bg-surface-blue text-center text-sm font-bold text-brand',
          fallbackClassName,
          className,
        )}
        role={alt ? 'img' : undefined}
      >
        <span>ERCON media</span>
      </div>
    )
  }

  return (
    <img
      alt={alt}
      className={className}
      height={height}
      loading={loading}
      onError={() => setFailed(true)}
      src={src}
      width={width}
      {...props}
    />
  )
}
