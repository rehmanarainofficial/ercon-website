import { cn } from '../../utils/cn'
import { allClientsSector } from '../../data/clientSectors'

export function ClientSectorFilter({ activeSector, onChange, sectors }) {
  const items = [allClientsSector, ...sectors]

  return (
    <div aria-label="Filter clients by sector" className="flex gap-3 overflow-x-auto pb-2" role="group">
      {items.map((sector) => {
        const isActive = activeSector === sector.id

        return (
          <button
            aria-pressed={isActive}
            className={cn(
              'min-h-12 shrink-0 rounded-full border px-4 text-left text-sm font-semibold transition',
              isActive
                ? 'border-brand bg-brand text-white shadow-[0_14px_34px_rgb(15_107_74/0.22)]'
                : 'border-line bg-white text-muted hover:border-brand/40 hover:text-brand',
            )}
            key={sector.id}
            onClick={() => onChange(sector.id)}
            type="button"
          >
            <span>{sector.label}</span>
            <span className={cn('ml-2 text-xs', isActive ? 'text-white/70' : 'text-muted')}>{sector.clientCount}</span>
          </button>
        )
      })}
    </div>
  )
}

