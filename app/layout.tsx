import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arda Gundogdu | AI Engineer & Gen AI Specialist | Portfolio",
  description:
    "AI Engineering student specializing in LLMs, RAG systems, Knowledge Graphs, and AI agents. Building intelligent systems with cutting-edge Gen AI technologies. Open to international internships.",
  keywords: [
    "AI Engineer",
    "Gen AI",
    "LLM Developer",
    "RAG Systems",
    "Knowledge Graphs",
    "LangChain",
    "LlamaIndex",
    "Machine Learning",
    "Artificial Intelligence",
    "Arda Gundogdu",
    "TOBB ETU",
    "AI Internship",
    "Prompt Engineering",
    "AI Agents",
    "Model Context Protocol"
  ],
  generator: "v0.app",
  openGraph: {
    title: "Arda Gundogdu | AI Engineer & Gen AI Specialist",
    description:
      "AI Engineering student building intelligent systems with LLMs, RAG, and Knowledge Graphs. Open to international internships.",
    type: "website",
    locale: "en_US",
    url: "https://ardagundogdu.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arda Gundogdu | AI Engineer & Gen AI Specialist",
    description:
      "AI Engineering student building intelligent systems with LLMs, RAG, and Knowledge Graphs. Open to international internships.",
  },
  alternates: {
    canonical: "https://ardagundogdu.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arda Gundogdu",
              url: "https://ardagundogdu.com",
              jobTitle: "AI Engineer",
              email: "abdullahardagundogduxd@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ankara",
                addressCountry: "TR",
              },
              sameAs: ["https://www.linkedin.com/in/abdullah-arda-45b474295/", "https://github.com/Abdullah-Arda-Gundogdu"],
              knowsAbout: ["LLMs", "RAG Systems", "Knowledge Graphs", "LangChain", "LlamaIndex", "Gen AI", "Prompt Engineering", "AI Agents"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
