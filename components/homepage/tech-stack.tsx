"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const techCategories = [
    {
      name: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend",
      technologies: ["Node.js", "Python", "PostgreSQL", "Redis"],
    },
    {
      name: "Cloud",
      technologies: ["AWS", "Vercel", "Docker", "Kubernetes"],
    },
    {
      name: "Mobile",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
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
    hidden: { opacity: 0, y: 50 },
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
          className="text-center mb-20"
        >
          <motion.h2 
            variants={textVariants}
            className="tech-headline mb-8"
          >
            TECH STACK
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="tech-subheadline max-w-3xl mx-auto opacity-90"
          >
            Nowoczesne technologie dla maksymalnej wydajności i skalowalności
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="tech-card text-center group cursor-pointer"
            >
              <h3 className="tech-subheadline !text-xl !font-bold mb-6 group-hover:text-white/90 transition-colors duration-300">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="tech-body !text-sm bg-white/5 rounded-lg px-4 py-2 group-hover:bg-white/10 transition-colors duration-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
