import { Navbar, Footer } from "@/components/shared"
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

export default function DlaBiznesu() {
  return (
    <div className="min-h-screen bg-[#f9f5ee]">
      <Navbar />
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