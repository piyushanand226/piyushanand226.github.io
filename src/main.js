import React from 'https://esm.sh/react@18.3.1'
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client'
import '../js/script.js'

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('a', { href: '#main-content', className: 'skip-link' }, 'Skip to main content'),
    React.createElement(
      'header',
      null,
      React.createElement('div', { className: 'scroll-progress', 'aria-hidden': 'true' },
        React.createElement('div', { className: 'scroll-progress-bar', id: 'scroll-progress-bar' })
      ),
      React.createElement(
        'nav',
        { 'aria-label': 'Primary' },
        React.createElement('a', { href: '#home', className: 'logo', 'aria-label': 'Piyush Kumar Anand — home' }, 'PKA'),
        React.createElement(
          'button',
          { type: 'button', className: 'hamburger', id: 'hamburger', 'aria-label': 'Open menu', 'aria-expanded': 'false', 'aria-controls': 'nav-links' },
          React.createElement('span', { className: 'hamburger-box', 'aria-hidden': 'true' },
            React.createElement('span', { className: 'hamburger-bar' }),
            React.createElement('span', { className: 'hamburger-bar' }),
            React.createElement('span', { className: 'hamburger-bar' })
          )
        ),
        React.createElement('ul', { id: 'nav-links' },
          React.createElement('li', null, React.createElement('a', { href: '#home' }, 'Home')),
          React.createElement('li', null, React.createElement('a', { href: '#about' }, 'About')),
          React.createElement('li', null, React.createElement('a', { href: '#experience' }, 'Experience')),
          React.createElement('li', null, React.createElement('a', { href: '#skills' }, 'Skills')),
          React.createElement('li', null, React.createElement('a', { href: '#projects' }, 'Projects')),
          React.createElement('li', null, React.createElement('a', { href: '#contact' }, 'Contact'))
        ),
        React.createElement('div', { className: 'nav-actions' },
          React.createElement('a', { href: 'asset/resume.pdf', className: 'nav-btn', download: true }, 'Resume')
        )
      )
    ),
    React.createElement('main', { id: 'main-content', tabIndex: '-1' },
      React.createElement('section', { id: 'home', className: 'hero' },
        React.createElement('div', { className: 'hero-grid' },
          React.createElement('div', { className: 'hero-copy' },
            React.createElement('span', { className: 'eyebrow' }, 'Senior Software Engineer'),
            React.createElement('h1', null, 'Piyush Kumar Anand'),
            React.createElement('p', null, 'Java • Spring Boot • Kafka • Reactive Systems • Cloud-Native Architecture'),
            React.createElement('div', { className: 'hero-actions' },
              React.createElement('a', { href: 'asset/resume.pdf', className: 'btn btn-primary', download: 'Piyush_Kumar_Anand_Resume.pdf' }, 'Download Resume'),
              React.createElement('a', { href: '#projects', className: 'btn btn-secondary' }, 'View Projects')
            )
          ),
          React.createElement('div', { className: 'hero-panel' },
            React.createElement('img', { src: 'asset/profile.png', alt: 'Piyush Kumar Anand', className: 'profile-photo', width: '240', height: '240', decoding: 'async', fetchpriority: 'high' })
          )
        )
      ),
      React.createElement('section', { id: 'about' },
        React.createElement('div', { className: 'container' },
          React.createElement('h2', null, 'About'),
          React.createElement('p', null, 'Senior Software Engineer with 5.6+ years of experience building and scaling cloud-native microservices across telecom, automotive, and compliance domains.'),
          React.createElement('p', null, 'Delivered measurable outcomes including 30% latency reduction, 20% throughput increase, and 40% faster deployments using Spring Boot, WebFlux, Kafka, Kubernetes, and AWS.')
        )
      ),
      React.createElement('section', { id: 'experience' },
        React.createElement('div', { className: 'container' },
          React.createElement('h2', null, 'Experience'),
          React.createElement('div', { className: 'experience-item' },
            React.createElement('h3', null, 'Capgemini — Senior Software Engineer (Dec 2024 – Jun 2025)'),
            React.createElement('ul', null,
              React.createElement('li', null, 'Architected Spring WebFlux microservices with WebClient + API Gateway for real-time Kafka provisioning at 50K+ scale.'),
              React.createElement('li', null, 'Implemented adaptive backpressure in Kafka pipelines, reducing latency by 30%.'),
              React.createElement('li', null, 'Automated CI/CD with Jenkins, Docker, Kubernetes on AWS EKS, cutting deployment cycles by 40%.')
            )
          ),
          React.createElement('div', { className: 'experience-item' },
            React.createElement('h3', null, 'British Telecom — Design Engineer (Nov 2022 – Dec 2024)'),
            React.createElement('ul', null,
              React.createElement('li', null, 'Designed Spring MVC REST APIs with Feign + API Gateway using JWT, rate-limits, and circuit breakers.'),
              React.createElement('li', null, 'Migrated services to Spring WebFlux and optimized Kafka partitioning/consumer groups for scale.'),
              React.createElement('li', null, 'Introduced Playwright automation, reducing QA effort by 25%.')
            )
          ),
          React.createElement('div', { className: 'experience-item' },
            React.createElement('h3', null, 'Renault Nissan Technology — Senior Software Engineer (Nov 2019 – Nov 2022)'),
            React.createElement('ul', null,
              React.createElement('li', null, 'Migrated legacy Struts services to Spring Boot microservices for better modularity and maintainability.'),
              React.createElement('li', null, 'Built RxJava compliance pipelines and Kafka ingestion with schema registry/replay for data integrity.'),
              React.createElement('li', null, 'Raised automated coverage to 95% with JUnit + Mockito, reducing production defects.')
            )
          )
        )
      ),
      React.createElement('section', { id: 'skills' },
        React.createElement('div', { className: 'container' },
          React.createElement('h2', null, 'Skills'),
          React.createElement('p', null, 'Java, JavaScript (ES6+), SQL, Spring Boot, Spring WebFlux, Reactor, RxJava, Kafka, RabbitMQ, AWS, Docker, Kubernetes, Jenkins, MySQL, Oracle, DB2, Redis.')
        )
      ),
      React.createElement('section', { id: 'projects' },
        React.createElement('div', { className: 'container' },
          React.createElement('h2', null, 'Projects'),
          React.createElement('ul', null,
            React.createElement('li', null, 'C Datacom: Built Spring Boot + Kafka reactive microservices with exactly-once semantics and delivered 30% latency reduction.'),
            React.createElement('li', null, 'ESB Integration: Designed resilient API Gateway patterns with Feign, JWT, rate limiting, and reactive messaging.'),
            React.createElement('li', null, 'BDTVV / CCV / BDCO2: Modernized legacy services, improved telemetry throughput, and accelerated reporting pipelines.')
          )
        )
      ),
      React.createElement('section', { id: 'contact' },
        React.createElement('div', { className: 'container' },
          React.createElement('h2', null, 'Contact'),
          React.createElement('p', null, 'Bellandur, Bangalore'),
          React.createElement('p', null, 'Choose email:'),
          React.createElement('p', null,
            React.createElement('a', { href: 'mailto:piyushanandbang@gmail.com' }, 'piyushanandbang@gmail.com'),
            ' ',
            React.createElement('button', { type: 'button', className: 'copy-btn', 'data-copy': 'piyushanandbang@gmail.com' }, 'Copy')
          ),
          React.createElement('p', null,
            React.createElement('a', { href: 'mailto:kumaranandpiyush5@gmail.com' }, 'kumaranandpiyush5@gmail.com'),
            ' ',
            React.createElement('button', { type: 'button', className: 'copy-btn', 'data-copy': 'kumaranandpiyush5@gmail.com' }, 'Copy')
          ),
          React.createElement('p', null, 'Phone: +91-8210508660')
        )
      )
    )
  )
}

createRoot(document.getElementById('root')).render(React.createElement(App))
