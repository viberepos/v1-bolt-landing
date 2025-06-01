"use client"

import { AlertTriangle, Clock, DollarSign, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const problems = [
    {
      icon: Clock,
      title: "Zespół narzeka na powtarzalną pracę",
      description: "Pracownicy tracą motywację wykonując te same zadania, które można zautomatyzować",
    },
    {
      icon: AlertTriangle,
      title: "Dziesiątki telefonów dziennie",
      description: "Ciągłe pytania o etap prac i status projektów zakłócają produktywną pracę",
    },
    {
      icon: TrendingDown,
      title: "Częste zmiany CRM",
      description: "Co kilka miesięcy nowy system - albo za mało funkcji, albo za drogi plan",
    },
    {
      icon: DollarSign,
      title: "Nieefektywne procesy kosztują",
      description: "Każdy dzień z przestarzałymi procesami to wymierny koszt dla biznesu",
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
            variants={itemVariants}
            className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-6"
          >
            Nie trać kolejnych miesięcy i tysięcy złotych na nieefektywne procesy
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-[#222222]/70 max-w-3xl mx-auto"
          >
            Każdy dzień z nieefektywnymi procesami to wymierny koszt dla Twojego biznesu. Czy możesz sobie pozwolić na
            dalsze odkładanie digitalizacji?
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-pointer"
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-[#f9f5ee] rounded-full mb-6 group-hover:bg-[#222222] transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <problem.icon className="h-8 w-8 text-[#222222] group-hover:text-[#f9f5ee] transition-colors duration-300" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#222222] mb-4">{problem.title}</h3>
              <p className="text-[#222222]/70">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}