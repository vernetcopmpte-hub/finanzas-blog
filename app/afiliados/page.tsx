import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de afiliados y transparencia',
  description: 'Finanzas Simples es transparente sobre sus relaciones con afiliados. Descubre cómo funciona y qué productos recomendamos con total honestidad.',
  alternates: { canonical: '/afiliados' },
}

export default function AfiliadosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-3xl font-semibold text-ink mb-8"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Política de afiliados y transparencia
      </h1>
      <div className="space-y-6 text-sm leading-relaxed text-ink-muted">
        <div className="p-4 bg-amber-50 border border-amber-200 rounded text-amber-800 text-sm">
          <strong>Compromiso de transparencia:</strong> en Finanzas Simples nunca recomendamos un producto únicamente por comisión. Todos los artículos reflejan nuestra opinión honesta, independientemente de si existe relación de afiliados.
        </div>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">¿Qué es un enlace de afiliado?</h2>
          <p>Un enlace de afiliado es un enlace especial que, si el lector hace clic en él y contrata un producto o servicio, genera una pequeña comisión para nosotros sin coste adicional para el usuario. Esta comisión nos ayuda a financiar el sitio y a mantener el contenido gratuito.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Plataformas con las que colaboramos</h2>
          <p>En la actualidad podemos tener relaciones de afiliados con plataformas como MyInvestor, Indexa Capital, Finizens, DEGIRO o Trade Republic. En cada artículo donde aparezcan enlaces de afiliado, lo indicamos expresamente.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Publicidad (Google AdSense)</h2>
          <p>Este sitio muestra anuncios a través de Google AdSense. Los anuncios están claramente marcados como &ldquo;Publicidad&rdquo; y son ajenos al contenido editorial. No tenemos control sobre qué anuncios específicos se muestran.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Nuestro compromiso</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Solo recomendamos productos que usamos o hemos analizado en profundidad.</li>
            <li>Indicamos siempre cuándo un enlace es de afiliado.</li>
            <li>Una relación de afiliados nunca influye negativamente en nuestra valoración de un producto.</li>
            <li>Si un producto nos parece malo, lo decimos, aunque tengamos acuerdo de afiliados.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
