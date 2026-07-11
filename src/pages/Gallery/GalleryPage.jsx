import { routes } from '../../data/routes'
import { PagePlaceholder } from '../PagePlaceholder'

export default function GalleryPage() {
  return <PagePlaceholder route={routes.find((route) => route.path === '/gallery')} />
}
