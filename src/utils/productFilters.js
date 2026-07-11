export const normalizeSearch = (value = '') => value.trim().toLowerCase()

export const filterProducts = (products, { category = 'all', search = '' } = {}) => {
  const normalizedSearch = normalizeSearch(search)

  return products.filter((product) => {
    const matchesCategory = category === 'all' || product.categoryId === category

    if (!matchesCategory) return false

    if (!normalizedSearch) return true

    const searchableText = [
      product.name,
      product.categoryLabel,
      product.shortDescription,
      product.overview,
      ...(product.highlights || []),
      ...(product.applications || []).map((item) => `${item.title} ${item.description}`),
    ]
      .join(' ')
      .toLowerCase()

    return searchableText.includes(normalizedSearch)
  })
}
