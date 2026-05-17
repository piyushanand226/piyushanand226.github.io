import React from 'react'
import { createRoot } from 'react-dom/client'
import '../css/style.css'
import '../js/script.js'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header>
        <div className="scroll-progress" aria-hidden="true"><div className="scroll-progress-bar" id="scroll-progress-bar"></div></div>
        <nav aria-label="Primary">
          <a href="#home" className="logo" aria-label="Piyush Kumar Anand — home">PKA</a>
          <button type="button" className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">
            <span className="hamburger-box" aria-hidden="true"><span className="hamburger-bar"></span><span className="hamburger-bar"></span><span className="hamburger-bar"></span></span>
          </button>
          <ul id="nav-links"><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#experience">Experience</a></li><li><a href="#skills">Skills</a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li></ul>
          <div className="nav-actions"><a href="asset/resume.pdf" className="nav-btn" download>Resume</a></div>
        </nav>
      </header>
      <main id="main-content" tabIndex="-1">
        <section id="home" className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Senior Software Engineer</span>
              <h1>Piyush Kumar Anand</h1>
              <p>Building responsive, cloud-native systems with reactive Java microservices and modern architecture.</p>
              <div className="hero-actions">
                <a href="asset/resume.pdf" className="btn btn-primary" download="Piyush_Kumar_Anand_Resume.pdf">Download Resume</a>
                <a href="#projects" className="btn btn-secondary">View Projects</a>
              </div>
            </div>
            <div className="hero-panel">
              <img src="asset/profile.png" alt="Piyush Kumar Anand" className="profile-photo" width="240" height="240" decoding="async" fetchpriority="high"/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
