import { NextResponse } from "next/server"

export async function GET() {
  try {
    const resumeContent = `
ARDA GUNDOGDU
AI Engineer & Gen AI Specialist
abdullahardagundogduxd@gmail.com | Ankara, Turkey
LinkedIn: linkedin.com/in/abdullah-arda-45b474295
GitHub: github.com/Abdullah-Arda-Gundogdu

SUMMARY
AI Engineering student at TOBB University of Economics and Technology, specializing in Generative AI and intelligent systems. Experienced in building production-ready AI applications using LLMs, RAG systems, and Knowledge Graphs. Passionate about creating AI agents that bridge natural language and complex technical workflows. Actively seeking international AI/ML internship opportunities.

SKILLS
Gen AI & LLMs: GPT-4/GPT-5, Claude, Llama 3, Fine-tuning, Prompt Engineering, Groq Inference
RAG & Knowledge: Vector Databases, Pinecone, Chroma, Knowledge Graphs, FiD, KG-FiD, Embeddings, Semantic Search
AI Frameworks: LangChain, LlamaIndex, Model Context Protocol (MCP), Hugging Face, OpenAI API, AI SDK
Development: Python, TypeScript, Next.js, FastAPI, Git, Docker

PROJECTS

Karien - AI Operating System Interface | 2024 - Present
• Built an advanced AI OS interface that acts as a digital human on computers
• Implemented voice control for entire operating system using fine-tuned Llama 3 70B via Groq
• Integrated screen vision capabilities for context-aware assistance
• Built on Model Context Protocol with integrations to Google Calendar and Gmail
• Technologies: Llama 3 70B, Groq, MCP, Vision AI, Python

RAG Knowledge Systems | 2023 - Present
• Designed retrieval-augmented generation pipelines with vector database integration
• Implemented KG-FiD architecture for enhanced knowledge retrieval
• Built semantic search engines using embeddings and vector similarity
• Technologies: LangChain, Pinecone, Chroma, OpenAI, FastAPI

LLM Fine-tuning Pipeline | 2023 - Present
• Created end-to-end pipeline for fine-tuning large language models
• Implemented LoRA techniques for efficient model adaptation
• Built evaluation metrics and monitoring with Weights & Biases
• Technologies: Hugging Face, PyTorch, LoRA, W&B

EDUCATION

B.Sc. Artificial Intelligence Engineering
TOBB University of Economics and Technology | 2022 - Present | Ankara, Turkey
• Specializing in Machine Learning, Deep Learning, and Natural Language Processing
• Coursework in AI Systems, Neural Networks, and Knowledge Representation
• Active member of university AI research community

LANGUAGES
Turkish (Native), English (Fluent)

INTERESTS
AI Research, Open Source, Building AI Agents, Knowledge Systems
    `

    // Create a simple text-based response that can be downloaded as a file
    const headers = new Headers()
    headers.set("Content-Type", "text/plain; charset=utf-8")
    headers.set("Content-Disposition", 'attachment; filename="Arda_Gundogdu_Resume.txt"')

    return new NextResponse(resumeContent, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error generating resume:", error)
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 })
  }
}
