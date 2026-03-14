'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = 'fd8c0f26-3fec-4567-8742-715f75ac96c4'

const inputClass =
  'w-full rounded-lg border bg-white/10 border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors disabled:opacity-50'

export default function ScorecardForm() {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [serverError, setServerError] = useState('')

  function clearError(field) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  function validate(data) {
    const errs = {}
    if (!data.get('name')?.toString().trim()) errs.name = 'Name is required.'
    if (!data.get('email')?.toString().trim()) errs.email = 'Email address is required.'
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
    payload.append('subject', '20-Factor Scorecard Request')
    payload.append('from_name', 'Early Edge Club Website')
    payload.append('name', rawData.get('name'))
    payload.append('email', rawData.get('email'))

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: payload })
      const json = await res.json()

      if (json.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setServerError(json.message || 'Submission failed.')
      }
    } catch {
      setStatus('error')
      setServerError('Something went wrong. Email us at hello@earlyedgeclub.com to get the scorecard.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-10 text-center flex flex-col items-center gap-5 shadow-lg max-w-md mx-auto">
        <CheckCircle size={44} className="text-green-500" aria-hidden="true" />
        <div className="flex flex-col gap-3">
          <p className="font-display text-xl font-bold text-navy">Check Your Inbox</p>
          <p className="text-slate-500 text-sm leading-relaxed">
            We have received your request. The 20-Factor Scorecard will be sent to your email
            shortly.
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
      className="flex flex-col gap-4 w-full max-w-md mx-auto"
    >
      <div className="flex flex-col gap-1.5">
        <input
          name="name"
          type="text"
          placeholder="Your name"
          disabled={isLoading}
          onChange={() => clearError('name')}
          className={cn(
            inputClass,
            errors.name && 'border-red-400 focus:ring-red-400/50'
          )}
        />
        {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          disabled={isLoading}
          onChange={() => clearError('email')}
          className={cn(
            inputClass,
            errors.email && 'border-red-400 focus:ring-red-400/50'
          )}
        />
        {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Me the Scorecard'}
      </Button>

      {status === 'error' && (
        <p className="text-red-400 text-sm leading-relaxed text-center">
          {serverError || 'Something went wrong. Email us at hello@earlyedgeclub.com to get the scorecard.'}
        </p>
      )}

      <p className="text-white/35 text-xs text-center">
        Free. No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}
