// Form submit with validation and alert
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name) {
    alert('Please enter your name.');
    return;
  }

  if (!email) {
    alert('Please enter your email.');
    return;
  }

  alert(`Thanks for reaching out, ${name}! I'll get back to you soon.`);
  this.reset();
});
