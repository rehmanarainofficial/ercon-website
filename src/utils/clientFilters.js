export const normalizeClientSearch = (value = '') => value.trim().toLowerCase()

export function filterClients(clients, { search = '', sector = 'all' } = {}) {
  const normalizedSearch = normalizeClientSearch(search)

  return clients.filter((client) => {
    const matchesSector = sector === 'all' || client.sectorId === sector

    if (!matchesSector) return false
    if (!normalizedSearch) return true

    const searchable = [
      client.name,
      client.sectorLabel,
      client.relationshipType,
      client.projectTitle,
      client.projectLocation,
      ...(client.productsUsed || []),
      ...(client.servicesProvided || []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return searchable.includes(normalizedSearch)
  })
}

