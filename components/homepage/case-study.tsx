"use client"

import { TrendingUp, Clock, Users, Target, PhoneCall } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function CaseStudy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const results = [
    {
      icon: Clock,
      metric: "40%",
      description: "Redukcja czasu obsługi klienta",
    },
    {
      icon: Users,
      metric: "3x",
      description: "Więcej obsłużonych ofert",
    },
    {
      icon: PhoneCall,
      metric: "90%",
      description: "Mniej zapytań o status realizacji",
    },
    {
      icon: TrendingUp,
      metric: "35%",
      description: "Wzrost skuteczności dopasowania",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
    <section className="tech-background tech-spacing-lg">
      <div className="tech-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={textVariants}
            className="tech-headline mb-8"
          >
            PROJECT 1
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="tech-subheadline max-w-4xl mx-auto opacity-90"
          >
            Aplikacja dla branży finansowej zwiększyła wydajność o 300%
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {results.map((result, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group cursor-pointer"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <result.icon className="h-8 w-8 text-white" />
              </div>
              <div className="tech-hero-title !text-4xl mb-4 group-hover:text-white/90 transition-colors duration-300">
                {result.metric}
              </div>
              <p className="tech-body opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                {result.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="tech-button-outline text-lg px-8 py-4 transition-transform duration-300"
            data-tally-open="mO9eXA"
            data-tally-layout="modal"
            data-tally-width="1000"
            data-tally-overlay="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Zobacz pełne case study
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
