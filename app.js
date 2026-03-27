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
