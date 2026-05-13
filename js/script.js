const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setMenuOpen(open) {
  navLinks.classList.toggle('show', open);
  if (hamburger) {
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    setMenuOpen(!navLinks.classList.contains('show'));
  });
}

document.querySelectorAll('#nav-links a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  });
});

let lastScrollTop = 0;
const header = document.querySelector('header');

if (header) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (!prefersReducedMotion && scrollTop > lastScrollTop && scrollTop > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    if (scrollTop > 50) {
      header.style.background = 'rgba(255, 255, 255, 0.96)';
      header.style.boxShadow = '0 8px 30px rgba(15, 23, 42, 0.08)';
    } else {
      header.style.background = '';
      header.style.boxShadow = '';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach((item) => {
    item.classList.remove('active');
    const href = item.getAttribute('href');
    if (href && href.startsWith('#') && href.slice(1) === current) {
      item.classList.add('active');
    }
  });
});

const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
};

function revealOnScroll(targets, staggerMs = 0) {
  if (prefersReducedMotion) {
    targets.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  targets.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.65s ease-out ${index * staggerMs}s, transform 0.65s ease-out ${index * staggerMs}s`;
    io.observe(el);
  });
}

revealOnScroll(document.querySelectorAll('section'), 0);
revealOnScroll(document.querySelectorAll('.experience-item'), 0.08);

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = (button.dataset.filter || 'all').toLowerCase();

    projectCards.forEach((card) => {
      const raw = card.getAttribute('data-categories') || '';
      const categories = raw.toLowerCase().split(/\s+/).filter(Boolean);
      const visible = filter === 'all' || categories.includes(filter);
      card.classList.toggle('project-card--hidden', !visible);
      card.toggleAttribute('hidden', !visible);
    });
  });
});
