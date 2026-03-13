import SectionTitle from '@/components/ui/SectionTitle'
import { HOW_IT_WORKS } from '@/lib/constants'

export default function HowItWorks({ className }) {
  return (
    <section className={`bg-white py-16 md:py-24 ${className ?? ''}`} aria-labelledby="how-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          heading="How It Works"
          subheading="Three steps to a structured, repeatable investment process."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.step} className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-bold text-orange/20 leading-none tabular-nums">
                  {step.step}
                </span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>
              <h3 className="font-semibold text-navy text-lg">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
