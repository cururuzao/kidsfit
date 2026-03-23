import { useReveal } from './hooks/useReveal'
import { FloatCTA } from './components/FloatCTA'
import { AnnouncementBar } from './components/AnnouncementBar'
import { Hero } from './components/Hero'
import { ProofTicker } from './components/ProofTicker'
import { DreamSection } from './components/DreamSection'
import { ProblemsSection } from './components/ProblemsSection'
import { CredentialsBar } from './components/CredentialsBar'
import { SolutionSection } from './components/SolutionSection'
import { ScienceSection } from './components/ScienceSection'
import { ModulesSection } from './components/ModulesSection'
import { IncludesSection } from './components/IncludesSection'
import { BonusSection } from './components/BonusSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { UrgencyStrip } from './components/UrgencyStrip'
import { PricingSection } from './components/PricingSection'
import { GuaranteeSection } from './components/GuaranteeSection'
import { FaqSection } from './components/FaqSection'
import { FinalCTASection } from './components/FinalCTASection'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'

function App() {
  const appRef = useReveal<HTMLDivElement>()

  return (
    <div ref={appRef}>
      <FloatCTA />
      <AnnouncementBar />
      <Hero />
      <ProofTicker />
      <DreamSection />
      <ProblemsSection />
      <CredentialsBar />
      <SolutionSection />
      <CTABanner />
      <ScienceSection />
      <ModulesSection />
      <IncludesSection />
      <BonusSection />
      <CTABanner />
      <TestimonialsSection />
      <UrgencyStrip />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}

export default App
