"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Footer() {
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
            <motion.h3 
              className="text-2xl font-bold text-[#222222] mb-4"
              whileHover={{ scale: 1.05 }}
            >
              VibeApps
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-[#222222]/70 max-w-md"
            >
              Transformujemy pomysły w działające rozwiązania. Szybciej, taniej i skalowalnie niż tradycyjne firmy
              software'owe.
            </motion.p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#222222]" />
                <span className="text-[#222222]/70">kontakt@vibeapps.pl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#222222]" />
                <span className="text-[#222222]/70">+48 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#222222]" />
                <span className="text-[#222222]/70">Warszawa, Polska</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-semibold text-[#222222] mb-4"
              whileHover={{ color: "#222222aa" }}
            >
              Usługi
            </motion.h4>
            <motion.ul 
              variants={containerVariants}
              className="space-y-2"
            >
              <motion.li variants={linkVariants}>
                <Link 
                  href="#" 
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  MVP Check
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link 
                  href="#" 
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  Evolve
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link 
                  href="#" 
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  Advanced
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link 
                  href="#" 
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  Ultimate
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-semibold text-[#222222] mb-4"
              whileHover={{ color: "#222222aa" }}
            >
              Firma
            </motion.h4>
            <motion.ul 
              variants={containerVariants}
              className="space-y-2"
            >
              <motion.li variants={linkVariants}>
                <Link 
                  href="#" 
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  O nas
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link 
                  href="#" 
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  Case Studies
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link 
                  href="#" 
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  Blog
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link 
                  href="#" 
                  className="text-[#222222]/70 hover:text-[#222222] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  Kontakt
                </Link>
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
            © 2024 VibeApps. Wszystkie prawa zastrzeżone.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
