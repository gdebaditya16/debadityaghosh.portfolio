
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle('active');
});

const checkbox = document.getElementById('privacy');
const submitBtn = document.getElementById('submitBtn');

checkbox.addEventListener('change', function () {
  submitBtn.disabled = !this.checked;
  submitBtn.classList.toggle('enabled', this.checked);
});

const allowedDomains = ['gmail.com', 'outlook.com', 'yahoo.com'];

document.getElementById('hireForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  // Check if email is all lowercase
  if (email !== email.toLowerCase()) {
    alert("Email must be in lowercase only.");
    return;
  }

  // Check for domain
  const emailParts = email.split('@');
  if (emailParts.length !== 2) {
    alert("Invalid email format.");
    return;
  }

  const domain = emailParts[1];

  if (!allowedDomains.includes(domain)) {
    alert(`Invalid domain. Allowed domains are: ${allowedDomains.join(', ')}`);
    return;
  }

  // Success
  alert('Form submitted successfully!');
  this.reset();
  submitBtn.disabled = true;
  submitBtn.classList.remove('enabled');
});


const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(link => {
  link.addEventListener('click', () => {
    if (navlinks.classList.contains('active')) {
      navlinks.classList.remove('active');
    }
  });
});


const timelineItems = document.querySelectorAll('.timeline1');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // ← Allow re-animation
    }
  });
}, {
  threshold: 0.1, // Trigger when 10% is visible
});

document.querySelectorAll('.timeline1').forEach(el => observer.observe(el));



window.addEventListener('hashchange', () => {
  setTimeout(() => {
    document.querySelectorAll('.timeline1').forEach(item => {
      if (item.getBoundingClientRect().top < window.innerHeight) {
        item.classList.add('show');
      }
    });
  }, 300);
});




