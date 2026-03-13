import SectionTitle from '@/components/ui/SectionTitle'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection({ className }) {
  return (
    <section className={`bg-slate-50 py-16 md:py-24 ${className ?? ''}`} aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          id="testimonials-heading"
          heading="What Members Say"
          subheading="[Placeholder: brief framing — e.g., 'Investors across India use the EDGE Framework to build conviction and invest with discipline.']"
          align="center"
          className="mb-14"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col gap-6 shadow-sm"
            >
              {/* Quote mark */}
              <span className="font-display text-5xl leading-none text-orange/30 select-none" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="text-slate-600 text-sm leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="flex flex-col gap-1 pt-4 border-t border-slate-100">
                <span className="font-semibold text-navy text-sm">{t.name}</span>
                <span className="text-slate-400 text-xs">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
