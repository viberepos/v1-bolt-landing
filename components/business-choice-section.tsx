"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Lightbulb, Cog } from "lucide-react"

export function BusinessChoiceSection() {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section className="py-20 bg-[#f9f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Lewy kafelek - Testowanie pomysłu */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#f9f5ee] border-2 border-[#222222]/10 rounded-2xl p-12 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-[#222222]/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#222222]/10 transition-colors">
                <Lightbulb className="w-10 h-10 text-[#222222]" />
              </div>
              <h3 className="text-3xl font-bold text-[#222222] mb-4 leading-tight">
                Chcę przetestować swój pomysł na biznes
              </h3>
              <p className="text-lg text-[#222222]/70 mb-8">
                Stwórz aplikację
              </p>
            </div>
            
            <button className="bg-[#222222] text-[#f9f5ee] px-8 py-4 rounded-lg font-semibold hover:bg-[#333333] transition-colors duration-200 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Dowiedz się więcej
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Prawy kafelek - Usprawnianie pracy */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#222222] rounded-2xl p-12 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-[#f9f5ee]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#f9f5ee]/20 transition-colors">
                <Cog className="w-10 h-10 text-[#f9f5ee]" />
              </div>
              <h3 className="text-3xl font-bold text-[#f9f5ee] mb-4 leading-tight">
                Chcę usprawnić codzienną pracę w firmie
              </h3>
              <p className="text-lg text-[#f9f5ee]/70 mb-8">
                Zoptymalizuj procesy
              </p>
            </div>
            
            <button className="bg-[#f9f5ee] text-[#222222] px-8 py-4 rounded-lg font-semibold hover:bg-[#f9f5ee]/90 transition-colors duration-200 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Dowiedz się więcej
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
        
        {/* Logo pod kafelkami */}
        <motion.div
          variants={cardVariants}
          className="flex justify-center mt-16"
        >
          <div className="w-64 h-auto">
            <img 
              src="/images/logo/2 Logo VibeApps poziom bez tła.png" 
              alt="VibeApps Logo" 
              className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 