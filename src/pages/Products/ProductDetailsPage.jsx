import { useParams } from 'react-router-dom'
import { PagePlaceholder } from '../PagePlaceholder'

export default function ProductDetailsPage() {
  const { slug } = useParams()

  return (
    <PagePlaceholder
      route={{
        pageName: 'Product Detail',
        eyebrow: 'Products',
        description: `Product detail placeholder for "${slug}". Verified specifications, imagery, downloads, standards, and related products will be added in Phase 4.`,
        title: 'ERCON Product Detail | Product Information',
        metaDescription: 'ERCON Industries product detail placeholder prepared for verified product specifications and inquiry flows.',
      }}
    />
  )
}
