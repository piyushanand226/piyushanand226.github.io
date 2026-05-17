import React from 'react'
import { createRoot } from 'react-dom/client'
import '../css/style.css'
import '../js/script.js'

const highlights = [
  { label: 'Experience', value: '7+ Years', text: 'Building enterprise-grade distributed systems.' },
  { label: 'Core Stack', value: 'Java + Spring', text: 'Reactive microservices, APIs, and event-driven architecture.' },
  { label: 'Cloud', value: 'AWS & K8s', text: 'Containerized delivery with observability and scalability.' },
]

const skills = ['Java', 'Spring Boot', 'Kafka', 'Microservices', 'Kubernetes', 'AWS', 'PostgreSQL', 'Redis']

const projects = [
  {
    title: 'Realtime Payments Platform',
    desc: 'Built resilient payment workflows with idempotent processing and event streaming to improve reliability and throughput.',
    tag: 'Backend',
  },
  {
    title: 'Cloud Cost Insights',
    desc: 'Created usage analytics dashboards and optimization workflows to reduce infrastructure spend while maintaining SLA targets.',
    tag: 'Cloud',
  },
  {
    title: 'Developer Enablement Toolkit',
    desc: 'Standardized service templates, CI/CD checks, and observability defaults to speed up team delivery.',
    tag: 'Platform',
  },
]

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
          <ul id="nav-links"><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#skills">Skills</a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li></ul>
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
          <div className="highlights-grid" aria-label="Professional highlights">
            {highlights.map((item) => (
              <article key={item.label} className="highlight-card">
                <p className="highlight-label">{item.label}</p>
                <p className="highlight-value">{item.value}</p>
                <p className="highlight-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="content-section">
          <h2>About</h2>
          <p>
            I design and deliver scalable backend platforms with a focus on reliability, developer experience, and measurable business impact.
            My approach combines pragmatic architecture, clean APIs, and strong operational excellence.
          </p>
        </section>

        <section id="skills" className="content-section">
          <h2>Skills</h2>
          <div className="chip-list">
            {skills.map((skill) => <span key={skill} className="chip">{skill}</span>)}
          </div>
        </section>

        <section id="projects" className="content-section">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-mini-card">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section">
          <h2>Contact</h2>
          <p>Open to impactful engineering opportunities and technical collaborations.</p>
          <a className="btn btn-primary" href="mailto:piyush.kumar.anand@gmail.com">Let&apos;s Connect</a>
        </section>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
