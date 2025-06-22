import { Hero } from "@/components/hero"
import { BusinessChoiceSection } from "@/components/business-choice-section"
import { ProblemSection } from "@/components/problem-section"
import { CostCalculator } from "@/components/cost-calculator"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CaseStudy } from "@/components/case-study"
import { AppManagementSection } from "@/components/app-management-section"
import { DeviceAvailabilitySection } from "@/components/device-availability-section"
import { ServicePackages } from "@/components/service-packages"
import { WhatSetsUsApart } from "@/components/what-sets-us-apart"
import { TechStack } from "@/components/tech-stack"
import { Process } from "@/components/process"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f5ee]">
      <Navbar />
      <Hero />
      <BusinessChoiceSection />
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
