import type { Metadata } from 'next'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Newsletter gratuita de inversión pasiva',
  description:
    'Suscríbete a la newsletter semanal de Finanzas Simples. Recibe guías sobre fondos indexados, análisis de carteras y consejos de inversión directamente en tu correo. Gratis.',
  alternates: { canonical: '/newsletter' },
}

export default function NewsletterPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
      <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase bg-emerald-50 text-emerald-700 rounded mb-4">
        Newsletter
      </span>
      <h1
        className="text-3xl sm:text-4xl font-semibold text-ink mb-4"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Inversión pasiva cada semana, en tu correo
      </h1>
      <p className="text-ink-muted mb-8 leading-relaxed">
        Cada semana enviamos una guía práctica sobre fondos indexados, finanzas personales o estrategias
        de inversión. Sin spam. Sin publicidad. Solo contenido que ayuda.
      </p>

      <NewsletterForm />

      <p className="text-xs text-ink-light mt-4">
        Al suscribirte aceptas la{' '}
        <a href="/privacidad" className="underline hover:text-brand-700">
          política de privacidad
        </a>
        . Cancela en cualquier momento con un clic.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        {[
          { title: '+1.200 suscriptores', desc: 'Inversores que ya reciben la newsletter cada semana.' },
          { title: 'Cada lunes', desc: 'Una guía práctica de inversión en tu bandeja de entrada.' },
          { title: '100% gratuita', desc: 'Sin planes de pago ni contenido de pago oculto.' },
        ].map((item) => (
          <div key={item.title} className="p-4 bg-stone-50 rounded-lg">
            <p className="font-semibold text-ink text-sm mb-1">{item.title}</p>
            <p className="text-xs text-ink-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
