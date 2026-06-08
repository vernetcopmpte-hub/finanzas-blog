import type { Metadata } from 'next'
import Link from 'next/link'
import { Fragment } from 'react'
import { getAllPosts, getAllCategories, categoryToSlug } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { AdAfterTitle, AdBetweenPosts } from '@/components/AdBanner'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Fondos Indexados e Inversión Pasiva para Españoles',
  description:
    'Guías claras sobre fondos indexados, ETFs y finanzas personales. Aprende a invertir de forma inteligente y sencilla con recursos adaptados al inversor español.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const [featured, ...rest] = posts

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-brand-700 mb-4">
            Inversión pasiva · ETFs · FIRE
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-ink leading-tight max-w-3xl mx-auto text-balance"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Invierte con cabeza,<br className="hidden sm:block" /> no con ruido
          </h1>
          <p className="mt-5 text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Guías prácticas sobre fondos indexados, ETFs y finanzas personales para el inversor español que quiere
            hacer crecer su dinero de forma simple y eficiente.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/blog/que-es-un-fondo-indexado"
              className="px-6 py-3 bg-brand-700 text-white rounded font-medium hover:bg-brand-800 transition-colors text-sm"
            >
              Empezar desde cero
            </Link>
            <Link
              href="/newsletter"
              className="px-6 py-3 border border-stone-300 text-ink rounded font-medium hover:bg-stone-50 transition-colors text-sm"
            >
              Newsletter semanal
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── AdSense: debajo del título principal ─────────── */}
        <AdAfterTitle />

        {/* ── Category pills ────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 py-6">
          <span className="text-xs text-ink-light self-center mr-1">Categorías:</span>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/categoria/${categoryToSlug(cat)}`}
              className="px-3 py-1 text-xs border border-stone-200 rounded-full text-ink-muted hover:border-brand-400 hover:text-brand-700 transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* ── Featured post ─────────────────────────────────── */}
        {featured && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-xs font-medium uppercase tracking-widest text-ink-light">Artículo destacado</h2>
              <div className="flex-1 h-px bg-stone-200" />
            </div>
            <PostCard post={featured} featured />
          </section>
        )}

        {/* ── Recent articles grid ──────────────────────────── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-medium uppercase tracking-widest text-ink-light">Artículos recientes</h2>
            <div className="flex-1 h-px bg-stone-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, idx) => (
              <Fragment key={post.slug}>
                <PostCard post={post} />
                {/* AdSense entre artículos: después del 3º y 6º */}
                {(idx === 2 || idx === 5) && (
                  <div className="sm:col-span-2 lg:col-span-3">
                    <AdBetweenPosts />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </section>

        {/* ── Newsletter CTA ────────────────────────────────── */}
        <section className="mb-16 rounded-lg bg-brand-700 text-white px-6 sm:px-10 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Recibe los mejores artículos cada semana
          </h2>
          <p className="text-brand-100 mb-6 text-sm max-w-xl mx-auto">
            Sin spam. Solo guías claras sobre inversión pasiva, fondos indexados y finanzas personales para el inversor español.
          </p>
          <NewsletterForm />
          <p className="text-xs text-brand-200 mt-3">Al suscribirte aceptas la política de privacidad. Cancela cuando quieras.</p>
        </section>
      </div>
    </>
  )
}
