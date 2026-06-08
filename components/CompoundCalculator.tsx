'use client'

import { useState, useMemo } from 'react'

function fmt(n: number) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n)
}

export default function CompoundCalculator() {
  const [monthly, setMonthly] = useState(100)
  const [initial, setInitial] = useState(0)
  const [years, setYears] = useState(20)
  const [rate, setRate] = useState(7)

  const result = useMemo(() => {
    const r = rate / 100 / 12
    const n = years * 12
    // FV of lump sum
    const fvInitial = initial * Math.pow(1 + r, n)
    // FV of monthly contributions (annuity)
    const fvMonthly = r === 0 ? monthly * n : monthly * ((Math.pow(1 + r, n) - 1) / r)
    const total = fvInitial + fvMonthly
    const contributed = initial + monthly * n
    const gains = total - contributed
    return { total, contributed, gains }
  }, [monthly, initial, years, rate])

  return (
    <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
      <h2
        className="text-2xl font-semibold text-ink mb-6"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Calculadora de interés compuesto
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {/* Aportación mensual */}
        <label className="block">
          <span className="text-sm font-medium text-ink mb-1 block">
            Aportación mensual (€)
          </span>
          <input
            type="number"
            min={0}
            max={10000}
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
        </label>

        {/* Capital inicial */}
        <label className="block">
          <span className="text-sm font-medium text-ink mb-1 block">
            Capital inicial (€)
          </span>
          <input
            type="number"
            min={0}
            max={1000000}
            value={initial}
            onChange={(e) => setInitial(Number(e.target.value))}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
        </label>

        {/* Años */}
        <label className="block">
          <span className="text-sm font-medium text-ink mb-1 block">
            Plazo: <strong>{years} años</strong>
          </span>
          <input
            type="range"
            min={1}
            max={50}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-brand-700"
          />
          <div className="flex justify-between text-xs text-ink-light mt-1">
            <span>1 año</span><span>50 años</span>
          </div>
        </label>

        {/* Rentabilidad */}
        <label className="block">
          <span className="text-sm font-medium text-ink mb-1 block">
            Rentabilidad anual estimada: <strong>{rate}%</strong>
          </span>
          <input
            type="range"
            min={1}
            max={15}
            step={0.5}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-brand-700"
          />
          <div className="flex justify-between text-xs text-ink-light mt-1">
            <span>1%</span><span>15%</span>
          </div>
        </label>
      </div>

      {/* Resultados */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-brand-50 rounded-lg p-5 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-700 mb-1">Capital final</p>
          <p className="text-3xl font-bold text-brand-700">{fmt(result.total)}</p>
        </div>
        <div className="bg-stone-50 rounded-lg p-5 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-ink-light mb-1">Total aportado</p>
          <p className="text-3xl font-bold text-ink">{fmt(result.contributed)}</p>
        </div>
        <div className="bg-emerald-50 rounded-lg p-5 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-emerald-700 mb-1">Intereses ganados</p>
          <p className="text-3xl font-bold text-emerald-700">{fmt(result.gains)}</p>
        </div>
      </div>

      <p className="mt-4 text-xs text-ink-light">
        * Simulación con fines ilustrativos. Rentabilidades pasadas no garantizan resultados futuros.
        No incluye impuestos ni inflación.
      </p>
    </div>
  )
}
