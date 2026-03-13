import Link from 'next/link'
import { FOOTER_LINKS, SITE_NAME, FOUNDER_NAME, LEGAL_DISCLAIMER, CONTACT_EMAIL } from '@/lib/constants'

function BrandLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 31 26" fill="none" className="h-5 w-auto" aria-hidden="true">
        <path d="M4 0L14 13L4 26H0L10 13L0 0H4Z" fill="#F07B30" />
        <path d="M20 0L30 13L20 26H16L26 13L16 0H20Z" fill="#F07B30" />
      </svg>
      <span className="font-sans font-semibold text-lg tracking-tight text-white">earlyedge</span>
    </div>
  )
}

export default function Footer({ className }) {
  return (
    <footer className={`bg-navy text-white ${className ?? ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div className="flex flex-col gap-4">
            <BrandLogo />
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Premium investment research and education for serious investors in India.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Led by
            </h3>
            <p className="text-sm font-medium text-white/80">{FOUNDER_NAME}</p>
            <p className="text-sm text-white/40 mt-1">Full-time investor &amp; educator</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-white/60 hover:text-white transition-colors mt-4 inline-block"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4">
          <p className="text-xs text-white/30 leading-relaxed max-w-3xl">
            {LEGAL_DISCLAIMER}
          </p>
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
