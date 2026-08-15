
const siteNav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  siteNav?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.borderBottomColor = 'rgba(139,147,163,0.35)';
  } else {
    nav.style.borderBottomColor = 'rgba(139,147,163,0.22)';
  }
}, { passive: true });

// Scroll-reveal animation
const revealTargets = document.querySelectorAll(
  '.service-card, .process-item, .project-card, .about-text, .about-visual, .contact-text, .contact-form'
);

revealTargets.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 45, 260)}ms`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// Contact form (demo submission — replace with real endpoint)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const lang = document.documentElement.lang === 'en' ? 'en' : 'ar';
  const dict = (typeof translations !== 'undefined' && translations[lang]) || {};
  formNote.textContent = dict['contact.form.success'] || 'تم إرسال طلبك بنجاح، هنتواصل معاك قريبًا.';
  formNote.classList.add('success');
  form.reset();
});
