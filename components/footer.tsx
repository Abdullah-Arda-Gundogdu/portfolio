"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <nav>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Experience
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:abdullahardagundogduxd@gmail.com"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abdullah-arda-45b474295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="LinkedIn (opens in new window)"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Abdullah-Arda-Gundogdu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  aria-label="GitHub (opens in new window)"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="font-bold mb-4">Skills</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>LLMs & Gen AI</li>
              <li>RAG & Knowledge Graphs</li>
              <li>LangChain & LlamaIndex</li>
              <li>Prompt Engineering</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Location</h3>
            <p className="text-sm text-muted-foreground">Ankara, Turkey</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Arda Gundogdu. All rights reserved.</p>
          <p>AI Engineer | Open to International Internships</p>
        </div>
      </div>
    </footer>
  )
}
