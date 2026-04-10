/**
 * Portfolio Pro — JavaScript Engine
 * Abdulrahman Asami | abdulrahmanasami.com
 * v2.0 — Dark mode, Typewriter, Multilingual, Portfolio Filter, Form Validation
 */
(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════
     i18n DICTIONARY
  ════════════════════════════════════════════════════════════ */
  const i18n = {
    de: {
      nav_home: 'Home', nav_about: 'Über mich', nav_skills: 'Fähigkeiten',
      nav_resume: 'Lebenslauf', nav_portfolio: 'Portfolio', nav_contact: 'Kontakt',
      hero_greeting: 'Hallo, ich bin',
      hero_role_prefix: 'Ich bin',
      hero_tagline: 'Technische Innovation durch Präzision — von der Idee zum 3D-Modell.',
      cta_portfolio: 'Portfolio ansehen', cta_contact: 'Kontakt aufnehmen',
      about_tag: 'Wer ich bin', about_title: 'Über mich',
      about_subtitle: 'Technischer Produktdesigner & 3D-Visualizer',
      about_bio: 'Während meiner Ausbildung am Berufsförderungswerk Köln habe ich gelernt, industrielle Designlösungen mit Tools wie SolidWorks zu entwickeln und kreatives Denken mit technischer Präzision zu verbinden. Mein Ziel ist es, innovative und praxisorientierte Produkte zu entwickeln, die einen positiven Einfluss auf die Industrie haben.',
      stat_years: 'Jahre Erfahrung', stat_projects: 'Projekte',
      info_name: 'Name', info_city: 'Stadt', info_phone: 'Telefon',
      info_email: 'Email', info_degree: 'Abschluss',
      info_degree_val: 'Technischer Produktdesigner (in Ausbildung)',
      info_freelance: 'Freelance', info_freelance_val: 'Verfügbar',
      btn_download_cv: 'Lebenslauf herunterladen',
      skills_tag: 'Werkzeugkasten', skills_title: 'Fähigkeiten',
      skill_cat_3d: '3D & CAD-Design', skill_cat_prod: 'Produktentwicklung',
      skill_techzeich: 'Technisches Zeichnen', skill_viz: 'Projektvisualisierung', skill_proto: 'Prototyping',
      resume_tag: 'Karriere', resume_title: 'Beruflicher Werdegang',
      resume_exp: 'Berufserfahrung', resume_edu: 'Ausbildung', resume_certs: 'Zertifizierungen',
      job1_title: 'Technischer Zeichner (Praktikum)',
      job1_detail1: '3D-Konstruktion mit SolidWorks auf Fortgeschrittenen-Niveau',
      job1_detail2: 'Erstellung technischer Zeichnungen und Dokumentationen',
      job1_detail3: 'Mitarbeit am Referenzprojekt: Automatisierte Förderanlage',
      tag_tech_doc: 'Technische Doku', tag_machine: 'Maschinenbau',
      edu1_title: 'Technischer Produktdesigner',
      edu1_detail1: 'Maschinenbaugrundlagen & Fertigungstechnik',
      edu1_detail2: '3D-CAD Konstruktion (SolidWorks, Blender)',
      edu1_detail3: 'Technische Kommunikation & Dokumentation',
      edu1_detail4: 'Werkstoffkunde & Produktionsplanung',
      edu2_title: 'Allgemeine & technische Vorbildung',
      edu2_detail1: 'Technische und kreative Selbstausbildung (Blender, Cinema 4D)',
      edu2_detail2: 'Deutsch als Zweitsprache (Integrationskurs)',
      cert_by: 'Zertifiziert durch Dassault Systèmes',
      portfolio_tag: 'Meine Arbeit', portfolio_title: 'Portfolio',
      filter_all: 'Alle', filter_real: 'Reale Projekte',
      filter_innovative: 'Innovativ', filter_research: 'Forschung',
      proj1_desc: 'Design und Optimierung eines kryogenen Wärmetauschers basierend auf TPMS-Strukturen für die NASA.',
      proj2_desc: 'Konstruktion und kinematische Analyse einer komplexen mechanischen Vorrichtung (Julito).',
      proj3_desc: 'Neukonstruktion und vollständige Planungsphase eines mobilen TPD-Präsentationswagens.',
      proj4_desc: 'Umfassendes Branding und Produktdesign für die Premium-Lebensmittelmarke FIG & Olive.',
      tag_aerospace: 'Luft- und Raumfahrt', tag_cad: 'Advanced CAD', tag_assembly: 'Baugruppe',
      tag_kinematics: 'Kinematik', tag_planning: 'Projektplanung', tag_design: 'Produktdesign',
      contact_tag: 'Zusammenarbeit', contact_title: 'Kontakt',
      contact_intro: 'Haben Sie ein Projekt oder eine Idee? Ich freue mich auf Ihre Nachricht!',
      form_name: 'Ihr Name', form_subject: 'Betreff', form_message: 'Nachricht', form_send: 'Nachricht senden',
      footer_tagline: 'Technische Innovation durch Präzision.',
      footer_rights: 'Alle Rechte vorbehalten.',
      typed_strings: ['Technischer Produktdesigner', 'CAD-Spezialist', 'Blender Artist', '3D-Visualizer', 'Produktentwickler'],
    },
    en: {
      nav_home: 'Home', nav_about: 'About', nav_skills: 'Skills',
      nav_resume: 'Resume', nav_portfolio: 'Portfolio', nav_contact: 'Contact',
      hero_greeting: "Hello, I'm",
      hero_role_prefix: "I'm",
      hero_tagline: 'Technical innovation through precision — from concept to 3D model.',
      cta_portfolio: 'View Portfolio', cta_contact: 'Get in Touch',
      about_tag: 'Who I Am', about_title: 'About Me',
      about_subtitle: 'Technical Product Designer & 3D Visualizer',
      about_bio: 'During my training at BFW Cologne, I learned to develop industrial design solutions using tools like SolidWorks, combining creative thinking with technical precision. My goal is to develop innovative, practice-oriented products that positively impact the industry.',
      stat_years: 'Years Exp.', stat_projects: 'Projects',
      info_name: 'Name', info_city: 'City', info_phone: 'Phone',
      info_email: 'Email', info_degree: 'Degree',
      info_degree_val: 'Technical Product Designer (Trainee)',
      info_freelance: 'Freelance', info_freelance_val: 'Available',
      btn_download_cv: 'Download CV',
      skills_tag: 'Toolbox', skills_title: 'Skills',
      skill_cat_3d: '3D & CAD Design', skill_cat_prod: 'Product Development',
      skill_techzeich: 'Technical Drawing', skill_viz: 'Project Visualization', skill_proto: 'Prototyping',
      resume_tag: 'Career', resume_title: 'Work Experience',
      resume_exp: 'Experience', resume_edu: 'Education', resume_certs: 'Certifications',
      job1_title: 'Technical Drafter (Internship)',
      job1_detail1: 'Advanced 3D modeling with SolidWorks',
      job1_detail2: 'Creating technical drawings and documentation',
      job1_detail3: 'Reference project: Automated conveyor system',
      tag_tech_doc: 'Technical Docs', tag_machine: 'Mechanical Eng.',
      edu1_title: 'Technical Product Designer',
      edu1_detail1: 'Mechanical engineering fundamentals', edu1_detail2: '3D-CAD design (SolidWorks, Blender)',
      edu1_detail3: 'Technical communication & documentation', edu1_detail4: 'Materials science & production planning',
      edu2_title: 'General & Technical Education',
      edu2_detail1: 'Self-education in 3D design (Blender, Cinema 4D)',
      edu2_detail2: 'German as second language',
      cert_by: 'Certified by Dassault Systèmes',
      portfolio_tag: 'My Work', portfolio_title: 'Portfolio',
      filter_all: 'All', filter_real: 'Real Projects',
      filter_innovative: 'Innovative', filter_research: 'Research',
      proj1_desc: 'Design and optimization of a TPU-based cryogenic heat exchanger for advanced aerospace applications.',
      proj2_desc: 'Engineering and kinematic analysis of a complex mechanical assembly using SolidWorks.',
      proj3_desc: 'New design and complete planning phase for a mobile presentation cart for technical products.',
      proj4_desc: 'Comprehensive branding and commercial product design for the premium food brand FIG & Olive.',
      tag_aerospace: 'Aerospace', tag_cad: 'Advanced CAD', tag_assembly: 'Assembly',
      tag_kinematics: 'Kinematics', tag_planning: 'Project Planning', tag_design: 'Product Design',
      contact_tag: 'Collaboration', contact_title: 'Contact',
      contact_intro: 'Have a project or idea? I look forward to hearing from you!',
      form_name: 'Your Name', form_subject: 'Subject', form_message: 'Message', form_send: 'Send Message',
      footer_tagline: 'Technical innovation through precision.',
      footer_rights: 'All Rights Reserved.',
      typed_strings: ['Technical Product Designer', 'CAD Specialist', 'Blender Artist', '3D Visualizer', 'Product Developer'],
    },
    ar: {
      nav_home: 'الرئيسية', nav_about: 'عني', nav_skills: 'المهارات',
      nav_resume: 'السيرة الذاتية', nav_portfolio: 'أعمالي', nav_contact: 'تواصل',
      hero_greeting: 'مرحباً، أنا',
      hero_role_prefix: 'أنا',
      hero_tagline: 'ابتكار تقني بدقة محترفة — من الفكرة إلى النموذج ثلاثي الأبعاد.',
      cta_portfolio: 'عرض الأعمال', cta_contact: 'تواصل معي',
      about_tag: 'من أنا', about_title: 'نبذة عني',
      about_subtitle: 'مصمم منتجات تقني ومحترف ثلاثي الأبعاد',
      about_bio: 'خلال تدريبي في معهد BFW كولن، تعلمت تطوير حلول تصميم صناعية باستخدام أدوات مثل SolidWorks، مع دمج التفكير الإبداعي بالدقة التقنية. هدفي تطوير منتجات مبتكرة وعملية تؤثر إيجاباً على الصناعة.',
      stat_years: 'سنوات خبرة', stat_projects: 'مشروع',
      info_name: 'الاسم', info_city: 'المدينة', info_phone: 'الهاتف',
      info_email: 'البريد', info_degree: 'الشهادة',
      info_degree_val: 'مصمم منتجات تقني (قيد الإتمام)',
      info_freelance: 'عمل حر', info_freelance_val: 'متاح',
      btn_download_cv: 'تحميل السيرة الذاتية',
      skills_tag: 'مجموعة الأدوات', skills_title: 'المهارات',
      skill_cat_3d: 'تصميم ثلاثي الأبعاد و CAD', skill_cat_prod: 'تطوير المنتجات',
      skill_techzeich: 'الرسم التقني', skill_viz: 'تصور المشاريع', skill_proto: 'النمذجة الأولية',
      resume_tag: 'المسيرة المهنية', resume_title: 'السيرة الذاتية',
      resume_exp: 'الخبرة العملية', resume_edu: 'التعليم', resume_certs: 'الشهادات',
      job1_title: 'رسام تقني (تدريب عملي)',
      job1_detail1: 'نمذجة متقدمة بـ SolidWorks', job1_detail2: 'إعداد الرسومات والتوثيق التقني',
      job1_detail3: 'مشروع مرجعي: نظام الناقل الآلي',
      tag_tech_doc: 'توثيق تقني', tag_machine: 'هندسة ميكانيكية',
      edu1_title: 'مصمم منتجات تقني',
      edu1_detail1: 'أساسيات الهندسة الميكانيكية', edu1_detail2: 'تصميم CAD ثلاثي الأبعاد',
      edu1_detail3: 'التواصل التقني والتوثيق', edu1_detail4: 'علم المواد والتخطيط الإنتاجي',
      edu2_title: 'تعليم عام وتقني',
      edu2_detail1: 'تعليم ذاتي في Blender و Cinema 4D',
      edu2_detail2: 'اللغة الألمانية كلغة ثانية',
      cert_by: 'معتمد من Dassault Systèmes',
      portfolio_tag: 'أعمالي', portfolio_title: 'معرض الأعمال',
      filter_all: 'الكل', filter_real: 'مشاريع حقيقية',
      filter_innovative: 'ابتكارية', filter_research: 'أبحاث',
      proj1_desc: 'تصميم وتحسين مبادل حراري مبرد يعتمد على هياكل TPMS المتقدمة لتطبيقات الفضاء.',
      proj2_desc: 'هندسة وتحليل حركي لتجميعة ميكانيكية معقدة باستخدام SolidWorks.',
      proj3_desc: 'إعادة تصميم وتخطيط هندسي كامل لعربة عرض متنقلة للمنتجات التقنية.',
      proj4_desc: 'تصميم هوية بصرية وتغليف منتجات تجارية فاخرة لعلامة FIG & Olive.',
      tag_aerospace: 'الفضاء', tag_cad: 'CAD متقدم', tag_assembly: 'تجميع هندسي',
      tag_kinematics: 'تحليل حركي', tag_planning: 'تخطيط العمليات', tag_design: 'تصميم المنتجات',
      contact_tag: 'تعاون', contact_title: 'تواصل',
      contact_intro: 'هل لديك مشروع أو فكرة؟ يسعدني سماع منك!',
      form_name: 'اسمك', form_subject: 'الموضوع', form_message: 'الرسالة', form_send: 'إرسال الرسالة',
      footer_tagline: 'ابتكار تقني بدقة محترفة.',
      footer_rights: 'جميع الحقوق محفوظة.',
      typed_strings: ['مصمم منتجات تقني', 'متخصص CAD', 'فنان Blender', 'مصور ثلاثي الأبعاد', 'مطور منتجات'],
    },
  };

  let currentLang = localStorage.getItem('portfolio-lang') || 'de';
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

    const dict = i18n[lang] || i18n.de;

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
    applyLanguage(currentLang);
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
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === entry.target.id);
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

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filter = btn.getAttribute('data-filter');
        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          const show = filter === 'all' || category === filter;
          card.style.display = show ? '' : 'none';
          if (show) {
            card.style.animation = 'none';
            card.offsetHeight; // reflow
            card.style.animation = '';
          }
        });
      });
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

      // Simulate success (since no backend PHP is present)
      const btn = document.getElementById('submit-btn');
      btn.disabled = true;
      btn.innerHTML = '<i class="bi bi-hourglass-split"></i> Wird gesendet...';

      setTimeout(() => {
        feedback.className = 'form-feedback success';
        feedback.textContent = '✓ Nachricht erfolgreich gesendet! Vielen Dank, ich melde mich bald.';
        form.reset();
        btn.disabled = false;
        btn.innerHTML = '<span>Nachricht senden</span><i class="bi bi-send"></i>';
      }, 1200);
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
