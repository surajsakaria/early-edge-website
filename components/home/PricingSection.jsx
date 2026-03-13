import Link from 'next/link'
import { Check, Minus, X } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/button'
import { PRICING_PLANS } from '@/lib/constants'
import { cn } from '@/lib/utils'

function FeatureIcon({ type }) {
  if (type === 'check') {
    return <Check size={15} className="text-orange mt-0.5 shrink-0" aria-hidden="true" />
  }
  if (type === 'dash') {
    return <Minus size={15} className="text-slate-300 mt-0.5 shrink-0" aria-hidden="true" />
  }
  return <X size={15} className="text-slate-300 mt-0.5 shrink-0" aria-hidden="true" />
}

export default function PricingSection({ className }) {
  return (
    <section id="pricing" className={`bg-white py-16 md:py-24 ${className ?? ''}`} aria-labelledby="pricing-heading">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          id="pricing-heading"
          heading="Join the EDGE Cohort"
          subheading="Two ways to learn. One framework."
          align="center"
          className="mb-4"
        />

        {/* Billing note above cards */}
        <p className="text-center text-slate-400 text-xs mb-10">
          Billed annually · Founding Member pricing
        </p>

        {/* Cards — Active Member first on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                'rounded-2xl border-2 p-8 flex flex-col gap-6',
                plan.highlighted
                  ? 'border-orange shadow-lg shadow-orange/10'
                  : 'border-slate-100 shadow-sm'
              )}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                    {plan.name}
                  </p>
                  <p className="font-display text-4xl font-bold text-navy">
                    {plan.price}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{plan.period}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{plan.monthly}</p>
                </div>
                {plan.badge && (
                  <span className="bg-orange text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FeatureIcon type={feature.type} />
                    <span
                      className={cn(
                        'text-sm leading-relaxed',
                        feature.type === 'check' ? 'text-slate-700' : 'text-slate-400'
                      )}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="/investor-circle" className="block mt-2">
                <Button variant="primary" className="w-full">
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-400 text-xs mt-8 leading-relaxed">
          Founding Member pricing — rates will increase with future cohorts.
          <br />
          Questions?{' '}
          <a
            href="mailto:hello@earlyedgeclub.com"
            className="underline underline-offset-2 hover:text-slate-600 transition-colors"
          >
            hello@earlyedgeclub.com
          </a>
        </p>
      </div>
    </section>
  )
}
