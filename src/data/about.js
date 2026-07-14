import generatedHero from '../assets/images/generated/switchgear-manufacturing-floor.jpg'
import generatedTesting from '../assets/images/generated/switchgear-testing-engineer.png'

export const aboutMedia = {
  hero: generatedHero,
  testing: generatedTesting,
  manufacturing: generatedHero,
}

export const aboutHero = {
  eyebrow: 'About ERCON Industries',
  title: 'Built on Engineering, Quality, and Reliability',
  description:
    'ERCON Industries is a Pakistan-based electrical manufacturing company focused on LV/MV switchgear, power distribution systems, solar energy solutions, cable management, and sheet metal fabrication.',
  image: aboutMedia.hero,
  imageAlt: 'Modern switchgear manufacturing floor with blue electrical panels and copper busbar details',
  primaryCta: {
    label: 'Explore Products',
    href: '/products',
  },
  metadata: ['Established in Pakistan: 2012', 'Associated with ERCON Group', 'LV/MV switchgear focus'],
}

export const companyOverview = {
  label: 'Company overview',
  title:
    'Established in 2012, ERCON Industries (Pvt.) Limited is a leading manufacturer of electrical power distribution and precision engineering solutions in Pakistan.',
  paragraphs: [
    'The company specializes in the design, engineering, and manufacturing of Low Voltage (LV) & Medium Voltage (MV) Switchgear, Type-Tested Enclosures, Busway Trunking Systems, Cable Management Systems, Meter Security Boxes, Solar Solutions, Custom Sheet Metal Fabrication, and Stainless Steel (SS) products for hospitals and healthcare facilities.',
    'Equipped with state-of-the-art manufacturing facilities, advanced production technologies, and a highly experienced engineering team, ERCON Industries delivers safe, reliable, and innovative products that comply with international quality standards. Serving the industrial, commercial, healthcare, energy, and infrastructure sectors, the company is committed to engineering excellence, continuous innovation, and supporting the sustainable development of Pakistan through high-quality electrical and fabricated metal solutions.',
  ],
  image: aboutMedia.testing,
  imageAlt: 'Engineer inspecting a blue electrical switchgear panel with testing instruments',
  highlight: 'Engineering excellence and continuous innovation serving the industry.',
}

export const visionMission = {
  vision: {
    title: 'Vision',
    statement:
      'To support reliable electrical infrastructure through disciplined engineering, localized manufacturing, and long-term power distribution capability.',
    supportingText:
      'Formal vision wording should be replaced with approved company language when provided.',
  },
  mission: {
    title: 'Mission',
    statement:
      'To manufacture and supply dependable switchgear, power distribution, solar energy, cable management, and fabrication solutions with a focus on quality, safety, and technical support.',
    supportingText:
      'This presentation preserves ERCON’s public positioning without adding unsupported claims.',
  },
}

export const operationalPresence = {
  label: 'Operational presence',
  title: 'Local manufacturing with ERCON Group heritage.',
  description:
    'ERCON Industries is positioned as the Pakistan expansion of ERCON Group experience in UAE and KSA. Verified branch addresses, factory coordinates, and export markets are not exposed in the current public material, so this section stays factual and text-led.',
  items: [
    {
      id: 'pakistan',
      title: 'Pakistan manufacturing focus',
      description:
        'The company’s public material describes localized manufacturing for Pakistan’s industrial and infrastructure needs.',
    },
    {
      id: 'uae-ksa',
      title: 'ERCON Group context',
      description:
        'ERCON Group is publicly described as active in UAE and KSA since 2002, giving the Pakistan operation a broader group context.',
    },
  ],
}

export const aboutFinalCta = {
  eyebrow: 'Engineering inquiries',
  title: 'Discuss Your Electrical Engineering Requirements',
  description:
    'Connect with ERCON Industries for switchgear, power distribution, cable management, solar energy, and fabrication requirements.',
  primaryCta: {
    label: 'Contact Us',
    href: '/contact-us',
  },
  secondaryCta: {
    label: 'Explore Products',
    href: '/products',
  },
}

export const aboutSeo = {
  title: 'About ERCON Industries | Electrical Manufacturing Expertise Since 2012',
  description:
    'Established in 2012, ERCON Industries (Pvt.) Limited is a leading manufacturer of LV/MV Switchgear, Busway Trunking, Cable Management, Solar Solutions, Stainless Steel (SS) products for hospitals, and Custom Sheet Metal Fabrication in Pakistan.',
  canonical: 'https://erconind.com/about-us',
  ogImage: 'https://erconind.com/og-image.jpg',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://erconind.com/about-us#webpage',
    name: 'About ERCON Industries',
    url: 'https://erconind.com/about-us',
    description:
      'Learn about ERCON Industries — a Pakistan-based electrical and precision engineering manufacturer established in 2012, serving industrial, commercial, healthcare, energy, and infrastructure sectors.',
    isPartOf: {
      '@id': 'https://erconind.com/#organization',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://erconind.com/' },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://erconind.com/about-us' },
      ],
    },
  },
}

