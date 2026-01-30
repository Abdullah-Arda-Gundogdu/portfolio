"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Independent AI Project - Karien",
      company: "Personal Project",
      period: "2024 - Present",
      location: "Remote",
      highlights: [
        "Built an AI OS interface using fine-tuned Llama 3 70B with Groq inference",
        "Implemented screen vision capabilities for context-aware assistance",
        "Integrated Model Context Protocol for extensible agent functionality",
        "Connected with external services like Google Calendar and Gmail",
      ],
    },
    {
      title: "Gen AI Research & Development",
      company: "Self-Directed Learning",
      period: "2023 - Present",
      location: "Remote",
      highlights: [
        "Deep expertise in RAG systems and Knowledge Graph integration",
        "Implemented FiD and KG-FiD architectures for enhanced retrieval",
        "Built production-ready applications with LangChain and LlamaIndex",
        "Prompt engineering and LLM fine-tuning experiments",
      ],
    },
    {
      title: "Open Source Contributions",
      company: "GitHub Community",
      period: "2023 - Present",
      location: "Remote",
      highlights: [
        "Contributing to AI/ML open source projects",
        "Sharing knowledge through code examples and documentation",
        "Collaborating with global developer community",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors"
                whileHover={{ paddingLeft: 32 }}
              >
                <motion.div
                  className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full"
                  aria-hidden="true"
                  whileHover={{ scale: 1.3 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{project.title}</h3>
                    <p className="text-primary font-medium">{project.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time>{project.period}</time>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{project.location}</p>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
