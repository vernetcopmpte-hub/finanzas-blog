import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiénes somos | Finanzas Simples',
  description:
    'Conoce al equipo de Finanzas Simples. Somos un equipo de entusiastas de las finanzas personales que quiere ayudar al inversor español a tomar mejores decisiones con su dinero.',
  alternates: { canonical: '/quienes-somos' },
}

export default function QuienesSomosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <header className="mb-10">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase bg-emerald-50 text-emerald-700 rounded mb-4">
          El equipo
        </span>
        <h1
          className="text-4xl sm:text-5xl font-semibold text-ink leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Quiénes somos
        </h1>
        <p className="mt-4 text-lg text-ink-muted leading-relaxed">
          Finanzas Simples nació con un objetivo claro: explicar la inversión pasiva y los fondos
          indexados en un lenguaje que cualquier persona pueda entender, sin jerga financiera
          innecesaria ni conflictos de interés.
        </p>
      </header>

      <div className="prose-article">
        <h2>Nuestra misión</h2>
        <p>
          En España, la cultura financiera sigue siendo una asignatura pendiente. La mayoría de
          personas deposita sus ahorros en cuentas corrientes que pierden valor con la inflación, o
          contrata productos financieros caros que benefician más al banco que al ahorrador. En
          Finanzas Simples creemos que invertir no tiene que ser complicado ni estar reservado para
          expertos o ricos.
        </p>
        <p>
          Nuestra misión es democratizar el acceso al conocimiento financiero. Publicamos guías
          prácticas, análisis y comparativas sobre fondos indexados, ETFs, carteras automatizadas y
          finanzas personales, todo adaptado a la realidad fiscal y regulatoria española.
        </p>

        <h2>El equipo</h2>
        <p>
          Finanzas Simples está escrito por un equipo de personas apasionadas por las finanzas
          personales y la inversión pasiva, con experiencia combinada en análisis financiero,
          educación económica y asesoramiento de inversiones.
        </p>

        <div className="not-prose grid gap-6 my-8">
          {[
            {
              name: 'Carlos Méndez',
              role: 'Asesor de inversiones',
              bio: 'Especialista en inversión pasiva y carteras de largo plazo. Lleva más de 10 años invirtiendo en fondos indexados y ayudando a otras personas a dar sus primeros pasos en la inversión.',
              initial: 'C',
            },
            {
              name: 'Ana García',
              role: 'Analista financiera',
              bio: 'Experta en fiscalidad de inversiones y planificación financiera personal. Apasionada del movimiento FIRE y de demostrar que la independencia financiera está al alcance de cualquier trabajador.',
              initial: 'A',
            },
            {
              name: 'Laura Sanz',
              role: 'Educadora financiera',
              bio: 'Lleva años divulgando sobre finanzas personales con el objetivo de hacer accesibles conceptos que los bancos tradicionales prefieren mantener opacos. Especialista en apps y plataformas de inversión.',
              initial: 'L',
            },
          ].map((person) => (
            <div
              key={person.name}
              className="flex gap-4 p-5 border border-stone-200 rounded-lg bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-lg font-semibold text-brand-700 flex-shrink-0">
                {person.initial}
              </div>
              <div>
                <p className="font-semibold text-ink">{person.name}</p>
                <p className="text-xs text-brand-700 mb-2">{person.role}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Nuestros principios</h2>
        <p>
          <strong>Independencia editorial:</strong> No recibimos pagos de gestoras, bancos ni
          plataformas de inversión a cambio de recomendaciones. Cuando mencionamos un producto, es
          porque genuinamente lo consideramos bueno para el inversor español, no porque nos paguen
          por ello.
        </p>
        <p>
          <strong>Transparencia:</strong> Somos claros sobre qué es opinión y qué es dato contrastado.
          Todo el contenido de Finanzas Simples es informativo y educativo; nunca constituye
          asesoramiento financiero personalizado.
        </p>
        <p>
          <strong>Simplicidad:</strong> Creemos que las mejores estrategias de inversión son las más
          simples. Un fondo indexado global, aportaciones mensuales constantes y paciencia a largo
          plazo supera a la gran mayoría de estrategias complejas y caras.
        </p>

        <h2>Contacta con nosotros</h2>
        <p>
          Si tienes preguntas, sugerencias o quieres colaborar con Finanzas Simples, puedes
          escribirnos a través de nuestra{' '}
          <a href="/contacto" className="text-brand-700 hover:underline">
            página de contacto
          </a>
          . Leemos todos los mensajes y respondemos en un plazo de 48-72 horas.
        </p>
      </div>
    </div>
  )
}
