'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Fondos Indexados', href: '/categoria/fondos-indexados' },
  { label: 'Estrategia', href: '/categoria/estrategia' },
  { label: 'FIRE', href: '/categoria/fire' },
  { label: 'Educación', href: '/categoria/educacion-financiera' },
  { label: 'Herramientas', href: '/herramientas' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center text-white text-sm font-bold">
              F
            </span>
            <span
              className="text-xl font-display font-semibold text-ink hidden sm:block"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Finanzas Simples
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-ink-muted hover:text-ink hover:bg-stone-100 rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/newsletter"
              className="px-4 py-2 text-sm bg-brand-700 text-white rounded hover:bg-brand-800 transition-colors font-medium"
            >
              Newsletter gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded text-ink-muted hover:text-ink hover:bg-stone-100 transition-colors"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-stone-200 py-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm text-ink-muted hover:text-ink hover:bg-stone-100 rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-3">
              <Link
                href="/newsletter"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2.5 text-sm bg-brand-700 text-white rounded hover:bg-brand-800 transition-colors font-medium"
              >
                Newsletter gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
