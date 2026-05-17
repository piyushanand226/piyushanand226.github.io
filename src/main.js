import React from 'react'
import { createRoot } from 'react-dom/client'
import '../css/style.css'
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
            React.createElement('p', null, 'Building responsive, cloud-native systems with reactive Java microservices and modern architecture.'),
            React.createElement('div', { className: 'hero-actions' },
              React.createElement('a', { href: 'asset/resume.pdf', className: 'btn btn-primary', download: 'Piyush_Kumar_Anand_Resume.pdf' }, 'Download Resume'),
              React.createElement('a', { href: '#projects', className: 'btn btn-secondary' }, 'View Projects')
            )
          ),
          React.createElement('div', { className: 'hero-panel' },
            React.createElement('img', { src: 'asset/profile.png', alt: 'Piyush Kumar Anand', className: 'profile-photo', width: '240', height: '240', decoding: 'async', fetchpriority: 'high' })
          )
        )
      )
    )
  )
}

createRoot(document.getElementById('root')).render(React.createElement(App))
