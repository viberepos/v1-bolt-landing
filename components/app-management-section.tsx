"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function AppManagementSection() {
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

  return (
    <section className="py-20 bg-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-[#f9f5ee] sm:text-4xl lg:text-5xl mb-6 text-center max-w-4xl mx-auto"
          >
            Aplikacja dla branży finansowej
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-[#f9f5ee]/80 max-w-3xl mx-auto mb-16 text-center"
          >
            Zarządzaj jednocześnie relacjami z klientami, inwestorami oraz podmiotami finansującymi w jednym miejscu
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Szerszy pionowy obraz po lewej */}
            <motion.div variants={imageVariants} className="flex justify-center">
              <div className="w-full max-w-md">
                <Image
                  src="https://whatfix.com/blog/wp-content/uploads/2022/07/Beige-Modern-Pomodoro-Technique-Comparison-Chart-Infographic-Graph.png"
                  alt="Porównanie technik zarządzania"
                  width={400}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </motion.div>

            {/* Dwa pionowe obrazy po prawej */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={imageVariants}>
                <Image
                  src="https://www.zohowebstatic.com/sites/zweb/images/one/one-tap-launcher.png"
                  alt="Launcher aplikacji"
                  width={300}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
              
              <motion.div variants={imageVariants}>
                <Image
                  src="https://www.zohowebstatic.com/sites/zweb/images/one/notifications.png"
                  alt="System powiadomień"
                  width={300}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={buttonVariants}
            className="flex justify-center mt-12"
          >
            <Button 
              size="lg" 
              className="bg-[#f9f5ee] text-[#222222] hover:bg-[#f9f5ee]/90 text-lg px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              data-tally-open="w8yEWk"
              data-tally-layout="modal"
              data-tally-width="900"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Umów się na demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 