import { MessageCircle, Search, FileText, Palette, Cog, Rocket, HeadphonesIcon } from "lucide-react"

export function Process() {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Bezpłatna konsultacja kwalifikacyjna",
      description:
        "Bez zobowiązań, bez sprzedażowego nacisku. Podczas 30-minutowej rozmowy wspólnie ocenimy, czy możemy realnie pomóc Twojej firmie.",
    },
    {
      number: "2",
      icon: Search,
      title: "Analiza Twoich procesów biznesowych",
      description:
        "Zagłębiamy się w specyfikę Twojego biznesu, identyfikujemy kluczowe wyzwania i potencjalne obszary optymalizacji.",
    },
    {
      number: "3",
      icon: FileText,
      title: "Koncepcja i wycena bez ukrytych kosztów",
      description:
        "W ciągu kilku dni otrzymujesz szczegółową propozycję rozwiązania wraz z dokładną wyceną - bez ukrytych kosztów.",
    },
    {
      number: "4",
      icon: Palette,
      title: "Projekt dopasowany do Twoich potrzeb",
      description:
        "Opracowujemy architekturę systemu i interfejsy w ścisłej współpracy z Tobą, upewniając się, że rozwiązanie idealnie wpisuje się w Twoje procesy.",
    },
    {
      number: "5",
      icon: Cog,
      title: "Realizacja z widocznymi postępami",
      description:
        "Pracujemy w krótkich cyklach, pokazując postępy co 1-2 tygodnie. Masz pełną kontrolę nad kierunkiem rozwoju.",
    },
    {
      number: "6",
      icon: Rocket,
      title: "Wdrożenie bez zakłócania pracy",
      description: "Wprowadzamy rozwiązanie stopniowo, zapewniając płynną migrację danych i szkolenia dla zespołu.",
    },
    {
      number: "7",
      icon: HeadphonesIcon,
      title: "Wsparcie, które nie kończy się po wdrożeniu",
      description:
        "Pozostajemy do Twojej dyspozycji, zapewniając wsparcie techniczne, dalsze usprawnienia i rozwój systemu.",
    },
  ]

  return (
    <section className="py-20 bg-[#f9f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-6">
            Proces, który eliminuje ryzyko i zapewnia sukces
          </h2>
          <p className="text-xl text-[#222222]/70 max-w-3xl mx-auto">7 kroków do transformacji Twojego biznesu</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#222222] text-[#f9f5ee] rounded-full text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <step.icon className="h-8 w-8 text-[#222222]" />
                  <h3 className="text-2xl font-bold text-[#222222]">{step.title}</h3>
                </div>
                <p className="text-[#222222]/70 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
