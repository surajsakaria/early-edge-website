import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EDGE_FRAMEWORK } from '@/lib/constants'

export default function HeroSection({ className }) {
  return (
    <section
      className={`relative bg-navy text-white min-h-screen flex items-center overflow-hidden ${className ?? ''}`}
      aria-label="Hero"
    >
      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left column: copy + CTAs ── */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 self-start bg-orange/10 border-l-2 border-orange text-orange text-xs font-semibold px-4 py-2 rounded-r-full rounded-l-sm mb-8 tracking-wide">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
              </span>
              Now Open — Join the EDGE Cohort
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find Tomorrow&apos;s Winners{' '}
              <span className="text-orange">Before the Crowd</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/65 mb-10 max-w-xl leading-relaxed">
              A framework-driven research community for serious investors who want to identify
              emerging market leaders — before they reach mainstream attention.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="#pricing">
                  Join the EDGE Cohort <ArrowRight size={18} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/edge-framework">Explore the Framework</Link>
              </Button>
            </div>

            {/* Trust signal */}
            <p className="mt-10 text-sm text-white/35 flex flex-wrap gap-x-3 gap-y-1 items-center">
              <span>Led by Suraj Sakaria, CFA</span>
              <span className="text-white/20" aria-hidden="true">·</span>
              <span>10+ Years Investing Experience</span>
              <span className="text-white/20" aria-hidden="true">·</span>
              <span>Sessions begin May 2026</span>
            </p>
          </div>

          {/* ── Right column: EDGE pillars card ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  The EDGE Framework
                </span>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-orange/50" />
                </div>
              </div>

              {/* Pillars list */}
              <ul className="flex flex-col divide-y divide-white/[0.06]">
                {EDGE_FRAMEWORK.map((pillar) => (
                  <li key={pillar.letter + pillar.title} className="flex items-start gap-4 px-5 py-4">
                    {/* Orange letter badge */}
                    <span
                      className="flex-shrink-0 w-9 h-9 rounded-lg bg-orange/15 border border-orange/20 flex items-center justify-center font-display font-bold text-orange text-base"
                      aria-hidden="true"
                    >
                      {pillar.letter}
                    </span>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-white text-sm font-semibold leading-snug">
                        {pillar.title}
                      </span>
                      <span className="text-white/45 text-xs leading-relaxed">
                        {pillar.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Card footer */}
              <div className="px-5 py-3.5 border-t border-white/8 bg-white/[0.02]">
                <p className="text-white/25 text-xs text-center tracking-wide">
                  earlyedgeclub.com
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
