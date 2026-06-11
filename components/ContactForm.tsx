'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✅</div>
        <h2 className="text-xl font-semibold text-ink mb-2">¡Mensaje enviado!</h2>
        <p className="text-ink-muted text-sm">
          Gracias por escribirnos. Te responderemos en un plazo de 48-72 horas.
        </p>
      </div>
    )
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full px-4 py-2.5 border border-stone-200 rounded text-sm text-ink placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="w-full px-4 py-2.5 border border-stone-200 rounded text-sm text-ink placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-300"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="asunto">
          Asunto
        </label>
        <select
          id="asunto"
          required
          className="w-full px-4 py-2.5 border border-stone-200 rounded text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-300"
        >
          <option value="">Selecciona un motivo</option>
          <option value="duda">Tengo una duda sobre inversión</option>
          <option value="sugerencia">Quiero sugerir un artículo</option>
          <option value="colaboracion">Propuesta de colaboración</option>
          <option value="publicidad">Publicidad</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          required
          rows={5}
          placeholder="Escribe tu mensaje aquí..."
          className="w-full px-4 py-2.5 border border-stone-200 rounded text-sm text-ink placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-300 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-brand-700 text-white rounded font-medium text-sm hover:bg-brand-800 transition-colors"
      >
        Enviar mensaje
      </button>

      <p className="text-xs text-ink-light text-center">
        Al enviar este formulario aceptas nuestra{' '}
        <a href="/privacidad" className="underline hover:text-ink">
          política de privacidad
        </a>
        .
      </p>
    </form>
  )
}
