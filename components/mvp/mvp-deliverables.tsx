"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function MVPDeliverables() {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
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
              Postaw na niestandardowe rozwiązania
            </motion.h2>
          </div>
        </motion.div>
        
        <motion.div 
          variants={tableVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 overflow-hidden"
        >
          <div className="border-2 border-[#222222]/15 rounded-lg border-separate">
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="bg-[#f9f5ee] p-6 text-center font-bold text-xl text-[#222222] border-b border-[#222222]/15 rounded-tl-lg w-1/2">
                    Co otrzymujesz wspólpracując z VibeApps:
                  </th>
                  <th className="bg-[#f9f5ee] p-6 text-center font-bold text-xl text-[#222222] border-b border-[#222222]/15 rounded-tr-lg w-1/2">
                    Możliwe dodatkowe wsparcie biznesowe:
                  </th>
                </tr>
              </thead>
              <tbody>
                <motion.tr variants={rowVariants}>
                  <td className="p-2 text-center border-b border-[#222222]/15 border-r border-[#222222]/15">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-[#222222]">Działająca aplikacja web/mobile</p>
                        <p className="text-sm text-[#222222]/70">Hostowana w chmurze, dostępna 24/7</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-[#222222]/15">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-[#222222]">Strategia testowania</p>
                        <p className="text-sm text-[#222222]/70">Plan walidacji hipotez biznesowych</p>
                      </div>
                    </div>
                  </td>
                </motion.tr>
                
                <motion.tr variants={rowVariants}>
                  <td className="p-4 text-center border-b border-[#222222]/15 border-r border-[#222222]/15">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-[#222222]">Panel administracyjny</p>
                        <p className="text-sm text-[#222222]/70">Do zarządzania użytkownikami</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-[#222222]/15">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-[#222222]">Setup analityki</p>
                        <p className="text-sm text-[#222222]/70">Google Analytics, heatmapy, A/B testy</p>
                      </div>
                    </div>
                  </td>
                </motion.tr>
                
                <motion.tr variants={rowVariants}>
                  <td className="p-4 text-center border-b border-[#222222]/15 border-r border-[#222222]/15">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-[#222222]">Podstawowa analityka</p>
                        <p className="text-sm text-[#222222]/70">Metryki użytkowania i konwersji</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-[#222222]/15">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-[#222222]">Dokumentacja techniczna</p>
                        <p className="text-sm text-[#222222]/70">Jak dalej rozwijać produkt</p>
                      </div>
                    </div>
                  </td>
                </motion.tr>
                
                <motion.tr variants={rowVariants}>
                  <td className="p-4 text-center border-b border-[#222222]/15 border-r border-[#222222]/15">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-[#222222]">Responsywny design</p>
                        <p className="text-sm text-[#222222]/70">Działa na wszystkich urządzeniach</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-[#222222]/15">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-[#222222]">Sesje konsultacyjne</p>
                        <p className="text-sm text-[#222222]/70">Analiza wyników i plany dalszego rozwoju</p>
                      </div>
                    </div>
                  </td>
                </motion.tr>
                
                <motion.tr variants={rowVariants}>
                  <td className="p-4 text-center border-r border-[#222222]/15 rounded-bl-lg">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-[#222222]">Podstawowa baza danych</p>
                        <p className="text-sm text-[#222222]/70">Przechowywanie danych użytkowników</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center rounded-br-lg">
                    <div className="flex flex-col items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-[#222222]">30 dni wsparcia technicznego</p>
                        <p className="text-sm text-[#222222]/70">Bugfixy i drobne modyfikacje</p>
                      </div>
                    </div>
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 