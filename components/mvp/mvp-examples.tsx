"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function MVPExamples() {
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
    <section id="przyklady" className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f5ee]">
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
              Przykłady MVP, które stworzyliśmy
            </motion.h2>
            <motion.p 
              variants={headerVariants}
              className="max-w-[900px] text-[#222222]/70 md:text-xl"
            >
              Każde z tych MVP było gotowe w 2-4 tygodnie i przyniosło konkretne wnioski biznesowe
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-video rounded-lg mb-4 overflow-hidden">
              <img 
                src="/images/case-study/1 VibeApps Aplikacja dla branży finansowej.png" 
                alt="MVP - Aplikacja dla restauracji" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#222222]">Aplikacja dla restauracji</h3>
            <p className="text-[#222222]/70 mb-4">
              System rezerwacji stolików z automatyczną konfirmacją SMS. MVP zwalidowało, że restauratorzy potrzebują
              prostszego systemu niż istniejące rozwiązania.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Czas realizacji:</span>
                <span className="font-medium text-[#222222]">3 tygodnie</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Koszt MVP:</span>
                <span className="font-medium text-[#222222]">8,000 PLN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Testy użytkowników:</span>
                <span className="font-medium text-[#222222]">15 restauracji</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Wynik:</span>
                <span className="font-medium text-green-600">Pivot do prostszej wersji</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-video rounded-lg mb-4 overflow-hidden">
              <img 
                src="/images/case-study/3 VibeApps Aplikacja dla branży finansowej.png" 
                alt="MVP - Platforma edukacyjna" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#222222]">Platforma edukacyjna</h3>
            <p className="text-[#222222]/70 mb-4">
              Aplikacja do nauki języków przez krótkie sesje video. MVP pokazało, że użytkownicy wolą interaktywne
              ćwiczenia od biernego oglądania.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Czas realizacji:</span>
                <span className="font-medium text-[#222222]">4 tygodnie</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Koszt MVP:</span>
                <span className="font-medium text-[#222222]">12,000 PLN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Testy użytkowników:</span>
                <span className="font-medium text-[#222222]">200 osób</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Wynik:</span>
                <span className="font-medium text-green-600">Skalowanie do pełnej wersji</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-video rounded-lg mb-4 overflow-hidden">
              <img 
                src="/images/case-study/5 VibeApps Aplikacja dla branży finansowej.png" 
                alt="MVP - E-commerce B2B" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#222222]">E-commerce B2B</h3>
            <p className="text-[#222222]/70 mb-4">
              Marketplace dla hurtowników z automatyczną wyceną. MVP zweryfikowało założenia cenowe i model
              prowizyjny.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Czas realizacji:</span>
                <span className="font-medium text-[#222222]">2 tygodnie</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Koszt MVP:</span>
                <span className="font-medium text-[#222222]">5,000 PLN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Testy użytkowników:</span>
                <span className="font-medium text-[#222222]">50 firm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#222222]/70">Wynik:</span>
                <span className="font-medium text-green-600">Pierwsze przychody w miesiąc</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 