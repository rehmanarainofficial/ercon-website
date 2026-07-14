import generatedHero from '../assets/images/generated/switchgear-manufacturing-floor.png'
import generatedTesting from '../assets/images/generated/switchgear-testing-engineer.png'

export const media = {
  hero: generatedHero,
  introduction: generatedTesting,
  process: generatedHero,
}

export const homeHero = {
  eyebrow: 'Electrical Engineering and Power Distribution Solutions',
  title: 'Engineering Reliable Power Distribution Solutions',
  description:
    'ERCON Industries manufactures LV/MV switchgear, power distribution systems, solar energy solutions, cable management systems, and precision sheet metal fabrication for industrial and infrastructure projects across Pakistan.',
  primaryCta: {
    label: 'Explore Divisions',
    href: '/products',
  },
  secondaryCta: {
    label: 'Contact Us',
    href: '/contact-us',
  },
  image: media.hero,
  imageAlt: 'ERCON industrial power distribution equipment and manufacturing environment',
  panel: {
    label: 'Core capability',
    title: 'LV/MV Switchgear and Power Distribution',
    description: 'Manufacturing-focused electrical solutions backed by ERCON Group experience in UAE and KSA since 2002.',
  },
}

export const homeIntroduction = {
  label: 'About ERCON',
  title:
    'Our Engineering & Power Solutions: What We Do at ERCON Industries',
  description1:
    'Established in 2012, ERCON Industries (Pvt.) Limited is a leading manufacturer of electrical power distribution and precision engineering solutions in Pakistan. The company specializes in the design, engineering, and manufacturing of Low Voltage (LV) & Medium Voltage (MV) Switchgear, Type-Tested Enclosures, Busway Trunking Systems, Cable Management Systems, Meter Security Boxes, Solar Solutions, Custom Sheet Metal Fabrication, and Stainless Steel (SS) products for hospitals and healthcare facilities.',
  description2:
    'Equipped with state-of-the-art manufacturing facilities, advanced production technologies, and a highly experienced engineering team, ERCON Industries delivers safe, reliable, and innovative products that comply with international quality standards. Serving the industrial, commercial, healthcare, energy, and infrastructure sectors, the company is committed to engineering excellence, continuous innovation, and supporting the sustainable development of Pakistan through high-quality electrical and fabricated metal solutions.',
  image: media.introduction,
  imageAlt: 'ERCON electrical engineering and power solutions visual',
  link: {
    label: 'Discover Our Company',
    href: '/about-us',
  },
}

export const finalCta = {
  eyebrow: 'Project inquiries',
  title: 'Let’s Engineer a Reliable Power Solution',
  description:
    'Share your product inquiry, project requirement, or engineering brief with ERCON Industries for power distribution and switchgear solutions.',
  primaryCta: {
    label: 'Start a Conversation',
    href: '/contact-us',
  },
  secondaryCta: {
    label: 'Explore Divisions',
    href: '/products',
  },
}

export const seo = {
  title: 'ERCON Industries | Electrical & Power Distribution Manufacturer Pakistan',
  description:
    'ERCON Industries (Pvt.) Limited — established 2012 — manufactures LV/MV Switchgear, Busway Trunking, Cable Management Systems, Solar Solutions, Stainless Steel products, and Custom Sheet Metal Fabrication in Pakistan.',
  canonical: 'https://erconind.com/',
  ogImage: 'https://erconind.com/og-image.jpg',
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://erconind.com/#organization',
      name: 'ERCON Industries (Pvt.) Limited',
      url: 'https://erconind.com/',
      logo: 'https://erconind.com/logo.png',
      foundingDate: '2012',
      description:
        'Leading manufacturer of LV/MV Switchgear, Busway Trunking Systems, Cable Management, Solar Solutions, Stainless Steel (SS) fabrication for hospitals and healthcare, and Custom Sheet Metal Fabrication in Pakistan.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6.2 KM from Lillyani Toll Plaza, Near Pakki Haveli, Mustafabad Bayron',
        addressLocality: 'Kasur',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+92-3111-444-590',
          email: 'info@erconind.com',
          contactType: 'sales',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      ],
      sameAs: [
        'https://www.facebook.com/people/ERCON-Industries-PVT-Limited/61591925099821/',
        'https://www.instagram.com/ercon.ind/',
        'https://www.linkedin.com/company/ercon-industries-pvt-limited',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://erconind.com/#localbusiness',
      name: 'ERCON Industries (Pvt.) Limited',
      url: 'https://erconind.com/',
      telephone: '+92-3111-444-590',
      email: 'info@erconind.com',
      image: 'https://erconind.com/og-image.jpg',
      priceRange: 'PKR',
      openingHours: 'Mo-Fr 09:00-17:00',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6.2 KM from Lillyani Toll Plaza, Near Pakki Haveli, Mustafabad Bayron',
        addressLocality: 'Kasur',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.1167,
        longitude: 74.45,
      },
      sameAs: [
        'https://www.facebook.com/people/ERCON-Industries-PVT-Limited/61591925099821/',
        'https://www.instagram.com/ercon.ind/',
        'https://www.linkedin.com/company/ercon-industries-pvt-limited',
      ],
    },
  ],
}

