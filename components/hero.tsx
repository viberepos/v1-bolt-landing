"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f9f5ee] to-[#f9f5ee]/80 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-[#222222] sm:text-5xl lg:text-6xl"
            >
              Czy Twoja firma traci czas i pieniądze na{" "}
              <span className="text-[#222222] underline decoration-4 decoration-[#222222]/30">
                przestarzałych procesach
              </span>{" "}
              biznesowych?
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-xl text-[#222222]/70 max-w-3xl"
            >
              Wyobraź sobie, że Twój zespół przestaje narzekać na powtarzalną pracę, kończą się dziesiątki telefonów
              dziennie z pytaniami o etap prac, a Twoje oferty powstają w 15 minut zamiast 3 dni.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              className="mt-8 space-y-4"
            >
              {[
                "35% wzrost skuteczności ofert",
                "2-3 godziny dziennie oszczędności",
                "Gotowe rozwiązanie w 3-8 tygodni"
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-[#222222]">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90 text-lg px-8 py-4 transform transition-transform hover:scale-105"
              >
                Bezpłatna konsultacja kwalifikacyjna
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-[#f9f5ee] text-lg px-8 py-4 transform transition-transform hover:scale-105"
              >
                Zobacz case study
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={statsVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-12 lg:mt-0 lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#222222]/20 to-transparent rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Przed VibeApps</div>
                    <div className="text-sm text-gray-500">Po VibeApps</div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Czas tworzenia oferty", before: "3 dni", after: "15 min" },
                      { label: "Telefony dziennie", before: "20+", after: "2-3" },
                      { label: "Skuteczność ofert", before: "15%", after: "50%" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm">{stat.label}</span>
                        <div className="flex space-x-2">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">{stat.before}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{stat.after}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}