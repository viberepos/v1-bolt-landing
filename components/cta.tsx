import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#f9f5ee] sm:text-4xl lg:text-5xl mb-6">
          Gotowy na transformację swojego biznesu?
        </h2>
        <p className="text-xl text-[#f9f5ee]/80 max-w-3xl mx-auto mb-12">
          Skontaktuj się z nami już dziś, aby omówić potrzeby Twojej firmy i zaplanować bezpłatną konsultację.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-[#f9f5ee] text-[#222222] hover:bg-[#f9f5ee]/90 text-lg px-8 py-4">
            <Calendar className="mr-2 h-5 w-5" />
            Umów bezpłatną konsultację
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#f9f5ee] text-[#f9f5ee] hover:bg-[#f9f5ee] hover:text-[#222222] text-lg px-8 py-4"
          >
            Zobacz więcej case studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#f9f5ee] mb-2">93%</div>
            <div className="text-[#f9f5ee]/80">klientów poleca nas dalej</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#f9f5ee] mb-2">3-8</div>
            <div className="text-[#f9f5ee]/80">tygodni do gotowego rozwiązania</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#f9f5ee] mb-2">70%</div>
            <div className="text-[#f9f5ee]/80">oszczędności w porównaniu do tradycyjnych firm</div>
          </div>
        </div>
      </div>
    </section>
  )
}
