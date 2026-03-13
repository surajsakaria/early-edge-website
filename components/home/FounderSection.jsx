import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FOUNDER_NAME, FOUNDER_BIO, FOUNDER_CREDENTIALS } from '@/lib/constants'

export default function FounderSection({ className }) {
  return (
    <section
      className={`bg-white py-16 md:py-24 ${className ?? ''}`}
      aria-labelledby="founder-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bio */}
          <div>
            <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-4">
              The Founder
            </p>
            <h2
              id="founder-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight mb-6"
            >
              {FOUNDER_NAME}
            </h2>
            <p className="text-slate-500 leading-relaxed text-base mb-8">{FOUNDER_BIO}</p>
            <Button variant="primary" size="sm" asChild>
              <Link href="/edge-framework" className="gap-2 flex items-center">
                Explore the EDGE Framework
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Credentials card */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-10">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Background
            </p>
            <ul className="flex flex-col gap-4">
              {FOUNDER_CREDENTIALS.map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange flex-shrink-0" />
                  <span className="text-sm text-slate-600">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
