"use client"

import { Zap, TrendingUp, Link } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function TechStack() {
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

  const headerVariants = {
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

  const categoryVariants = {
    hidden: { scale: 0.9, opacity: 0 },
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

  const techBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  const bottomCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }
    }
  }

  const techCategories = [
    {
      icon: Zap,
      title: "Szybkość wdrożenia",
      description: "Wykorzystujemy platformy no-code/low-code tam, gdzie przyniosą najszybsze rezultaty",
      technologies: ["Glide", "Softr", "Bubble", "Airtable", "Notion", "Webflow", "Framer"],
    },
    {
      icon: TrendingUp,
      title: "Skalowalność i wydajność",
      description: "Gdy potrzebujesz rozwiązania, które obsłuży znaczący wzrost",
      technologies: ["React", "Next.js", "Node.js", "Express", "Firebase", "MongoDB"],
    },
    {
      icon: Link,
      title: "Integracje i komunikacja",
      description: "Łączymy Twoje systemy w spójny ekosystem",
      technologies: ["REST API", "GraphQL", "React Native", "Flutter", "Webhook", "API"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={headerVariants}
            className="text-3xl font-bold text-[#222222] sm:text-4xl lg:text-5xl mb-6"
          >
            Technologie, które pracują dla Ciebie, nie odwrotnie
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-xl text-[#222222]/70 max-w-3xl mx-auto"
          >
            Nie ograniczamy się do jednego stosu technologicznego. Wybieramy najlepsze narzędzia do konkretnego zadania.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {techCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={categoryVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center group cursor-pointer"
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-[#f9f5ee] rounded-full mb-6 group-hover:bg-[#222222] transition-colors duration-300"
                whileHover={{ 
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <category.icon className="h-8 w-8 text-[#222222] group-hover:text-[#f9f5ee] transition-colors duration-300" />
              </motion.div>
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-bold text-[#222222] mb-4 group-hover:text-[#222222]/90 transition-colors duration-300"
              >
                {category.title}
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-[#222222]/70 mb-6 group-hover:text-[#222222]/80 transition-colors duration-300"
              >
                {category.description}
              </motion.p>
              <motion.div 
                variants={containerVariants}
                className="flex flex-wrap justify-center gap-2"
              >
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    variants={techBadgeVariants}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 2,
                      backgroundColor: "#222222",
                      color: "#f9f5ee"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="px-3 py-1 bg-[#f9f5ee] text-[#222222] rounded-full text-sm font-medium cursor-pointer hover:shadow-lg"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={bottomCardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div 
            className="bg-[#f9f5ee] rounded-2xl p-8 max-w-4xl mx-auto hover:bg-[#f9f5ee]/90 transition-colors duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.p 
              className="text-lg text-[#222222] font-medium"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              Nie oczekujemy, że będziesz rozumiał te technologie - od tego jesteśmy my.
            </motion.p>
            <motion.p 
              className="text-[#222222]/70 mt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.9 }}
            >
              Ty skupiasz się na swoim biznesie, a my dobieramy narzędzia, które przyniosą najlepsze rezultaty.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
