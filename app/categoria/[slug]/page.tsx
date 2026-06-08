import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllCategories, getPostsByCategory, categoryToSlug } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { AdAfterTitle } from '@/components/AdBanner'


export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({ slug: categoryToSlug(cat) }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const categories = getAllCategories()
  const match = categories.find((c) => categoryToSlug(c) === params.slug)
  if (!match) return {}

  return {
    title: `Artículos sobre ${match}`,
    description: `Todos los artículos de Finanzas Simples sobre ${match}. Guías prácticas, análisis y estrategias para el inversor español.`,
    alternates: { canonical: `/categoria/${params.slug}` },
  }
}

export default function CategoriaPage({ params }: { params: { slug: string } }) {
  const categories = getAllCategories()
  const category = categories.find((c) => categoryToSlug(c) === params.slug)

  if (!category) notFound()

  const posts = getPostsByCategory(category)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Header de categoría */}
      <header className="mb-8 pb-6 border-b border-stone-200">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase bg-emerald-50 text-emerald-700 rounded mb-3">
          Categoría
        </span>
        <h1
          className="text-3xl sm:text-4xl font-semibold text-ink"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {category}
        </h1>
        <p className="mt-2 text-ink-muted">
          {posts.length} {posts.length === 1 ? 'artículo' : 'artículos'} publicados
        </p>
      </header>

      {/* AdSense */}
      <AdAfterTitle />

      {/* Grid de artículos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-ink-muted text-center py-16">
          Próximamente publicaremos artículos en esta categoría.
        </p>
      )}

      {/* Todas las categorías */}
      <aside className="mt-14 pt-8 border-t border-stone-200">
        <h2 className="text-xs font-medium uppercase tracking-widest text-ink-light mb-4">
          Explorar otras categorías
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories
            .filter((c) => c !== category)
            .map((c) => (
              <a
                key={c}
                href={`/categoria/${categoryToSlug(c)}`}
                className="px-4 py-2 text-sm border border-stone-200 rounded-full text-ink-muted hover:border-brand-400 hover:text-brand-700 transition-colors"
              >
                {c}
              </a>
            ))}
        </div>
      </aside>
    </div>
  )
}
