/* =========================================================
   Flatroot — main script (shared by every page)
   ========================================================= */

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Close the mobile menu after choosing a link
document.querySelectorAll('.navigation a').forEach((link) => {
  link.addEventListener('click', () => {
    const toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.checked = false;
  });
});

// "Add to cart" — visual feedback only (no real cart yet)
document.querySelectorAll('.add-to-cart').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Added ✓';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = 'Add to cart';
      btn.classList.remove('added');
    }, 1500);
  });
});

// How to use — feedback buttons
document.querySelectorAll('[data-feedback]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const msg = document.getElementById('feedback-message');
    if (!msg) return;
    msg.textContent =
      btn.dataset.feedback === 'useful'
        ? 'Thank you! Glad it helped.'
        : 'Thanks for telling us — we will improve it.';
  });
});

// Login — title color + simple form check (no real login yet)
const loginTitle = document.getElementById('login-title');
if (loginTitle) {
  loginTitle.addEventListener('click', () => loginTitle.classList.toggle('clicked'));
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-message');
    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    if (!email || !loginForm.email.checkValidity()) {
      msg.textContent = 'Please enter a valid email.';
    } else if (password.length < 6) {
      msg.textContent = 'Password must be at least 6 characters.';
    } else {
      msg.textContent = 'Login is not connected yet — this is a demo form.';
    }
  });
}
