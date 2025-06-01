import { Zap, TrendingUp, Link } from "lucide-react"

export function TechStack() {
  const techCategories = [
    {
      icon: Zap,
      title: "Szybkość wdrożenia",
      description: "Wykorzystujemy platformy no-code/low-code tam, gdzie przyniosą najszybsze rezultaty",
      technologies: ["Glide", "Softr", "Bubble", "Airtable", "Notion", "Webflow", "Framer"],
    },
    {
      icon: TrendingUp,
      title: "Skalowalność i wydajność",
      description: "Gdy potrzebujesz rozwiązania, które obsłuży znaczący wzrost",
      technologies: ["React", "Next.js", "Node.js", "Express", "Firebase", "MongoDB"],
    },
    {
      icon: Link,
      title: "Integracje i komunikacja",
      description: "Łączymy Twoje systemy w spójny ekosystem",
      technologies: ["REST API", "GraphQL", "React Native", "Flutter", "Webhook", "API"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-6">
            Technologie, które pracują dla Ciebie, nie odwrotnie
          </h2>
          <p className="text-xl text-[#222222]/70 max-w-3xl mx-auto">
            Nie ograniczamy się do jednego stosu technologicznego. Wybieramy najlepsze narzędzia do konkretnego zadania.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {techCategories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f9f5ee] rounded-full mb-6">
                <category.icon className="h-8 w-8 text-[#222222]" />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">{category.title}</h3>
              <p className="text-[#222222]/70 mb-6">{category.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[#f9f5ee] text-[#222222] rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#f9f5ee] rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-[#222222] font-medium">
              Nie oczekujemy, że będziesz rozumiał te technologie - od tego jesteśmy my.
            </p>
            <p className="text-[#222222]/70 mt-4">
              Ty skupiasz się na swoim biznesie, a my dobieramy narzędzia, które przyniosą najlepsze rezultaty.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
