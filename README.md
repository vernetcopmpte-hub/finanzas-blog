# Finanzas Simples — Blog de fondos indexados

Blog de finanzas personales construido con **Next.js 14**, **TypeScript** y **Tailwind CSS**. Optimizado para SEO, AdSense y rendimiento.

## 🚀 Puesta en marcha rápida

### 1. Requisitos previos
- Node.js 18.17 o superior
- npm, yarn o pnpm

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
cp .env.example .env.local
# Edita .env.local con tu URL y, cuando lo tengas, tu ID de AdSense
```

### 4. Iniciar servidor de desarrollo
```bash
npm run dev
# Abre http://localhost:3000
```

## 📁 Estructura del proyecto

```
finanzas-blog/
├── app/
│   ├── layout.tsx              # Layout raíz + AdSense script + sticky ad móvil
│   ├── page.tsx                # Inicio: hero, artículos, anuncios entre posts
│   ├── globals.css             # Estilos globales + clases ad-container
│   ├── sitemap.ts              # Sitemap XML automático (/sitemap.xml)
│   ├── robots.ts               # robots.txt (/robots.txt)
│   ├── not-found.tsx           # Página 404
│   ├── blog/[slug]/page.tsx    # Plantilla de artículo con JSON-LD
│   ├── categoria/[slug]/       # Listado de artículos por categoría
│   ├── herramientas/           # Calculadora de interés compuesto
│   ├── newsletter/             # Página de suscripción
│   ├── glosario/               # Diccionario financiero (15 términos)
│   ├── privacidad/             # Política de privacidad (RGPD)
│   ├── aviso-legal/            # Aviso legal
│   ├── cookies/                # Política de cookies con tabla
│   └── afiliados/              # Política de transparencia y afiliados
├── components/
│   ├── Header.tsx              # Navegación responsive con menú móvil
│   ├── Footer.tsx              # Footer con enlaces y aviso legal
│   ├── PostCard.tsx            # Tarjeta de artículo (normal y destacada)
│   ├── CompoundCalculator.tsx  # Calculadora interactiva (client component)
│   ├── AdBanner.tsx            # AdAfterTitle, AdInArticle, AdSidebar,
│   │                           # AdBetweenPosts, AdStickyMobile
│   └── ReadingProgress.tsx     # Barra de progreso de lectura
├── lib/
│   └── posts.ts                # 10 artículos + utilidades
├── public/                     # Archivos estáticos (favicon, og-image, etc.)
├── .env.example                # Plantilla de variables de entorno
├── next.config.js              # Headers de seguridad, AVIF/WebP, standalone
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 📢 Configurar Google AdSense

1. Obtén aprobación en [Google AdSense](https://adsense.google.com)
2. Añade tu Publisher ID a `.env.local`:
   ```
   NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXXX
   ```
3. En `components/AdBanner.tsx`, reemplaza los slots de ejemplo con tus slots reales de AdSense:

| Componente | Slot actual | Posición |
|---|---|---|
| `<AdAfterTitle />` | `1234567890` | Bajo el título (horizontal) |
| `<AdInArticle />` | `0987654321` | Dentro del artículo (rectangle) |
| `<AdSidebar />` | `1122334455` | Sidebar (vertical) |
| `<AdBetweenPosts />` | `2233445566` | Entre artículos en home |
| `<AdStickyMobile />` | `5566778899` | Sticky inferior en móvil |

En desarrollo, todos los contenedores muestran placeholders visuales sin cargar AdSense.

## 🔍 SEO incluido

- Metadatos Open Graph y Twitter Card por artículo
- JSON-LD (Article schema) en cada post
- Sitemap XML automático en `/sitemap.xml`
- robots.txt en `/robots.txt`
- Breadcrumbs con marcado semántico
- Etiquetas canónicas
- Imágenes optimizadas con `next/image`

## 🌐 Despliegue

### Vercel (recomendado, gratis)
```bash
# Instala Vercel CLI
npm i -g vercel
# Despliega
vercel
# Añade variables de entorno en el dashboard de Vercel
```

### Servidor VPS / producción
```bash
npm run build          # Compila y optimiza
npm run start          # Inicia servidor de producción en puerto 3000
```

Con PM2:
```bash
npm install -g pm2
npm run build
pm2 start npm --name "finanzas-blog" -- start
pm2 save
```

### Exportación estática (hosting sin Node.js)
Añade a `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  // ...resto de config
}
```
Luego `npm run build` genera la carpeta `/out` lista para subir a cualquier hosting.

## 📝 Añadir nuevos artículos

Edita `lib/posts.ts` y añade un nuevo objeto al array `posts`. El sitemap, la cuadrícula y las páginas individuales se generan automáticamente.

## 🎨 Personalización

- **Colores**: modifica los valores de `brand` en `tailwind.config.ts`
- **Fuentes**: cambia las imports en `globals.css`
- **Nombre del sitio**: actualiza `SITE_NAME` en `app/layout.tsx`
- **CMS**: sustituye `lib/posts.ts` por llamadas a Contentful, Sanity o cualquier headless CMS
