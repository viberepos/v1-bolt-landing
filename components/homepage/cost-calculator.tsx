"use client"

import { Calculator, Plus, Minus, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

// Funkcja formatowania dla spójnego renderowania na serwerze i kliencie
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export function CostCalculator() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Stany dla wartości kalkulatora
  const [employees, setEmployees] = useState(10)
  const [wastedHoursPerEmployee, setWastedHoursPerEmployee] = useState(1)
  const [hourlyRate, setHourlyRate] = useState(50)

  // Wyliczane wartości bezpośrednio
  const dailyHours = employees * wastedHoursPerEmployee
  const dailyCost = dailyHours * hourlyRate
  const monthlyCost = dailyCost * 20 // 20 dni roboczych
  const yearlyCost = monthlyCost * 12

  // Funkcje do zmiany wartości
  const updateEmployees = (change: number) => {
    const newValue = Math.max(1, Math.min(1000, employees + change))
    setEmployees(newValue)
  }

  const updateWastedHours = (change: number) => {
    const newValue = Math.max(0.5, Math.min(8, wastedHoursPerEmployee + change))
    setWastedHoursPerEmployee(newValue)
  }

  const updateHourlyRate = (change: number) => {
    const newValue = Math.max(20, Math.min(500, hourlyRate + change))
    setHourlyRate(newValue)
  }

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

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
            MARKET OVERVIEW
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="tech-subheadline max-w-3xl mx-auto opacity-90"
          >
            Policz ile kosztują Cię nieefektywne procesy w Twojej firmie
          </motion.p>
        </motion.div>

        {/* Interactive Calculator */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Employees */}
            <motion.div 
              variants={cardVariants}
              className="tech-card text-center"
            >
              <div className="tech-caption mb-4">Pracownicy</div>
              <div className="tech-hero-title !text-4xl mb-4">{employees}</div>
              <div className="flex justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateEmployees(-1)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Minus className="h-5 w-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateEmployees(1)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Plus className="h-5 w-5 text-white" />
                </motion.button>
              </div>
            </motion.div>

            {/* Wasted Hours */}
            <motion.div 
              variants={cardVariants}
              className="tech-card text-center"
            >
              <div className="tech-caption mb-4">Godziny marnowane dziennie</div>
              <div className="tech-hero-title !text-4xl mb-4">{wastedHoursPerEmployee}h</div>
              <div className="flex justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateWastedHours(-0.5)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Minus className="h-5 w-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateWastedHours(0.5)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Plus className="h-5 w-5 text-white" />
                </motion.button>
              </div>
            </motion.div>

            {/* Hourly Rate */}
            <motion.div 
              variants={cardVariants}
              className="tech-card text-center"
            >
              <div className="tech-caption mb-4">Stawka godzinowa</div>
              <div className="tech-hero-title !text-4xl mb-4">{hourlyRate} PLN</div>
              <div className="flex justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateHourlyRate(-5)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Minus className="h-5 w-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateHourlyRate(5)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Plus className="h-5 w-5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={numberVariants}
              className="text-center"
            >
              <div className="tech-hero-title !text-5xl mb-4">{formatPrice(dailyCost)} PLN</div>
              <div className="tech-caption">Straty dziennie</div>
            </motion.div>
            <motion.div 
              variants={numberVariants}
              className="text-center"
            >
              <div className="tech-hero-title !text-5xl mb-4">{formatPrice(monthlyCost)} PLN</div>
              <div className="tech-caption">Straty miesięcznie</div>
            </motion.div>
            <motion.div 
              variants={numberVariants}
              className="text-center"
            >
              <div className="tech-hero-title !text-5xl mb-4">{formatPrice(yearlyCost)} PLN</div>
              <div className="tech-caption">Straty rocznie</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.button
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="tech-button text-xl px-12 py-6 transition-transform duration-300"
            data-tally-open="wMqZ70"
            data-tally-layout="modal"
            data-tally-width="1000"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            <Calculator className="mr-3 h-6 w-6" />
            Wyeliminuj te straty
            <ArrowRight className="ml-3 h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
