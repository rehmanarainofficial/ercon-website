import generatedHero from '../assets/images/generated/switchgear-manufacturing-floor.jpg'
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
    label: 'Explore Products',
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
  label: 'ABOUT ERCON',
  title:
    'Our Engineering & Power Solutions: What We Do at ERCON Industries',
  description1:
    'Established in 2012, ERCON Industries (Pvt.) Limited is a premier manufacturer of electrical power distribution solutions in Pakistan. The company specializes in the design, engineering, and manufacturing of LV & MV Switchgear, Type-Tested Enclosures, Busway Trunking Systems, Cable Management Systems, Meter Security Boxes, Solar Solutions, and Custom Sheet Metal Fabrication.',
  description2:
    "With state-of-the-art manufacturing facilities, advanced production equipment, and an experienced engineering team, ERCON Industries delivers safe, reliable, and innovative products that comply with international quality standards. Driven by engineering excellence and continuous innovation, the company serves industrial, commercial, energy, and infrastructure sectors, contributing to the development of Pakistan's electrical and power distribution industry",
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
    label: 'Explore Products',
    href: '/products',
  },
}

export const seo = {
  title: 'ERCON Industries | Electrical Engineering and Power Distribution',
  description:
    'ERCON Industries manufactures LV/MV switchgear, power distribution systems, solar energy solutions, cable management systems, and sheet metal fabrication for Pakistan.',
  canonical: 'https://erconind.com/',
  ogImage: media.hero,
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ERCON Industries',
    url: 'https://erconind.com/',
    sameAs: [],
  },
}
