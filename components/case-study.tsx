"use client"

import { TrendingUp, Clock, Users, Target, PhoneCall } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function CaseStudy() {
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
    hidden: { y: 30, opacity: 0 },
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  }

  const metricVariants = {
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

  const problemVariants = {
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

  const results = [
    {
      icon: Clock,
      metric: "40%",
      description: "redukcji czasu obsługi klienta",
    },
    {
      icon: Users,
      metric: "3x",
      description: "więcej obsłużonych ofert",
    },
    {
      icon: PhoneCall,
      metric: "90%",
      description: "mniej zapytań o status realizacji",
    },
    {
      icon: TrendingUp,
      metric: "35%",
      description: "wzrost skuteczności dopasowania",
    },
  ]

  return (
    <section id="case-study-section" className="py-20 bg-[#f9f5ee]">
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
            Realne rezultaty, nie puste obietnice
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-[#222222]/70 max-w-3xl mx-auto"
          >
            Case Study: Aplikacja dla pośrednika finansowego zwiększyła efektywność o 300%
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={cardVariants}>
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-[#222222]">Wyzwanie klienta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div 
                  variants={containerVariants}
                  className="space-y-4"
                >
                  <motion.div 
                    variants={problemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 group cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 group-hover:bg-red-600 transition-colors"></div>
                    <p className="text-[#222222]/70 group-hover:text-[#222222] transition-colors">40% czasu zespołu poświęcane na szukanie informacji</p>
                  </motion.div>
                  <motion.div 
                    variants={problemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 group cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 group-hover:bg-red-600 transition-colors"></div>
                    <p className="text-[#222222]/70 group-hover:text-[#222222] transition-colors">Utrata potencjalnych klientów przez opóźnienia w odpowiedziach</p>
                  </motion.div>
                  <motion.div 
                    variants={problemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 group cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 group-hover:bg-red-600 transition-colors"></div>
                    <p className="text-[#222222]/70 group-hover:text-[#222222] transition-colors">Brak spójnego widoku procesów biznesowych</p>
                  </motion.div>
                  <motion.div 
                    variants={problemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 group cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 group-hover:bg-red-600 transition-colors"></div>
                    <p className="text-[#222222]/70 group-hover:text-[#222222] transition-colors">Dziesiątki telefonów dziennie z pytaniami o status realizacji zlecenia</p>
                  </motion.div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="border-t pt-6"
                >
                  <h4 className="font-semibold text-[#222222] mb-3">Nasze rozwiązanie:</h4>
                  <p className="text-[#222222]/70">
                    Dedykowany system do zarządzania relacjami zintegrował wszystkie procesy w jednym miejscu,
                    umożliwiając natychmiastowy dostęp do potrzebnych informacji.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-[#222222] mb-8 text-center"
            >
              Rezultaty po 4 tygodniach:
            </motion.h3>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  variants={metricVariants}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="cursor-pointer"
                >
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <result.icon className="h-8 w-8 text-[#222222] mx-auto mb-4" />
                      </motion.div>
                      <motion.div 
                        className="text-3xl font-bold text-[#222222] mb-2"
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 15,
                          delay: index * 0.1 + 0.5
                        }}
                      >
                        {result.metric}
                      </motion.div>
                      <p className="text-sm text-[#222222]/70">{result.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
