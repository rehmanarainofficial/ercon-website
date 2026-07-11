import { useEffect } from 'react'

const upsertMeta = (selector, attributes) => {
  let meta = document.querySelector(selector)

  if (!meta) {
    meta = document.createElement('meta')
    document.head.appendChild(meta)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    meta.setAttribute(key, value)
  })
}

const upsertLink = (selector, attributes) => {
  let link = document.querySelector(selector)

  if (!link) {
    link = document.createElement('link')
    document.head.appendChild(link)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    link.setAttribute(key, value)
  })
}

export function useRouteMeta({ canonical, description, ogDescription, ogImage, ogTitle, schema, title }) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      upsertMeta('meta[name="description"]', {
        name: 'description',
        content: description,
      })
    }

    if (ogTitle || title) {
      upsertMeta('meta[property="og:title"]', {
        property: 'og:title',
        content: ogTitle || title,
      })
    }

    if (ogDescription || description) {
      upsertMeta('meta[property="og:description"]', {
        property: 'og:description',
        content: ogDescription || description,
      })
    }

    if (ogImage) {
      upsertMeta('meta[property="og:image"]', {
        property: 'og:image',
        content: ogImage,
      })
    }

    if (canonical) {
      upsertLink('link[rel="canonical"]', {
        rel: 'canonical',
        href: canonical,
      })
    }

    const schemaId = 'route-structured-data'
    let schemaNode = document.getElementById(schemaId)

    if (schema) {
      if (!schemaNode) {
        schemaNode = document.createElement('script')
        schemaNode.id = schemaId
        schemaNode.type = 'application/ld+json'
        document.head.appendChild(schemaNode)
      }

      schemaNode.textContent = JSON.stringify(schema)
    } else if (schemaNode) {
      schemaNode.remove()
    }
  }, [canonical, description, ogDescription, ogImage, ogTitle, schema, title])
}
