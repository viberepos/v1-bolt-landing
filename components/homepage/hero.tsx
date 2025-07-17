"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f9f5ee] to-[#f9f5ee]/80 pt-4 pb-8 lg:pt-6 lg:pb-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-[#222222] sm:text-5xl lg:text-6xl"
            >
              Policz ile Twoja firma traci czasu i pieniądzy na{" "}
              <span className="text-[#222222] underline decoration-4 decoration-[#222222]/30">
                przestarzałych procesach
              </span>{" "}
              biznesowych?
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-xl text-[#222222]/70 max-w-3xl"
            >
              Wyobraź sobie, że Twój zespół przestaje narzekać na powtarzalną pracę, kończą się dziesiątki telefonów
              dziennie z pytaniami o etap prac, a Twoje oferty powstają w 15 minut zamiast 3 dni.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              className="mt-8 space-y-4"
            >
              {[
                "35% wzrost skuteczności ofert",
                "2-3 godziny dziennie oszczędności",
                "Gotowe rozwiązanie w 3-8 tygodni"
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-[#222222]">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90 text-lg px-8 py-4 transform transition-transform hover:scale-105"
                onClick={() => {
                  const costCalculatorSection = document.querySelector('#cost-calculator-section');
                  if (costCalculatorSection) {
                    costCalculatorSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Policz ile obecnie tracisz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-[#f9f5ee] text-lg px-8 py-4 transform transition-transform hover:scale-105"
                onClick={() => {
                  const servicePackagesSection = document.querySelector('#service-packages-section');
                  if (servicePackagesSection) {
                    servicePackagesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Poznaj nasze usługi
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={statsVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-12 lg:mt-0 lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#222222]/20 to-transparent rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Header */}
                <div className="grid grid-cols-3 gap-2 mb-4 pb-3 border-b-2 border-gray-100">
                  <div className="font-semibold text-sm text-[#222222] text-left">
                    Kluczowe wskaźniki
                  </div>
                  <div className="font-semibold text-xs text-[#222222] text-center">
                    Bez dedykowanego systemu
                  </div>
                  <div className="font-semibold text-xs text-[#222222] text-center">
                    Z dopasowanym systemem
                  </div>
                </div>

                {/* Comparison Rows */}
                <div className="space-y-3">
                  {[
                    { label: "Czas przygotowania oferty", before: "3 dni", after: "15 min" },
                    { label: "Zapytania o status projektów", before: "20+ dziennie", after: "2-3 dziennie" },
                    { label: "Współczynnik akceptacji ofert", before: "15%", after: "50%" },
                    { label: "Czas reakcji na zapytanie klienta", before: "4-6 godzin", after: "30 min" },
                    { label: "Błędy w dokumentacji", before: "8-12%", after: "< 2%" },
                    { label: "Czas wdrożenia nowego pracownika", before: "2 tygodnie", after: "3 dni" },
                    { label: "Oszczędność czasu zespołu", before: "-", after: "35%" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="grid grid-cols-3 gap-2 items-center"
                    >
                      <div className="text-xs font-medium text-[#222222]">{stat.label}</div>
                      <div className="flex justify-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-red-50 text-red-700 border border-red-200 px-2 py-1 rounded text-xs font-semibold text-center min-w-[60px]"
                        >
                          {stat.before}
                        </motion.div>
                      </div>
                      <div className="flex justify-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded text-xs font-semibold text-center min-w-[60px]"
                        >
                          {stat.after}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Case Study Note */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                    <div className="text-xs text-gray-600">
                      <strong>Źródło danych:</strong> Rzeczywisty projekt dla firmy z branży finansowej.
                    </div>
                    <button
                      onClick={() => {
                        const caseStudySection = document.querySelector('#case-study-section');
                        if (caseStudySection) {
                          caseStudySection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-[#222222] text-[#f9f5ee] hover:bg-[#333333] transition-all duration-300 hover:scale-105 text-xs px-12 py-2 rounded font-medium"
                    >
                      <div className="text-center">
                        <div>Sprawdź</div>
                        <div className="whitespace-nowrap">case study</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}