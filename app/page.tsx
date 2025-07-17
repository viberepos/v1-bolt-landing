import type { Metadata } from 'next'
import { Footer } from "@/components/shared"
import { 
  MVPNavbar,
  MVPHero, 
  MVPProblemSection, 
  MVPComparison, 
  MVPProcess, 
  MVPExamples, 
  MVPDeliverables, 
  MVPPricing, 
  MVPFAQ, 
  MVPCTA,
  MVPMainCTA,
  MVPTechStack,
  CaseStudy2
} from "@/components/mvp"
import { 
  Hero, 
  ProblemSection, 
  CostCalculator, 
  WhyChooseUs, 
  AppManagementSection, 
  DeviceAvailabilitySection, 
  ServicePackages, 
  WhatSetsUsApart, 
  Process 
} from "@/components/homepage"

export const metadata: Metadata = {
  title: 'VibeApps - Szybkie MVP | Zbudujemy Twoją aplikację szybciej i taniej',
  description: 'Szybszy development = szybsza walidacja. Sprawdź czy Twój pomysł na aplikację będzie pożądany przez rynek przed dużymi inwestycjami. MVP w 3-12 tygodni.',
  keywords: 'MVP, minimum viable product, szybkie MVP, walidacja pomysłu, prototyp aplikacji, startup MVP',
  
  openGraph: {
    title: 'VibeApps - Szybkie MVP | Zbudujemy Twoją aplikację',
    description: 'Szybszy development = szybsza walidacja. MVP w 3-12 tygodni. Realne opinie od użytkowników, szybsze sprawdzenie rynku.',
    url: 'https://vibeapps.pl',
    siteName: 'VibeApps',
    images: [
      {
        url: 'https://vibeapps.pl/images/logo/2%20Logo%20VibeApps%20poziom%20bez%20t%C5%82a.png',
        width: 1200,
        height: 630,
        alt: 'VibeApps - Szybkie MVP i Walidacja Pomysłów',
        type: 'image/png',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'VibeApps - Szybkie MVP | Zbudujemy Twoją aplikację',
    description: 'Szybszy development = szybsza walidacja. MVP w 3-12 tygodni.',
    images: ['https://vibeapps.pl/images/logo/2%20Logo%20VibeApps%20poziom%20bez%20t%C5%82a.png'],
  },
  
  alternates: {
    canonical: 'https://vibeapps.pl',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f5ee]">
      <MVPNavbar />
      <MVPHero />
      <MVPProblemSection />
      <MVPComparison />
      <MVPProcess />
      <CaseStudy2 />
      <AppManagementSection />
      <DeviceAvailabilitySection />
      <MVPDeliverables />
      <MVPCTA />
      <WhatSetsUsApart />
      <WhyChooseUs />
      <MVPFAQ />
      <MVPTechStack />
      <MVPMainCTA />
      <Footer />
    </div>
  )
}
