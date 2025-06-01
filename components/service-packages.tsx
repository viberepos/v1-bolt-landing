import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicePackages() {
  const packages = [
    {
      name: "MVP CHECK",
      price: "Od 8 000 PLN",
      description: "Idealne do walidacji pomysłów biznesowych",
      features: [
        "Działający prototyp w 3-4 tygodnie",
        "Możliwość testowania na realnych użytkownikach",
        "Konkretne dane zamiast domysłów",
        "Pełne wsparcie wdrożeniowe i powdrożeniowe",
      ],
      ideal: "Masz innowacyjny pomysł, ale nie chcesz ryzykować dużych inwestycji",
      popular: false,
    },
    {
      name: "EVOLVE",
      price: "Od 12 000 PLN",
      description: "Idealne dla firm na etapie optymalizacji procesów",
      features: [
        "Uproszczenie powtarzalnych, czasochłonnych zadań",
        "Eliminacja błędów ludzkich w procesach",
        "Usprawnienie przepływu informacji między działami",
        "Pełne wsparcie wdrożeniowe i powdrożeniowe",
      ],
      ideal: "Tracisz cenne godziny na powtarzalnych, manualnych zadaniach",
      popular: true,
    },
    {
      name: "ADVANCED",
      price: "Od 20 000 PLN",
      description: "Dedykowane dla firm poszukujących kompleksowych rozwiązań",
      features: [
        "Zaawansowane narzędzia wspierające kluczowe procesy",
        "Złożone funkcjonalności i rozbudowane moduły",
        "Dedykowane panele raportowe",
        "Pełne wsparcie wdrożeniowe i powdrożeniowe",
      ],
      ideal: "Potrzebujesz pełnego wglądu w dane do podejmowania strategicznych decyzji",
      popular: false,
    },
    {
      name: "ULTIMATE",
      price: "Wycena indywidualna",
      description: "Do realizacji przedsięwzięć wymagających pełnego potencjału",
      features: [
        "Kompleksowe rozwiązania FullStack",
        "Dedykowany zespół programistów",
        "Architektura przygotowana na znaczący wzrost",
        "Pełne wsparcie wdrożeniowe i powdrożeniowe",
      ],
      ideal: "Potrzebujesz zaawansowanego rozwiązania jako fundamentu biznesu",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-6">
            Wybierz rozwiązanie dopasowane do aktualnych potrzeb Twojego biznesu
          </h2>
          <p className="text-xl text-[#222222]/70 max-w-3xl mx-auto">
            Każdy pakiet zawiera pełne wsparcie wdrożeniowe i powdrożeniowe
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-[#222222] shadow-2xl" : "shadow-lg"}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#222222] text-[#f9f5ee] px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Najpopularniejszy
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-[#222222] mb-2">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-[#222222] mb-2">{pkg.price}</div>
                <p className="text-[#222222]/70 text-sm">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-[#f9f5ee] p-4 rounded-lg">
                  <p className="text-sm text-[#222222] font-medium">Dla Ciebie, jeśli:</p>
                  <p className="text-sm text-[#222222]/70 mt-2">{pkg.ideal}</p>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold text-[#222222]">Co zyskujesz:</p>
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#222222]/70">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90"
                      : "bg-[#f9f5ee] text-[#222222] border border-[#222222] hover:bg-[#222222] hover:text-[#f9f5ee]"
                  }`}
                >
                  {pkg.name === "ULTIMATE" ? "Skontaktuj się" : "Wybierz pakiet"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
