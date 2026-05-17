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
      ),
      React.createElement('section', { id: 'about' }, React.createElement('div', { className: 'container' }, React.createElement('h2', null, 'About'))),
      React.createElement('section', { id: 'experience' }, React.createElement('div', { className: 'container' }, React.createElement('h2', null, 'Experience'))),
      React.createElement('section', { id: 'skills' }, React.createElement('div', { className: 'container' }, React.createElement('h2', null, 'Skills'))),
      React.createElement('section', { id: 'projects' }, React.createElement('div', { className: 'container' }, React.createElement('h2', null, 'Projects'))),
      React.createElement('section', { id: 'contact' }, React.createElement('div', { className: 'container' }, React.createElement('h2', null, 'Contact')))
    )
  )
}

createRoot(document.getElementById('root')).render(React.createElement(App))
