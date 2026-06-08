import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de cookies',
  description: 'Política de cookies de Finanzas Simples. Tipos de cookies utilizadas y cómo desactivarlas.',
  alternates: { canonical: '/cookies' },
  robots: { index: false },
}

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-3xl font-semibold text-ink mb-8"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Política de cookies
      </h1>
      <div className="space-y-6 text-sm leading-relaxed text-ink-muted">
        <p>Este sitio utiliza cookies para mejorar la experiencia del usuario, analizar el tráfico y mostrar publicidad relevante. A continuación explicamos qué tipos de cookies utilizamos.</p>

        <div className="overflow-x-auto">
          <table className="w-full border border-stone-200 text-xs">
            <thead>
              <tr className="bg-stone-50">
                <th className="text-left px-3 py-2 border-b border-stone-200 font-medium text-ink">Tipo</th>
                <th className="text-left px-3 py-2 border-b border-stone-200 font-medium text-ink">Proveedor</th>
                <th className="text-left px-3 py-2 border-b border-stone-200 font-medium text-ink">Finalidad</th>
                <th className="text-left px-3 py-2 border-b border-stone-200 font-medium text-ink">Duración</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Técnicas', 'Propio', 'Funcionamiento del sitio', 'Sesión'],
                ['Analíticas', 'Google Analytics', 'Análisis de tráfico anónimo', '2 años'],
                ['Publicitarias', 'Google AdSense', 'Mostrar anuncios personalizados', '13 meses'],
              ].map(([type, provider, purpose, duration]) => (
                <tr key={type} className="border-b border-stone-100">
                  <td className="px-3 py-2 font-medium text-ink">{type}</td>
                  <td className="px-3 py-2">{provider}</td>
                  <td className="px-3 py-2">{purpose}</td>
                  <td className="px-3 py-2">{duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Cómo desactivar las cookies</h2>
          <p>Puedes desactivar las cookies desde la configuración de tu navegador. Ten en cuenta que desactivar ciertas cookies puede afectar al funcionamiento del sitio. Para las cookies publicitarias de Google, puedes gestionarlas en <a href="https://adssettings.google.com" className="text-brand-700 underline" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.</p>
        </section>
      </div>
    </div>
  )
}
