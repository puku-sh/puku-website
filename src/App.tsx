import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tight">
              Puku Editor
            </h1>
            <p className="text-xl text-muted-foreground">
              AI-Powered Code Editor with GitHub Copilot Chat and Z.AI Integration
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#download">Download for macOS</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="#docs">Documentation</a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 rounded-lg bg-card border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">AI Chat</h3>
              <p className="text-muted-foreground">
                Built on GitHub Copilot Chat architecture with GLM-4.6 model support
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Inline Completions</h3>
              <p className="text-muted-foreground">
                Fill-in-Middle (FIM) with Mistral Codestral for smart code suggestions
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Semantic Search</h3>
              <p className="text-muted-foreground">
                Built-in embeddings cache with sqlite-vec for fast codebase indexing
              </p>
            </div>
          </div>

          <div id="download" className="mt-16 p-8 rounded-lg bg-card border shadow-sm text-left">
            <h2 className="text-3xl font-bold mb-4">Download</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Puku Editor for macOS (Apple Silicon)</h3>
                  <p className="text-sm text-muted-foreground">Version 0.34.7 - ARM64</p>
                </div>
                <Button asChild>
                  <a href="https://puku.sh/downloads/Puku-macOS-arm64.dmg" download>
                    Download DMG
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg opacity-60">
                <div>
                  <h3 className="font-semibold">Windows & Linux</h3>
                  <p className="text-sm text-muted-foreground">Coming soon</p>
                </div>
                <Button disabled>Coming Soon</Button>
              </div>
            </div>
          </div>

          <div id="docs" className="mt-16 p-8 rounded-lg bg-card border shadow-sm text-left">
            <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">1. Download and Install</h3>
                <p>Download the DMG file, open it, and drag Puku Editor to your Applications folder.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">2. Configure Z.AI API</h3>
                <p>Add your Z.AI API key to enable GLM-4.6 model for chat and completions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">3. Start Coding</h3>
                <p>Open your project and start using AI-powered features with Ctrl+I for inline chat.</p>
              </div>
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>Built with VS Code (Code-OSS) • Open Source</p>
            <p className="mt-2">
              <a href="https://github.com/puku-sh/puku-vs-editor" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {" • "}
              <a href="https://puku.sh/docs" className="hover:text-foreground">
                Documentation
              </a>
              {" • "}
              <a href="https://api.puku.sh" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
                API
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
