import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AdStickyMobile } from '@/components/AdBanner'
import ExitPopup from '@/components/ExitPopup'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://finanzassimples.es'
const SITE_NAME = 'Finanzas Simples'
const SITE_DESCRIPTION =
  'Aprende a invertir en fondos indexados, ETFs y alcanzar la independencia financiera. Guías prácticas, comparativas y análisis para el inversor español.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Fondos Indexados e Inversión Pasiva`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'fondos indexados',
    'ETF España',
    'inversión pasiva',
    'S&P 500',
    'finanzas personales',
    'FIRE',
    'independencia financiera',
    'Boglehead',
    'cartera indexada',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Fondos Indexados e Inversión Pasiva`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Fondos Indexados e Inversión Pasiva`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@finanzassimples',
  },
  alternates: {
    canonical: SITE_URL,
    languages: { 'es-ES': SITE_URL },
  },
  verification: {
    // google: 'TU_CODIGO_DE_VERIFICACION_AQUI',
    // yandex: 'TU_CODIGO_YANDEX',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}
        {/* Google AdSense */}
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="pb-16 lg:pb-0">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AdStickyMobile />
        <ExitPopup />
      </body>
    </html>
  )
}
