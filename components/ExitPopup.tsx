'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'exit_popup_dismissed'
const DISMISS_DAYS = 7

export default function ExitPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10)
      const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24)
      if (daysSince < DISMISS_DAYS) return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        setVisible(true)
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    // Mobile: show after 40s of reading
    const mobileTimer = setTimeout(() => {
      if (window.innerWidth < 768) setVisible(true)
    }, 40000)

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(mobileTimer)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
    setVisible(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 text-xl leading-none"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {!sent ? (
          <>
            <div className="text-4xl mb-4 text-center">📈</div>
            <h2
              className="text-2xl font-semibold text-ink text-center mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ¡Espera! Un regalo antes de irte
            </h2>
            <p className="text-ink-muted text-sm text-center mb-6 leading-relaxed">
              Suscríbete gratis y recibe cada semana los mejores artículos sobre fondos indexados e
              inversión pasiva. Sin spam, solo valor.
            </p>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4 mb-6">
              <ul className="space-y-2 text-sm text-ink">
                <li className="flex items-center gap-2">✅ Guía: <strong>Cómo invertir tus primeros 100€</strong></li>
                <li className="flex items-center gap-2">✅ Comparativa actualizada de <strong>brokers en España</strong></li>
                <li className="flex items-center gap-2">✅ Plantilla de <strong>seguimiento de cartera</strong> en Excel</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-3 border border-stone-200 rounded-lg text-sm text-ink placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-300"
              />
              <button
                type="submit"
                className="w-full py-3 bg-brand-700 text-white rounded-lg text-sm font-semibold hover:bg-brand-800 transition-colors"
              >
                Quiero la guía gratis →
              </button>
            </form>

            <button
              onClick={dismiss}
              className="block text-xs text-stone-400 hover:text-stone-600 text-center mt-4 mx-auto"
            >
              No, gracias. Prefiero no aprender a invertir.
            </button>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">🎉</div>
            <h2
              className="text-2xl font-semibold text-ink mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ¡Ya eres de los nuestros!
            </h2>
            <p className="text-ink-muted text-sm">
              Revisa tu email — te hemos enviado la guía y los recursos prometidos.
            </p>
            <button
              onClick={dismiss}
              className="mt-6 px-6 py-2.5 bg-brand-700 text-white rounded-lg text-sm font-medium hover:bg-brand-800 transition-colors"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
