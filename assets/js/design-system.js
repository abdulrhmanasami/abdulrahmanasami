/**
 * Design System Interactions
 * 
 * هذا الملف يتحكم في تفاعلات نظام التصميم البنيوي
 * ويضيف سلوكيات ديناميكية للمكونات المختلفة
 */

document.addEventListener('DOMContentLoaded', function() {
  // تفعيل نسخ الأكواد في صفحة التوثيق
  initializeCodeCopy();
  
  // تفعيل بطاقات المشاريع
  initializeCards();
  
  // تفعيل شريط التنقل الثابت
  initializeStickyNav();
  
  // تفعيل الوضع المظلم إذا كان مدعوماً
  initializeDarkMode();
  
  // تحسين تحميل الصور
  initializeLazyLoading();
});

/**
 * تفعيل نسخ الأكواد في قسم التوثيق
 */
function initializeCodeCopy() {
  const codeSnippets = document.querySelectorAll('.code-snippet');
  
  codeSnippets.forEach(snippet => {
    snippet.addEventListener('click', function() {
      const code = this.textContent.trim();
      navigator.clipboard.writeText(code)
        .then(() => showToast('Code copied to clipboard!'))
        .catch(err => console.error('Error copying code:', err));
    });
    
    // إضافة أيقونة نسخ وتلميح
    const copyIcon = document.createElement('span');
    copyIcon.classList.add('copy-icon');
    copyIcon.innerHTML = '<i class="bi bi-clipboard"></i>';
    copyIcon.title = 'Copy to clipboard';
    snippet.appendChild(copyIcon);
  });
}

/**
 * إظهار رسالة توست مؤقتة
 */
function showToast(message) {
  // التحقق مما إذا كان هناك توست موجود مسبقاً
  let toast = document.querySelector('.toast-message');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.classList.add('toast-message');
    document.body.appendChild(toast);
  }
  
  // عرض الرسالة
  toast.textContent = message;
  toast.classList.add('show');
  
  // إخفاء بعد 3 ثوان
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/**
 * تفعيل بطاقات المشاريع
 */
function initializeCards() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('card-hover');
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('card-hover');
    });
  });
}

/**
 * تفعيل شريط التنقل الثابت
 */
function initializeStickyNav() {
  const header = document.querySelector('#header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }
}

/**
 * تفعيل الوضع المظلم
 */
function initializeDarkMode() {
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  
  // التحقق من تفضيلات المستخدم المحفوظة
  const savedDarkMode = localStorage.getItem('darkMode');
  
  if (savedDarkMode === 'enabled') {
    document.body.classList.add('dark-theme');
  }
  
  // إضافة زر التبديل إذا لم يكن موجوداً
  if (!darkModeToggle && window.matchMedia('(prefers-color-scheme)').matches) {
    const toggleButton = document.createElement('button');
    toggleButton.id = 'dark-mode-toggle';
    toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
    toggleButton.title = 'Toggle Dark Mode';
    toggleButton.className = 'dark-mode-button';
    
    document.body.appendChild(toggleButton);
    
    // تحديث الأيقونة بناءً على الحالة الحالية
    if (document.body.classList.contains('dark-theme')) {
      toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
    
    // إضافة معالج النقر
    toggleButton.addEventListener('click', toggleDarkMode);
  }
}

/**
 * تبديل الوضع المظلم
 */
function toggleDarkMode() {
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  
  // تبديل الكلاس على الجسم
  document.body.classList.toggle('dark-theme');
  
  // تحديث الأيقونة
  if (document.body.classList.contains('dark-theme')) {
    darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    localStorage.setItem('darkMode', 'disabled');
  }
}

/**
 * تحسين تحميل الصور
 */
function initializeLazyLoading() {
  // تفعيل تحميل الصور المتأخر للمتصفحات القديمة
  if ('loading' in HTMLImageElement.prototype) {
    // المتصفحات الحديثة تدعم تحميل متأخر أصلاً
    console.log('Native lazy loading supported');
  } else {
    // تحميل مكتبة خارجية للمتصفحات القديمة
    const script = document.createElement('script');
    script.src = 'assets/vendor/lazysizes/lazysizes.min.js';
    document.body.appendChild(script);
  }
  
  // إضافة تأثير ظهور للصور عند تحميلها
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  lazyImages.forEach(img => {
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
  });
}
