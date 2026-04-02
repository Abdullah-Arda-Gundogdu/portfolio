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
        "Developed a 3-tier cognitive architecture (Router, Worker, Synthesizer) with local LLM support via Ollama",
        "Integrated wake-word detection, live STT, and high-quality TTS for natural voice interactions",
        "Implemented an expressive animated avatar with dynamic moods based on real-time LLM sentiment",
        "Built a modular tool system using Model Context Protocol (MCP) for system control and app integrations",
      ],
    },
    {
      title: "AI Customer Representative",
      company: "B2B Project",
      period: "2024 - 2025",
      highlights: [
        "Architected an end-to-end conversational AI for an Azerbaijani bank to significantly reduce human workload",
        "Designed a secure STT → PII Filter → LLM → PII Filter (Decode) → TTS pipeline",
        "Developed a deeply human-like persona to ensure high user adoption and satisfaction",
        "Integrated a RAG (Retrieval-Augmented Generation) system to accurately assist with customer-specific banking information",
      ],
    },
    {
      title: "Synthetic Personality Analysis with NLP",
      company: "BIL 470 Senior Project",
      period: "2024",
      highlights: [
        "Built an NLP pipeline to predict hobbies from persona descriptions using Qwen 3 embedding models",
        "Reduced dataset noise using Normalized Compression Distance (NCD) and Agglomerative Clustering",
        "Engineered prediction systems using Matrix k-NN and Cross-Encoder re-ranking for improved precision",
        "Trained a customized Deep Learning projection network bridging persona and hobby vector spaces",
      ],
    },
    {
      title: "TTS Training Data Generator",
      company: "Independent Project",
      period: "2024",
      highlights: [
        "Developed a full-stack web app (React/Flask) for generating and managing TTS training datasets",
        "Integrated dual LLMs (OpenAI/Ollama) to autonomously generate varied, context-rich training sentences",
        "Implemented a unified TTS engine via Google Cloud to synthesize high-quality audio",
        "Created an interface for direct browser-based model fine-tuning of Coqui XTTS v2 with real-time logs",
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
