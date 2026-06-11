import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllSlugs, getPostBySlug, getAllPosts, formatDate, categoryToSlug } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { AdAfterTitle, AdInArticle, AdSidebar } from '@/components/AdBanner'
import ReadingProgress from '@/components/ReadingProgress'
import AffiliateBox from '@/components/AffiliateBox'
import FAQSection, { FAQSchema } from '@/components/FAQSection'

// ── Static params for all posts ──────────────────────────────────────────
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// ── Per-post metadata ────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://finanzassimples.es'
  const postUrl = `${siteUrl}/blog/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: postUrl },
    openGraph: {
      type: 'article',
      locale: 'es_ES',
      url: postUrl,
      title: post.title,
      description: post.excerpt,
      siteName: 'Finanzas Simples',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

// ── Article page ─────────────────────────────────────────────────────────
export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://finanzassimples.es'

  // JSON-LD structured data (Article schema)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Finanzas Simples',
      url: siteUrl,
    },
    image: post.coverImage,
    url: `${siteUrl}/blog/${post.slug}`,
    keywords: post.tags.join(', '),
    articleSection: post.category,
    timeRequired: `PT${post.readingTime}M`,
  }

  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* JSON-LD FAQ */}
      {(post as any).faq && <FAQSchema faqs={(post as any).faq} />}

      {/* Reading progress bar */}
      <ReadingProgress />

      {/* ── Breadcrumb ───────────────────────────────────────── */}
      <div className="border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-ink-light">
            <Link href="/" className="hover:text-ink transition-colors">Inicio</Link>
            <span>/</span>
            <Link href={`/categoria/${categoryToSlug(post.category)}`} className="hover:text-ink transition-colors">
              {post.category}
            </Link>
            <span>/</span>
            <span className="text-ink-muted truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

          {/* ── Main article column ─────────────────────────── */}
          <article>
            {/* Header */}
            <header className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="category-badge">{post.category}</span>
                <span className="text-xs text-ink-light">{post.readingTime} min de lectura</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-tight mb-4 text-balance"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {post.title}
              </h1>

              <p className="text-lg text-ink-muted leading-relaxed mb-6">{post.excerpt}</p>

              {/* Author + date */}
              <div className="flex items-center gap-3 py-4 border-y border-stone-200">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-sm font-semibold text-brand-700 flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{post.author}</p>
                  <p className="text-xs text-ink-light">{post.authorRole} · {formatDate(post.date)}</p>
                </div>
              </div>
            </header>

            {/* ── AdSense: debajo del título principal ───────── */}
            <AdAfterTitle />

            {/* Cover image */}
            <div className="relative h-56 sm:h-72 md:h-80 w-full rounded-lg overflow-hidden mb-8 bg-stone-100">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 660px"
              />
            </div>

            {/* ── Article content with in-article ads ────────── */}
            <div className="prose-article">
              {post.content.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs.map((para, paraIdx) => (
                    <div key={paraIdx}>
                      <p>{para}</p>
                      {/* Ad after 2nd paragraph of section 0 */}
                      {sectionIdx === 0 && paraIdx === 1 && <AdInArticle />}
                      {/* Affiliate box after section 1 */}
                      {sectionIdx === 1 && paraIdx === section.paragraphs.length - 1 && (
                        <AffiliateBox />
                      )}
                      {/* Second in-article ad midway */}
                      {sectionIdx === 2 && paraIdx === 1 && <AdInArticle />}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* ── FAQ Section ─────────────────────────────────── */}
            {(post as any).faq && (post as any).faq.length > 0 && (
              <FAQSection faqs={(post as any).faq} />
            )}

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-stone-200 flex flex-wrap gap-2 items-center">
              <span className="text-xs text-ink-light">Etiquetas:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs border border-stone-200 rounded-full text-ink-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Social share */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-xs text-ink-light">Compartir:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteUrl}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs border border-stone-200 rounded-full text-ink-muted hover:bg-stone-50 transition-colors"
              >
                Twitter / X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteUrl}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs border border-stone-200 rounded-full text-ink-muted hover:bg-stone-50 transition-colors"
              >
                LinkedIn
              </a>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 leading-relaxed">
              <strong>Aviso legal:</strong> El contenido de este artículo es puramente informativo y no constituye asesoramiento financiero, fiscal ni de inversión. Antes de tomar decisiones de inversión, consulta con un asesor financiero cualificado.
            </div>
          </article>

          {/* ── Sidebar ────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Table of contents */}
              {post.content.some((s) => s.heading) && (
                <div className="p-5 bg-white border border-stone-200 rounded-lg">
                  <h3 className="text-sm font-semibold text-ink mb-3">En este artículo</h3>
                  <ul className="space-y-2">
                    {post.content
                      .filter((s) => s.heading)
                      .map((s, i) => (
                        <li key={i}>
                          <a
                            href={`#section-${i}`}
                            className="text-sm text-ink-muted hover:text-brand-700 transition-colors leading-snug block"
                          >
                            {s.heading}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              {/* Sidebar ad */}
              <AdSidebar />

              {/* Sidebar affiliate mini */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-sm">
                <p className="font-semibold text-ink mb-1">💡 ¿Listo para invertir?</p>
                <p className="text-xs text-ink-muted mb-3">MyInvestor: fondos Vanguard sin comisión de custodia.</p>
                <a
                  href="https://myinvestor.es"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block text-center py-2 bg-brand-700 text-white text-xs rounded font-medium hover:bg-brand-800 transition-colors"
                >
                  Abrir cuenta gratis →
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Related posts ──────────────────────────────────── */}
        {related.length > 0 && (
          <section className="mt-14 pt-10 border-t border-stone-200">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xs font-medium uppercase tracking-widest text-ink-light">También te puede interesar</h2>
              <div className="flex-1 h-px bg-stone-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
