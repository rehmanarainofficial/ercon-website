import heroImage from '../assets/images/generated/switchgear-manufacturing-floor.jpg'
import trustImage from '../assets/images/generated/switchgear-testing-engineer.png'

export const clienteleHero = {
  eyebrow: 'Clients and industries',
  title: 'Engineering Solutions Across Diverse Industries',
  description:
    'ERCON presents its clientele page as a verified directory of client names, logos, and sector references. Client records are displayed only when approved logo assets and names are available.',
  image: heroImage,
  imageAlt: 'Switchgear manufacturing floor representing ERCON electrical manufacturing capability',
}

export const clientTrustStatement = {
  label: 'Client coordination',
  title: 'Client work begins with clear technical requirements and disciplined delivery support.',
  paragraphs: [
    'ERCON’s public company material positions the business around LV/MV switchgear, power distribution systems, solar energy systems, cable management, electrical cabinets, and sheet metal fabrication.',
    'For client-facing requirements, the page keeps the presentation factual: names and logos are shown only from verified records, while unsupported project details and endorsements are omitted.',
  ],
  image: trustImage,
  imageAlt: 'Engineer inspecting electrical switchgear testing equipment',
  principles: [
    {
      id: 'requirements',
      title: 'Requirements first',
      description: 'Technical discussions can start from product family, electrical requirement, project environment, or installation context.',
    },
    {
      id: 'selection',
      title: 'Relevant product selection',
      description: 'Product conversations can connect back to ERCON switchgear, cable management, solar, power distribution, and fabrication capabilities.',
    },
    {
      id: 'quality',
      title: 'Quality-led presentation',
      description: 'The page avoids unverified claims, fake testimonials, and inferred project outcomes.',
    },
  ],
}

export const clientRelationshipSteps = [
  {
    id: 'understand',
    number: '01',
    title: 'Understand the requirement',
    description: 'Review the electrical requirement, product family, site context, and coordination needs before a proposal conversation.',
  },
  {
    id: 'align',
    number: '02',
    title: 'Align the solution area',
    description: 'Connect the requirement with relevant ERCON product categories and manufacturing capabilities.',
  },
  {
    id: 'coordinate',
    number: '03',
    title: 'Coordinate technical details',
    description: 'Use verified product information, drawings, ratings, and documentation once supplied by ERCON’s technical team.',
  },
  {
    id: 'support',
    number: '04',
    title: 'Move toward delivery',
    description: 'Keep the next step focused on inquiry handling, manufacturing coordination, and project communication.',
  },
]

export const clienteleSeo = {
  title: 'Clientele | ERCON Industries Pakistan — Industrial, Commercial & Healthcare Sectors',
  description:
    'ERCON Industries serves a diverse clientele across industrial, commercial, healthcare, energy, and infrastructure sectors in Pakistan. Explore our verified client portfolio and sector expertise.',
  canonical: 'https://erconind.com/clientele',
  ogImage: 'https://erconind.com/og-image.jpg',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://erconind.com/clientele#webpage',
    name: 'ERCON Industries Clientele',
    url: 'https://erconind.com/clientele',
    description:
      'Verified directory of ERCON Industries clients across industrial, commercial, healthcare, energy, and infrastructure sectors in Pakistan.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://erconind.com/' },
        { '@type': 'ListItem', position: 2, name: 'Clientele', item: 'https://erconind.com/clientele' },
      ],
    },
  },
}

