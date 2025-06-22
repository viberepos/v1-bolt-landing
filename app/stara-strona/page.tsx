import { Navbar, Footer } from "@/components/shared"
import { 
  MVPHero, 
  MVPProblemSection, 
  MVPComparison, 
  MVPProcess, 
  MVPExamples, 
  MVPDeliverables, 
  MVPPricing, 
  MVPFAQ, 
  MVPCTA 
} from "@/components/mvp"
import { 
  Hero, 
  ProblemSection, 
  CostCalculator, 
  WhyChooseUs, 
  CaseStudy, 
  AppManagementSection, 
  DeviceAvailabilitySection, 
  ServicePackages, 
  WhatSetsUsApart, 
  TechStack, 
  Process, 
  CTA 
} from "@/components/homepage"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f5ee]">
      <Navbar />
      <MVPHero />
      <MVPProblemSection />
      <MVPComparison />
      <MVPProcess />
      <MVPExamples />
      <MVPDeliverables />
      <MVPPricing />
      <MVPFAQ />
      <MVPCTA />
      <Hero />
      <ProblemSection />
      <CostCalculator />
      <WhyChooseUs />
      <CaseStudy />
      <AppManagementSection />
      <DeviceAvailabilitySection />
      <ServicePackages />
      <WhatSetsUsApart />
      <TechStack />
      <Process />
      <CTA />
      <Footer />
    </div>
  )
}
