import { routes } from '../../data/routes'
import { PagePlaceholder } from '../PagePlaceholder'

export default function CareerPage() {
  return <PagePlaceholder route={routes.find((route) => route.path === '/career')} />
}
