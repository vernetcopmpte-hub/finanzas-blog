import Link from 'next/link'

interface AffiliateLink {
  name: string
  description: string
  bonus: string
  url: string
  color: string
}

const affiliates: AffiliateLink[] = [
  {
    name: 'MyInvestor',
    description: 'Fondos Vanguard sin comisión de custodia. El mejor banco para fondos indexados en España.',
    bonus: '20€ de regalo al abrir cuenta',
    url: 'https://myinvestor.es',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    name: 'Indexa Capital',
    description: 'La cartera automatizada con más rentabilidad histórica en España. Desde 1.000€.',
    bonus: '10.000€ gestionados gratis 1 año',
    url: 'https://indexacapital.com',
    color: 'bg-emerald-50 border-emerald-200',
  },
  {
    name: 'Trade Republic',
    description: 'ETFs y acciones desde 1€ con interés del 3% en efectivo. App sencilla y sin comisiones.',
    bonus: 'Acción gratis al registrarte',
    url: 'https://traderepublic.com/es-es',
    color: 'bg-green-50 border-green-200',
  },
  {
    name: 'DEGIRO',
    description: 'El broker más usado en España para ETFs. Comisiones desde 0€ en ETFs seleccionados.',
    bonus: '0€ comisión en ETFs seleccionados',
    url: 'https://degiro.es',
    color: 'bg-orange-50 border-orange-200',
  },
]

interface AffiliateBoxProps {
  show?: string[]  // nombres de afiliados a mostrar, si está vacío muestra todos
  title?: string
}

export default function AffiliateBox({
  show,
  title = '🏦 Plataformas recomendadas para empezar hoy',
}: AffiliateBoxProps) {
  const filtered = show
    ? affiliates.filter((a) => show.includes(a.name))
    : affiliates

  return (
    <div className="my-8 p-5 bg-stone-50 border border-stone-200 rounded-xl">
      <p className="text-sm font-semibold text-ink mb-4">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((aff) => (
          <a
            key={aff.name}
            href={aff.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`block p-4 border rounded-lg hover:shadow-md transition-shadow ${aff.color}`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-ink text-sm">{aff.name}</p>
                <p className="text-xs text-ink-muted mt-1 leading-snug">{aff.description}</p>
              </div>
            </div>
            <div className="mt-3 inline-block px-2.5 py-1 bg-white border border-current rounded text-xs font-medium text-emerald-700 border-emerald-300">
              ✨ {aff.bonus}
            </div>
          </a>
        ))}
      </div>
      <p className="text-xs text-stone-400 mt-3">
        * Algunos enlaces son de afiliado. Si contratas a través de ellos, recibimos una pequeña
        comisión sin coste para ti.{' '}
        <Link href="/afiliados" className="underline hover:text-stone-600">
          Más info
        </Link>
      </p>
    </div>
  )
}
