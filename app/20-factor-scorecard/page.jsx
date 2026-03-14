import Link from 'next/link'
import { ArrowRight, Shield, BarChart2, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionTitle from '@/components/ui/SectionTitle'
import ScorecardForm from '@/components/scorecard/ScorecardForm'

export const metadata = {
  title: 'The 20-Factor Microcap Scorecard | Early Edge Club',
  description:
    'A free screening checklist to help you filter out low-quality microcaps. Covers governance, promoter behavior, and financial health — in under 2 hours.',
}

const GOVERNANCE_POINTS = [
  'Promoter track record and IPO history',
  'Related party transactions',
  'Board independence and key person risk',
]

const FINANCIAL_POINTS = [
  'Revenue quality and cash flow conversion',
  'Debt levels and business concentration',
  'Early signs of financial stress',
]

function CheckItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <Check size={15} className="text-orange mt-0.5 shrink-0" aria-hidden="true" />
      <span className="text-white/70 text-sm leading-relaxed">{text}</span>
    </li>
  )
}

export default function ScorecardPage() {
  return (
    <main>
      {/* ── SECTION 1: HERO ── */}
      <section className="bg-navy py-20 md:py-28" aria-labelledby="scorecard-heading">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <p className="text-orange text-xs font-semibold uppercase tracking-widest">
            Free Tool
          </p>
          <h1
            id="scorecard-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            The 20-Factor Microcap Scorecard
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            A free screening checklist to help you filter out low-quality microcaps before you
            invest. Covers governance, promoter behavior, and financial health &mdash; in under
            2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a
              href="#get-scorecard"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors"
            >
              Get the Free Scorecard
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=Z6VGK076mm0&t=1s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white text-sm font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Watch the Walkthrough
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT IT COVERS ── */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="covers-heading">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle
            id="covers-heading"
            heading="What the Scorecard Covers"
            subheading="20 factors across two categories. Each scored 0, 3, or 5. No guesswork."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-navy rounded-2xl p-8 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 rounded-xl p-3 shrink-0">
                  <Shield size={22} className="text-orange" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl leading-tight">
                    Governance &amp; Promoter Quality
                  </h3>
                  <p className="text-orange text-xs font-semibold uppercase tracking-wider mt-1">
                    10 factors
                  </p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {GOVERNANCE_POINTS.map((pt) => (
                  <CheckItem key={pt} text={pt} />
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-navy rounded-2xl p-8 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 rounded-xl p-3 shrink-0">
                  <BarChart2 size={22} className="text-orange" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl leading-tight">
                    Financial Health
                  </h3>
                  <p className="text-orange text-xs font-semibold uppercase tracking-wider mt-1">
                    10 factors
                  </p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {FINANCIAL_POINTS.map((pt) => (
                  <CheckItem key={pt} text={pt} />
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-slate-400 text-xs mt-8 max-w-lg mx-auto leading-relaxed">
            Designed for manufacturing and service businesses. Data can be sourced directly from
            Screener.in.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: VIDEO ── */}
      <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="video-heading">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle
            id="video-heading"
            heading="See It in Action"
            subheading="A full walkthrough of how to use the scorecard — what to look for, how to score, and what the results mean."
            align="center"
            className="mb-10"
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/Z6VGK076mm0?start=1"
                title="20-Factor Microcap Scorecard Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          <p className="text-center text-slate-400 text-xs mt-6">
            Runtime: approximately 30 minutes. Free to watch &mdash; no signup required.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: GET THE SCORECARD FORM ── */}
      <section id="get-scorecard" className="bg-navy py-16 md:py-24" aria-labelledby="form-heading">
        <div className="max-w-xl mx-auto px-6 flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4">
            <h2
              id="form-heading"
              className="font-display text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Get the Free Scorecard
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Enter your email and we will send you the 20-Factor Excel scorecard directly.
            </p>
          </div>
          <ScorecardForm />
        </div>
      </section>

      {/* ── SECTION 5: BOTTOM CTA STRIP ── */}
      <section className="bg-orange py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-white font-medium text-base md:text-lg leading-snug">
            Want to go deeper? The EDGE Cohort applies this framework to real companies every
            month.
          </p>
          <Link href="/" className="shrink-0">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy font-semibold whitespace-nowrap gap-2"
            >
              Learn About the EDGE Cohort
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
