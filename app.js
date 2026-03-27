// ─── Countdown Timer ───────────────────────────
// Set launch date to 30 days from now
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);
launchDate.setHours(0, 0, 0, 0);

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ─── Email Form ────────────────────────────────
const form = document.getElementById('emailForm');
const input = document.getElementById('emailInput');
const btn = document.getElementById('submitBtn');
const message = document.getElementById('formMessage');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = input.value.trim();

  // Reset states
  message.classList.remove('success', 'error');
  btn.classList.remove('submitted');

  if (!email) {
    message.textContent = 'Please enter your email address.';
    message.classList.add('error');
    input.focus();
    return;
  }

  if (!isValidEmail(email)) {
    message.textContent = 'Please enter a valid email address.';
    message.classList.add('error');
    input.focus();
    return;
  }

  // Simulate submission
  btn.disabled = true;
  btn.classList.add('submitted');

  setTimeout(function() {
    message.textContent = "You're on the list! We'll let you know when we launch.";
    message.classList.add('success');
    input.value = '';
    
    // Reset button after a few seconds
    setTimeout(function() {
      btn.classList.remove('submitted');
      btn.disabled = false;
    }, 3000);
  }, 600);
});

// Clear error on input
input.addEventListener('input', function() {
  if (message.classList.contains('error')) {
    message.textContent = 'No spam. Just one email when we launch.';
    message.classList.remove('error');
  }
});
