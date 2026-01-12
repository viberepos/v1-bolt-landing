"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  }

  const linkVariants = {
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

  const bottomVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.5
      }
    }
  }

  return (
    <footer className="bg-[#f9f5ee] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div 
            variants={logoVariants}
            className="col-span-1 md:col-span-2"
          >
            <motion.div 
              className="mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src="/images/logo/2 Logo VibeApps poziom bez tła.png" 
                alt="VibeApps" 
                width={130} 
                height={35}
                className="h-8 w-auto"
              />
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-[#222222]/70 max-w-md"
            >
              Transformujemy pomysły w działające rozwiązania. Szybciej, taniej i lepiej niż tradycyjne firmy
              software'owe.
            </motion.p>
            <div className="space-y-3 mt-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#222222]" />
                <span className="text-[#222222]/70">biuro@vibeapps.pl</span>
              </div>
              <div className="flex items-center space-x-3 hidden">
                <Phone className="h-5 w-5 text-[#222222]" />
                <span className="text-[#222222]/70">+48 530 002 009</span>
              </div>
              <div className="flex items-center space-x-3 hidden">
                <Phone className="h-5 w-5 text-[#222222]" />
                <span className="text-[#222222]/70">+48 788 758 361</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#222222]" />
                <span className="text-[#222222]/70">Warszawa, Polska</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-start-4">
            <motion.h4 
              className="font-semibold text-[#222222] mb-4"
              whileHover={{ color: "#222222aa" }}
            >
              Nawigacja
            </motion.h4>
            <motion.ul 
              variants={containerVariants}
              className="space-y-2"
            >
              <motion.li variants={linkVariants}>
                <button 
                  onClick={() => scrollToSection('#mvp-comparison-section')}
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform bg-transparent border-none cursor-pointer text-left"
                >
                  Jak działamy
                </button>
              </motion.li>
              <motion.li variants={linkVariants}>
                <button 
                  onClick={() => scrollToSection('#mvp-process-section')}
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform bg-transparent border-none cursor-pointer text-left"
                >
                  Proces współpracy
                </button>
              </motion.li>
              <motion.li variants={linkVariants}>
                <button 
                  onClick={() => scrollToSection('#case-study-section')}
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform bg-transparent border-none cursor-pointer text-left"
                >
                  Przykład współpracy
                </button>
              </motion.li>
              <motion.li variants={linkVariants}>
                <button 
                  onClick={() => scrollToSection('#what-sets-us-apart-section')}
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform bg-transparent border-none cursor-pointer text-left"
                >
                  Co nas wyróżnia
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={bottomVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="border-t border-[#222222]/10 mt-12 pt-8 text-center"
        >
          <motion.p 
            className="text-[#222222]/70"
            whileHover={{ scale: 1.02 }}
          >
            © 2024-2026 VibeApps. Wszystkie prawa zastrzeżone.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Biały pasek z informacją o dofinansowaniu z funduszy europejskich */}
      <div className="w-full bg-white my-8 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <button
              type="button"
              onClick={() => setIsDialogOpen(true)}
              className="flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Informacje o dofinansowaniu z Unii Europejskiej"
            >
              <Image
                src="https://bec-group.pl/wp-content/uploads/2025/11/askabase-fundusze-europejskie-scaled.jpg"
                alt="Fundusze Europejskie"
                width={0}
                height={100}
                className="h-[100px] w-auto object-contain"
                unoptimized
              />
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Dofinansowanie projektu z Unii Europejskiej</DialogTitle>
            <DialogDescription>
              Informacje o projekcie realizowanym w ramach funduszy europejskich
            </DialogDescription>
          </DialogHeader>
          <div className="pt-0 pb-4">
            <div className="flex flex-col items-center gap-4 mb-3 -mt-2">
              <Image
                src="https://bec-group.pl/wp-content/uploads/2025/11/askabase-fundusze-europejskie-scaled.jpg"
                alt="Fundusze Europejskie"
                width={0}
                height={100}
                className="h-[100px] w-auto object-contain"
                unoptimized
              />
            </div>
            <div className="space-y-4 text-left">
              <h3 className="text-[#222222] text-lg font-semibold">
                Projekt „Askabase"
              </h3>
              <p className="text-[#222222] text-sm leading-relaxed">
                Projekt „Askabase" jest współfinansowany ze środków Unii Europejskiej w ramach programu Fundusze Europejskie dla Nowoczesnej Gospodarki (FENG), Priorytet II – Środowisko sprzyjające innowacjom (akcelerator Kozminski Impact Booster).
              </p>
              <p className="text-[#222222] text-sm leading-relaxed">
                Celem projektu jest stworzenie innowacyjnego, inteligentnego asystenta dla biur rachunkowych, opartego na zaawansowanych rozwiązaniach programistycznych. System ma na celu rewolucję w codziennej pracy z danymi, umożliwiając skrócenie czasu wyszukiwania informacji o kontrahentach, analizy dokumentacji oraz przygotowywania podsumowań z godzin do zaledwie kilku sekund. Rozwiązanie dedykowane jest właścicielom, managerom oraz pracownikom biur rachunkowych, realnie wpływając na oszczędność czasu i wyższą efektywność pracy.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#222222]/10">
                <p className="text-[#222222] text-sm">
                  <span className="font-semibold">Wartość projektu:</span> 350 000,00 zł
                </p>
                <p className="text-[#222222] text-sm">
                  <span className="font-semibold">Wysokość wkładu Funduszy Europejskich:</span> 350 000,00 zł
                </p>
              </div>
              <div className="pt-2 border-t border-[#222222]/10">
                <p className="text-[#222222] text-xs text-[#222222]/70">
                  #FunduszeEuropejskie #FunduszeEU #KozminskiImpactBooster #Askabase #AI #NowoczesnaKsięgowość #FENG
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  )
} 