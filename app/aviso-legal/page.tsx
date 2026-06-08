import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: 'Aviso legal de Finanzas Simples. Términos y condiciones de uso del sitio web.',
  alternates: { canonical: '/aviso-legal' },
  robots: { index: false },
}

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-3xl font-semibold text-ink mb-8"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Aviso legal
      </h1>
      <div className="space-y-6 text-sm leading-relaxed text-ink-muted">
        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Titularidad del sitio</h2>
          <p>El presente sitio web, accesible en finanzassimples.es, es titularidad de Finanzas Simples. Contacto: info@finanzassimples.es</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Objeto y alcance</h2>
          <p>Finanzas Simples es un blog de educación financiera. Todo el contenido publicado tiene un carácter exclusivamente informativo y educativo. No constituye asesoramiento financiero, de inversión, fiscal ni jurídico. Antes de tomar cualquier decisión de inversión, el usuario debe consultar con un asesor financiero debidamente cualificado y supervisado por la CNMV.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Exención de responsabilidad</h2>
          <p>El titular no se hace responsable de los daños o pérdidas que puedan derivarse de las decisiones tomadas por los usuarios en base a la información publicada en este sitio. Los mercados financieros implican riesgos, incluida la posible pérdida total del capital invertido.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Propiedad intelectual</h2>
          <p>Los textos, gráficos, diseño y código de este sitio son propiedad del titular o de sus autores y están protegidos por la legislación de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">Ley aplicable</h2>
          <p>El presente aviso legal se rige por la legislación española. Para cualquier controversia derivada del uso de este sitio, las partes se someten a los juzgados y tribunales de Madrid.</p>
        </section>
      </div>
    </div>
  )
}
