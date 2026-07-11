import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ProductBreadcrumbs({ current, items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/66">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link className="transition hover:text-white" to="/">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.to}>
            <ChevronRight aria-hidden="true" size={14} />
            <Link className="transition hover:text-white" to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
        <li className="flex items-center gap-2" aria-current="page">
          <ChevronRight aria-hidden="true" size={14} />
          <span className="text-white">{current}</span>
        </li>
      </ol>
    </nav>
  )
}
