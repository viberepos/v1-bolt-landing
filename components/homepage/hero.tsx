"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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

  const buttonVariants = {
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

  return (
    <section className="tech-background relative overflow-hidden">
      {/* Tech Company Brand Mark */}
      <div className="tech-brand-mark">
        VIBEAPPS
      </div>

      <div className="tech-container flex items-center justify-center min-h-screen">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1 
            variants={textVariants}
            className="tech-hero-title mb-8"
          >
            TRANSFORMACJA
            <br />
            PROCESÓW
            <br />
            BIZNESOWYCH
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={textVariants}
            className="tech-subheadline max-w-4xl mx-auto mb-12 opacity-90"
          >
            Zwiększ wydajność firmy o 300%. Dedykowane systemy, 
            oszczędność czasu i pieniędzy. Gotowe rozwiązanie w 3-8 tygodni.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          >
            <motion.div 
              variants={textVariants}
              className="text-center"
            >
              <div className="tech-hero-title mb-4">300%</div>
              <div className="tech-caption">Wzrost wydajności</div>
            </motion.div>
            <motion.div 
              variants={textVariants}
              className="text-center"
            >
              <div className="tech-hero-title mb-4">3-8</div>
              <div className="tech-caption">Tygodni do wdrożenia</div>
            </motion.div>
            <motion.div 
              variants={textVariants}
              className="text-center"
            >
              <div className="tech-hero-title mb-4">2-3h</div>
              <div className="tech-caption">Oszczędności dziennie</div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div variants={buttonVariants}>
              <Button 
                size="lg" 
                className="tech-button text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
                data-tally-open="wMqZ70"
                data-tally-layout="modal"
                data-tally-width="1000"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Bezpłatna konsultacja
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                variant="outline"
                size="lg"
                className="tech-button-outline text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
                data-tally-open="mO9eXA"
                data-tally-layout="modal"
                data-tally-width="1000"
                data-tally-overlay="1"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                Demo aplikacji
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}