import HeroSection from '@/components/home/HeroSection'
import EdgeFramework from '@/components/home/EdgeFramework'
import HowItWorks from '@/components/home/HowItWorks'
import PricingSection from '@/components/home/PricingSection'
import FounderSection from '@/components/home/FounderSection'
import FaqSection from '@/components/home/FaqSection'
import CtaSection from '@/components/home/CtaSection'

export const metadata = {
  title: 'Early Edge Club — Premium Investment Research for Serious Investors',
  description:
    'Join Early Edge Club and learn a structured, repeatable investing process for microcap and smallcap stocks in India. Powered by the EDGE Framework.',
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <EdgeFramework />
      <HowItWorks />
<PricingSection />
      <FounderSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
