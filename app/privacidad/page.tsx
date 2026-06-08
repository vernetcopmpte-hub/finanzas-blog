import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Política de privacidad de Finanzas Simples. Información sobre el tratamiento de datos personales conforme al RGPD.',
  alternates: { canonical: '/privacidad' },
  robots: { index: false },
}

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-3xl font-semibold text-ink mb-8"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Política de privacidad
      </h1>
      <div className="prose-article space-y-6 text-sm leading-relaxed text-ink-muted">
        <p><strong className="text-ink">Última actualización:</strong> 1 de julio de 2025</p>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">1. Responsable del tratamiento</h2>
          <p>El responsable del tratamiento de los datos personales recabados a través de este sitio web es <strong>Finanzas Simples</strong> (en adelante, &ldquo;el titular&rdquo;), con correo de contacto: privacidad@finanzassimples.es</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">2. Datos que recabamos</h2>
          <p>Recabamos los siguientes datos:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Dirección de correo electrónico, cuando te suscribes a la newsletter.</li>
            <li>Datos de navegación anónimos (páginas visitadas, tiempo de sesión) a través de cookies analíticas.</li>
            <li>Datos publicitarios a través de Google AdSense, que puede usar cookies para mostrar anuncios relevantes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">3. Finalidad y base legal</h2>
          <p>Tratamos tus datos para: (a) enviarte la newsletter semanal (base legal: consentimiento); (b) analizar el tráfico del sitio y mejorar el contenido (base legal: interés legítimo); (c) mostrar publicidad personalizada a través de Google AdSense (base legal: consentimiento a través del banner de cookies).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">4. Derechos del usuario</h2>
          <p>Tienes derecho a acceder, rectificar, suprimir y portar tus datos, así como a oponerte a su tratamiento. Para ejercer cualquiera de estos derechos, escríbenos a privacidad@finanzassimples.es</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink mt-8 mb-3">5. Google AdSense</h2>
          <p>Este sitio utiliza Google AdSense para mostrar anuncios. Google puede utilizar cookies para mostrar anuncios basados en tus visitas a este y otros sitios web. Puedes desactivar el uso de cookies por parte de Google visitando la <a href="https://adssettings.google.com" className="text-brand-700 underline" target="_blank" rel="noopener noreferrer">página de configuración de anuncios de Google</a>.</p>
        </section>
      </div>
    </div>
  )
}
