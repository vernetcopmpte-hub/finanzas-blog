import { MetadataRoute } from 'next'
import { getAllPosts, getAllCategories, categoryToSlug } from '@/lib/posts'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://finanzassimples.es'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const categories = getAllCategories()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/herramientas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/glosario`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/categoria/${categoryToSlug(cat)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...postRoutes, ...categoryRoutes]
}
