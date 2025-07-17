"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function CTA() {
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

  const statsVariants = {
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

  return (
    <section className="tech-background tech-spacing-lg">
      <div className="tech-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 
            variants={textVariants}
            className="tech-headline mb-8"
          >
            CONTACT US
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="tech-subheadline max-w-4xl mx-auto mb-12 opacity-90"
          >
            Gotowy na transformację swojego biznesu? Skontaktuj się z nami już dziś.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div variants={buttonVariants}>
              <Button 
                size="lg" 
                className="tech-button text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
                data-tally-open="wMqZ70"
                data-tally-layout="modal"
                data-tally-width="1000"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Umów bezpłatną konsultację
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                variant="outline"
                size="lg"
                className="tech-button-outline text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
                data-tally-open="mO9eXA"
                data-tally-layout="modal"
                data-tally-width="1000"
                data-tally-overlay="1"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                Demo aplikacji finansowej
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div 
              variants={statsVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cursor-pointer group"
            >
              <div className="tech-hero-title !text-4xl mb-4 group-hover:text-white/90 transition-colors duration-300">
                30 min
              </div>
              <div className="tech-body opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                Bezpłatna konsultacja kwalifikacyjna
              </div>
            </motion.div>
            <motion.div 
              variants={statsVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cursor-pointer group"
            >
              <div className="tech-hero-title !text-4xl mb-4 group-hover:text-white/90 transition-colors duration-300">
                3-8
              </div>
              <div className="tech-body opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                Tygodni do gotowego rozwiązania
              </div>
            </motion.div>
            <motion.div 
              variants={statsVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cursor-pointer group"
            >
              <div className="tech-hero-title !text-4xl mb-4 group-hover:text-white/90 transition-colors duration-300">
                300%
              </div>
              <div className="tech-body opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                Średni wzrost wydajności
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
