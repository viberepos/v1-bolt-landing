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

  const textVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const slideTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  }

  return (
    <section className="tech-background tech-spacing-lg">
      <div className="tech-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={textVariants} className="space-y-8">
              <motion.h2 
                variants={textVariants}
                className="tech-headline mb-8"
              >
                DOSTĘPNA NA KAŻDYM URZĄDZENIU
              </motion.h2>
              
              <motion.p 
                variants={textVariants}
                className="tech-body opacity-90"
              >
                Nasza aplikacja jest w pełni responsywna i dostosowuje się do wszystkich 
                urządzeń - od smartfonów po desktopy.
              </motion.p>

              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-3 gap-4 mt-8"
              >
                <motion.div 
                  variants={textVariants}
                  className="tech-card !p-4 text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <Smartphone className="h-8 w-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="tech-caption !text-xs">Mobile</div>
                </motion.div>
                <motion.div 
                  variants={textVariants}
                  className="tech-card !p-4 text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <Tablet className="h-8 w-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="tech-caption !text-xs">Tablet</div>
                </motion.div>
                <motion.div 
                  variants={textVariants}
                  className="tech-card !p-4 text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <Monitor className="h-8 w-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="tech-caption !text-xs">Desktop</div>
                </motion.div>
              </motion.div>

              <motion.div variants={textVariants} className="mt-8">
                <Button 
                  className="tech-button-outline text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
                  data-tally-open="mO9eXA"
                  data-tally-layout="modal"
                  data-tally-width="1000"
                  data-tally-overlay="1"
                  data-tally-emoji-text="👋"
                  data-tally-emoji-animation="wave"
                >
                  <Globe className="mr-2 h-5 w-5" />
                  Zobacz demo
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={imageVariants} className="relative">
              <div className="relative max-w-md mx-auto">
                <AnimatePresence initial={false} custom={phoneDirection}>
                  <motion.div
                    key={`phone-${phoneSlide}`}
                    custom={phoneDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                    className="w-full absolute top-0 left-0 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handlePhoneDrag}
                    dragElastic={0.1}
                  >
                    <Image
                      src={phoneMockups[phoneSlide]}
                      alt="Aplikacja VibeApps"
                      width={400}
                      height={600}
                      className="w-full h-auto transition-all duration-300 pointer-events-none rounded-lg shadow-2xl"
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