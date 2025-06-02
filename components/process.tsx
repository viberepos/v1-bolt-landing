"use client"

import { MessageCircle, Search, FileText, Palette, Cog, Rocket, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Process() {
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

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.1
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        delay: 0.2
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        delay: 0.3
      }
    }
  }

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
            Proces, który eliminuje ryzyko i zapewnia sukces
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-xl text-[#222222]/70 max-w-3xl mx-auto"
          >
            7 kroków do transformacji Twojego biznesu
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={stepVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex items-start space-x-8 group cursor-pointer"
            >
              <div className="flex-shrink-0">
                <motion.div 
                  variants={numberVariants}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "#f9f5ee",
                    color: "#222222"
                  }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center w-16 h-16 bg-[#222222] text-[#f9f5ee] rounded-full text-2xl font-bold group-hover:bg-[#f9f5ee] group-hover:text-[#222222] transition-colors duration-300"
                >
                  {step.number}
                </motion.div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="h-8 w-8 text-[#222222] group-hover:text-[#222222]/80 transition-colors duration-300" />
                  </motion.div>
                  <motion.h3 
                    variants={textVariants}
                    className="text-2xl font-bold text-[#222222] group-hover:text-[#222222]/90 transition-colors duration-300"
                  >
                    {step.title}
                  </motion.h3>
                </div>
                <motion.p 
                  variants={textVariants}
                  className="text-[#222222]/70 text-lg group-hover:text-[#222222]/80 transition-colors duration-300"
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
