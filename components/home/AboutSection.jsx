import { FOUNDER_NAME, FOUNDER_CREDENTIALS } from '@/lib/constants'

export default function AboutSection({ className }) {
  return (
    <section
      className={`bg-white py-16 md:py-24 ${className ?? ''}`}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h2
              id="about-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight mb-6"
            >
              Most Investors Discover Great Stocks Only After They Have Already Moved
            </h2>
            <div className="flex flex-col gap-4 text-slate-500 leading-relaxed text-base">
              <p>
                They buy on tips, sell winners too early, hold losers too long, and have no
                structured system for any of it. The problem is not intelligence — it is process.
              </p>
              <p>
                Early Edge Club exists to give serious investors that system. A framework-driven
                research community built around one core belief: most retail investors fail not
                because of lack of intelligence, but because of lack of process.
              </p>
            </div>
          </div>

          {/* Founder credentials card */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-10">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
              Led by
            </p>
            <p className="font-display text-2xl font-bold text-navy mb-8">{FOUNDER_NAME}</p>
            <ul className="flex flex-col gap-4">
              {FOUNDER_CREDENTIALS.map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange flex-shrink-0" />
                  <span className="text-sm text-slate-600">{c.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-400 italic leading-relaxed">
                &ldquo;Most retail investors fail not because of lack of intelligence, but because
                of lack of process.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
