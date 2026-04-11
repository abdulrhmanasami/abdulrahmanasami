/**
 * Portfolio Pro — JavaScript Engine
 * Abdulrahman Asami | abdulrahmanasami.com
 * v2.0 — Dark mode, Typewriter, Multilingual, Portfolio Filter, Form Validation
 */
(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════
     i18n DICTIONARY (Extracted to i18n.js for early injection)
  ════════════════════════════════════════════════════════════ */
  let currentLang = window.PORTFOLIO_CURRENT_LANG || localStorage.getItem('portfolio-lang') || 'de';
  let typedInterval = null;

  /* ═══════════════════════════════════════════════════════════
     LOADER
  ════════════════════════════════════════════════════════════ */
  function hideLoader() {
    const loader = document.getElementById('site-loader');
    if (!loader) return;
    setTimeout(() => {
      loader.classList.add('hidden');
      loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    }, 400);
  }

  /* ═══════════════════════════════════════════════════════════
     THEME (Dark / Light)
  ════════════════════════════════════════════════════════════ */
  function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('light-mode', !isDark);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.innerHTML = isDark
        ? '<i class="bi bi-sun"></i>'
        : '<i class="bi bi-moon-stars"></i>';
    }
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }

  function initTheme() {
    const saved = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    applyTheme(isDark);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        applyTheme(!document.body.classList.contains('dark-mode'));
      });
    }
  }

  /* ═══════════════════════════════════════════════════════════
     LANGUAGE (i18n)
  ════════════════════════════════════════════════════════════ */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    history.pushState(null, '', url);

    const dict = window.PORTFOLIO_I18N ? (window.PORTFOLIO_I18N[lang] || window.PORTFOLIO_I18N['de']) : {};

    // Apply direction
    const isRTL = lang === 'ar';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // Translate all elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Restart typewriter
    startTypewriter(dict.typed_strings || []);
  }

  function initLanguage() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
    applyLanguage(currentLang || 'de');
  }

  /* ═══════════════════════════════════════════════════════════
     TYPEWRITER EFFECT
  ════════════════════════════════════════════════════════════ */
  function startTypewriter(strings) {
    if (typedInterval) clearInterval(typedInterval);

    const output = document.getElementById('typed-output');
    if (!output || !strings.length) return;

    let strIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 120;

    function tick() {
      const current = strings[strIndex];
      if (isDeleting) {
        output.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        delay = 60;
      } else {
        output.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        delay = 120;
      }

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        delay = 1800;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        strIndex = (strIndex + 1) % strings.length;
        delay = 300;
      }

      typedInterval = setTimeout(tick, delay);
    }

    tick();
  }

  /* ═══════════════════════════════════════════════════════════
     SIDEBAR NAVIGATION
  ════════════════════════════════════════════════════════════ */
  function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebar-toggle');
    const overlay = document.getElementById('nav-overlay');

    if (!sidebar || !toggle) return;

    function openSidebar() {
      sidebar.classList.add('open');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      overlay.classList.add('active');
      overlay.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
      sidebar.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
      sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });
    overlay.addEventListener('click', closeSidebar);

    // Close on nav link click (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) closeSidebar();
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     SCROLL SPY (active nav link)
  ════════════════════════════════════════════════════════════ */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            history.replaceState(null, null, '#' + id);
          }
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  /* ═══════════════════════════════════════════════════════════
     ANIMATE ON SCROLL (lightweight IntersectionObserver)
  ════════════════════════════════════════════════════════════ */
  function initAOS() {
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-aos-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('aos-animate');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  /* ═══════════════════════════════════════════════════════════
     SKILL BARS ANIMATION
  ════════════════════════════════════════════════════════════ */
  function initSkillBars() {
    const fills = document.querySelectorAll('.skill-fill[data-width]');
    if (!fills.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const width = target.getAttribute('data-width');
          setTimeout(() => {
            target.style.width = width + '%';
          }, 200);
          observer.unobserve(target);
        }
      });
    }, { rootMargin: '0px 0px -100px 0px' });

    fills.forEach(fill => observer.observe(fill));
  }

  /* ═══════════════════════════════════════════════════════════
     PORTFOLIO FILTER
  ════════════════════════════════════════════════════════════ */
  function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    if (!filterBtns.length) return;

    function applyFilter(filter) {
      filterBtns.forEach(b => {
        const isActive = b.getAttribute('data-filter') === filter;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      const url = new URL(window.location);
      if (filter === 'all') url.searchParams.delete('filter');
      else url.searchParams.set('filter', filter);
      history.pushState(null, '', url);

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;
        card.style.display = show ? '' : 'none';
        if (show) {
          card.classList.remove('aos-animate');
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.classList.add('aos-animate');
            });
          });
        }
      });
    }

    const params = new URLSearchParams(window.location.search);
    const initialFilter = params.get('filter') || 'all';
    applyFilter(initialFilter);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => applyFilter(btn.getAttribute('data-filter')));
    });
  }

  /* ═══════════════════════════════════════════════════════════
     SCROLL TO TOP BUTTON
  ════════════════════════════════════════════════════════════ */
  function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     CONTACT FORM VALIDATION (client-side, no server)
  ════════════════════════════════════════════════════════════ */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const feedback = form.querySelector('.form-feedback');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Clear previous errors
      form.querySelectorAll('.form-error').forEach(el => el.textContent = '');
      feedback.className = 'form-feedback';
      feedback.textContent = '';

      // Validate fields
      const name = form.querySelector('#cf-name');
      const email = form.querySelector('#cf-email');
      const subject = form.querySelector('#cf-subject');
      const message = form.querySelector('#cf-message');

      if (!name.value.trim() || name.value.trim().length < 2) {
        name.nextElementSibling.textContent = 'Bitte geben Sie Ihren Namen ein.';
        valid = false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        email.nextElementSibling.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        valid = false;
      }
      if (!subject.value.trim()) {
        subject.nextElementSibling.textContent = 'Bitte geben Sie einen Betreff ein.';
        valid = false;
      }
      if (!message.value.trim() || message.value.trim().length < 10) {
        message.nextElementSibling.textContent = 'Nachricht muss mindestens 10 Zeichen lang sein.';
        valid = false;
      }

      if (!valid) return;

      // Absolute Zero: Legitimate Async Submit Protocol
      const btn = document.getElementById('submit-btn');
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.style.opacity = '0.7';

      fetch('https://formspree.io/f/xvgzovjd', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.value.trim(),
          email: email.value.trim(),
          subject: subject.value.trim(),
          message: message.value.trim()
        })
      }).then(response => {
        if (response.ok) {
          feedback.className = 'form-feedback success';
          feedback.textContent = currentLang === 'ar' ? '✓ تم إرسال رسالتك بنجاح!' 
                                : currentLang === 'en' ? '✓ Message sent successfully!' 
                                : '✓ Nachricht erfolgreich gesendet!';
          form.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      }).catch(error => {
        feedback.className = 'form-feedback error';
        feedback.textContent = currentLang === 'ar' ? '✗ حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.' 
                              : currentLang === 'en' ? '✗ Error sending message. Please try again.' 
                              : '✗ Fehler beim Senden. Bitte versuchen Sie es später erneut.';
      }).finally(() => {
        setTimeout(() => {
          btn.disabled = false;
          btn.style.opacity = '1';
          btn.innerHTML = originalText;
        }, 3000);
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     SMOOTH SCROLL for anchor links
  ════════════════════════════════════════════════════════════ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     PLACEHOLDER IMAGE (for missing project images)
  ════════════════════════════════════════════════════════════ */
  function ensurePlaceholderSVG() {
    // Inject a tiny SVG placeholder inline so broken images still look good
    const style = document.createElement('style');
    style.textContent = `
      img[src$="project-placeholder.svg"],
      img:not([src]), img[src=""] {
        background: linear-gradient(135deg, #0d1424 0%, #162035 100%);
        color: transparent;
      }
    `;
    document.head.appendChild(style);
  }

  /* ═══════════════════════════════════════════════════════════
     KEYBOARD NAVIGATION for filter buttons
  ════════════════════════════════════════════════════════════ */
  function initFilterKeyboard() {
    const btns = Array.from(document.querySelectorAll('.filter-btn'));
    btns.forEach((btn, i) => {
      btn.addEventListener('keydown', (e) => {
        let next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          next = btns[(i + 1) % btns.length];
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          next = btns[(i - 1 + btns.length) % btns.length];
        }
        if (next) { next.focus(); next.click(); }
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     PROJECT MODAL
  ════════════════════════════════════════════════════════════ */
  function initProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    const closeBtn = modal.querySelector('.modal-close');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTags = document.getElementById('modal-tags');
    const overlayBtns = document.querySelectorAll('.overlay-btn');

    const closeModal = () => {
      modal.close();
      document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    overlayBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.project-card');
        if (!card) return;

        const img = card.querySelector('img').src;
        const titleEl = card.querySelector('h3[data-i18n]');
        const descEl = card.querySelector('p[data-i18n]');
        const tagEls = card.querySelectorAll('.project-tags span[data-i18n]');
        
        if (titleEl) {
          modalTitle.setAttribute('data-i18n', titleEl.getAttribute('data-i18n'));
          modalTitle.innerText = titleEl.innerText;
        }
        if (descEl) {
          modalDesc.setAttribute('data-i18n', descEl.getAttribute('data-i18n'));
          modalDesc.innerText = descEl.innerText;
        }

        modalTags.innerHTML = '';
        tagEls.forEach(t => {
          const s = document.createElement('span');
          s.setAttribute('data-i18n', t.getAttribute('data-i18n'));
          s.innerText = t.innerText;
          modalTags.appendChild(s);
        });

        modalImg.src = img;
        document.body.style.overflow = 'hidden';
        modal.showModal();
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     MAIN INIT
  ════════════════════════════════════════════════════════════ */
  function init() {
    initTheme();
    initLanguage();
    initSidebar();
    initScrollSpy();
    initAOS();
    initSkillBars();
    initPortfolioFilter();
    initScrollTop();
    initContactForm();
    initSmoothScroll();
    initFilterKeyboard();
    ensurePlaceholderSVG();
    initProjectModal();
  }

  // Kick off on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Hide loader after everything is painted
  window.addEventListener('load', hideLoader);

})();
