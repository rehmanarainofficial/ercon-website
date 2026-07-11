import { routes } from '../../data/routes'
import { PagePlaceholder } from '../PagePlaceholder'

export default function ContactPage() {
  return <PagePlaceholder route={routes.find((route) => route.path === '/contact-us')} />
}
