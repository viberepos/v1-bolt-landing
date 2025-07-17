import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'VibeApps dla Biznesu - Transformacja Procesów Biznesowych',
  description: 'Zwiększ wydajność firmy o 300%. dedykowane systemy, oszczędność czasu i pieniędzy. Gotowe rozwiązanie w 3-8 tygodni.',
  keywords: 'optymalizacja procesów biznesowych, aplikacje i systemy dla firm, CRM dedykowane, aplikacje biznesowe, optymalizacja procesów',
  
  openGraph: {
    title: 'VibeApps dla Biznesu - Transformacja Procesów',
    description: 'Zwiększ wydajność firmy o 300%. dedykowane systemy, oszczędność 2-3 godzin dziennie.',
    url: 'https://vibeapps.pl',
    siteName: 'VibeApps',
    images: [
      {
        url: 'https://vibeapps.pl/images/logo/2%20Logo%20VibeApps%20poziom%20bez%20t%C5%82a.png',
        width: 1200,
        height: 630,
        alt: 'VibeApps - Automatyzacja Procesów Biznesowych',
        type: 'image/png',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'VibeApps dla Biznesu - Transformacja Procesów',
    description: 'Zwiększ wydajność firmy o 300%. Gotowe rozwiązanie w 3-12 tygodni.',
    images: ['https://vibeapps.pl/images/logo/2%20Logo%20VibeApps%20poziom%20bez%20t%C5%82a.png'],
  },
  
  alternates: {
    canonical: 'https://vibeapps.pl',
  },
}

export default function Home() {
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
