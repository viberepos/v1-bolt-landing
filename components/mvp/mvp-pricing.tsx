"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function MVPPricing() {
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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f5ee]">
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
              Inwestycja w sprawdzenie Twojego pomysłu
            </motion.h2>
            <motion.p 
              variants={headerVariants}
              className="max-w-[900px] text-[#222222]/70 md:text-xl"
            >
              Trzy pakiety dostosowane do różnych potrzeb i budżetów
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 text-[#222222]">Starter MVP</h3>
            <p className="text-4xl font-bold mb-4 text-[#222222]">5,000 PLN</p>
            <p className="text-[#222222]/70 mb-6">Idealny dla prostych aplikacji webowych</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">Do 3 głównych funkcji</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">Aplikacja webowa</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">Podstawowa analityka</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">2 tygodnie realizacji</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">14 dni wsparcia</span>
              </li>
            </ul>
            <Link
              href="/kontakt?package=starter"
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#222222] bg-white px-8 py-2 text-sm font-medium text-[#222222] hover:bg-[#222222] hover:text-[#f9f5ee] transition-colors duration-300"
            >
              Wybierz Starter
            </Link>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col p-6 bg-[#222222] text-[#f9f5ee] rounded-lg relative shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-[#222222] px-4 py-1 rounded-full text-sm font-medium">
              Najpopularniejszy
            </div>
            <h3 className="text-2xl font-bold mb-2">Professional MVP</h3>
            <p className="text-4xl font-bold mb-4">12,000 PLN</p>
            <p className="text-[#f9f5ee]/70 mb-6">Kompleksowe MVP z integracjami</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#f9f5ee]">Do 7 głównych funkcji</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#f9f5ee]">Web + mobile app</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#f9f5ee]">Panel administracyjny</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#f9f5ee]">Zaawansowana analityka</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#f9f5ee]">3-4 tygodnie realizacji</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#f9f5ee]">30 dni wsparcia</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#f9f5ee]">2 sesje konsultacyjne</span>
              </li>
            </ul>
            <Link
              href="/kontakt?package=professional"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#f9f5ee] px-8 py-2 text-sm font-medium text-[#222222] hover:bg-[#f9f5ee]/90 transition-colors duration-300"
            >
              Wybierz Professional
            </Link>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 text-[#222222]">Enterprise MVP</h3>
            <p className="text-4xl font-bold mb-4 text-[#222222]">25,000 PLN</p>
            <p className="text-[#222222]/70 mb-6">Dla złożonych systemów biznesowych</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">Nieograniczona funkcjonalność</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">Pełna platforma</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">Integracje z zewnętrznymi API</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">Zaawansowane bezpieczeństwo</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">4-6 tygodni realizacji</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">60 dni wsparcia</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-[#222222]">4 sesje konsultacyjne</span>
              </li>
            </ul>
            <Link
              href="/kontakt?package=enterprise"
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#222222] bg-white px-8 py-2 text-sm font-medium text-[#222222] hover:bg-[#222222] hover:text-[#f9f5ee] transition-colors duration-300"
            >
              Wybierz Enterprise
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 