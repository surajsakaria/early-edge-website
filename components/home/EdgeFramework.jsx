import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/button'
import { EDGE_FRAMEWORK } from '@/lib/constants'

export default function EdgeFramework({ className }) {
  return (
    <section
      id="edge-framework"
      className={`bg-navy py-16 md:py-24 ${className ?? ''}`}
      aria-labelledby="edge-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          heading="The EDGE Framework"
          subheading="A rule-based investing process designed to find exceptional businesses, deploy with discipline, grow winners, and exit weakness — removing emotion from every decision."
          align="center"
          light
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EDGE_FRAMEWORK.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:bg-white/8 transition-colors"
            >
              <span className="font-display text-6xl font-bold text-orange leading-none select-none">
                {item.letter}
              </span>
              <h3 className="font-semibold text-white text-base leading-snug">{item.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/edge-framework" className="gap-2 flex items-center">
              Explore the EDGE Framework
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
