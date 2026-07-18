import generatedHero from '../assets/images/generated/switchgear-manufacturing-floor.png'
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
    label: 'Explore Divisions',
    href: '/products',
  },
  metadata: ['Established in Pakistan: 2012', 'Associated with ERCON Group', 'LV/MV switchgear focus'],
}

export const companyOverview = {
  label: 'About US',
  title:
    'Established in 2012, ERCON Industries (Pvt.) Limited is a leading Pakistani manufacturer of electrical power distribution and precision engineering solutions.',
  paragraphs: [
    'We specialize in the design, engineering, and manufacturing of LV & MV Switchgear, Type-Tested Enclosures, Busway Trunking Systems, Cable Management Systems, Meter Security Boxes, Solar Solutions, Custom Sheet Metal Fabrication, and Stainless Steel (SS) products for industrial, commercial, and healthcare applications.',
    "Operating from a company-owned 5-acre manufacturing facility, ERCON is equipped with state-of-the-art production machinery, advanced testing and commissioning laboratories, and modern manufacturing technologies. Our facility features high-precision CNC punching, fiber laser cutting, a 110-ton CNC press brake, laser welding, and Pakistan's first automated gasket application machine, ensuring exceptional quality and manufacturing precision.",
    "With a team of 50+ highly qualified engineers and over 200 skilled professionals and technical staff, ERCON has successfully delivered 1,500+ industrial, infrastructure, and high-rise building projects across Pakistan. Backed by engineering excellence, strict quality standards, and continuous innovation, we deliver reliable, safe, and high-performance solutions that support the nation's industrial and infrastructure development.",
  ],
  image: aboutMedia.testing,
  imageAlt: 'Engineer inspecting a blue electrical switchgear panel with testing instruments',
  highlight: 'Reliable, safe, and high-performance solutions for industrial and infrastructure development.',
}

export const visionMission = {
  vision: {
    title: 'Vision',
    statement:
      "To lead Pakistan's engineering and manufacturing industry through innovation, quality, and sustainable solutions.",
    supportingText:
      'Formal vision wording should be replaced with approved company language when provided.',
  },
  mission: {
    title: 'Mission',
    statement:
      'To deliver reliable electrical, renewable energy, and precision manufacturing solutions that exceed customer expectations while upholding the highest standards of quality, safety, and engineering excellence.',
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
    label: 'Explore Divisions',
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
