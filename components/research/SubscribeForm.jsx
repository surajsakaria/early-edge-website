'use client'

import { useState } from 'react'

const SUBSTACK_URL = 'https://surajsakaria.substack.com'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center flex flex-col items-center gap-3">
        <p className="text-white font-semibold text-lg">
          You&rsquo;re in.
        </p>
        <p className="text-white/60 text-sm">
          Check your inbox to confirm your subscription.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === 'loading'}
          className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange/60 focus:border-orange transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-orange hover:bg-orange/90 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
        </button>
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">
          {errorMsg}&nbsp;
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-orange"
          >
            Try subscribing directly.
          </a>
        </p>
      )}

      <p className="text-white/30 text-xs">
        Free. No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}
