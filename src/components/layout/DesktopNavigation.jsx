import { NavLink } from 'react-router-dom'
import { mainNavigation } from '../../data/navigation'

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
      {mainNavigation.map((item) => (
        <NavLink
          className={({ isActive }) =>
            `rounded-full px-3 py-2 text-sm font-bold transition duration-200 hover:bg-white/12 hover:text-white ${
              isActive ? 'bg-white/14 text-white' : 'text-white/74'
            }`
          }
          end={item.path === '/'}
          key={item.path}
          to={item.path}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
