import { routes } from '../../data/routes'
import { PagePlaceholder } from '../PagePlaceholder'

export default function ClientelePage() {
  return <PagePlaceholder route={routes.find((route) => route.path === '/clientele')} />
}
