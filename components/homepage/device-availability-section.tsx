"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Globe, Monitor, Tablet, Smartphone } from "lucide-react"

export function DeviceAvailabilitySection() {
  const [phoneSlide, setPhoneSlide] = useState(0)
  const [phoneDirection, setPhoneDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  
  const phoneMockups = [
    "/images/case-study/1.png",
    "/images/case-study/2.png",
    "/images/case-study/3.png",
    "/images/case-study/4.png",
    "/images/case-study/5.png",
    "/images/case-study/6.png",
    "/images/case-study/7.png",
    "/images/case-study/8.png",
    "/images/case-study/9.png",
    "/images/case-study/10.png",
    "/images/case-study/11.png"
  ]

  // Funkcje obsługi przeciągania
  const handlePhoneDrag = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 50) {
      if (info.offset.x > 0) {
        setPhoneDirection(-1)
        setPhoneSlide((prev) => (prev - 1 + phoneMockups.length) % phoneMockups.length)
      } else {
        setPhoneDirection(1)
        setPhoneSlide((prev) => (prev + 1) % phoneMockups.length)
      }
      setIsPaused(true)
      setTimeout(() => setIsPaused(false), 2000)
    }
  }

  // Automatyczne przełączanie co 5 sekund
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setPhoneDirection(1)
      setPhoneSlide((prev) => (prev + 1) % phoneMockups.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [phoneMockups.length, isPaused])

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

  // Warianty animacji kołowej dla telefonu
  const phoneSlideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      y: '100%',
      rotate: direction > 0 ? 45 : -45,
      scale: 0.8
    }),
    center: {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      y: '100%',
      rotate: direction > 0 ? -45 : 45,
      scale: 0.8
    })
  }

  const phoneSlideTransition = {
    type: "tween",
    ease: "easeOut", 
    duration: 0.5
  }

  return (
    <section className="pt-20 pb-12 bg-[#f9f5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-start">
            {/* Lewa strona - treść */}
            <motion.div variants={itemVariants} className="space-y-7">
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-7"
              >
                Dostępna na każdym urządzeniu
              </motion.h2>
              
              <motion.div variants={itemVariants} className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#222222]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-5 h-5 text-[#222222]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#222222] mb-1">Webowa</h4>
                    <p className="text-[#222222]/70">Przeglądarkowa z linku</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#222222]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Monitor className="w-5 h-5 text-[#222222]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#222222] mb-1">Desktopowa</h4>
                    <p className="text-[#222222]/70">Do pobrania na komputer</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#222222]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Tablet className="w-5 h-5 text-[#222222]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#222222] mb-1">Mobilna przeglądarkowa</h4>
                    <p className="text-[#222222]/70">Dostęp z linku</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#222222]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="w-5 h-5 text-[#222222]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#222222] mb-1">Mobilna</h4>
                    <p className="text-[#222222]/70">Do pobrania na telefon</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.p 
                variants={itemVariants}
                className="text-[#222222]/60 italic mt-9 text-sm"
              >
                Dostosowana do pracy na każdym urządzeniu, zarówno Windows, MacOS, Android oraz iOS (iPhone).
              </motion.p>
              
              <motion.div 
                variants={buttonVariants}
                className="mt-9"
              >
                <Button 
                  size="lg" 
                  className="bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90 text-lg px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  data-tally-open="mO9eXA"
                  data-tally-layout="modal"
                  data-tally-width="1000"
                  data-tally-overlay="1"
                  data-tally-emoji-text="👋"
                  data-tally-emoji-animation="wave"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Umów się na demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Prawa strona - telefon */}
            <motion.div variants={imageVariants} className="flex justify-center overflow-hidden -mt-8">
              <div className="w-full max-w-md relative" style={{ minHeight: '700px' }}>
                <AnimatePresence initial={false} custom={phoneDirection}>
                  <motion.div
                    key={`phone-${phoneSlide}`}
                    custom={phoneDirection}
                    variants={phoneSlideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={phoneSlideTransition}
                    className="w-full absolute top-0 left-0 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handlePhoneDrag}
                    dragElastic={0.1}
                  >
                    <Image
                      src={phoneMockups[phoneSlide]}
                      alt="Panel aplikacji finansowej"
                      width={500}
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
      </div>
    </section>
  )
} 