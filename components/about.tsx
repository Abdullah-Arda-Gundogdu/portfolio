"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { Code2, Users, Shield, Zap, Lightbulb, BookOpen, MapPin, Mail, Phone, Clock } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    {
      title: "Large Language Models",
      description:
        "Building applications with GPT, Claude, and Llama models. Experience in fine-tuning and prompt optimization.",
      icon: <Code2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "RAG Systems",
      description:
        "Designing retrieval-augmented generation pipelines with vector databases for context-aware AI applications.",
      icon: <Users size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Knowledge Graphs",
      description: "Implementing KG-FiD and Fusion-in-Decoder architectures for enhanced knowledge retrieval.",
      icon: <Shield size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "AI Agents",
      description: "Creating autonomous agents using Model Context Protocol for complex multi-step workflows.",
      icon: <Zap size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Prompt Engineering",
      description: "Crafting effective prompts and building robust prompt pipelines for production AI systems.",
      icon: <Lightbulb size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "AI Orchestration",
      description: "Leveraging LangChain and LlamaIndex for building scalable, production-ready AI applications.",
      icon: <BookOpen size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a passionate AI Engineering student at{" "}
              <span className="font-semibold text-muted-foreground">TOBB University of Economics and Technology</span>, 
              specializing in Generative AI and intelligent systems. My focus is on building AI agents that bridge 
              natural language and complex technical workflows.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm deeply experienced in{" "}
              <span className="font-semibold text-muted-foreground">LLMs, RAG systems, Knowledge Graphs, and AI orchestration frameworks</span>. 
              I've built Karien, an AI operating system interface that demonstrates my expertise in creating 
              production-ready AI applications with real-world impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently seeking{" "}
              <span className="font-semibold text-muted-foreground">international AI/ML internship opportunities</span> where 
              I can contribute to cutting-edge Gen AI projects and learn from industry leaders.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Core Expertise</h3>
            <HoverEffect items={highlights} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Info</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Location", value: "Ankara, Turkey", icon: <MapPin size={24} strokeWidth={1.5} /> },
                {
                  label: "Email",
                  value: "abdullahardagundogduxd@gmail.com",
                  link: "mailto:abdullahardagundogduxd@gmail.com",
                  icon: <Mail size={24} strokeWidth={1.5} />,
                },
                {
                  label: "University",
                  value: "TOBB ETU",
                  icon: <BookOpen size={24} strokeWidth={1.5} />,
                },
                { label: "Status", value: "Open to Internships", icon: <Clock size={24} strokeWidth={1.5} /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-primary hover:underline text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
