'use client'

import { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
}

export default function FAQSection({ faqs, title = 'Preguntas frecuentes' }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null)

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="my-10">
      <h2 className="text-2xl font-semibold text-ink mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        {title}
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-stone-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-stone-50 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="text-sm font-medium text-ink">{faq.question}</span>
              <span className="flex-shrink-0 text-ink-muted text-lg leading-none">
                {open === i ? '−' : '+'}
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-ink-muted leading-relaxed border-t border-stone-100">
                <div className="pt-3">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// JSON-LD schema for FAQPage — insert in page <head>
export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  if (!faqs || faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
