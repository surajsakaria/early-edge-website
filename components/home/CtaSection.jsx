import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CtaSection({ className }) {
  return (
    <section className={`bg-navy py-20 md:py-32 ${className ?? ''}`} aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <p className="text-orange text-xs font-semibold uppercase tracking-widest">
          Ready to Build Your Edge?
        </p>

        {/* Headline */}
        <h2
          id="cta-heading"
          className="font-display text-3xl md:text-5xl font-bold text-white leading-tight"
        >
          Stop Guessing. Start Investing with a Framework.
        </h2>

        {/* Supporting line */}
        <p className="text-white/60 text-base md:text-lg max-w-xl">
          Join the EDGE Cohort and gain access to bi-monthly live sessions, real-time Q&amp;A with Suraj, the Research Library, and a structured process for finding tomorrow&rsquo;s winners today.
        </p>

        {/* Primary CTA */}
        <Link href="#pricing">
          <Button variant="primary" size="lg" className="gap-2 text-base px-8 py-4">
            Join the EDGE Cohort
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </Link>

        {/* Trust signal */}
        <p className="text-white/30 text-xs">
          Sessions begin May 2026 · Access starts the day you join
        </p>
      </div>
    </section>
  )
}
