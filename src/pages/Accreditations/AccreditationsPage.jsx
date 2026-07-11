import { routes } from '../../data/routes'
import { PagePlaceholder } from '../PagePlaceholder'

export default function AccreditationsPage() {
  return <PagePlaceholder route={routes.find((route) => route.path === '/accreditations')} />
}
