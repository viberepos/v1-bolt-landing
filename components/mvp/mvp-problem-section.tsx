"use client"

import { DollarSign, Clock, Users, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function MVPProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-6">
            <motion.h2 
              variants={headerVariants}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#222222]" 
              style={{ lineHeight: '1.1' }}
            >
              Nie działamy jak tradycyjne software house'y.
            </motion.h2>
            <motion.p 
              variants={headerVariants}
              className="text-xl text-[#222222]/70 max-w-3xl mx-auto"
            >
              Nie popełniaj tych błędów - one wiele kosztują...
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col p-6 bg-[#f9f5ee] rounded-lg shadow-sm group cursor-pointer"
          >
            <DollarSign className="h-12 w-12 text-[#222222] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2 text-[#222222]">Wysokie koszty pełnej aplikacji</h3>
            <p className="text-[#222222]/70">
              Tradycyjne firmy software'owe wyceniają projekty na dziesiątki tysięcy złotych, zanim w ogóle
              sprawdzisz, czy komuś to jest potrzebne.
            </p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col p-6 bg-[#f9f5ee] rounded-lg shadow-sm group cursor-pointer"
          >
            <Clock className="h-12 w-12 text-[#222222] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2 text-[#222222]">Miesiące czekania na rezultaty</h3>
            <p className="text-[#222222]/70">
              6-12 miesięcy development'u to stanowczo za długo, żeby sprawdzić fundamentalne założenia biznesowe.
            </p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col p-6 bg-[#f9f5ee] rounded-lg shadow-sm group cursor-pointer"
          >
            <Users className="h-12 w-12 text-[#222222] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2 text-[#222222]">Budowanie nie tego, czego potrzebują użytkownicy</h3>
            <p className="text-[#222222]/70">
              95% funkcji w pierwszej wersji aplikacji okazuje się niepotrzebnych lub źle zaprojektowanych.
            </p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col p-6 bg-[#f9f5ee] rounded-lg shadow-sm group cursor-pointer"
          >
            <BarChart3 className="h-12 w-12 text-[#222222] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2 text-[#222222]">Brak danych do podejmowania decyzji</h3>
            <p className="text-[#222222]/70">
              Bez prawdziwych użytkowników działasz w ciemno - domysły zastępują fakty.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 