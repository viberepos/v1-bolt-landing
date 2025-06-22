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

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
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

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  }

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 20
      }
    }
  }

  return (
    <section className="py-20 bg-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={headerVariants}
            className="text-3xl font-bold text-[#f9f5ee] sm:text-4xl lg:text-5xl mb-6"
          >
            Gotowy na transformację swojego biznesu?
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-xl text-[#f9f5ee]/80 max-w-3xl mx-auto mb-12"
          >
            Skontaktuj się z nami już dziś, aby omówić potrzeby Twojej firmy i zaplanować bezpłatną konsultację.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div variants={buttonVariants}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#f9f5ee] text-[#222222] hover:bg-[#f9f5ee]/90 text-sm sm:text-lg px-4 sm:px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-tally-open="wMqZ70"
                data-tally-layout="modal"
                data-tally-width="1000"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                Umów bezpłatną konsultację
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[#f9f5ee] bg-transparent text-[#f9f5ee] hover:bg-[#f9f5ee] hover:text-[#222222] text-sm sm:text-lg px-4 sm:px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-normal text-center leading-tight"
                data-tally-open="mO9eXA"
                data-tally-layout="modal"
                data-tally-width="1000"
                data-tally-overlay="1"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                <span className="hidden sm:inline">Umów się na demo aplikacji dla branży finansowej</span>
                <span className="sm:hidden">Demo aplikacji finansowej</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div 
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cursor-pointer group"
            >
              <motion.div 
                variants={numberVariants}
                className="text-3xl font-bold text-[#f9f5ee] mb-2 group-hover:text-[#f9f5ee]/90 transition-colors duration-300"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.5
                }}
              >
                30 min
              </motion.div>
              <div className="text-[#f9f5ee]/80 group-hover:text-[#f9f5ee] transition-colors duration-300">bezpłatnej konsultacji kwalifikacyjnej</div>
            </motion.div>
            <motion.div 
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cursor-pointer group"
            >
              <motion.div 
                variants={numberVariants}
                className="text-3xl font-bold text-[#f9f5ee] mb-2 group-hover:text-[#f9f5ee]/90 transition-colors duration-300"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.7
                }}
              >
                3-8
              </motion.div>
              <div className="text-[#f9f5ee]/80 group-hover:text-[#f9f5ee] transition-colors duration-300">tygodni do gotowego rozwiązania</div>
            </motion.div>
            <motion.div 
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cursor-pointer group"
            >
              <motion.div 
                variants={numberVariants}
                className="text-3xl font-bold text-[#f9f5ee] mb-2 group-hover:text-[#f9f5ee]/90 transition-colors duration-300"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.9
                }}
              >
                70%
              </motion.div>
              <div className="text-[#f9f5ee]/80 group-hover:text-[#f9f5ee] transition-colors duration-300">oszczędności w porównaniu do tradycyjnych firm</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
