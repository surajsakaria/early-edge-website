import { Check } from 'lucide-react'
import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'
import {
  INVESTOR_CIRCLE_STATS,
  INVESTOR_CIRCLE_HOW_IT_WORKS,
  INVESTOR_CIRCLE_WHO_FOR,
} from '@/lib/constants'
import ExpressionOfInterestForm from '@/components/investor-circle/ExpressionOfInterestForm'

export const metadata = {
  title: 'The Investor Circle | Early Edge Club',
  description: 'A private, curated group of serious microcap investors. Membership is selective.',
}

export default function InvestorCirclePage() {
  return (
    <main>
      <section className='bg-navy text-white py-20 md:py-28' aria-labelledby='ic-heading'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <p className='text-orange text-xs font-semibold uppercase tracking-widest mb-5'>
            Private Research Community
          </p>
          <h1 id='ic-heading' className='font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
            The <span className='text-orange'>Investor</span> Circle
          </h1>
          <p className='text-white/65 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6'>
            A private, curated group of serious microcap investors. This is not a course. It is a
            weekly peer research circle where members present theses, debate assumptions, and track
            companies together.
          </p>
          <p className='text-white/45 text-sm max-w-xl mx-auto'>
            Membership is selective. New members are considered only when a seat becomes available.
          </p>
        </div>
      </section>

      <section className='bg-white py-12 md:py-16 border-b border-slate-100' aria-label='Investor Circle stats'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
            {INVESTOR_CIRCLE_STATS.map((stat) => (
              <div key={stat.label} className='flex flex-col gap-1.5 text-center'>
                <span className='font-display text-3xl md:text-4xl font-bold text-navy'>{stat.value}</span>
                <span className='text-xs text-slate-400 leading-snug'>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-slate-50 py-16 md:py-24' aria-labelledby='ic-how-heading'>
        <div className='max-w-6xl mx-auto px-6'>
          <SectionTitle id='ic-how-heading' heading='How the Investor Circle Works' subheading='Sessions are held every Thursday at 8 PM IST, running 60-90 minutes.' align='center' className='mb-14' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
            {INVESTOR_CIRCLE_HOW_IT_WORKS.map((step) => (
              <div key={step.step} className='flex flex-col gap-5'>
                <div className='flex items-center gap-4'>
                  <span className='font-display text-5xl font-bold text-orange/20 leading-none tabular-nums'>{step.step}</span>
                  <div className='flex-1 h-px bg-slate-200' />
                </div>
                <h3 className='font-semibold text-navy text-lg'>{step.title}</h3>
                <p className='text-slate-500 text-sm leading-relaxed'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-navy py-14 md:py-20' aria-label='Session details'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='flex flex-col gap-2'>
              <p className='text-orange text-xs font-semibold uppercase tracking-widest'>Day</p>
              <p className='font-display text-2xl font-bold text-white'>Every Thursday</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-orange text-xs font-semibold uppercase tracking-widest'>Time</p>
              <p className='font-display text-2xl font-bold text-white'>8 PM IST</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-orange text-xs font-semibold uppercase tracking-widest'>Duration</p>
              <p className='font-display text-2xl font-bold text-white'>60-90 Minutes</p>
            </div>
          </div>
          <p className='text-center text-white/40 text-sm mt-10'>
            Seats are limited. The group is intentionally kept small to maintain discussion quality.
          </p>
        </div>
      </section>

      <section className='bg-white py-16 md:py-24' aria-labelledby='ic-for-heading'>
        <div className='max-w-4xl mx-auto px-6'>
          <SectionTitle id='ic-for-heading' heading='Who the Investor Circle Is For' subheading='A small, focused group of serious investors who research, debate, and track companies together.' align='center' className='mb-12' />
          <ul className='flex flex-col gap-4 max-w-2xl mx-auto'>
            {INVESTOR_CIRCLE_WHO_FOR.map((item, i) => (
              <li key={i} className='flex items-start gap-4 border border-slate-100 rounded-xl px-6 py-4 bg-slate-50'>
                <Check size={16} className='mt-0.5 shrink-0 text-orange' aria-hidden='true' />
                <span className='text-slate-600 text-sm leading-relaxed'>{item}</span>
              </li>
            ))}
          </ul>
          <p className='text-center text-slate-400 text-sm mt-8 max-w-xl mx-auto'>
            This circle is intentionally small. If you meet these criteria and a seat is available, we will reach out.
          </p>
        </div>
      </section>

      <section className='bg-navy py-20' aria-labelledby='ic-cta-heading'>
        <div className='max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-4'>
          <h2 id='ic-cta-heading' className='font-display text-3xl md:text-4xl font-bold text-white leading-tight'>
            Express Interest in the Investor Circle
          </h2>
          <p className='text-white/60 text-base leading-relaxed'>
            200+ expressions of interest received. 10 active members. Seats open periodically, not on a fixed schedule.
          </p>
          <Link href='#interest-form' className='mt-2 inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors'>
            Express Interest
          </Link>
          <p className='text-white/30 text-xs mt-2'>
            Thursdays · 8 PM IST · 60-90 minutes · Selective membership
          </p>
        </div>
      </section>

      {/* ── How the Process Works ── */}
      <section className='bg-white py-16 md:py-24' aria-labelledby='ic-process-heading'>
        <div className='max-w-4xl mx-auto px-6'>
          <SectionTitle
            id='ic-process-heading'
            heading='How the Process Works'
            subheading='Expressions of interest are reviewed when a seat becomes available — not on a rolling basis.'
            align='center'
            className='mb-14'
          />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-4'>
                <span className='font-display text-5xl font-bold text-orange/20 leading-none tabular-nums'>01</span>
                <div className='flex-1 h-px bg-slate-100' />
              </div>
              <h3 className='font-semibold text-navy text-lg'>Submit Your Interest</h3>
              <p className='text-slate-500 text-sm leading-relaxed'>
                Share your background and a short investment note so we can understand how you
                think about businesses.
              </p>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-4'>
                <span className='font-display text-5xl font-bold text-orange/20 leading-none tabular-nums'>02</span>
                <div className='flex-1 h-px bg-slate-100' />
              </div>
              <h3 className='font-semibold text-navy text-lg'>Reviewed When a Seat Opens</h3>
              <p className='text-slate-500 text-sm leading-relaxed'>
                We do not review on a rolling basis. When a member exits or the circle expands, we
                revisit submitted expressions and identify the strongest fit.
              </p>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-4'>
                <span className='font-display text-5xl font-bold text-orange/20 leading-none tabular-nums'>03</span>
                <div className='flex-1 h-px bg-slate-100' />
              </div>
              <h3 className='font-semibold text-navy text-lg'>Short Conversation</h3>
              <p className='text-slate-500 text-sm leading-relaxed'>
                If there is a match, we reach out for a brief conversation before confirming
                membership.
              </p>
            </div>
          </div>
          <p className='text-center text-slate-400 text-xs mt-12 max-w-xl mx-auto leading-relaxed'>
            There is no fixed timeline. If you have submitted your interest, no further action is
            needed &mdash; we will contact you directly if a seat opens and there is a fit.
          </p>
        </div>
      </section>

      {/* ── Expression of Interest Form ── */}
      <section id='interest-form' className='bg-slate-50 py-16 md:py-24' aria-labelledby='ic-form-heading'>
        <div className='max-w-2xl mx-auto px-6'>
          <SectionTitle id='ic-form-heading' heading='Expression of Interest' subheading='Tell us a little about yourself. We will reach out if there is a fit and a seat becomes available.' align='center' className='mb-10' />
          <ExpressionOfInterestForm />
        </div>
      </section>
    </main>
  )
}
