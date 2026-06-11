import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | Finanzas Simples',
  description:
    'Contacta con el equipo de Finanzas Simples. Resolvemos tus dudas sobre fondos indexados, inversión pasiva y finanzas personales.',
  alternates: { canonical: '/contacto' },
}

export default function ContactoPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <header className="mb-10 text-center">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase bg-emerald-50 text-emerald-700 rounded mb-4">
          Contacto
        </span>
        <h1
          className="text-4xl sm:text-5xl font-semibold text-ink leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Escríbenos
        </h1>
        <p className="mt-4 text-lg text-ink-muted leading-relaxed">
          ¿Tienes una pregunta sobre fondos indexados, inversión pasiva o finanzas personales?
          ¿Quieres sugerir un tema para un artículo? Estamos aquí para ayudarte.
        </p>
      </header>

      {/* Tarjetas de motivos de contacto */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { icon: '❓', title: 'Dudas', desc: 'Preguntas sobre inversión pasiva o fondos indexados' },
          { icon: '✏️', title: 'Sugerencias', desc: 'Propón un tema o artículo que te gustaría leer' },
          { icon: '🤝', title: 'Colaboraciones', desc: 'Propuestas editoriales o de contenido' },
        ].map((item) => (
          <div
            key={item.title}
            className="p-4 border border-stone-200 rounded-lg text-center bg-white"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <p className="text-sm font-semibold text-ink mb-1">{item.title}</p>
            <p className="text-xs text-ink-muted leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Formulario */}
      <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
        <ContactForm />
      </div>

      {/* Info adicional */}
      <div className="mt-8 text-center">
        <p className="text-sm text-ink-muted">
          Respondemos en un plazo de{' '}
          <span className="font-medium text-ink">48-72 horas</span> en días laborables.
        </p>
        <p className="text-xs text-ink-light mt-2">
          Para colaboraciones comerciales o publicitarias, indica &ldquo;Publicidad&rdquo; en el
          asunto del mensaje.
        </p>
      </div>
    </div>
  )
}
