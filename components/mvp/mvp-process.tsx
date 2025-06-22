"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function MVPProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    hidden: { opacity: 0, y: 30 },
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
    <section id="mvp-process-section" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <motion.h2 
              variants={headerVariants}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#222222]"
            >
              Od rozmowy do gotowej aplikacji
            </motion.h2>
            <motion.p 
              variants={headerVariants}
              className="max-w-[900px] text-[#222222]/70 md:text-xl"
            >
              Po zebraniu kluczowych danych tworzymy MVP, czyli aplikację w możliwie najprostszej wersji, z wszystkimi kluczowymi funkcjonalnościami, aby jak najszybciej zweryfikować Twój pomysł.
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col items-center p-6 bg-[#f9f5ee] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222222] text-[#f9f5ee] text-xl font-bold mb-4 group-hover:bg-[#f9f5ee] group-hover:text-[#222222] group-hover:shadow-lg transition-all duration-300">
              1
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#222222] group-hover:text-[#222222]/90 transition-colors duration-300">Discovery & Strategia</h3>
            <p className="text-center text-[#222222]/70 text-sm group-hover:text-[#222222]/80 transition-colors duration-300">
              Rozmawiamy o Twoim pomyśle, identyfikujemy kluczowe funkcje i definiujemy mierniki sukcesu
            </p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col items-center p-6 bg-[#f9f5ee] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222222] text-[#f9f5ee] text-xl font-bold mb-4 group-hover:bg-[#f9f5ee] group-hover:text-[#222222] group-hover:shadow-lg transition-all duration-300">
              2
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#222222] group-hover:text-[#222222]/90 transition-colors duration-300">Szybki Prototyp</h3>
            <p className="text-center text-[#222222]/70 text-sm group-hover:text-[#222222]/80 transition-colors duration-300">
              Tworzymy działającą wersję aplikacji z najważniejszymi funkcjami w ciągu 3-12 tygodni
            </p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col items-center p-6 bg-[#f9f5ee] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222222] text-[#f9f5ee] text-xl font-bold mb-4 group-hover:bg-[#f9f5ee] group-hover:text-[#222222] group-hover:shadow-lg transition-all duration-300">
              3
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#222222] group-hover:text-[#222222]/90 transition-colors duration-300">Testowanie z Użytkownikami</h3>
            <p className="text-center text-[#222222]/70 text-sm group-hover:text-[#222222]/80 transition-colors duration-300">
              Wspieramy w procesie walidacji poprzez kompletowanie danych i feedbacku od realnych użytkowników
            </p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col items-center p-6 bg-[#f9f5ee] rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222222] text-[#f9f5ee] text-xl font-bold mb-4 group-hover:bg-[#f9f5ee] group-hover:text-[#222222] group-hover:shadow-lg transition-all duration-300">
              4
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#222222] group-hover:text-[#222222]/90 transition-colors duration-300">Skalowanie lub Pivot</h3>
            <p className="text-center text-[#222222]/70 text-sm group-hover:text-[#222222]/80 transition-colors duration-300">
              Na podstawie zebranych danych decydujemy o zmianie kierunku lub dalszym rozwoju aplikacji
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 