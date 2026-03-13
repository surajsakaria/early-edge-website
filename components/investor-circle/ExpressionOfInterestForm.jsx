'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = 'fd8c0f26-3fec-4567-8742-715f75ac96c4'

const INVEST_OPTIONS = [
  { value: '', label: 'Select what you primarily invest in' },
  { value: 'Microcap', label: 'Microcap' },
  { value: 'Smallcap', label: 'Smallcap' },
  { value: 'Largecap', label: 'Largecap' },
  { value: 'Mix', label: 'Mix' },
]

const inputBase =
  'w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-colors disabled:opacity-50'

const labelClass = 'text-xs font-semibold text-slate-500 uppercase tracking-wider'

function Field({ id, label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-orange">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}

function borderFor(error) {
  return error ? 'border-red-400' : 'border-slate-200'
}

export default function ExpressionOfInterestForm() {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverError, setServerError] = useState('')

  function clearError(field) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  function validate(data) {
    const errs = {}
    if (!data.get('name')?.toString().trim()) errs.name = 'Full name is required.'
    if (!data.get('email')?.toString().trim()) errs.email = 'Email address is required.'
    if (!data.get('city')?.toString().trim()) errs.city = 'City is required.'
    if (!data.get('experience')?.toString().trim()) errs.experience = 'Years of experience is required.'
    if (!data.get('investmentType')?.toString().trim()) errs.investmentType = 'Please select what you primarily invest in.'
    if (!data.get('company')?.toString().trim()) errs.company = 'Please name one company you are researching.'
    if (!data.get('investment_thesis')?.toString().trim()) errs.investment_thesis = 'An investment thesis is required.'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setServerError('')

    const rawData = new FormData(e.target)
    const errs = validate(rawData)

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setStatus('loading')

    const payload = new FormData()
    payload.append('access_key', ACCESS_KEY)
    payload.append('subject', 'New Expression of Interest — Investor Circle')
    payload.append('from_name', 'Early Edge Club Website')
    payload.append('name', rawData.get('name'))
    payload.append('email', rawData.get('email'))
    payload.append('phone', rawData.get('phone') || 'Not provided')
    payload.append('city', rawData.get('city'))
    payload.append('experience', rawData.get('experience'))
    payload.append('investmentType', rawData.get('investmentType'))
    payload.append('company', rawData.get('company'))
    payload.append('investment_thesis', rawData.get('investment_thesis'))

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: payload })
      const json = await res.json()

      if (json.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setServerError(json.message || 'Submission failed. Please try again.')
      }
    } catch {
      setStatus('error')
      setServerError('Something went wrong. Please email us directly at hello@earlyedgeclub.com')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center flex flex-col items-center gap-5 shadow-sm">
        <CheckCircle size={44} className="text-green-500" aria-hidden="true" />
        <div className="flex flex-col gap-3">
          <p className="font-display text-xl font-bold text-navy">
            Expression of Interest Received
          </p>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
            Thank you. We have received your expression of interest. We review submissions when a
            seat becomes available. If there is a fit, we will be in touch at the email you
            provided.
          </p>
        </div>
      </div>
    )
  }

  const isLoading = status === 'loading'

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 shadow-sm flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field id="ic-name" label="Full Name" required error={errors.name}>
          <input
            id="ic-name"
            name="name"
            type="text"
            placeholder="Your full name"
            disabled={isLoading}
            onChange={() => clearError('name')}
            className={cn(inputBase, borderFor(errors.name))}
          />
        </Field>
        <Field id="ic-email" label="Email Address" required error={errors.email}>
          <input
            id="ic-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            disabled={isLoading}
            onChange={() => clearError('email')}
            className={cn(inputBase, borderFor(errors.email))}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field id="ic-city" label="City" required error={errors.city}>
          <input
            id="ic-city"
            name="city"
            type="text"
            placeholder="Mumbai, Bangalore, etc."
            disabled={isLoading}
            onChange={() => clearError('city')}
            className={cn(inputBase, borderFor(errors.city))}
          />
        </Field>
        <Field id="ic-experience" label="Years of Investing Experience" required error={errors.experience}>
          <input
            id="ic-experience"
            name="experience"
            type="number"
            min="0"
            max="60"
            placeholder="e.g. 7"
            disabled={isLoading}
            onChange={() => clearError('experience')}
            className={cn(inputBase, borderFor(errors.experience))}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field id="ic-phone" label="Phone Number">
          <input
            id="ic-phone"
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            disabled={isLoading}
            className={cn(inputBase, 'border-slate-200')}
          />
        </Field>
        <Field id="ic-invests" label="What You Primarily Invest In" required error={errors.investmentType}>
          <select
            id="ic-invests"
            name="investmentType"
            defaultValue=""
            disabled={isLoading}
            onChange={() => clearError('investmentType')}
            className={cn(inputBase, borderFor(errors.investmentType))}
          >
            {INVEST_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="ic-company" label="One Company You Are Currently Researching" required error={errors.company}>
        <input
          id="ic-company"
          name="company"
          type="text"
          placeholder="Company name"
          disabled={isLoading}
          onChange={() => clearError('company')}
          className={cn(inputBase, borderFor(errors.company))}
        />
      </Field>

      <Field id="ic-thesis" label="Your Investment Thesis" required error={errors.investment_thesis}>
        <textarea
          id="ic-thesis"
          name="investment_thesis"
          rows={8}
          placeholder={"Pick one company you currently follow.\nTell us the business, why it interests you, and what the key risks are. 2\u20133 paragraphs is enough."}
          disabled={isLoading}
          onChange={() => clearError('investment_thesis')}
          className={cn(inputBase, borderFor(errors.investment_thesis), 'resize-y leading-relaxed')}
        />
        <p className="text-xs text-slate-400 leading-relaxed">
          Focus on one company. We want to understand how you think, not how many stocks you follow.
        </p>
      </Field>

      <div className="flex flex-col items-start gap-3 pt-2">
        <Button type="submit" variant="primary" className="px-8" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit Expression of Interest'}
        </Button>

        {status === 'error' && (
          <p className="text-red-500 text-sm leading-relaxed">
            {serverError || 'Something went wrong. Please email us directly at hello@earlyedgeclub.com'}
          </p>
        )}

        <p className="text-xs text-slate-400 leading-relaxed">
          We review expressions of interest when a seat becomes available. Submissions without an
          investment thesis are not considered. If there is a fit, we will be in touch.
        </p>
      </div>
    </form>
  )
}
