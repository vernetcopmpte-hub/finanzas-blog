'use client'

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="tu@email.com"
        className="flex-1 px-4 py-2.5 rounded text-ink text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-300"
        required
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-ink text-white rounded text-sm font-medium hover:bg-ink/90 transition-colors whitespace-nowrap"
      >
        Suscribirme gratis
      </button>
    </form>
  )
}
