"use client"

import { Zap, DollarSign, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: TrendingUp,
      title: "300% wzrost wydajności",
      description: "Automatyzacja procesów zwiększa wydajność zespołu",
    },
    {
      icon: DollarSign,
      title: "Oszczędność 2-3 godzin dziennie",
      description: "Każdy pracownik odzyskuje czas na wartościowe zadania",
    },
    {
      icon: Zap,
      title: "Gotowe w 3-8 tygodni",
      description: "Szybka implementacja bez długich opóźnień",
    },
    {
      icon: Users,
      title: "Dedykowane wsparcie",
      description: "Pełne wsparcie techniczne i strategiczne",
    },
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
            WHAT WE DO
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="tech-subheadline max-w-4xl mx-auto opacity-90"
          >
            Zwiększamy wydajność firm poprzez automatyzację procesów biznesowych
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex items-start space-x-8 group cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="tech-subheadline !text-xl !font-bold mb-4 group-hover:text-white/90 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="tech-body opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
