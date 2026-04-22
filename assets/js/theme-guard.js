/**
 * Portfolio Pro - Platinum Standard Early State Guard (Zero-FOUC)
 * Extracted to maintain zero 'unsafe-inline' CSP violations.
 */
(function() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang') || localStorage.getItem('portfolio-lang') || 'de';
    localStorage.setItem('portfolio-lang', lang);
    
    const docEl = document.documentElement;
    docEl.setAttribute('lang', lang);
    docEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    window.PORTFOLIO_CURRENT_LANG = lang;
    
    const savedTheme = localStorage.getItem('portfolio-theme');
    const isDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (!isDark && document.body) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  } catch (e) {
    console.error("Zero-FOUC Hydration Error:", e);
  }
})();
