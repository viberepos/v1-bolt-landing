import { Code, Users, Eye, BarChart } from "lucide-react"

export function WhatSetsUsApart() {
  const differentiators = [
    {
      icon: Code,
      title: "Dobieramy technologię do oczekiwanych rezultatów, nie odwrotnie",
      description:
        "Nie forsujemy jednego rozwiązania dla wszystkich problemów. Dostosowujemy narzędzia do Twoich konkretnych potrzeb, budżetu i tempa rozwoju.",
    },
    {
      icon: Users,
      title: "Specjaliści biznesowi i sprzedażowi, nie tylko programiści",
      description:
        "Nasz zespół to nie tylko eksperci techniczni, ale przede wszystkim konsultanci biznesowi, którzy rozumieją różne branże i ich wyzwania.",
    },
    {
      icon: Eye,
      title: "Transparentny proces bez ukrytych kosztów",
      description:
        "Dokładnie wiesz, na co idą Twoje pieniądze i jakie efekty otrzymasz. Zero niespodzianek, zero ukrytych opłat.",
    },
    {
      icon: BarChart,
      title: "Mierzalne rezultaty zamiast mglistych obietnic",
      description:
        "Ustalamy konkretne, mierzalne wskaźniki sukcesu projektu, które pozwalają jasno ocenić zwrot z inwestycji.",
    },
  ]

  return (
    <section className="py-20 bg-[#f9f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-6">
            Co nas wyróżnia na tle innych firm?
          </h2>
          <p className="text-xl text-[#222222]/70 max-w-3xl mx-auto">
            Nie jesteśmy kolejną firmą software'ową. Jesteśmy Twoim partnerem w cyfrowej transformacji.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {differentiators.map((item, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#222222] rounded-full">
                  <item.icon className="h-8 w-8 text-[#f9f5ee]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#222222] mb-4">{item.title}</h3>
                <p className="text-[#222222]/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
