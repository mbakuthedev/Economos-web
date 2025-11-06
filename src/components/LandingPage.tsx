import React from 'react'
import './LandingPage.css'

const LandingPage: React.FC = () => {
  const githubUrl = 'https://github.com/mbakuthedev/Ecomonos' // Update with actual GitHub URL

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="greek-pattern-top"></div>
          <h1 className="hero-title">
            <span className="greek-letter">Ε</span>comonos
          </h1>
          <p className="hero-subtitle">Multi-Clipboard Manager</p>
          <p className="hero-description">
            A powerful desktop application that runs in the background and keeps track of your clipboard history, 
            enhanced with AI-powered features for intelligent text processing and automation.
          </p>
          <div className="hero-buttons">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download from GitHub
            </a>
            <a 
              href="#features" 
              className="btn-secondary"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="clipboard-icon">📋</div>
          <div className="floating-elements">
            <div className="float-element float-1">⌨️</div>
            <div className="float-element float-2">🔒</div>
            <div className="float-element float-3">🤖</div>
            <div className="float-element float-4">🔍</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">
            <span className="greek-accent">Features</span>
          </h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Automatic Clipboard Monitoring</h3>
              <p>Automatically saves every text you copy, running quietly in the background.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⌨️</div>
              <h3>Keyboard Shortcuts</h3>
              <p>Press <code>Cmd+Shift+V</code> or <code>Ctrl+Shift+V</code> to open history window instantly.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>Quickly find items with keyword search or AI-powered semantic search.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Privacy & Security</h3>
              <p>Private mode, encryption, app exclusion, and in-memory only storage options.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Features</h3>
              <p>Smart paste, semantic search, auto-reply generator, and instant formatter.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏷️</div>
              <h3>Auto-Categorization</h3>
              <p>AI automatically tags clips as code, email, link, note, password, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Features Section */}
      <section className="privacy-section">
        <div className="container">
          <div className="privacy-content">
            <div className="privacy-text">
              <h2 className="section-title">
                <span className="greek-accent">Privacy</span> First
              </h2>
              <ul className="privacy-list">
                <li><strong>Private Mode:</strong> Temporarily disable clipboard logging</li>
                <li><strong>Encryption:</strong> AES-256-CBC encryption for your clipboard history</li>
                <li><strong>App Exclusion:</strong> Exclude specific applications from being logged</li>
                <li><strong>In-Memory Only:</strong> Store history only in RAM for maximum privacy</li>
                <li><strong>Local Storage:</strong> All data stays on your machine, never transmitted</li>
              </ul>
            </div>
            <div className="privacy-illustration">
              <div className="shield-icon">🛡️</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="ai-features-section">
        <div className="container">
          <h2 className="section-title">
            <span className="greek-accent">AI-Powered</span> Intelligence
          </h2>
          <div className="ai-features-grid">
            <div className="ai-feature">
              <h3>🧾 Smart Paste</h3>
              <p>Intelligently clean and format copied text, remove line breaks, format JSON, and rewrite in different tones.</p>
            </div>
            <div className="ai-feature">
              <h3>🧠 Clipboard Brain</h3>
              <p>Search your clipboard history by meaning, not just keywords. Uses AI embeddings for semantic understanding.</p>
            </div>
            <div className="ai-feature">
              <h3>💬 Auto Reply Generator</h3>
              <p>Draft intelligent replies from multiple messages with context-aware AI analysis.</p>
            </div>
            <div className="ai-feature">
              <h3>📝 Instant Formatter</h3>
              <p>Convert between HTML, Markdown, JSON, and more. Format code and transform text instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section">
        <div className="container">
          <div className="download-content">
            <h2 className="section-title">
              <span className="greek-accent">Download</span> Now
            </h2>
            <p className="download-description">
              Available for macOS, Windows, and Linux. Choose your platform and start boosting your productivity.
            </p>
            <div className="platform-buttons">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-btn"
              >
                <span className="platform-icon">🍎</span>
                <span>macOS</span>
              </a>
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-btn"
              >
                <span className="platform-icon">🪟</span>
                <span>Windows</span>
              </a>
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-btn"
              >
                <span className="platform-icon">🐧</span>
                <span>Linux</span>
              </a>
            </div>
            <div className="github-link">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary btn-large"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              Made with <span className="heart">🖤</span> for productivity enthusiasts
            </p>
            <p className="footer-license">MIT License - Open Source</p>
          </div>
          <div className="greek-pattern-bottom"></div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

