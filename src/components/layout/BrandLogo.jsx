import erconLogo from '../../assets/logo.png'
import { cn } from '../../utils/cn'

export function BrandLogo({ className, imageClassName }) {
  return (
    <span
      className={cn(
        'inline-flex items-center transition',
        className,
      )}
    >
      <img
        alt="ERCON Group"
        className={cn('h-full w-full object-contain', imageClassName)}
        height="343"
        src={erconLogo}
        width="728"
      />
    </span>
  );
}
