// Select hamburger button and nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle mobile menu on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Optional: Close menu when a link is clicked (better UX on mobile)
const links = document.querySelectorAll('#nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

