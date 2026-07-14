export function getCategoryColor(categoryLabel) {
  const label = (categoryLabel || '').toLowerCase();
  if (label.includes('voltage') || label.includes('electrical')) {
    return '#163A5F'; // Electrical Solutions
  }
  if (label.includes('energy') || label.includes('renewable') || label.includes('solar')) {
    return '#4CAF50'; // Renewable Energy
  }
  if (label.includes('manufacturing') || label.includes('cable') || label.includes('fabrication')) {
    return '#374151'; // Manufacturing
  }
  if (label.includes('quality') || label.includes('certification') || label.includes('accreditation') || label.includes('compliance')) {
    return '#D4AF37'; // Quality & Certifications
  }
  if (label.includes('healthcare') || label.includes('hospital') || label.includes('medical')) {
    return '#0F6B4A'; // Healthcare Solutions
  }
  return '#163A5F'; // fallback to Primary Brand
}
