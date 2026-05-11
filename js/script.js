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

// EmailJS form handling
(function() {
  emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key

  const form = document.querySelector('form');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const templateParams = {
      from_name: form.querySelector('input[type="text"]').value,
      from_email: form.querySelector('input[type="email"]').value,
      message: form.querySelector('textarea').value,
      to_name: 'Piyush Kumar Anand'
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Replace with your service and template IDs
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        form.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      });
  });
})();

