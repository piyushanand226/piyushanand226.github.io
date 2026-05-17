import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/style.css'

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

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  const isMobile = window.matchMedia('(max-width: 768px)').matches

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      setScrollProgress(Math.min(1, Math.max(0, progress)))

      const offset = window.scrollY + 110
      let current = 'home'
      const sections = document.querySelectorAll('main section[id]')
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i]
        if (offset >= section.offsetTop) {
          current = section.id
          break
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    const onResize = () => setMenuOpen(false)
    window.addEventListener('resize', onResize)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen && isMobile)
  }, [menuOpen, isMobile])

  const onNavigate = (event, id) => {
    event.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
      setMenuOpen(false)
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header>
        <div className="scroll-progress" aria-hidden="true"><div className="scroll-progress-bar" style={{ transform: `scaleX(${scrollProgress})` }}></div></div>
        <nav aria-label="Primary">
          <a href="#home" className="logo" aria-label="Piyush Kumar Anand — home" onClick={(e) => onNavigate(e, 'home')}>PKA</a>
          <button type="button" className={`hamburger ${menuOpen ? 'is-open' : ''}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen ? 'true' : 'false'} aria-controls="nav-links" onClick={() => setMenuOpen((open) => !open)}>
            <span className="hamburger-box" aria-hidden="true"><span className="hamburger-bar"></span><span className="hamburger-bar"></span><span className="hamburger-bar"></span></span>
          </button>
          <ul id="nav-links" className={menuOpen ? 'show' : ''}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={(e) => onNavigate(e, item.id)} className={activeSection === item.id ? 'active' : ''} aria-current={activeSection === item.id ? 'page' : undefined}>{item.label}</a>
              </li>
            ))}
          </ul>
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
                <a href="#projects" className="btn btn-secondary" onClick={(e) => onNavigate(e, 'projects')}>View Projects</a>
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
