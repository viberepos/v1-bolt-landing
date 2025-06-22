"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function MVPCTA() {
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

  const textVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#222222] text-[#f9f5ee]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h2 
              variants={textVariants}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              style={{ lineHeight: '1.1' }}
            >
              Zbudujmy Twoje MVP razem
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="max-w-[600px] text-[#f9f5ee]/70 md:text-xl leading-relaxed"
            >
              Zamiast spekulować, sprawdźmy czy Twój pomysł ma sens biznesowy. Bezpłatna konsultacja trwa 30 minut i
              od razu otrzymasz konkretny plan działania.
            </motion.p>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={buttonVariants}>
              <Button 
                size="lg"
                className="bg-[#f9f5ee] text-[#222222] hover:bg-[#f9f5ee]/90 text-lg px-12 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-tally-open="3jXqpR"
                data-tally-layout="modal"
                data-tally-width="850"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                Umów bezpłatną konsultację
              </Button>
            </motion.div>
            <motion.p 
              variants={textVariants}
              className="text-sm text-[#f9f5ee]/60 leading-relaxed"
            >
              📞 Konsultacja telefoniczna • 💡 Ocena potencjału pomysłu • 📋 Konkretny plan MVP
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 