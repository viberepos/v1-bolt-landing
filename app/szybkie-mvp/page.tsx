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

export default function SzybkieMVP() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f5ee]">
      <Navbar />
      <main className="flex-1">
        <MVPHero />
        <MVPProblemSection />
        <MVPComparison />
        <MVPProcess />
        <MVPExamples />
        <MVPDeliverables />
        <MVPPricing />
        <MVPFAQ />
        <MVPCTA />
      </main>
      <Footer />
    </div>
  )
} 