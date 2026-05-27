// Climate Risk Analytics - HOOP Website Main JS
// Form handling, mobile nav, modals, etc. for easy deployment

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Tailwind config if needed (safe to call multiple times)
  if (typeof initializeTailwind === 'function') {
    initializeTailwind();
  }

  // Form handler (used on index.html contact form)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // Mobile menu toggle (if hamburger exists)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('svg');
      if (icon) {
        icon.classList.toggle('rotate-90');
      }
    });
    
    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Optional: Add subtle scroll progress or active nav highlighting
  initActiveNav();
});

// Reusable form submit handler
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  if (!btn) return;

  const originalText = btn.innerHTML;
  const originalBg = btn.style.backgroundColor;
  const originalColor = btn.style.color;

  btn.innerHTML = 'SUBMITTING...';
  btn.disabled = true;

  // Simulate network request
  setTimeout(() => {
    btn.innerHTML = '✓ REQUEST RECEIVED';
    btn.style.backgroundColor = '#10b981';
    btn.style.color = 'white';
    btn.style.borderColor = '#10b981';

    setTimeout(() => {
      // Success feedback
      const successMsg = document.createElement('div');
      successMsg.className = 'mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 text-sm text-center';
      successMsg.innerHTML = 'Thank you. A Climate Risk Analytics representative will contact you within 24 hours.';
      
      form.parentNode.insertBefore(successMsg, form.nextSibling);
      
      form.reset();
      
      // Restore button
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.backgroundColor = originalBg || '';
        btn.style.color = originalColor || '';
        btn.style.borderColor = '';
        
        // Remove success message after some time
        setTimeout(() => {
          if (successMsg.parentNode) successMsg.parentNode.removeChild(successMsg);
        }, 4000);
      }, 2200);
    }, 1600);
  }, 1100);
}

// Simple active nav link highlighting based on scroll (for single page sections)
function initActiveNav() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  if (!navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('text-[#67f6ff]', 'font-semibold');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-[#67f6ff]', 'font-semibold');
          }
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });

  // Observe sections that have id matching nav
  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
  });
}

// Utility: Copy to clipboard (can be used for future)
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-sm px-6 py-3 rounded-2xl shadow-xl border border-white/10 z-[100]';
    toast.textContent = 'Copied to clipboard';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
  }).catch(() => {
    alert('Copied: ' + text);
  });
}

// Expose for debugging or extension
window.CRA = { handleFormSubmit, copyToClipboard };