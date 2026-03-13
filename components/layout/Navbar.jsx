'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Early Edge Club home">
      <svg viewBox="0 0 31 26" fill="none" className="h-5 w-auto" aria-hidden="true">
        <path d="M4 0L14 13L4 26H0L10 13L0 0H4Z" fill="#F07B30" />
        <path d="M20 0L30 13L20 26H16L26 13L16 0H20Z" fill="#F07B30" />
      </svg>
      <span className="font-sans font-semibold text-lg tracking-tight text-white">earlyedge</span>
    </Link>
  )
}

export default function Navbar({ className }) {
  const [open, setOpen] = useState(false)
  const navLinks = NAV_LINKS.filter((l) => l.label !== 'Home')

  return (
    <header className={cn('sticky top-0 z-50 bg-navy border-b border-white/10', className)}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <BrandLogo />

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Member Login
          </Link>
          <Button variant="primary" size="sm" asChild>
            <Link href="/#pricing">Join EDGE Cohort</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-navy px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white py-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-sm font-medium text-slate-600 py-1"
            onClick={() => setOpen(false)}
          >
            Member Login
          </Link>
          <Button variant="primary" size="sm" asChild className="mt-2">
            <Link href="/#pricing" onClick={() => setOpen(false)}>
              Join EDGE Cohort
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}
