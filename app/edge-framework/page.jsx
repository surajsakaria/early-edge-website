import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionTitle from '@/components/ui/SectionTitle'
import {
  BEHAVIORAL_TRAPS,
  EDGE_FRAMEWORK_DETAIL,
  WHAT_YOU_LEARN,
  ONEIL_QUOTE,
  FOUNDER_NAME,
  FOUNDER_BIO,
} from '@/lib/constants'

export const metadata = {
  title: 'The EDGE Framework | Early Edge Club',
  description:
    'A rule-based investing process covering what to buy, when to buy, how much to buy, and when to exit. Built by Suraj Sakaria, CFA.',
}

export default function EdgeFrameworkPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="bg-navy text-white py-20 md:py-28" aria-labelledby="ef-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-5">
            The Core Intellectual Framework
          </p>
          <h1
            id="ef-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            The <span className="text-orange">EDGE</span> Framework
          </h1>
          <p className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A rule-based investing process designed to bring discipline to the four most important
            decisions every investor must make.
          </p>
        </div>
      </section>

      {/* ── Problem: Behavioral Traps ── */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="traps-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            id="traps-heading"
            heading="Most Investment Mistakes Are Not Analytical. They Are Behavioral."
            subheading="The EDGE Framework was created to address the eight behavioral traps that cause most investors to underperform."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BEHAVIORAL_TRAPS.map((trap) => (
              <div
                key={trap.number}
                className="border border-slate-100 rounded-2xl p-6 flex flex-col gap-3 bg-slate-50 hover:border-orange/30 transition-colors"
              >
                <span className="font-display text-4xl font-bold text-orange/20 leading-none tabular-nums">
                  {trap.number}
                </span>
                <h3 className="font-semibold text-navy text-sm leading-snug">{trap.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{trap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O'Neil Quote ── */}
      <section className="bg-navy py-16 md:py-20" aria-label="William O'Neil quote">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/25 text-xs font-semibold uppercase tracking-widest mb-6">
            William O&apos;Neil
          </p>
          <blockquote className="font-display text-xl md:text-2xl text-white/80 leading-relaxed italic">
            &ldquo;{ONEIL_QUOTE}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── 4 Pillars Deep Dive ── */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="pillars-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            id="pillars-heading"
            heading="The Four Pillars"
            subheading="Each pillar addresses one of the four decisions every investor must make with discipline."
            align="center"
            className="mb-14"
          />
          <div className="flex flex-col gap-6">
            {EDGE_FRAMEWORK_DETAIL.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`rounded-2xl border p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${
                  i % 2 === 0 ? 'bg-slate-50 border-slate-100' : 'bg-navy border-navy text-white'
                }`}
              >
                {/* Left */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`font-display text-6xl font-bold leading-none ${
                        i % 2 === 0 ? 'text-orange' : 'text-orange'
                      }`}
                    >
                      {pillar.letter}
                    </span>
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-widest mb-0.5 ${
                          i % 2 === 0 ? 'text-orange' : 'text-orange'
                        }`}
                      >
                        {pillar.focus}
                      </p>
                      <h3
                        className={`font-display text-xl font-bold ${
                          i % 2 === 0 ? 'text-navy' : 'text-white'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      i % 2 === 0 ? 'text-slate-500' : 'text-white/65'
                    }`}
                  >
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Right — bullets */}
                <ul className="flex flex-col gap-3">
                  {pillar.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${
                          i % 2 === 0 ? 'text-orange' : 'text-orange'
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-sm ${
                          i % 2 === 0 ? 'text-slate-600' : 'text-white/75'
                        }`}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Will Learn ── */}
      <section className="bg-navy py-16 md:py-24" aria-labelledby="learn-heading">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle
            id="learn-heading"
            heading="What You Will Learn"
            subheading="The EDGE Framework Masterclass covers the full investing process — from identifying companies to exiting positions."
            align="center"
            light
            className="mb-12"
          />
          <ul className="flex flex-col gap-4">
            {WHAT_YOU_LEARN.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange/20 border border-orange/30 flex items-center justify-center font-semibold text-orange text-xs">
                  {i + 1}
                </span>
                <span className="text-white/80 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Founder Section ── */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="ef-founder-heading">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <p className="text-orange text-xs font-semibold uppercase tracking-widest">
            Created by
          </p>
          <h2
            id="ef-founder-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy"
          >
            {FOUNDER_NAME}
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-2xl">{FOUNDER_BIO}</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy py-20" aria-labelledby="ef-cta-heading">
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2
            id="ef-cta-heading"
            className="font-display text-3xl md:text-4xl font-bold text-white leading-tight"
          >
            Apply the Framework to Real Companies
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            Join the EDGE Cohort and work through the framework live with Suraj — applied to actual
            businesses, in real market conditions.
          </p>
          <Link href="/#pricing">
            <Button variant="primary" size="lg" className="gap-2">
              Join the EDGE Cohort
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </Link>
          <p className="text-white/30 text-xs">Sessions begin May 2026 · Access starts the day you join</p>
        </div>
      </section>
    </main>
  )
}
