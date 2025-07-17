"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ServicePackages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const packages = [
    {
      name: "Optymalizacja",
      description: "Usprawnienie istniejących procesów",
      popular: false,
      features: [
        "Analiza obecnych procesów",
        "Identyfikacja wąskich gardeł",
        "Optymalizacja workflow",
        "Zwiększenie wydajności o 30%",
        "Wsparcie przez 3 miesiące",
      ],
    },
    {
      name: "Automatyzacja",
      description: "Automatyzacja kluczowych procesów",
      popular: true,
      features: [
        "Automatyzacja zadań powtarzalnych",
        "Integracja z istniejącymi systemami",
        "Skrócenie czasu procesów o 60%",
        "Redukcja błędów o 90%",
        "Wsparcie przez 6 miesięcy",
      ],
    },
    {
      name: "Dedykowane CRM",
      description: "System zarządzania klientami",
      popular: false,
      features: [
        "Indywidualny system CRM",
        "Zarządzanie bazą klientów",
        "Automatyzacja sprzedaży",
        "Integracja z e-mailem",
        "Wsparcie przez 12 miesięcy",
      ],
    },
    {
      name: "Kompletny system",
      description: "Pełna transformacja cyfrowa",
      popular: false,
      features: [
        "Kompleksowa digitalizacja",
        "Wszystkie procesy w jednym systemie",
        "Integracja z zewnętrznymi API",
        "Mobilna aplikacja",
        "Wsparcie bezterminowo",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="tech-background tech-spacing-lg">
      <div className="tech-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={textVariants}
            className="tech-headline mb-8"
          >
            ROADMAP
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="tech-subheadline max-w-3xl mx-auto opacity-90"
          >
            Dopasuj rozwiązania do swoich potrzeb, nigdy na odwrót
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
              className="group relative"
            >
              <div className={`tech-card h-full ${pkg.popular ? "ring-2 ring-white/50" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Najpopularniejszy
                    </div>
                  </div>
                )}

                <div className="text-center pb-4">
                  <h3 className="tech-subheadline !text-xl !font-bold mb-2">{pkg.name}</h3>
                  <p className="tech-body !text-sm opacity-80">{pkg.description}</p>
                </div>

                <div className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="tech-body !text-sm opacity-80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <Button 
                    className="tech-button-outline w-full"
                    data-tally-open="wMqZ70"
                    data-tally-layout="modal"
                    data-tally-width="1000"
                    data-tally-emoji-text="👋"
                    data-tally-emoji-animation="wave"
                  >
                    Umów konsultację
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
