import generatedHero from '../assets/images/generated/switchgear-manufacturing-floor.jpg'
import generatedTesting from '../assets/images/generated/switchgear-testing-engineer.jpg'

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
  label: 'About ERCON',
  title:
    'ERCON Industries brings global switchgear experience into local manufacturing for Pakistan’s industrial and infrastructure market.',
  description:
    'Established in 2012 as an associated company of the ERCON Group, ERCON Industries focuses on LV/MV switchgear, power distribution systems, solar energy systems, cable tray solutions, and sheet metal fabrication. Its public positioning emphasizes advanced technology, a skilled technical team, quality, safety, and standards-compliant delivery.',
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
