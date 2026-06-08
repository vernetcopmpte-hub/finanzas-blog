'use client'

import { useEffect } from 'react'

interface AdBannerProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  className?: string
  label?: string
}

// Replace NEXT_PUBLIC_ADSENSE_ID with your real Publisher ID in .env.local
// e.g. NEXT_PUBLIC_ADSENSE_ID=ca-pub-1234567890123456

export default function AdBanner({
  slot,
  format = 'auto',
  className = '',
  label = 'Publicidad',
}: AdBannerProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    if (clientId && typeof window !== 'undefined') {
      try {
        ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      } catch {
        // AdSense not loaded yet
      }
    }
  }, [clientId])

  // Development placeholder — shows dimensions without loading AdSense
  if (!clientId || process.env.NODE_ENV === 'development') {
    const heights: Record<string, string> = {
      auto: '90px',
      rectangle: '250px',
      horizontal: '90px',
      vertical: '600px',
    }
    return (
      <div
        className={`ad-container ${className}`}
        style={{ minHeight: heights[format] ?? '90px' }}
        aria-label="Espacio publicitario"
        role="complementary"
      >
        <span className="text-xs text-stone-400 select-none pointer-events-none">
          {label} · slot: {slot}
        </span>
      </div>
    )
  }

  return (
    <div className={`ad-container ${className}`} aria-label="Publicidad" role="complementary">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}

// ── Pre-configured ad units ──────────────────────────────────────────────

/** Banner debajo del título principal */
export function AdAfterTitle() {
  return (
    <AdBanner
      slot="1234567890"
      format="horizontal"
      className="ad-container-after-title"
      label="Anuncio bajo título"
    />
  )
}

/** Anuncio entre párrafos (in-article) */
export function AdInArticle() {
  return (
    <AdBanner
      slot="0987654321"
      format="rectangle"
      className="ad-container-in-article"
      label="Anuncio en artículo"
    />
  )
}

/** Sidebar / columna lateral */
export function AdSidebar() {
  return (
    <AdBanner
      slot="1122334455"
      format="vertical"
      className="ad-container-sidebar"
      label="Anuncio lateral"
    />
  )
}

/** Anuncio sticky en la parte inferior para móviles */
export function AdStickyMobile() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    if (clientId && typeof window !== 'undefined') {
      try {
        ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      } catch {
        // AdSense not loaded yet
      }
    }
  }, [clientId])

  if (!clientId || process.env.NODE_ENV === 'development') {
    return (
      <div
        className="ad-sticky-mobile"
        aria-label="Espacio publicitario"
        role="complementary"
      >
        <span className="text-xs text-stone-400 select-none pointer-events-none">
          Publicidad · sticky móvil
        </span>
      </div>
    )
  }

  return (
    <div className="ad-sticky-mobile" aria-label="Publicidad" role="complementary">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot="5566778899"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

/** Anuncio entre artículos en la página principal */
export function AdBetweenPosts() {
  return (
    <AdBanner
      slot="2233445566"
      format="horizontal"
      className="ad-container-between-posts"
      label="Anuncio entre artículos"
    />
  )
}
