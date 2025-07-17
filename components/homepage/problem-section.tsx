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
      title: "Zespół narzeka na powtarzalne procesy",
      description: "Pracownicy tracą motywację wykonując zadania, które mogą wykonywać się same",
    },
    {
      icon: AlertTriangle,
      title: "Dziesiątki telefonów dziennie z pytaniami o etap prac",
      description: "Ciągłe pytania o status realizacji, czy obecny etap prac zakłócają produktywną pracę",
    },
    {
      icon: TrendingDown,
      title: "Częste zmiany CRM to koszty, nerwy i utrata czasu",
      description: "Co kilka miesięcy nowy system - albo za mało funkcji, albo za drogi plan to najczęstsze powody zmian",
    },
    {
      icon: DollarSign,
      title: "Nieefektywne procesy kosztują czas i pieniądze",
      description: "Każdy dzień z przestarzałymi procesami to duży koszt dla firmy i demotywacja dla zespołu",
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
            PROBLEM
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="tech-subheadline max-w-3xl mx-auto opacity-90"
          >
            Większość firm traci czas i pieniądze na przestarzałych procesach biznesowych
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="tech-card group cursor-pointer"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                    <problem.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="tech-subheadline !text-lg !font-semibold mb-3 group-hover:text-white/90 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="tech-body !text-base opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}