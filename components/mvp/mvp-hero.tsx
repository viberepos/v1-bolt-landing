"use client"

import { Check } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function MVPHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  const checkItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
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
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <section className="w-full pt-3 pb-9 md:pt-6 md:pb-18 lg:pt-8 lg:pb-24 bg-gradient-to-br from-[#f9f5ee] to-[#f9f5ee]/80">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <motion.h1 
                variants={textVariants}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#222222]" 
                style={{ lineHeight: '1.1' }}
              >
                Zbudujemy twoją aplikację <br/>znacznie szybciej i taniej! 
              </motion.h1>
              <motion.p 
                variants={textVariants}
                className="max-w-[600px] text-[#222222]/70 md:text-xl"
              >
                Szybszy dewelopment = szybsza walidacja. Sprawdź czy twój pomysł na aplikację będzie porządany przez rynek przed dużymi inwestycjami.
              </motion.p>
            </div>
            <div className="space-y-6">
              <motion.div 
                variants={containerVariants}
                className="space-y-3"
              >
                <motion.div variants={checkItemVariants} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-[#222222]">Realne opinie od użytkowników</span>
                </motion.div>
                <motion.div variants={checkItemVariants} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-[#222222]">Szybsze sprawdzenie rynku</span>
                </motion.div>
                <motion.div variants={checkItemVariants} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-[#222222]">Łatwiejsze pozyskanie inwestora</span>
                </motion.div>
              </motion.div>
              <motion.div 
                variants={containerVariants}
                className="flex justify-start"
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#222222] px-8 py-2 text-sm font-medium text-[#f9f5ee] hover:bg-[#222222]/90"
                  data-tally-open="3jXqpR"
                  data-tally-layout="modal"
                  data-tally-width="850"
                  data-tally-emoji-text="👋"
                  data-tally-emoji-animation="wave"
                >
                  Umów bezpłatną konsultację - sprawdźmy Twój pomysł
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            variants={imageContainerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative flex justify-center items-center"
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-4 bg-black/25 rounded-full blur-md" style={{ borderRadius: '50%' }}></div>
            
            <motion.div
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/images/case-study/1.png"
                width={300}
                height={0}
                alt="VibeApps - Aplikacja dla branży finansowej"
                className="mx-auto max-w-sm h-auto rounded-xl object-contain"
                style={{ height: 'auto', width: 'auto' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 