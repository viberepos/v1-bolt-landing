"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Monitor, Smartphone, Tablet } from "lucide-react"

export function AppManagementSection() {
  const [computerSlide, setComputerSlide] = useState(0)
  const [computerDirection, setComputerDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  
  const computerMockups = [
    "/images/case-study/1 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/2 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/3 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/4 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/5 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/6 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/7 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/8 VibeApps Aplikacja dla branży finansowej.png",
    "/images/case-study/9 VibeApps Aplikacja dla branży finansowej.png",
  ]

  const handleComputerDrag = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 50) {
      if (info.offset.x > 0) {
        setComputerDirection(-1)
        setComputerSlide((prev) => (prev - 1 + computerMockups.length) % computerMockups.length)
      } else {
        setComputerDirection(1)
        setComputerSlide((prev) => (prev + 1) % computerMockups.length)
      }
      setIsPaused(true)
      setTimeout(() => setIsPaused(false), 2000)
    }
  }

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
          <div className="text-center mb-16">
            <motion.h2 
              variants={textVariants}
              className="tech-headline mb-8"
            >
              APLIKACJA FINANSOWA
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="tech-subheadline max-w-3xl mx-auto opacity-90"
            >
              Kompleksowe rozwiązanie dla branży finansowej zwiększające wydajność o 300%
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="relative"
          >
            <div className="relative max-w-5xl mx-auto">
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
                    width={1000}
                    height={600}
                    className="w-full h-auto transition-all duration-300 pointer-events-none rounded-lg shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="text-center mt-16"
          >
            <motion.div variants={textVariants}>
              <Button 
                className="tech-button-outline text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
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
        </motion.div>
      </div>
    </section>
  )
} 