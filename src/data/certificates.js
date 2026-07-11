const erconAsset = (path) => `https://erconind.com${path}`

export const certificates = [
  {
    id: 'certificate-1',
    title: 'Accreditation Document 01',
    issuer: 'Issuer visible in source certificate image',
    category: 'Public certificate asset',
    image: erconAsset('/assets/Certificate1-tR-hyhjP.jpg'),
    featured: true,
  },
  {
    id: 'certificate-2',
    title: 'Accreditation Document 02',
    issuer: 'Issuer visible in source certificate image',
    category: 'Public certificate asset',
    image: erconAsset('/assets/Certificate2-DJLBPxz8.jpg'),
    featured: true,
  },
  {
    id: 'certificate-3',
    title: 'Accreditation Document 03',
    issuer: 'Issuer visible in source certificate image',
    category: 'Public certificate asset',
    image: erconAsset('/assets/Certificate3-B3E_OisR.jpg'),
    featured: true,
  },
]
