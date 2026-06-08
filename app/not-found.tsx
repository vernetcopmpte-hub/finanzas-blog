import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
      <p className="text-6xl font-semibold text-brand-700 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>404</p>
      <h1 className="text-2xl font-semibold text-ink mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        Página no encontrada
      </h1>
      <p className="text-ink-muted mb-8">El artículo que buscas no existe o ha sido movido.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-brand-700 text-white rounded font-medium hover:bg-brand-800 transition-colors text-sm"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
