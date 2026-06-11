import Link from 'next/link'

const footerLinks = {
  Contenido: [
    { label: 'Fondos Indexados', href: '/categoria/fondos-indexados' },
    { label: 'Estrategia', href: '/categoria/estrategia' },
    { label: 'FIRE', href: '/categoria/fire' },
    { label: 'Educación Financiera', href: '/categoria/educacion-financiera' },
  ],
  Recursos: [
    { label: 'Calculadoras', href: '/herramientas' },
    { label: 'Glosario', href: '/glosario' },
    { label: 'Newsletter', href: '/newsletter' },
  ],
  Nosotros: [
    { label: 'Quiénes somos', href: '/quienes-somos' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Política de afiliados', href: '/afiliados' },
  ],
  Legal: [
    { label: 'Política de privacidad', href: '/privacidad' },
    { label: 'Aviso legal', href: '/aviso-legal' },
    { label: 'Política de cookies', href: '/cookies' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-cream/80 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white text-sm font-bold">F</span>
              <span className="text-lg font-semibold text-cream" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Finanzas Simples
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 max-w-[22ch]">
              Inversión pasiva, fondos indexados y camino hacia la independencia financiera.
            </p>
            <p className="text-xs mt-4 text-cream/40">
              El contenido de este blog es meramente informativo y no constituye asesoramiento financiero.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-medium uppercase tracking-widest text-cream/40 mb-4">{group}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-cream/70 hover:text-cream transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/40">© {year} Finanzas Simples. Todos los derechos reservados.</p>
          <p className="text-xs text-cream/30">Hecho con ♥ para el inversor español</p>
        </div>
      </div>
    </footer>
  )
}
