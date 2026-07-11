import { routes } from '../../data/routes'
import { PagePlaceholder } from '../PagePlaceholder'

export default function ProductsPage() {
  return <PagePlaceholder route={routes.find((route) => route.path === '/products')} />
}
