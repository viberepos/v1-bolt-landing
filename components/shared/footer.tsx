"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            © 2024-2025 VibeApps. Wszystkie prawa zastrzeżone.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Biały pasek z obrazkiem funduszy europejskich - ZAKOMENTOWANE */}
      {/* 
      <div className="w-full bg-white my-8 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-[100px]">
          <Image
            src="https://bec-group.pl/wp-content/uploads/2025/11/askabase-fundusze-europejskie-scaled.jpg"
            alt="Fundusze Europejskie"
            width={0}
            height={150}
            className="h-full w-auto object-contain"
            unoptimized
          />
        </div>
      </div>
      */}
    </footer>
  )
} 