"use client"

import { MessageCircle, Search, FileText, Palette, Cog, Rocket, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Konsultacja",
      description: "Analizujemy Twoje potrzeby i cele biznesowe",
    },
    {
      number: "02",
      icon: Search,
      title: "Analiza",
      description: "Badamy obecne procesy i identyfikujemy możliwości",
    },
    {
      number: "03",
      icon: FileText,
      title: "Planowanie",
      description: "Tworzymy szczegółowy plan implementacji",
    },
    {
      number: "04",
      icon: Palette,
      title: "Projektowanie",
      description: "Projektujemy interfejs i architekturę systemu",
    },
    {
      number: "05",
      icon: Cog,
      title: "Implementacja",
      description: "Budujemy rozwiązanie zgodnie z planem",
    },
    {
      number: "06",
      icon: Rocket,
      title: "Wdrożenie",
      description: "Uruchamiamy system w Twoim środowisku",
    },
    {
      number: "07",
      icon: HeadphonesIcon,
      title: "Wsparcie",
      description: "Zapewniamy ciągłe wsparcie i rozwój",
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

  const stepVariants = {
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
            ROADMAP
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="tech-subheadline max-w-3xl mx-auto opacity-90"
          >
            Nasz sprawdzony proces implementacji - od pomysłu do działającego systemu
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={stepVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="tech-card text-center group cursor-pointer"
            >
              <div className="tech-caption mb-4">{step.number}</div>
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="tech-subheadline !text-lg !font-bold mb-4 group-hover:text-white/90 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="tech-body !text-sm opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
