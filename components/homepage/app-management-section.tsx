"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Users, TrendingUp, Building2 } from "lucide-react"

export function AppManagementSection() {
  const [computerSlide, setComputerSlide] = useState(0)
  const [computerDirection, setComputerDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  
  // Mockupy komputerów i telefonów
  const computerMockups = [
    "/images/case-study/1 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/2 VibeApps Aplikacja dla branży finansowej.png", 
    "/images/case-study/3 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/4 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/5 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/6 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/7 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/8 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/9 VibeApps Aplikacja dla branży finansowej.png"
  ]

  // Funkcje obsługi przeciągania
  const handleComputerDrag = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 50) { // minimalne przeciągnięcie 50px
      if (info.offset.x > 0) {
        // Przeciągnięcie w prawo = poprzedni slajd
        setComputerDirection(-1)
        setComputerSlide((prev) => (prev - 1 + computerMockups.length) % computerMockups.length)
      } else {
        // Przeciągnięcie w lewo = następny slajd
        setComputerDirection(1)
        setComputerSlide((prev) => (prev + 1) % computerMockups.length)
      }
      setIsPaused(true)
      setTimeout(() => setIsPaused(false), 2000) // pauza na 2 sekundy
    }
  }

  // Automatyczne przełączanie co 5 sekund (tylko gdy nie jest pauzowane)
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setComputerDirection(1)
      setComputerSlide((prev) => (prev + 1) % computerMockups.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [computerMockups.length, isPaused])

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

  const imageVariants = {
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

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    }
  }

  // Warianty animacji slide
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%'
    }),
    center: {
      x: 0
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%'
    })
  }

  const slideTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.4
  }

  return (
    <section className="py-20 bg-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-[#f9f5ee] sm:text-4xl lg:text-5xl mb-6 text-center max-w-4xl mx-auto"
          >
            Aplikacja dla branży finansowej
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto mb-1 text-center"
          >
            <p className="text-xl text-[#f9f5ee]/80 mb-6">
              Zarządzaj w jednym systemie, z dowolnego urządzenia, relacjami z:
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-[#f9f5ee]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#f9f5ee]" />
                </div>
                <span className="text-lg font-semibold text-[#f9f5ee]">klientami</span>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-[#f9f5ee]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#f9f5ee]" />
                </div>
                <span className="text-lg font-semibold text-[#f9f5ee]">inwestorami</span>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-[#f9f5ee]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-[#f9f5ee]" />
                </div>
                <span className="text-lg font-semibold text-[#f9f5ee]">podmiotami finansującymi</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="relative space-y-12"
          >
            {/* Sekcja komputera */}
            <div className="relative">
              {/* Komputer */}
              <motion.div variants={imageVariants} className="flex justify-center overflow-hidden px-6">
                <div className="w-full max-w-4xl relative" style={{ minHeight: '700px' }}>
                  <AnimatePresence initial={false} custom={computerDirection}>
                    <motion.div
                      key={`computer-${computerSlide}`}
                      custom={computerDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={slideTransition}
                      className="w-full absolute top-0 left-0 cursor-grab active:cursor-grabbing"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={handleComputerDrag}
                      dragElastic={0.1}
                    >
                      <Image
                        src={computerMockups[computerSlide]}
                        alt="Aplikacja VibeApps dla branży finansowej"
                        width={800}
                        height={1200}
                        className="w-full h-auto transition-all duration-300 pointer-events-none"
                        style={{
                          filter: 'drop-shadow(0 8px 15px rgba(0, 0, 0, 0.25))'
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 