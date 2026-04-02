"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Karien - AI Desktop Companion",
      company: "Independent Project",
      period: "2024 - Present",
      highlights: [
        "Developed a fully interactive voice-activated AI companion that lives on your desktop and assists with everyday tasks",
        "Gave the AI a unique personality, bringing it to life with an expressive animated avatar that reacts to conversations",
        "Engineered the system to understand speech in real-time and securely control desktop applications",
        "Ensured privacy and performance by allowing the AI to run completely locally on the user's hardware without needing the internet",
      ],
    },
    {
      title: "AI Customer Representative",
      company: "B2B Project",
      period: "2024 - 2025",
      highlights: [
        "Built an automated voice-calling AI agent for a bank to handle common customer inquiries and reduce call center wait times",
        "Designed the agent to sound and interact just like a real human, naturally holding back-and-forth phone conversations",
        "Integrated an intelligent search system (RAG) so the AI can securely look up and answer questions about specific banking data",
        "Implemented strict security filters to ensure sensitive personal information is never exposed or stored improperly",
      ],
    },
    {
      title: "Synthetic Personality Analysis with NLP",
      company: "BIL 470 Senior Project",
      period: "2024",
      highlights: [
        "Conducted an academic research project to discover if a person's hobbies can be accurately guessed just by reading their personality profile",
        "Analyzed massive datasets of character descriptions to find hidden connections between character traits and personal interests",
        "Utilized advanced language and predictive models to automatically read profiles and reliably categorize their hobbies",
        "Successfully trained a custom neural network that translates personality profiles directly into expected hobby recommendations",
      ],
    },
    {
      title: "TTS Training Data Generator",
      company: "B2B Project",
      period: "2024",
      highlights: [
        "Created an all-in-one web platform that makes it incredibly easy to produce professional voice cloning datasets from scratch",
        "Used AI to automatically write thousands of diverse practice sentences for text-to-speech models to read",
        "Streamlined the entire process of generating custom audio clips and organizing them into ready-to-train datasets",
        "Built in the ability to train and test new voice models directly inside the web browser without any complex setup",
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
