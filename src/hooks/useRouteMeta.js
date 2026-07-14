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

export function useRouteMeta({
  canonical,
  description,
  keywords,
  ogDescription,
  ogImage,
  ogTitle,
  ogType = 'website',
  robots,
  schema,
  title,
  twitterCard = 'summary_large_image',
  twitterDescription,
  twitterImage,
  twitterTitle,
}) {
  useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────────────
    if (title) {
      document.title = title
    }

    // ── Standard Meta ──────────────────────────────────────────────────────
    if (description) {
      upsertMeta('meta[name="description"]', { name: 'description', content: description })
    }

    if (keywords) {
      upsertMeta('meta[name="keywords"]', {
        name: 'keywords',
        content: Array.isArray(keywords) ? keywords.join(', ') : keywords,
      })
    }

    if (robots) {
      upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })
    }

    // ── Canonical ──────────────────────────────────────────────────────────
    if (canonical) {
      upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical })
    }

    // ── Open Graph ─────────────────────────────────────────────────────────
    if (ogTitle || title) {
      upsertMeta('meta[property="og:title"]', { property: 'og:title', content: ogTitle || title })
    }

    if (ogDescription || description) {
      upsertMeta('meta[property="og:description"]', {
        property: 'og:description',
        content: ogDescription || description,
      })
    }

    if (ogImage) {
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage })
    }

    if (ogType) {
      upsertMeta('meta[property="og:type"]', { property: 'og:type', content: ogType })
    }

    if (canonical) {
      upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    }

    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'ERCON Industries',
    })

    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_PK' })

    // ── Twitter / X Cards ──────────────────────────────────────────────────
    if (twitterCard) {
      upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: twitterCard })
    }

    if (twitterTitle || ogTitle || title) {
      upsertMeta('meta[name="twitter:title"]', {
        name: 'twitter:title',
        content: twitterTitle || ogTitle || title,
      })
    }

    if (twitterDescription || ogDescription || description) {
      upsertMeta('meta[name="twitter:description"]', {
        name: 'twitter:description',
        content: twitterDescription || ogDescription || description,
      })
    }

    if (twitterImage || ogImage) {
      upsertMeta('meta[name="twitter:image"]', {
        name: 'twitter:image',
        content: twitterImage || ogImage,
      })
    }

    // ── JSON-LD Structured Data ────────────────────────────────────────────
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
  }, [
    canonical,
    description,
    keywords,
    ogDescription,
    ogImage,
    ogTitle,
    ogType,
    robots,
    schema,
    title,
    twitterCard,
    twitterDescription,
    twitterImage,
    twitterTitle,
  ])
}
