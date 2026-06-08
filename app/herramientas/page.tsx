import type { Metadata } from 'next'
import CompoundCalculator from '@/components/CompoundCalculator'
import { AdAfterTitle } from '@/components/AdBanner'

export const metadata: Metadata = {
  title: 'Calculadoras financieras gratuitas',
  description:
    'Herramientas y calculadoras gratuitas para calcular el interés compuesto, simular tu plan de inversión mensual y estimar cuándo alcanzarás la independencia financiera.',
  alternates: { canonical: '/herramientas' },
}

export default function HerramientasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <header className="mb-8">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase bg-emerald-50 text-emerald-700 rounded mb-3">
          Herramientas gratuitas
        </span>
        <h1
          className="text-3xl sm:text-4xl font-semibold text-ink"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Calculadoras financieras
        </h1>
        <p className="mt-2 text-ink-muted max-w-2xl">
          Simula tu plan de inversión, calcula el impacto del interés compuesto y toma decisiones
          financieras informadas con nuestras herramientas gratuitas.
        </p>
      </header>

      <AdAfterTitle />

      <div className="mt-6 space-y-8">
        <CompoundCalculator />

        {/* Tarjetas de herramientas futuras */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 border border-stone-200 rounded-lg bg-white opacity-60">
            <p className="text-xs font-medium uppercase tracking-widest text-ink-light mb-2">Próximamente</p>
            <h3 className="text-lg font-semibold text-ink mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Calculadora FIRE
            </h3>
            <p className="text-sm text-ink-muted">
              Calcula cuántos años necesitas para alcanzar la independencia financiera con la regla del 4%.
            </p>
          </div>
          <div className="p-5 border border-stone-200 rounded-lg bg-white opacity-60">
            <p className="text-xs font-medium uppercase tracking-widest text-ink-light mb-2">Próximamente</p>
            <h3 className="text-lg font-semibold text-ink mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Comparador de comisiones
            </h3>
            <p className="text-sm text-ink-muted">
              Compara el impacto real de las comisiones de distintos fondos sobre tu capital a 30 años.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
