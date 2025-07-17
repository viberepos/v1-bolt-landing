"use client"

import { Code, Users, Eye, BarChart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function WhatSetsUsApart() {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
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
        delay: 0.4
      }
    }
  }

  const differentiators = [
    {
      icon: Code,
      title: "Dobieramy technologię do oczekiwanych rezultatów, nie odwrotnie",
      description:
        "Nie forsujemy jednego rozwiązania dla wszystkich problemów. Dostosowujemy narzędzia do Twoich konkretnych potrzeb, budżetu i tempa rozwoju Twojej firmy.",
    },
    {
      icon: Users,
      title: "Specjaliści rozwoju, biznesu i sprzedaży, nie tylko programiści i deweloperzy",
      description:
        "Nasz zespół to nie tylko eksperci techniczni, ale przede wszystkim konsultanci biznesowi, z doświadczeniem w różnych branżach, którzy rozumieją codzienne wyzwania biznesowe.",
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
        "Ustalamy konkretne, mierzalne wskaźniki sukcesu projektu, które pozwalają jasno ocenić sens dalszych inwestycji.",
    },
  ]

  return (
    <section id="what-sets-us-apart-section" className="py-20 bg-[#f9f5ee]">
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
            Co nas wyróżnia na tle innych firm?
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-xl text-[#222222]/70 max-w-3xl mx-auto"
          >
            Nie jesteśmy kolejną firmą software'ową.<br />
            Jesteśmy Twoim partnerem w realizacji i rozwoju Twoich pomysłów.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {differentiators.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex items-start space-x-6 group cursor-pointer"
            >
              <div className="flex-shrink-0">
                <motion.div 
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "#f9f5ee"
                  }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center w-16 h-16 bg-[#222222] rounded-full group-hover:bg-[#f9f5ee] transition-colors duration-300"
                >
                  <item.icon className="h-8 w-8 text-[#f9f5ee] group-hover:text-[#222222] transition-colors duration-300" />
                </motion.div>
              </div>
              <div className="flex-1">
                <motion.h3 
                  variants={textVariants}
                  className="text-xl font-bold text-[#222222] mb-4 group-hover:text-[#222222]/90 transition-colors duration-300"
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  variants={textVariants}
                  className="text-[#222222]/70 group-hover:text-[#222222]/80 transition-colors duration-300"
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
