'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { FAQ_ITEMS } from '@/content/faq'
import { cn } from '@/lib/utils'

export default function FaqSection({ className }) {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className={`bg-slate-50 py-16 md:py-24 ${className ?? ''}`} aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle
          id="faq-heading"
          heading="Frequently Asked Questions"
          subheading="Everything you need to know before joining."
          align="center"
          className="mb-12"
        />
        <dl className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-inset"
                  >
                    <span className="font-semibold text-navy text-sm md:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={cn(
                        'text-slate-400 shrink-0 transition-transform duration-200',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-slate-500 text-sm leading-relaxed"
                >
                  {item.answer}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
