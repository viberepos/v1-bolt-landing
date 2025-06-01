import { Calculator, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CostCalculator() {
  return (
    <section className="py-20 bg-[#f9f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Calculator className="h-16 w-16 text-[#222222] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-6">
            Policz koszt nieefektywnych procesów
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-[#222222]">Rzeczywisty koszt dla Twojego biznesu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-[#f9f5ee] rounded-lg">
                    <span className="font-medium text-[#222222]">10 pracowników</span>
                    <span className="text-[#222222]">×</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#f9f5ee] rounded-lg">
                    <span className="font-medium text-[#222222]">1 godzina dziennie marnowana</span>
                    <span className="text-[#222222]">=</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#f9f5ee] rounded-lg">
                    <span className="font-medium text-[#222222]">10 godzin dziennie</span>
                    <span className="text-[#222222]">×</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#f9f5ee] rounded-lg">
                    <span className="font-medium text-[#222222]">Średnia stawka 50 PLN/h</span>
                    <span className="text-[#222222]">=</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-red-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">500 PLN</div>
                    <div className="text-red-800">dziennie</div>
                  </div>
                  <div className="text-center p-6 bg-red-100 rounded-lg border-2 border-red-300">
                    <div className="text-3xl font-bold text-red-700 mb-2">10 000 PLN</div>
                    <div className="text-red-900">miesięcznie</div>
                  </div>
                  <div className="text-center p-6 bg-red-200 rounded-lg border-2 border-red-400">
                    <div className="text-4xl font-bold text-red-800 mb-2">120 000 PLN</div>
                    <div className="text-red-900 font-semibold">rocznie</div>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <TrendingUp className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
                <p className="text-yellow-800 font-medium">
                  A to tylko bezpośrednie koszty, nie uwzględniające utraconych możliwości, błędów, opóźnień i
                  frustracji zespołu.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
