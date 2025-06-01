import { Zap, DollarSign, TrendingUp, Users } from "lucide-react"

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Zap,
      title: "SZYBCIEJ",
      comparison: "Tradycyjne firmy: 6-12 miesięcy",
      solution: "VibeApps: 3-8 tygodni",
      description:
        "Nie musisz czekać miesiącami na efekty. Dzięki Smart Development zobaczysz pierwsze rezultaty już po kilku tygodniach.",
    },
    {
      icon: DollarSign,
      title: "TANIEJ",
      comparison: "Tradycyjny development: 150 000+ PLN",
      solution: "VibeApps: Oszczędzasz nawet do 70%",
      description: "Dlaczego przepłacać za kod, kiedy powinieneś płacić za rezultaty? Eliminujemy zbędne koszty.",
    },
    {
      icon: TrendingUp,
      title: "SKALOWALNIE",
      comparison: "Tradycyjne: Przepisujemy co 2-3 lata",
      solution: "VibeApps: System rośnie razem z Tobą",
      description: "Zapominasz o kosztownych przepisywaniach. Nasze rozwiązania rozwijają się wraz z Twoim biznesem.",
    },
    {
      icon: Users,
      title: "93% POLECA NAS DALEJ",
      comparison: "Średnia branżowa: 60%",
      solution: "VibeApps: 93% rekomendacji",
      description: "Nasze podejście łączy ekspertyzę techniczną z głębokim zrozumieniem potrzeb biznesowych.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-6">
            Dlaczego 93% naszych klientów poleca nas dalej?
          </h2>
          <p className="text-xl text-[#222222]/70 max-w-3xl mx-auto">
            VibeApps to więcej niż studio technologiczne. To Twój partner w cyfrowej transformacji biznesu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#f9f5ee] rounded-full">
                    <benefit.icon className="h-8 w-8 text-[#222222]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#222222] mb-4">{benefit.title}</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600">✗</span>
                      <span className="text-[#222222]/70">{benefit.comparison}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-[#222222] font-semibold">{benefit.solution}</span>
                    </div>
                  </div>
                  <p className="text-[#222222]/70">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
