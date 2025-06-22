"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function MVPComparison() {
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

  const tableVariants = {
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
    <section id="mvp-comparison-section" className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f5ee]">
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
              Nie musisz wydawać fortuny, <br/>żeby sprawdzić czy Twój pomysł ma sens.
            </motion.h2>
          </div>
        </motion.div>
        <motion.div 
          variants={tableVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 overflow-x-auto"
        >
          <table className="w-full border-separate rounded-lg border-2 border-[#222222]/15" style={{ borderSpacing: 0 }}>
            <thead>
              <tr className="bg-white">
                <th className="border p-4 text-left text-[#222222] font-bold rounded-tl-lg">Aspekty</th>
                <th className="border p-4 text-center text-[#222222]">Tradycyjne podejście</th>
                <th className="border p-4 text-center text-[#222222] rounded-tr-lg">Szybkie MVP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4 font-bold text-[#222222]">Czas do pierwszych testów</td>
                <td className="border p-4 text-center text-[#222222]/60">6-12 miesięcy</td>
                <td className="border p-4 text-center text-green-600">2-4 tygodnie</td>
              </tr>
              <tr>
                <td className="border p-4 font-bold text-[#222222]">Koszt pierwszej wersji</td>
                <td className="border p-4 text-center text-[#222222]/60">50-150k PLN</td>
                <td className="border p-4 text-center text-green-600">8-35k PLN</td>
              </tr>
              <tr>
                <td className="border p-4 font-bold text-[#222222]">Ryzyko niepowodzenia</td>
                <td className="border p-4 text-center text-[#222222]/60">Wysokie (70%+ projektów)</td>
                <td className="border p-4 text-center text-green-600">Niskie (szybka walidacja)</td>
              </tr>
              <tr>
                <td className="border p-4 font-bold text-[#222222]">Wiedza o użytkownikach</td>
                <td className="border p-4 text-center text-[#222222]/60">Domysły i badania</td>
                <td className="border p-4 text-center text-green-600">Prawdziwe użycie</td>
              </tr>
              <tr>
                <td className="border p-4 font-bold text-[#222222]">Elastyczność zmian</td>
                <td className="border p-4 text-center text-[#222222]/60">Kosztowna i czasochłonna</td>
                <td className="border p-4 text-center text-green-600">Szybka i tania</td>
              </tr>
              <tr>
                <td className="border p-4 font-bold text-[#222222] rounded-bl-lg">Czas do pierwszego przychodu</td>
                <td className="border p-4 text-center text-[#222222]/60">6-18 miesięcy</td>
                <td className="border p-4 text-center text-green-600 rounded-br-lg">3-12 tygodni</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-xl font-bold text-green-600">80% taniej</p>
            <p className="text-center text-[#222222]/70">Budujemy to, co kluczowe do weryfikacji pomysłu, bez zbędnych funkcji</p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-xl font-bold text-green-600">8x szybciej</p>
            <p className="text-center text-[#222222]/70">Gotowa do testów aplikacja w tygodnie, nie miesiące...</p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-xl font-bold text-green-600">100% walidacji</p>
            <p className="text-center text-[#222222]/70">Szybsze wyjście na rynek i testy na realnych użytkownikach</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 