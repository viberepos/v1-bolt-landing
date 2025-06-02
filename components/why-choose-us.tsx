"use client"

import { Zap, DollarSign, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
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

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
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

  const comparisonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
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
      comparison: "Tradycyjne: Przepisywanie co 2-3 lata",
      solution: "VibeApps: System rośnie razem z Tobą",
      description: "Zapominasz o kosztownych przepisywaniach. Nasze rozwiązania rozwijają się wraz z Twoim biznesem.",
    },
    {
      icon: Users,
      title: "DŁUGOTERMINOWO",
      comparison: "Tradycyjne firmy: Skupienie na zleceniu",
      solution: "VibeApps: Skupienie na całym biznesie klienta",
      description: "Stawiamy na długoterminowe relacje skupiając się na rozwoju całej firmy klienta, a nie tylko narzędzi.",
    },
  ]

  return (
    <section className="py-20 bg-white">
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
            Dlaczego nasi klienci polecają nas dalej?
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-xl text-[#222222]/70 max-w-3xl mx-auto"
          >
            VibeApps to więcej niż studio technologiczne.<br />
            To Twój partner w cyfrowej transformacji biznesu.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 bg-[#f9f5ee] rounded-full group-hover:bg-[#222222] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="h-8 w-8 text-[#222222] group-hover:text-[#f9f5ee] transition-colors duration-300" />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <motion.h3 
                    variants={headerVariants}
                    className="text-2xl font-bold text-[#222222] mb-4"
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.div 
                    variants={comparisonVariants}
                    className="space-y-3 mb-4"
                  >
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-red-600">✗</span>
                      <span className="text-[#222222]/70">{benefit.comparison}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-green-600">✓</span>
                      <span className="text-[#222222] font-semibold">{benefit.solution}</span>
                    </motion.div>
                  </motion.div>
                  <motion.p 
                    variants={comparisonVariants}
                    className="text-[#222222]/70"
                  >
                    {benefit.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
