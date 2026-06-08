import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glosario de inversión y finanzas personales',
  description:
    'Diccionario completo de términos financieros: ETF, fondo indexado, TER, FIRE, diversificación, renta variable, bono, dividendo y mucho más. Definiciones claras para el inversor español.',
  alternates: { canonical: '/glosario' },
}

const terms = [
  {
    term: 'ETF (Exchange-Traded Fund)',
    def: 'Fondo cotizado en bolsa que replica un índice de referencia. A diferencia de un fondo de inversión tradicional, se compra y vende en bolsa como una acción, con precio en tiempo real.',
  },
  {
    term: 'Fondo indexado',
    def: 'Fondo de inversión cuyo objetivo es replicar un índice bursátil (S&P 500, MSCI World, IBEX 35...) con mínima intervención humana. Sus comisiones son muy inferiores a las de los fondos de gestión activa.',
  },
  {
    term: 'TER (Total Expense Ratio)',
    def: 'Comisión total anual que cobra un fondo por su gestión, expresada como porcentaje del patrimonio. Incluye la comisión de gestión, depósito y otros gastos. Para fondos indexados suele ser inferior al 0,25%.',
  },
  {
    term: 'FIRE (Financial Independence, Retire Early)',
    def: 'Movimiento financiero cuyo objetivo es alcanzar la independencia financiera y la jubilación anticipada acumulando suficiente capital para vivir de los rendimientos sin necesidad de trabajar.',
  },
  {
    term: 'Interés compuesto',
    def: 'Efecto por el que los intereses generados se reinvierten y generan a su vez nuevos intereses. A largo plazo produce un crecimiento exponencial del capital.',
  },
  {
    term: 'Renta variable',
    def: 'Activo financiero cuya rentabilidad no está garantizada de antemano. Las acciones y los fondos de acciones son renta variable. A largo plazo han ofrecido mayores retornos que la renta fija, pero con mayor volatilidad.',
  },
  {
    term: 'Renta fija',
    def: 'Activo financiero que paga un tipo de interés conocido (bono, obligación, letra del Tesoro). Menor volatilidad que la renta variable pero menor rentabilidad esperada a largo plazo.',
  },
  {
    term: 'Diversificación',
    def: 'Estrategia de invertir en distintos activos, sectores y geografías para reducir el riesgo. Un fondo MSCI World está diversificado en más de 1.500 empresas de 23 países.',
  },
  {
    term: 'Rebalanceo',
    def: 'Proceso de ajustar periódicamente los pesos de los activos de una cartera para volver a la asignación objetivo. Por ejemplo, si las acciones han subido mucho, se vende una parte y se compra más renta fija.',
  },
  {
    term: 'DCA (Dollar-Cost Averaging)',
    def: 'Estrategia de invertir una cantidad fija periódicamente (por ejemplo, 100 euros cada mes), independientemente del precio. Reduce el impacto de la volatilidad a largo plazo.',
  },
  {
    term: 'MSCI World',
    def: 'Índice bursátil que agrupa las principales empresas de los mercados desarrollados (EE.UU., Europa, Japón, etc.). Cubre aproximadamente el 85% de la capitalización bursátil mundial.',
  },
  {
    term: 'S&P 500',
    def: 'Índice de las 500 mayores empresas por capitalización bursátil cotizadas en bolsas estadounidenses. El índice de referencia más seguido del mundo.',
  },
  {
    term: 'Boglehead',
    def: 'Seguidor de la filosofía de inversión de John Bogle, fundador de Vanguard. Los Bogleheads invierten en fondos indexados de bajo coste, diversifican ampliamente y mantienen el rumbo a largo plazo.',
  },
  {
    term: 'Plusvalía',
    def: 'Ganancia obtenida al vender un activo por más de su precio de compra. En España tributa en la base del ahorro del IRPF entre el 19% y el 28% según la cantidad.',
  },
  {
    term: 'Traspaso de fondos',
    def: 'Operación por la que se mueve dinero de un fondo de inversión a otro sin pasar por cuenta corriente. En España, los traspasos entre fondos no tienen coste fiscal hasta el reembolso final.',
  },
]

export default function GlosarioPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <header className="mb-8">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase bg-emerald-50 text-emerald-700 rounded mb-3">
          Glosario
        </span>
        <h1
          className="text-3xl sm:text-4xl font-semibold text-ink"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Diccionario de inversión y finanzas
        </h1>
        <p className="mt-2 text-ink-muted">
          Definiciones claras de los términos más importantes para el inversor español.
        </p>
      </header>

      <div className="space-y-0 divide-y divide-stone-100">
        {terms.map(({ term, def }) => (
          <div key={term} className="py-5">
            <dt className="text-base font-semibold text-ink mb-1">{term}</dt>
            <dd className="text-sm text-ink-muted leading-relaxed">{def}</dd>
          </div>
        ))}
      </div>
    </div>
  )
}
