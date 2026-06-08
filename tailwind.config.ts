import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        ink: {
          DEFAULT: '#0f1923',
          muted: '#4a5568',
          light: '#718096',
        },
        cream: '#fafaf7',
        parchment: '#f5f0e8',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#0f1923',
            lineHeight: '1.8',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
