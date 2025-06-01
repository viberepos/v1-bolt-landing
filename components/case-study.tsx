import { TrendingUp, Clock, Users, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CaseStudy() {
  const results = [
    {
      icon: Clock,
      metric: "40%",
      description: "redukcji czasu obsługi klienta",
    },
    {
      icon: Target,
      metric: "3x",
      description: "więcej obsłużonych ofert inwestycyjnych",
    },
    {
      icon: Users,
      metric: "90%",
      description: "mniej wewnętrznych e-maili",
    },
    {
      icon: TrendingUp,
      metric: "35%",
      description: "wzrost skuteczności dopasowania",
    },
  ]

  return (
    <section className="py-20 bg-[#f9f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-6">
            Realne rezultaty, nie puste obietnice
          </h2>
          <p className="text-xl text-[#222222]/70 max-w-3xl mx-auto">
            Case Study: Aplikacja dla pośrednika finansowego zwiększyła efektywność o 300%
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-[#222222]">Wyzwanie klienta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-[#222222]/70">40% czasu zespołu poświęcane na szukanie informacji</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-[#222222]/70">Utrata potencjalnych klientów przez opóźnienia w odpowiedziach</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-[#222222]/70">Brak spójnego widoku procesów biznesowych</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-[#222222] mb-3">Nasze rozwiązanie:</h4>
                  <p className="text-[#222222]/70">
                    Dedykowany system do zarządzania relacjami zintegrował wszystkie procesy w jednym miejscu,
                    umożliwiając natychmiastowy dostęp do potrzebnych informacji.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#222222] mb-8 text-center">Rezultaty po 4 tygodniach:</h3>
            <div className="grid grid-cols-2 gap-6">
              {results.map((result, index) => (
                <Card key={index} className="bg-white shadow-lg text-center">
                  <CardContent className="p-6">
                    <result.icon className="h-8 w-8 text-[#222222] mx-auto mb-4" />
                    <div className="text-3xl font-bold text-[#222222] mb-2">{result.metric}</div>
                    <p className="text-sm text-[#222222]/70">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
