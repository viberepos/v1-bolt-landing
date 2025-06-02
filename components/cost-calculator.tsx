"use client"

import { Calculator, TrendingDown, Plus, Minus, ArrowRight, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.3
      }
    }
  }

  return (
    <section id="cost-calculator-section" className="py-20 bg-[#f9f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Calculator className="h-16 w-16 text-[#222222] mx-auto mb-6" />
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-4xl mb-6"
          >
            Ile kosztują Cię nieefektywne procesy
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={cardVariants}>
            <Card className="bg-white shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-[#222222]">Policz swoje obecne straty</CardTitle>
              </CardHeader>
              <CardContent className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    variants={containerVariants}
                    className="space-y-6"
                  >
                    {/* Liczba pracowników */}
                    <motion.div 
                      variants={itemVariants}
                      className="flex justify-between items-center py-4 px-4 bg-[#f9f5ee] rounded-lg"
                    >
                      <span className="font-medium text-[#222222]">{employees} pracowników</span>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateEmployees(-1)}
                          className="w-8 h-8 bg-[#222222] text-[#f9f5ee] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateEmployees(1)}
                          className="w-8 h-8 bg-[#222222] text-[#f9f5ee] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Godziny marnowane */}
                    <motion.div 
                      variants={itemVariants}
                      className="flex justify-between items-center py-4 px-4 bg-[#f9f5ee] rounded-lg"
                    >
                      <span className="font-medium text-[#222222]">{wastedHoursPerEmployee} marnowanych dziennie godzin</span>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateWastedHours(-0.5)}
                          className="w-8 h-8 bg-[#222222] text-[#f9f5ee] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateWastedHours(0.5)}
                          className="w-8 h-8 bg-[#222222] text-[#f9f5ee] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Łączne godziny dziennie */}
                    <motion.div 
                      variants={itemVariants}
                      className="flex justify-between items-center py-4 px-4 bg-[#f9f5ee] rounded-lg"
                    >
                      <span className="font-medium text-[#222222]">{dailyHours} godzin dziennie</span>
                      <span className="text-[#222222]">×</span>
                    </motion.div>

                    {/* Stawka godzinowa */}
                    <motion.div 
                      variants={itemVariants}
                      className="flex justify-between items-center py-4 px-4 bg-[#f9f5ee] rounded-lg"
                    >
                      <span className="font-medium text-[#222222]">Średnia stawka {hourlyRate} PLN/h</span>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateHourlyRate(-5)}
                          className="w-8 h-8 bg-[#222222] text-[#f9f5ee] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateHourlyRate(5)}
                          className="w-8 h-8 bg-[#222222] text-[#f9f5ee] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Komunikat po lewej - widoczny tylko na desktop */}
                    <div className="hidden md:block mt-16">
                      <div className="py-6 px-4 bg-[#f9f5ee] rounded-lg">
                        <p className="text-[#222222] text-sm text-center italic">
                          Pamiętaj, że nasz kalkulator nie uwzględnia utraconych możliwości, błędów, opóźnień i frustracji zespołu...
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={containerVariants}
                    className="space-y-6"
                  >
                    <motion.div 
                      variants={numberVariants}
                      whileHover={{ scale: 1.05 }}
                      key="daily-cost"
                      className="text-center py-3 px-4 bg-red-50 rounded-lg border-2 border-red-200 cursor-pointer transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-red-600 mb-2">{formatPrice(dailyCost)} PLN</div>
                      <div className="text-red-800">dziennie</div>
                    </motion.div>
                    <motion.div 
                      variants={numberVariants}
                      whileHover={{ scale: 1.05 }}
                      key="monthly-cost"
                      className="text-center py-3 px-4 bg-red-100 rounded-lg border-2 border-red-300 cursor-pointer transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-red-700 mb-2">{formatPrice(monthlyCost)} PLN</div>
                      <div className="text-red-900">miesięcznie</div>
                    </motion.div>
                    <motion.div 
                      variants={numberVariants}
                      animate={{ 
                        scale: [1, 1.03, 1, 1.03, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      key="yearly-cost"
                      className="text-center py-3 px-4 bg-red-200 rounded-lg border-2 border-red-400"
                    >
                      <div className="text-4xl font-bold text-red-800 mb-2">{formatPrice(yearlyCost)} PLN</div>
                      <div className="text-red-900 font-semibold">rocznie</div>
                    </motion.div>

                    {/* Przycisk po prawej - widoczny tylko na desktop */}
                    <div className="hidden md:flex justify-center mt-8">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full bg-green-100 text-green-800 hover:bg-green-200 transition-all duration-300 px-6 py-3 rounded-lg font-semibold text-sm justify-center will-change-transform border-2 border-green-800"
                        data-tally-open="w8yEWk"
                        data-tally-layout="modal"
                        data-tally-width="900"
                        data-tally-emoji-text="👋"
                        data-tally-emoji-animation="wave"
                      >
                        <div className="text-center">
                          <div className="text-lg">Wyeliminuj te straty!</div>
                          <div>Umów się teraz na bezpłatną konsultację</div>
                        </div>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Na mobile - elementy jeden pod drugim */}
                <div className="md:hidden space-y-4 mt-12">
                  <p className="text-[#222222] text-sm text-center p-4 bg-[#f9f5ee] rounded-lg italic">
                    Pamiętaj, że nasz kalkulator nie uwzględnia utraconych możliwości, błędów, opóźnień i frustracji zespołu...
                  </p>
                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full bg-green-100 text-green-800 hover:bg-green-200 transition-all duration-300 px-6 py-3 rounded-lg font-semibold text-sm justify-center will-change-transform border-2 border-green-800"
                      data-tally-open="w8yEWk"
                      data-tally-layout="modal"
                      data-tally-width="900"
                      data-tally-emoji-text="👋"
                      data-tally-emoji-animation="wave"
                    >
                      <div className="text-center">
                        <div className="text-lg">Wyeliminuj te straty!</div>
                        <div>Umów się teraz na bezpłatną konsultację</div>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
