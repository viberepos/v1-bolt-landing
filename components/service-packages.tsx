"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ServicePackages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  }

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    }
  }

  const packages = [
    {
      name: "MVP CHECK",
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
      description: "Dedykowane dla firm poszukujących kompleksowych rozwiązań",
      features: [
        "Zaawansowane narzędzia wspierające kluczowe procesy",
        "Złożone funkcjonalności i rozbudowane moduły",
        "Dedykowane panele raportowe z różnymi poziomami dostępu",
        "Pełne wsparcie wdrożeniowe i powdrożeniowe",
      ],
      ideal: "Potrzebujesz pełnego wglądu w dane do podejmowania strategicznych decyzji",
      popular: false,
    },
    {
      name: "ULTIMATE",
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
    <section id="service-packages-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={headerVariants}
            className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-6"
          >
            Najczęściej realizowane usługi dla naszych klientów
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-xl text-[#222222]/70 max-w-3xl mx-auto"
          >
            Dopasuj rozwiązania do swoich potrzeb, nigdy na odwrót!
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className={`relative h-full ${pkg.popular ? "ring-2 ring-[#222222] shadow-2xl" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                  >
                    <div className="bg-[#222222] text-[#f9f5ee] px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Najpopularniejszy
                    </div>
                  </motion.div>
                )}

                <CardHeader className="text-center pb-4">
                  <motion.div variants={itemVariants}>
                    <CardTitle className="text-2xl font-bold text-[#222222] mb-2">{pkg.name}</CardTitle>
                    <p className="text-sm text-[#222222]/70">{pkg.description}</p>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#f9f5ee] p-4 rounded-lg group-hover:bg-[#f9f5ee]/80 transition-colors duration-300"
                  >
                    <p className="text-sm text-[#222222] font-medium">Dla Ciebie, jeśli:</p>
                    <p className="text-sm text-[#222222]/70 mt-2">{pkg.ideal}</p>
                  </motion.div>

                  <motion.div 
                    variants={containerVariants}
                    className="space-y-3"
                  >
                    <p className="font-semibold text-[#222222]">Co zyskujesz:</p>
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        variants={featureVariants}
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-3 group/feature cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5 group-hover/feature:text-green-700 transition-colors" />
                        </motion.div>
                        <span className="text-sm text-[#222222]/70 group-hover/feature:text-[#222222] transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      className={`w-full transition-all duration-300 ${
                        pkg.popular
                          ? "bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90 hover:scale-105"
                          : "bg-[#f9f5ee] text-[#222222] border border-[#222222] hover:bg-[#222222] hover:text-[#f9f5ee] hover:scale-105"
                      }`}
                      data-tally-open="w8yEWk"
                      data-tally-layout="modal"
                      data-tally-width="900"
                      data-tally-emoji-text="👋"
                      data-tally-emoji-animation="wave"
                    >
                      Umów darmową konsultację
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
